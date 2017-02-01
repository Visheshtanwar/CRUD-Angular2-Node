import { Injectable } from 'angular2/core';
import { Http, Headers } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserRegisterService {
          private _url = "http://10.20.1.139:3001";

          constructor(private _http:Http){

          }
     registerUser(user){
          //console.log(user);
          let headers = new Headers({'content-Type':'application/json'});
          return this._http.post(this._url+"/signup/addSignupUser" , JSON.stringify(user) , {headers:headers}).map(res => res.json());
     }

     login(user){
          console.log(user);
          let headers = new Headers({'content-Type':'application/json'});
          return this._http.post(this._url+"/signup/login" , JSON.stringify(user) , {headers:headers}).map(res => res.json());
     }

}
