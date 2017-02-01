import { Component } from 'angular2/core';
import { FormBuilder, ControlGroup ,Validators } from 'angular2/common';
import { Router } from 'angular2/router';
import { UserRegisterService } from './user-register.service';
import { SignupUser } from './signupUser';

@Component({
     templateUrl: 'app/user-login.component.html',
     providers: [ UserRegisterService ]
})

export class UserLoginComponent {
          form: ControlGroup;
          SignupUser = new SignupUser();

          constructor(fb:FormBuilder,
               private _userRegisterService:UserRegisterService,
               private _router:Router)
                    {
               this.form = fb.group({
                    email: ['',Validators.required],
                    password: ['', Validators.required],

               });
          }
          loginUser(){
               //console.log(this.SignupUser);
              this._userRegisterService.login(this.SignupUser)
                    .subscribe( (user) => {
                         if(user.resStatus == 'success'){
                         this._router.navigate(['User']);
                         }
                         else {
                              alert("Some Error");
                         }
                    })

          }

}
