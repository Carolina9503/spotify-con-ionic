import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { deleteFavorites } from 'src/app/state/actions/favorites.actions';
import { selectFavoritesFeature } from '../../state/selectors/favorites.selectors';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit, OnDestroy {
  songs
  subscription: Subscription 
  
  constructor(private store: Store, private toastController: ToastController) { }

  ngOnInit() {
    this.subscription = this.store.select(selectFavoritesFeature).subscribe(res => {
      this.songs = res
    }
    )
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
