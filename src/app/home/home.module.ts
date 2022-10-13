import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent}
   

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule.forChild(routes)

  ]
})
export class HomeModule { }
