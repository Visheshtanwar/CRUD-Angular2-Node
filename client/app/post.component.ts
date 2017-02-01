import { Component , OnInit } from 'angular2/core';
import { RouterLink } from 'angular2/router';
import {  PostService  } from './post.service';
import {  SpinnerComponent  } from './spinner.component';

@Component({
      templateUrl:'app/post.component.html',
      styles: [`
        .posts li { cursor: pointer; }
        .posts li:hover {
             background: #ecf0f1;
         }
        .list-group-item.active,
        .list-group-item.active:hover,
        .list-group-item.active:focus {
            background-color: #ecf0f1;
            border-color: #ecf0f1;
            color: #2c3e50;
        }
    `],

      providers: [PostService ],
      directives: [SpinnerComponent RouterLink]
})

export class PostComponent implements OnInit {
        posts: any[];
        isLoading = true;
        currentPost;

       constructor(private _postService: PostService){


       }
       ngOnInit(){
            this._postService.getPosts()
            .subscribe((posts) => {
                 if(posts.resStatus == 'Success'){
                     this.posts = posts.data;
                 }else{
                    alert("Some Error");
                 }
           });

       }
       select(post){
		this.currentPost = post;
   }
}
