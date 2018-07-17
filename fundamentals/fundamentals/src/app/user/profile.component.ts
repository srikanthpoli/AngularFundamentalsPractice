import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './login/auth.service';
import { Route, Router } from '@angular/router';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

    constructor(private authServ:AuthService, private router: Router){}
    profileForm:FormGroup;
    firstname:FormControl;
    lastName:FormControl;

    ngOnInit(){


        this.firstname=new FormControl(this.authServ.currentUser.firstName,
            [Validators.required,Validators.pattern('[a-zA-Z].*')]);
        this.lastName=new FormControl(this.authServ.currentUser.lastName,Validators.required);

        this.profileForm= new FormGroup({
        firstName:this.firstname,
        lastName:this.lastName
        })

    }

    SaveProfile(profileForm){
        
        if(this.profileForm.valid){
        this.authServ.updateUser(profileForm)
    this.router.navigate(['events'])  
    }
    }
    validateLastname()

    {
       return this.lastName.invalid
    }

    validateFirstname()

    {
       return this.firstname.invalid
    }
    Cancel()
    {
        this.router.navigate(['events'])  
    }
  
       
}
