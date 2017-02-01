import { Component } from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import { NavBarComponent } from './navbar.component';
import { HomeComponent } from './home.component';
import { UserComponent } from './user.component';
import { PostComponent } from './post.component';
import { UserFormComponent } from './user-form.component';
import { NotFoundComponent } from './not-found.component';
import { PostFormComponent } from './post-form.component';
import { UserRegisterComponent } from './user-register.component';
import { UserLoginComponent } from './user-login.component';

@RouteConfig([
     { path: '/', name: 'Home', component: HomeComponent },
     { path: '/signup', name:'Signup', component: UserRegisterComponent},
     { path: '/login', name:'Login', component: UserLoginComponent},
     { path: '/user', name:'User', component: UserComponent},
     { path: '/user/id', name:'EditUser', component: UserFormComponent},
     { path: '/user/New', name:'NewUser', component: UserFormComponent},
     { path: '/post', name:'Post', component: PostComponent},
     { path: '/post/New', name:'NewPost', component: PostFormComponent},
     { path: '/not-found', name:'NotFound', component: NotFoundComponent},
     { path: '/*other', name:'Other', redirectTo: ['Home']}
])

@Component({
     selector: 'my-app',

     template: `
          <navbar></navbar>
          <div class="container">
          <router-outlet></router-outlet>
          </div>
               `,
     directives: [NavBarComponent, ROUTER_DIRECTIVES ]

})

export class AppComponent {

}
