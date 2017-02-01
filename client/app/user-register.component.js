System.register(['angular2/core', 'angular2/common', 'angular2/router', './user-register.service', './signupUser'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, user_register_service_1, signupUser_1;
    var UserRegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_register_service_1_1) {
                user_register_service_1 = user_register_service_1_1;
            },
            function (signupUser_1_1) {
                signupUser_1 = signupUser_1_1;
            }],
        execute: function() {
            UserRegisterComponent = (function () {
                function UserRegisterComponent(fb, _userRegisterService, _router) {
                    this._userRegisterService = _userRegisterService;
                    this._router = _router;
                    this.SignupUser = new signupUser_1.SignupUser();
                    this.form = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.required],
                        password: ['', common_1.Validators.required],
                    });
                }
                UserRegisterComponent.prototype.AddNewUser = function () {
                    var _this = this;
                    //console.log(this.SignupUser);
                    this._userRegisterService.registerUser(this.SignupUser)
                        .subscribe(function (user) {
                        if (user.resStatus == 'success') {
                            alert(" Registration Successfull");
                            _this._router.navigate(['Login']);
                        }
                        else {
                            alert("Some Error ! Please Try again");
                        }
                    });
                };
                UserRegisterComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/user-signup.component.html',
                        providers: [user_register_service_1.UserRegisterService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, user_register_service_1.UserRegisterService, router_1.Router])
                ], UserRegisterComponent);
                return UserRegisterComponent;
            }());
            exports_1("UserRegisterComponent", UserRegisterComponent);
        }
    }
});
//# sourceMappingURL=user-register.component.js.map