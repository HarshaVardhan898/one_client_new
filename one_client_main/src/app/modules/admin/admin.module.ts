import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserStatisticsComponent } from './user-statistics/user-statistics.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminEarningsComponent } from './admin-earnings/admin-earnings.component';



@NgModule({
  declarations: [
    UserInfoComponent,
    UserStatisticsComponent,
    UsersListComponent,
    AdminEarningsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
