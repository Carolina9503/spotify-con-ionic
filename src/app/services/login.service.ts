import { Injectable } from '@angular/core';
import { setToken } from 'src/assets/storage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  getToken(){
    const url =  window.location.hash;
    const [, query] = url.split('#') || [];
    const parts = new URLSearchParams(query);
    setToken(parts.get('access_token') || '');
  }

  getUrl() {
    const endpoint = 'https://accounts.spotify.com/authorize';
    const clientID = '6ce78825323c48188d029e27ff16c54d';
    const redirectUri = 'http://localhost:8100/callback';
    const scopes = [
      'user-read-currently-playing',
      'user-read-recently-played',
      'user-read-playback-state',
      'user-top-read',
      'user-modify-playback-state',
    ];
    return `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join(
      '%20'
    )}&show_dialog=true`;
  };

}
