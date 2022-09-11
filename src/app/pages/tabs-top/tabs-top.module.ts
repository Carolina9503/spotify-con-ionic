import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsTopPageRoutingModule } from './tabs-top-routing.module';

import { TabsTopPage } from './tabs-top.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsTopPageRoutingModule
  ],
  exports: [TabsTopPage],
  declarations: [TabsTopPage]
})
export class TabsTopPageModule {}
