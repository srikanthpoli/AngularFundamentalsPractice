
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import{CommonModule} from '@angular/common'
import{RouterModule} from '@angular/router'
import { userRoutes } from './userroutes';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login/login.component';



 


@NgModule({
  declarations: [ProfileComponent, LoginComponent
  ],
  imports: [ 
      CommonModule,
      RouterModule.forChild(userRoutes),FormsModule,ReactiveFormsModule
      
 
  ],
  providers: []
})
export class UserModule { }
