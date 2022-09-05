import { Injectable } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  spotify = new SpotifyWebApi();

  constructor() { }
  // getPlaylist(){
  //   if(localStorage.getItem('token')){
  //     this.spotify
  //       .getPlaylist('2FqbB4n32EAp8xWiEPSslS')
  //       .then(({ images, name, tracks: { items } }) => {
  //         const payload = {
  //           image: images[0].url,
  //           namePlayList: name,
  //           songs: items,
  //         };
  //         console.log(payload);
  //         return payload;
  //       });
  //   }

  // }
}
