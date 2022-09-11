import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadedPlayList, loadPlayList } from 'src/app/state/actions/playList.actions';
import { selectListSongs, selectLoading } from 'src/app/state/selectors/playList.selectors';
import SpotifyWebApi from 'spotify-web-api-js';
import { getToken } from 'src/assets/storage';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loading$: Observable<boolean> = new Observable();
  songs$ = this.store.select(selectListSongs);
  spotify = new SpotifyWebApi();

  constructor(private store: Store, private dataService: DataService) { }

  ngOnInit() {
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadPlayList());
    if(getToken()){
      this.spotify.setAccessToken(getToken());
      this.spotify.getMe().then((user) => console.log('user', user));
      this.spotify.getPlaylist('2FqbB4n32EAp8xWiEPSslS').then(({ images, name, tracks: { items } })  => {
        const payload = {
          image: images[0].url,
          namePlayList: name,
          songs: items,
        };
        this.store.dispatch(loadedPlayList( {playList: payload}));
        console.log('Home-payload',payload);
      });
    }
  }

}
