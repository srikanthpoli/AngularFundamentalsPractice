import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
currentUser:IUser;


  costructor( ) { }

  loginUser(userName:string,password:string){

    console.log(userName);
    this.currentUser={
      
      id:1,
      userName:userName,
      firstName:'srikanth',
      lastName: 'polisetty'
    }

  }

  updateUser(profileForm){

this.currentUser.firstName=profileForm.firstName;
this.currentUser.lastName=profileForm.lastName;
  }
  isAuthenticated(){
    return !!this.currentUser;
  }
}
