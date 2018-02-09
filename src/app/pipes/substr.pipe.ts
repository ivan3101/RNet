import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substr'
})
export class SubstrPipe implements PipeTransform {

  transform(text: any, length = 10): any {
    if (text.length > length) {
      return text.substr(0, length) + '...';
    }
    return text;
  }

}
