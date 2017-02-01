System.register(['angular2/core', 'angular2/common', 'angular2/router', './user.servics', './user'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, user_servics_1, user_1;
    var UserFormComponent;
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
            function (user_servics_1_1) {
                user_servics_1 = user_servics_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            // import { BasicValidators } from './basicValidators';
            UserFormComponent = (function () {
                function UserFormComponent(fb, _router, _routeParams, _userService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._userService = _userService;
                    this.user = new user_1.User();
                    this.form = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.required],
                        phone: ['', common_1.Validators.required],
                        address: fb.group({
                            street: ['', common_1.Validators.required],
                            suite: ['', common_1.Validators.required],
                            city: ['', common_1.Validators.required],
                            zipcode: ['', common_1.Validators.required]
                        })
                    });
                }
                UserFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get("id");
                    this.title = id ? "Edit User" : "New User";
                    if (!id) {
                        return;
                    }
                    else {
                        this._userService.getUser(id)
                            .subscribe(function (user) { _this.user = user.data; }, function (response) {
                            if (response.status == 404) {
                                _this._router.navigate(['NotFound']);
                            }
                        });
                    }
                };
                //    Dirty Tracking *******************************************************
                // routerCanDeactivate(){
                // 	if (this.form.dirty)
                // 		return confirm('You have unsaved changes. Are you sure you want to leave ?');
                //
                // 	return true;
                // }
                // function for add new user or Update user Info *****************************
                UserFormComponent.prototype.save = function () {
                    var _this = this;
                    var result;
                    if (this.user._id) {
                        this._userService.userUpdate(this.user)
                            .subscribe(function (x) {
                            _this._router.navigate(['User']);
                        });
                    }
                    else {
                        result = this._userService.addUser(this.user);
                        result.subscribe(function (x) {
                            _this._router.navigate(['User']);
                        });
                    }
                };
                UserFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/user-form.component.html',
                        providers: [user_servics_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, router_1.RouteParams, user_servics_1.UserService])
                ], UserFormComponent);
                return UserFormComponent;
            }());
            exports_1("UserFormComponent", UserFormComponent);
        }
    }
});
//# sourceMappingURL=user-form.component.js.map