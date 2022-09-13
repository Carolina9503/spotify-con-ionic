import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsTopPage } from './tabs-top.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/inicio/inicio',
    pathMatch: 'full'

  },
  {
    path: '',
    component: TabsTopPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../home/home.module').then((m) =>m.HomePageModule)
      },
      {
        path: 'notificaciones',
        loadChildren: () => import('../notifications/notifications.module').then((m) =>m.NotificationsPageModule)
      },
      {
        path: 'configuraciones',
        loadChildren: () => import('../perfil/perfil.module').then((m) =>m.PerfilPageModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsTopPageRoutingModule {}
