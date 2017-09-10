import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'statusTransform'})
export class StatusTransformPipe implements PipeTransform {
  transform(value: string,isSession
  	:boolean):string {
   if(isSession){
   	return "Session";
   }else{
     return "Break";
   }

   
  }
}