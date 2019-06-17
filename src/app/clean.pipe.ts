import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clean'
})
export class CleanPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return null;
  }

}