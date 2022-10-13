import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {path:'',component:LoginComponent}
   

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { 
  constructor(){
    console.log("login page is loaded!")
  }
}
