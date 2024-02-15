import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts/layouts.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './modules/auth/login/login.component';
import { SuperAdminModule } from './modules/super-admin/super-admin.module';
import { AdminModule } from './modules/admin/admin.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { CustomerModule } from './modules/customer/customer.module';
import { CustomerComponent } from './modules/customer/customer/customer.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'auth/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },

  {
    path: '',
    component: LayoutsComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'super-level',
        loadChildren: () => import('./modules/super-admin/super-admin.module').then((m) => m.SuperAdminModule)
      },
      {
        path: 'admin-level',
        loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule)
      },
      {
        path: 'employee',
        loadChildren: () => import('./modules/employee/employee.module').then((m) => m.EmployeeModule)
      },
      {
        path: 'customer',
        loadChildren: () => import('./modules/customer/customer.module').then((m) => m.CustomerModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
