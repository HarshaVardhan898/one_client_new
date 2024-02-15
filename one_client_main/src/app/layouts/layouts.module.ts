import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts/layouts.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SanitizeModule } from '../services/sanitize/sanitize.module';



@NgModule({
  declarations: [
    LayoutsComponent,
    TopBarComponent,
    SideBarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SanitizeModule
  ],
  exports: [
    SideBarComponent,
    TopBarComponent,
    FooterComponent,
    LayoutsComponent
  ]
})
export class LayoutsModule { }
