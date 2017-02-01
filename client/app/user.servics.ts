import { Injectable } from 'angular2/core';
import { Http, Headers } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{
     private _url = "http://10.20.1.139:3001";

     constructor(private _http: Http){
     }

// Add user Service
     addUser(user){
          let headers = new Headers({'content-Type':'application/json'});
		return this._http.post( this._url + "/users/addUser", JSON.stringify(user), {headers : headers})
			.map(res => res.json());
	}

// get All users service
     getUsers(){
       let headers = new Headers({'content-Type':'application/json'});
        //console.log("angular");
        return this._http.get(this._url+"/users/allUser" , {headers: headers})
        .map((res) => {

            return res.json();
        });
     }
// get single user info
     getUser(userId){
          //console.log(userId)
          let headers = new Headers({'content-Type':'application/json'});
		return this._http.get(this._url+"/users/singleUser/"+ userId , {headers:headers})
			.map(res =>  res.json());
	     }

// update the users

    userUpdate(user){
     //console.log(user);return;;
     let headers = new Headers({'content-type':'application/json'});
     return this._http.post(this._url+"/users/update", JSON.stringify(user) , {headers:headers})
      .map(res => res.json());
    }

// delete the user
    deleteUser(userId){
        // console.log(userId)
         let headers = new Headers({'content-Type':'application/json'});
	 	return this._http.get(this._url+"/users/delete/"+ userId ,{ headers : headers})
	 		.map(
                 res => res.json();
               );
	 }


     private getUserUrl(userId){
     turn this._url + "/" + userId;
}
}
