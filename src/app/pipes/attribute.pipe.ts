import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'attribute'
})
export class AttributePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let retVal = '';
    const array = value.split("_");
    if(array.length > 0) {
      array.forEach(arr => {
        arr = this.capitalizeFirstLetter(arr);
        retVal = retVal + arr + " ";
      })
    } else {
      retVal = this.capitalizeFirstLetter(value);
    }
    retVal.trim()
    return retVal;
  }
  capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
