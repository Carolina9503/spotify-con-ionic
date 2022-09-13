import { Component, Input, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { selectLoading } from 'src/app/state/selectors/playList.selectors';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  @Input() tab: string;
  loading$: Observable<boolean> = new Observable();
  loading: HTMLIonLoadingElement;

  constructor(private store: Store, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loading$ = this.store.select(selectLoading);
    
  }
  mostrarLoading(){
    this.presentLoading('Cargando lista de canciones');

    setTimeout(() =>{
      this.loading.dismiss();
    }, 500);
   
  }
  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      message
    });

    this.loading.present();
  }

}
