import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'timeTransform'})
export class TimeTransformPipe implements PipeTransform {
  transform(value: number):string {
   let h=Math.floor(value/3600),
       m=Math.floor(value%3600/60),
       s=Math.floor(value%3600%60);
  return ((h>0?h+":"+(m<10?"0":""):"")+m+":"+(s<10?"0":"")+s);

   
  }
}