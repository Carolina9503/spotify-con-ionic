import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SongsComponent } from './moleculas/songs/songs.component';



@NgModule({
  declarations: [
    SongsComponent,
  ],
  exports: [
    SongsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
