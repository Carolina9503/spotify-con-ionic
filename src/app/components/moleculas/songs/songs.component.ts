import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import SpotifyWebApi from 'spotify-web-api-js';
import { loadedPlayList } from 'src/app/state/actions/playList.actions';
import { getToken } from 'src/assets/storage';


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
    if(getToken()){
      console.log('ENTRO aQUI');
      this.spotify.setAccessToken(getToken());
      this.spotify.getMe().then((user) => console.log('user', user));
      this.spotify.getPlaylist('2FqbB4n32EAp8xWiEPSslS').then(({ images, name, tracks: { items } })  => {
        this.payload = items;
        console.log('Aqui',this.payload);

        const payload = {
          image: images[0].url,
          namePlayList: name,
          songs: items,
        };
        this.store.dispatch(loadedPlayList( {playList: payload}));
      });
    }
  }

}
