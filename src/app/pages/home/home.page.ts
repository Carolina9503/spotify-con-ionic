import { Component, OnInit } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  spotify = new SpotifyWebApi();
  payload = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    if(localStorage.getItem('token')){
      this.spotify.setAccessToken(localStorage.getItem('token'));
      this.spotify.getMe().then((user) => console.log('user', user));
      this.spotify.getPlaylist('2Bz1tfRIQ1dCNoijtbUB3M').then(({ images, name, tracks: { items } }) => {
        this.payload = [items];
        console.log(this.payload);
      });
    }
  }

}
