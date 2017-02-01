System.register(['angular2/core', 'angular2/router', 'angular2/common', './post.service', './blog'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, post_service_1, blog_1;
    var PostFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (blog_1_1) {
                blog_1 = blog_1_1;
            }],
        execute: function() {
            PostFormComponent = (function () {
                function PostFormComponent(fb, _postService, _router) {
                    this._postService = _postService;
                    this._router = _router;
                    this.blog = new blog_1.Blog();
                    this.form = fb.group({
                        title: ['', common_1.Validators.required],
                        description: ['', common_1.Validators.required],
                    });
                }
                PostFormComponent.prototype.addBlog = function () {
                    var _this = this;
                    console.log(this.blog);
                    this._postService.AddPost(this.blog)
                        .subscribe(function (x) {
                        _this._router.navigate(['Post']);
                    });
                };
                PostFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/post-form.component.html',
                        providers: [post_service_1.PostService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, post_service_1.PostService, router_1.Router])
                ], PostFormComponent);
                return PostFormComponent;
            }());
            exports_1("PostFormComponent", PostFormComponent);
        }
    }
});
//# sourceMappingURL=post-form.component.js.map