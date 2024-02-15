import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeWorkComponent } from './employee-work/employee-work.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeEarningsComponent } from './employee-earnings/employee-earnings.component';


@NgModule({
  declarations: [
    EmployeeWorkComponent,
    EmployeeDashboardComponent,
    EmployeeEarningsComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
