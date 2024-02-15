import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeWorkComponent } from './employee-work/employee-work.component';
import { EmployeeEarningsComponent } from './employee-earnings/employee-earnings.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: EmployeeDashboardComponent
  },
  {
    path: 'work',
    component: EmployeeWorkComponent
  },
  {
    path: 'earnings',
    component: EmployeeEarningsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
