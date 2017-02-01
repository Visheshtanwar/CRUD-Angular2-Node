import {Component , OnInit} from 'angular2/core';
import {FormBuilder, ControlGroup ,Validators } from 'angular2/common';
import {CanDeactivate , Router , RouteParams} from 'angular2/router';
import { UserService } from './user.servics';
import { User } from './user';
// import { BasicValidators } from './basicValidators';

@Component({
     templateUrl: 'app/user-form.component.html',
     providers: [UserService]
})
export class UserFormComponent implements OnInit , CanDeactivate {
     form: ControlGroup;

     title: string;
     user = new User();

     constructor(fb: FormBuilder,
          private _router: Router,
          private _routeParams: RouteParams,
          private _userService: UserService

     ) {
          this.form = fb.group({
               name: ['', Validators.required],
               email: ['',Validators.required],
               phone: ['', Validators.required],
               address: fb.group({
                    street: ['', Validators.required],
                    suite: ['', Validators.required],
                    city: ['', Validators.required],
                    zipcode: ['', Validators.required]
               })
          });
     }

     ngOnInit(){
          var id = this._routeParams.get("id");
          this.title = id ? "Edit User" : "New User";
          if(!id){
               return;
          }
          else {
               this._userService.getUser(id)
               .subscribe(
                    user => {this.user = user.data}
                    response => {
                         if (response.status == 404) {
                              this._router.navigate(['NotFound']);
                         }
                    });
               }
          }

//    Dirty Tracking *******************************************************

          // routerCanDeactivate(){
          // 	if (this.form.dirty)
          // 		return confirm('You have unsaved changes. Are you sure you want to leave ?');
          //
          // 	return true;
          // }


// function for add new user or Update user Info *****************************
          save(){
               var result;
               if (this.user._id){
                  this._userService.userUpdate(this.user)
                    .subscribe(
                         x => { this._router.navigate(['User'])
                       })
                    }
               else{
                    result = this._userService.addUser(this.user)
                    result.subscribe(x => {
                    this._router.navigate(['User']);
                           });
                    }
               }

          }
