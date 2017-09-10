import { Component } from '@angular/core';
import {TimeTransformPipe} from './timetransform.pipe';
import {StatusTransformPipe}  from './statustransform.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 bgColor="#99CC00";
 breakLength=5;
 sessionLength=25;
 percent="";

 isOpen=false;
 isSession=true;
 leftTime=0;
 timer;
 constructor(){
 	 if(this.isSession){
      this.leftTime=this.sessionLength*60;
 	}else{
 		this.leftTime=this.breakLength*60;
 	}
 }


 change(isBreak:boolean,dic:number){

 	if(!this.isOpen){
 		 this.percent=0+'%';
 		if(isBreak){
 		this.breakLength+=dic;
 		if(this.breakLength<1){
 			this.breakLength=1;
 		}
 	}else{
 		this.sessionLength+=dic;
 		if(this.sessionLength<1){
 			this.sessionLength=1;
 		}
 	}
 	if(this.isSession){
      this.leftTime=this.sessionLength*60;
 	}else{
 		this.leftTime=this.breakLength*60;
 	}
 	
 	}
 }
 toggleTimer(){
 	var t=this;
   if(!this.isOpen){
   	this.isOpen=true;
    this.leftTime--;
    this.timer=setInterval(function(){
    	 t.leftTime--;
        if(t.isSession){
         const perc=100-(t.leftTime/(t.sessionLength*60))*100;
         t.percent=perc+'%';
       if(t.leftTime<0){
       	 t.percent=0+'%';
       	    t.isSession=false;
    		t.leftTime=t.breakLength*60;
    		t.bgColor='#FF4444';
       }
    }else{
    	 const perc=100-(t.leftTime/(t.breakLength*60))*100;
         t.percent=perc+'%';
       if(t.leftTime<0){
       	 t.percent=0+'%';
       	t.isSession=true;
    		t.leftTime=t.sessionLength*60;
    		t.bgColor='#99CC00';
       }
   
    }
    },1000);

   
   }else{
   	 console.log(2);
   	 this.isOpen=false;
    clearInterval(this.timer);
   	
   }
 }

 	

}
