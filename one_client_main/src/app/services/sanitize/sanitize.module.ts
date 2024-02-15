import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeTextPipe } from './sanitize-text.pipe';
import { SanitizeUrlPipe } from './sanitize-url.pipe';



@NgModule({
  declarations: [SanitizeTextPipe, SanitizeUrlPipe],
  imports: [
    CommonModule
  ],
  exports: [SanitizeTextPipe, SanitizeUrlPipe]
})
export class SanitizeModule { }
