import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import SpotifyWebApi from 'spotify-web-api-js';
import { loadedPlayList } from 'src/app/state/actions/playList.actions';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
  payload = [];
  spotify = new SpotifyWebApi();
  constructor(private store: Store) { }

  ngOnInit() {
    if(localStorage.getItem('token')){
      this.spotify.setAccessToken(localStorage.getItem('token'));
      this.spotify.getMe().then((user) => console.log('user', user));
      this.spotify.getPlaylist('2FqbB4n32EAp8xWiEPSslS').then(({ images, name, tracks: { items } })  => {
        this.payload = items;
        // const payload = {
        //   songs: items,
        // };
        // this.store.dispatch(loadedPlayList( {playList: payload}));
      });
      console.log('Aqui',this.payload);
    }
  }

}
