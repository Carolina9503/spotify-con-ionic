import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './atomos/tabs/tabs.component';
import { TabsTopComponent } from './atomos/tabs-top/tabs-top.component';
import { SongsComponent } from './moleculas/songs/songs.component';



@NgModule({
  declarations: [
    TabsComponent,
    TabsTopComponent,
    SongsComponent
  ],
  exports: [
    TabsComponent,
    TabsTopComponent,
    SongsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
