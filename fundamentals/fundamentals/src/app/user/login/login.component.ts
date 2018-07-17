import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authSrvc:AuthService,private router:Router) { }

  ngOnInit() {
  }


  login(formValues){
    console.log(formValues.userName)
    this.authSrvc.loginUser(formValues.userName,formValues.passWord);
    this.router.navigate(['events'])
    

  }

  cancel()
  {
    this.router.navigate(['events'])
  }
  userName:string;
  passWord:string;
  mouseenterLogin:boolean;
}
