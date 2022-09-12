import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/inicio',
    pathMatch: 'full'

  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../tabs-top/tabs-top.module').then(m => m.TabsTopPageModule)
      },
      {
        path: 'buscar',
        loadChildren: () => import('../search-song/search-song.module').then(m => m.SearchSongPageModule)
      },
      {
        path: 'favotitos',
        loadChildren: () => import('../favorites/favorites-routing.module').then(m => m.FavoritesPageRoutingModule)
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
