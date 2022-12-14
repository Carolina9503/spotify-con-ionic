import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectListSongs } from '../../state/selectors/playList.selectors';

@Component({
  selector: 'app-search-song',
  templateUrl: './search-song.page.html',
  styleUrls: ['./search-song.page.scss'],
})
export class SearchSongPage implements OnInit {
  textoBuscar = '';
  searchSong = [];
  songs$ = this.store.select(selectListSongs);

  constructor(private store: Store) { }

  ngOnInit() {
  }

  onSearchChange(event){
    //  console.log(event);
    this.textoBuscar = event.detail.value;
  }

}
