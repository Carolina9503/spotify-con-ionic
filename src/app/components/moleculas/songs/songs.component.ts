import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { addFavorites} from 'src/app/state/actions/favorites.actions';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
 @Input() song;
 isFavorite: boolean = false;
  constructor(private store: Store, private toastController: ToastController) { }

  ngOnInit() {
  }
  fovorites(song){
    const payload = {
      id:song.track.id,
      img: song.track.album.images[0].url,
      name: song.track.name,
      artist: song.track.artists[0].name,
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
}
