import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadedPlayList, loadPlayList } from '../../state/actions/playList.actions';
import { selectListSongs, selectLoading } from '../../state/selectors/playList.selectors';
import SpotifyWebApi from 'spotify-web-api-js';
import { getToken } from '../../../assets/storage';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loading$: Observable<boolean> = new Observable();
  songs
  spotify = new SpotifyWebApi();

  constructor(private store: Store, private dataService: DataService) { }

  ngOnInit() {
    this.store.subscribe((res:any) => {
      const songs = res.playList.playList.songs;
      const favorites = res.favorites
      console.log(favorites)
      this.songs = songs.map(item => {
        const tem = favorites.filter(song => song.id === item.track.id);
        const tem2 = {
          id:item.track.id,
          img: item.track.album.images[0].url,
          name: item.track.name,
          artist: item.track.artists[0].name,
          isFavorite:item.isFavorite
        }
        console.log(tem2)
        if (tem.length > 0) {
          tem2.isFavorite = true
        }
        return tem2;
      })
      console.log(this.songs)
    })
    
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadPlayList());
    if(getToken()){
      this.spotify.setAccessToken(getToken());
      this.spotify.getMe().then((user) => console.log('user', user));
      this.spotify.getPlaylist('2FqbB4n32EAp8xWiEPSslS').then(({ images, name, tracks: { items } })  => {
        const payload = {
          image: images[0].url,
          namePlayList: name,
          songs: items.map((item) =>{
            const song = {...item, isFavorite: false}
            return song
          } ),
        };
        this.store.dispatch(loadedPlayList( {playList: payload}));
        console.log('Home-payload',payload);
      });
    }
  }

}
