import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../../components/template/main/main.component';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'inicio',
        component: HomePage
      },
      {
        path: 'configuraciones',
        loadChildren: () => import('../perfil/perfil.module').then((m) =>m.PerfilPageModule)
      },
      {
        path: 'buscar',
        loadChildren: () => import('../search-song/search-song.module').then(m => m.SearchSongPageModule)
      },
      {
        path: 'favotitos',
        loadChildren: () => import('../favorites/favorites-routing.module').then(m => m.FavoritesPageRoutingModule)
      },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },

    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
