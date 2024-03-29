import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeUrl'
})
export class SanitizeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
