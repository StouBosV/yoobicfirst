import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path:'dashboard',
    component: MenuPage,
    children: [
      {
        path: 'missions',
        loadChildren: () => import('../missions/missions.module').then( m => m.MissionsPageModule)
      }
    ]
  },
  {
    path:'',
    redirectTo:'/menu/dashboard/missions',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
