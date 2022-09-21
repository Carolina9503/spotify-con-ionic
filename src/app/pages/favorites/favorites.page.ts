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
  favoriteSongs
  subscription: Subscription 
  
  constructor(private store: Store, private toastController: ToastController) { }

  ngOnInit() {
    this.subscription = this.store.select(selectFavoritesFeature).subscribe(res => {
      this.favoriteSongs = res
    }
    )
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  deleteFovorites(song){
    console.log(song);
    const payload = {
      id:song.id,
      img: song.img,
      name: song.name,
      artist: song.artist,
      isFavorite: false
    }
    
    console.log(song);
    this.store.dispatch(deleteFavorites({favorites: payload}));
    this.presentToast()
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se eliminó de tus me gusta.',
      duration: 1000,
      icon:'trash',
      cssClass: 'custom-toast',
      color: 'primary'
    });
    toast.present();
  }
}
