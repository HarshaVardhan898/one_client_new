import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminHomeScreenComponent } from './super-admin-home-screen/super-admin-home-screen.component';
import { AdminStatisticsComponent } from './admin-statistics/admin-statistics.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';

const routes: Routes = [
  {
    path: '',
    component: SuperAdminHomeScreenComponent
  },
  {
    path: 'statistics',
    component: AdminStatisticsComponent
  },
  {
    path: 'admin-info',
    component: AdminInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
