import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {routes} from './routes';

@NgModule({
  imports: [
    CommonModule,
    //add routes.ts
    RouterModule.forRoot(routes)
  ],
  //add exports to router module of angular
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
