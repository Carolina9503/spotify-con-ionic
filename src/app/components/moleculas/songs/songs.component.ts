import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { addFavorites, deleteFavorites} from '../../../state/actions/favorites.actions';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
 @Input() song
 @Input() isHome: boolean = false;

 isFavorite: boolean = false;
  constructor(private store: Store, private toastController: ToastController) { }

  ngOnInit() {
  }
  fovorites(song){
    const payload = {
      id:song.id,
      img: song.img,
      name: song.name,
      artist: song.artist,
      isFavorite: true
    };
    this.store.dispatch(addFavorites({song:payload}));
    this.presentToast()
    console.log(payload);
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se agregó a tus me gusta.',
      duration: 1000,
      icon:'heart',
      cssClass: 'custom-toast',
      color: 'primary'
    });
    toast.present();
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
    this.presentToastDelete()
  }
  async presentToastDelete() {
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
