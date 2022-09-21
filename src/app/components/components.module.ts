import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SongsComponent } from './moleculas/songs/songs.component';
import { TabBottomComponent } from './organismos/tab-bottom/tab-bottom.component';
import { HeaderComponent } from './atomos/header/header.component';
import { GridSongsComponent } from './template/grid-songs/grid-songs.component';



@NgModule({
  declarations: [
    SongsComponent,
    TabBottomComponent,
    HeaderComponent,
    GridSongsComponent 
    
  ],
  exports: [
    SongsComponent,
    TabBottomComponent,
    HeaderComponent,
    GridSongsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
