import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import SpotifyWebApi from 'spotify-web-api-js';
import { loadedPlayList } from 'src/app/state/actions/playList.actions';
import { selectListSongs } from 'src/app/state/selectors/playList.selectors';
import { getToken } from 'src/assets/storage';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
 @Input() song;
  constructor() { }

  ngOnInit() {
  }

}
