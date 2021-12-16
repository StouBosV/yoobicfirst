import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissionsPage } from './missions.page';

const routes: Routes = [
  {
    path: '',
    component: MissionsPage
  },
  {
    path: ':missionId',
    loadChildren: () => import('./mission-detail/mission-detail.module').then( m => m.MissionDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissionsPageRoutingModule {}
