import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  //Validate UserCredentials 
ValidateUserCredentials(username:string , password:string ){
  if(username=='Ansh' && password=='Ansh'){
  
    // this.GoToHome();
    console.log('valid');
    this.GoToHome();
  }
  else{
    console.log('invalid')
  }
  
  }
  
     // navigates to the home page
     GoToHome(){
      this._router.navigate(['/Home']);  }
  }

