import { Component , OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import {FormBuilder, ControlGroup ,Validators } from 'angular2/common';
import { PostService } from './post.service';
import { Blog} from './blog';

@Component({
     templateUrl:'app/post-form.component.html'
     providers: [PostService]
})

export class PostFormComponent implements OnInit {

               form: ControlGroup;
               title: string;
               blog = new Blog();

          constructor(
               fb: FormBuilder,
              private _postService: PostService,
              private _router:Router
                  ){

                 this.form = fb.group({
                    title: ['', Validators.required],
                    description: ['',Validators.required],

                    })

          }
          addBlog(){
                    console.log(this.blog);
                    this._postService.AddPost(this.blog)
                         .subscribe(x => {

                         this._router.navigate(['Post']);
                         })
          }
}
