System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var UserRegisterService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            UserRegisterService = (function () {
                function UserRegisterService(_http) {
                    this._http = _http;
                    this._url = "http://10.20.1.139:3001";
                }
                UserRegisterService.prototype.registerUser = function (user) {
                    //console.log(user);
                    var headers = new http_1.Headers({ 'content-Type': 'application/json' });
                    return this._http.post(this._url + "/signup/addSignupUser", JSON.stringify(user), { headers: headers }).map(function (res) { return res.json(); });
                };
                UserRegisterService.prototype.login = function (user) {
                    console.log(user);
                    var headers = new http_1.Headers({ 'content-Type': 'application/json' });
                    return this._http.post(this._url + "/signup/login", JSON.stringify(user), { headers: headers }).map(function (res) { return res.json(); });
                };
                UserRegisterService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserRegisterService);
                return UserRegisterService;
            }());
            exports_1("UserRegisterService", UserRegisterService);
        }
    }
});
//# sourceMappingURL=user-register.service.js.map