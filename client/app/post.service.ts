import { Injectable } from "angular2/core";
import { Http , Headers} from "angular2/http";
import 'rxjs/add/operator/map';


@Injectable()

export class PostService {
    private _url = "http://10.20.1.139:3001";

    constructor(private _http: Http){

    }
    AddPost(blog){
        let headers = new Headers({'content-Type':'application/json'});
        return this._http.post(this._url+ "/blog/addBlog", JSON.stringify(blog), {headers:headers})
               .map(res => res.json());
    }

    getPosts(){
        return this._http.get(this._url+"/blog/allBlogs").map((res) => {
             return res.json();
        });

    }

}
