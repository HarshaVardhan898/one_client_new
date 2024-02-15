import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserStatisticsComponent } from './user-statistics/user-statistics.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AdminEarningsComponent } from './admin-earnings/admin-earnings.component';

const routes: Routes = [
  {
    path: 'list',
    component: UsersListComponent
  },
  {
    path: 'dashboard',
    component: UserStatisticsComponent
  },
  {
    path: 'earnings',
    component: AdminEarningsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
