import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminHomeScreenComponent } from './super-admin-home-screen/super-admin-home-screen.component';
import { AdminStatisticsComponent } from './admin-statistics/admin-statistics.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SuperAdminHomeScreenComponent,
    AdminStatisticsComponent,
    AdminInfoComponent
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SuperAdminModule { }
