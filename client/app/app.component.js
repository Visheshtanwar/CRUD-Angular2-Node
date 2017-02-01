System.register(['angular2/core', 'angular2/router', './navbar.component', './home.component', './user.component', './post.component', './user-form.component', './not-found.component', './post-form.component', './user-register.component', './user-login.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, navbar_component_1, home_component_1, user_component_1, post_component_1, user_form_component_1, not_found_component_1, post_form_component_1, user_register_component_1, user_login_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (post_component_1_1) {
                post_component_1 = post_component_1_1;
            },
            function (user_form_component_1_1) {
                user_form_component_1 = user_form_component_1_1;
            },
            function (not_found_component_1_1) {
                not_found_component_1 = not_found_component_1_1;
            },
            function (post_form_component_1_1) {
                post_form_component_1 = post_form_component_1_1;
            },
            function (user_register_component_1_1) {
                user_register_component_1 = user_register_component_1_1;
            },
            function (user_login_component_1_1) {
                user_login_component_1 = user_login_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.HomeComponent },
                        { path: '/signup', name: 'Signup', component: user_register_component_1.UserRegisterComponent },
                        { path: '/login', name: 'Login', component: user_login_component_1.UserLoginComponent },
                        { path: '/user', name: 'User', component: user_component_1.UserComponent },
                        { path: '/user/id', name: 'EditUser', component: user_form_component_1.UserFormComponent },
                        { path: '/user/New', name: 'NewUser', component: user_form_component_1.UserFormComponent },
                        { path: '/post', name: 'Post', component: post_component_1.PostComponent },
                        { path: '/post/New', name: 'NewPost', component: post_form_component_1.PostFormComponent },
                        { path: '/not-found', name: 'NotFound', component: not_found_component_1.NotFoundComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Home'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n          <navbar></navbar>\n          <div class=\"container\">\n          <router-outlet></router-outlet>\n          </div>\n               ",
                        directives: [navbar_component_1.NavBarComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map