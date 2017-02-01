System.register(['angular2/core', 'angular2/router', './user.servics'], function(exports_1, context_1) {
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
    var core_1, router_1, user_servics_1;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_servics_1_1) {
                user_servics_1 = user_servics_1_1;
            }],
        execute: function() {
            //import 'rxjs/Rx';
            UserComponent = (function () {
                function UserComponent(_service) {
                    this._service = _service;
                }
                UserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getUsers()
                        .subscribe(function (users) {
                        if (users.resStatus == 'error') {
                            alert(You, are, not, authorized, user);
                        }
                        else {
                            _this.userData = users.data;
                        }
                    });
                };
                // Method for Delete the User ******************************************
                UserComponent.prototype.deleteUser = function (user) {
                    var _this = this;
                    console.log(user);
                    if (confirm("Are you sure you want to delete " + user.name + "?")) {
                        var index = this.userData.indexOf(user);
                        this.userData.splice(index, 1);
                        this._service.deleteUser(user._id)
                            .subscribe(null, function (err) {
                            alert("Could not delete the user.");
                            _this.userData.splice(index, 0, user);
                        });
                    }
                };
                UserComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/user.component.html',
                        providers: [user_servics_1.UserService],
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [user_servics_1.UserService])
                ], UserComponent);
                return UserComponent;
            }());
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map