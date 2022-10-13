import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
  
    path: 'Login',
    loadChildren: () => import('./login/login.module').then(x => x.LoginModule)
  },
 { 
  
  path: 'Home',
  loadChildren: () => import('./home/home.module').then(x => x.HomeModule)
},
{ path: '**', redirectTo: 'Login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
