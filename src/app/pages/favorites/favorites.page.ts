import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFavoritesFeature } from '../../state/selectors/favorites.selectors';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favoriteSongs$ = this.store.select(selectFavoritesFeature);
  constructor(private store: Store) { }

  ngOnInit() {
  }

}
