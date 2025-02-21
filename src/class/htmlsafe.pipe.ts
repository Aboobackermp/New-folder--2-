import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safehtml'
})
export class HtmlSafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(url:any) {
    return this.sanitizer.bypassSecurityTrustHtml(url);
  }

}