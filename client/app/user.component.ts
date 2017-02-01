import { Component , OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import { UserService } from './user.servics';

//import 'rxjs/Rx';


@Component({
   templateUrl: 'app/user.component.html',
   providers:	[UserService],
   directives: [RouterLink]
})

export class UserComponent implements OnInit {
    userData: any;
    constructor(private _service: UserService){
    }
    ngOnInit(){
           this._service.getUsers()
          .subscribe( (users) => {
                    if(users.resStatus == 'error'){
                    alert(You are not authorized user);
                         }
                    else {
                    this.userData = users.data;
                         }
               }
          );
    }
// Method for Delete the User ******************************************
    deleteUser(user){
         console.log(user);
		if (confirm("Are you sure you want to delete " + user.name +"?")) {
			var index = this.userData.indexOf(user)
            this.userData.splice(index, 1);
			this._service.deleteUser(user._id)
				.subscribe(null,
					err => {
						alert("Could not delete the user.");

						this.userData.splice(index, 0, user);

					});
		}
	}

}
