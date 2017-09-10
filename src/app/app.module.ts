import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TimeTransformPipe} from './timetransform.pipe'
import {StatusTransformPipe}  from './statustransform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimeTransformPipe,
    StatusTransformPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
