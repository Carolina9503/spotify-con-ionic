import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchSongPageRoutingModule } from './search-song-routing.module';

import { SearchSongPage } from './search-song.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchSongPageRoutingModule,
    PipesModule
  ],
  declarations: [SearchSongPage]
})
export class SearchSongPageModule {}
