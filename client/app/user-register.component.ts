import { Component } from 'angular2/core';
import { FormBuilder, ControlGroup ,Validators } from 'angular2/common';
import { Router } from 'angular2/router';
import { UserRegisterService } from './user-register.service';
import { SignupUser } from './signupUser';


@Component({
     templateUrl: 'app/user-signup.component.html',
     providers: [ UserRegisterService ]
})

export class UserRegisterComponent {
          form: ControlGroup;
          SignupUser = new SignupUser();

          constructor(fb:FormBuilder,
               private _userRegisterService:UserRegisterService,
               private _router:Router)
                    {
               this.form = fb.group({
                    name: ['', Validators.required],
                    email: ['',Validators.required],
                    password: ['', Validators.required],

               });
          }
          AddNewUser(){
               //console.log(this.SignupUser);
              this._userRegisterService.registerUser(this.SignupUser)
                    .subscribe( (user) => {
                         if(user.resStatus == 'success'){
                         alert(" Registration Successfull")
                         this._router.navigate(['Login']);
                         }
                         else {
                              alert("Some Error ! Please Try again");
                         }
                    })

          }

}
