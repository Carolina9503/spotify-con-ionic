import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SongsComponent } from './moleculas/songs/songs.component';
import { TabBottomComponent } from './organismos/tab-bottom/tab-bottom.component';
import { HeaderComponent } from './atomos/header/header.component';



@NgModule({
  declarations: [
    SongsComponent,
    TabBottomComponent,
    HeaderComponent  
    
  ],
  exports: [
    SongsComponent,
    TabBottomComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
