import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { deleteFavorites } from 'src/app/state/actions/favorites.actions';
import { selectFavoritesFeature } from '../../state/selectors/favorites.selectors';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favoriteSongs$ = this.store.select(selectFavoritesFeature);
  constructor(private store: Store, private toastController: ToastController) { }

  ngOnInit() {
  }

  deleteFovorites(song){
    console.log(song);
    this.store.dispatch(deleteFavorites({favorites: song}));
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
