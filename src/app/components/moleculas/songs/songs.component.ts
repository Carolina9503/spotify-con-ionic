import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { addFavorites} from 'src/app/state/actions/favorites.actions';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
 @Input() song;
  constructor(private store: Store) { }

  ngOnInit() {
  }
  fovorites(song){
    const payload = {
      id:song.track.id,
      img: song.track.album.images[0].url,
      name: song.track.name,
      artist: song.track.artists[0].name
    };
    this.store.dispatch(addFavorites({favorites:payload}));
    console.log('favorites', song);
  }
}
