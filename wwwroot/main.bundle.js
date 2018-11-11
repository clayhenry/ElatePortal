webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\r\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n\r\n\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n  <div class='row'>\r\n\r\n      <!--<app-nav-menu></app-nav-menu>-->\r\n\r\n    <div class='col-sm-9 body-content'>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_data) {
        this._data = _data;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nav_menu_nav_menu_component__ = __webpack_require__("./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__counter_counter_component__ = __webpack_require__("./src/app/counter/counter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fetch_data_fetch_data_component__ = __webpack_require__("./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__blog_blog_component__ = __webpack_require__("./src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__post_post_component__ = __webpack_require__("./src/app/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__feature_feature_component__ = __webpack_require__("./src/app/feature/feature.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__comments_comments_component__ = __webpack_require__("./src/app/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__reaction_reaction_component__ = __webpack_require__("./src/app/reaction/reaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__chat_chat_component__ = __webpack_require__("./src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__nav_menu_nav_menu_component__["a" /* NavMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__counter_counter_component__["a" /* CounterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__fetch_data_fetch_data_component__["a" /* FetchDataComponent */],
                __WEBPACK_IMPORTED_MODULE_12__blog_blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_14__post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_15__feature_feature_component__["a" /* FeatureComponent */],
                __WEBPACK_IMPORTED_MODULE_16__comments_comments_component__["a" /* CommentsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__reaction_reaction_component__["a" /* ReactionComponent */],
                __WEBPACK_IMPORTED_MODULE_18__chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_19__header_header_component__["a" /* HeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'ng-cli-universal' }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'fetch-data', component: __WEBPACK_IMPORTED_MODULE_11__fetch_data_fetch_data_component__["a" /* FetchDataComponent */], pathMatch: 'full' },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
                    { path: 'Portal/post/:id', component: __WEBPACK_IMPORTED_MODULE_12__blog_blog_component__["a" /* BlogComponent */], pathMatch: 'full' },
                    { path: 'Portal/post', component: __WEBPACK_IMPORTED_MODULE_14__post_post_component__["a" /* PostComponent */], pathMatch: 'full' },
                    { path: 'counter', component: __WEBPACK_IMPORTED_MODULE_10__counter_counter_component__["a" /* CounterComponent */],
                        children: [{
                                path: 'fetch-data', component: __WEBPACK_IMPORTED_MODULE_11__fetch_data_fetch_data_component__["a" /* FetchDataComponent */], outlet: 'here'
                            }]
                    },
                    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_12__blog_blog_component__["a" /* BlogComponent */],
                        children: [{
                                path: '', component: __WEBPACK_IMPORTED_MODULE_14__post_post_component__["a" /* PostComponent */], pathMatch: 'full'
                            }]
                    },
                ]),
                __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-header></app-header>\r\n<div *ngFor=\"let singlepost of items; let i=index\">\r\n  {{singlepost}}\r\n  <br>\r\n</div>\r\n\r\n\r\n\r\n<!--<div *ngFor=\"let tag of tags \">-->\r\n\r\n  <!--<div (click)=\"filterByTag(tag.departmentName)\">{{tag.departmentName}}</div>-->\r\n<!--</div>-->\r\n<!--<div (click)=\"getAllBlogs()\">All</div>-->\r\n\r\n<!--Feature -->\r\n\r\n\r\n<app-feature [posts]=\"blogFeatures\"></app-feature>\r\n\r\n\r\n<!--Blogroll-->\r\n\r\n\r\n<div *ngFor=\"let post of blogposts; let i=index\" class=\"el-panel\">\r\n\r\n  <div class=\"el-panel-body\">\r\n  <div><img src=\"/uploads/{{post.userImage}}\" class=\"profile-image\" ></div>\r\n  <div>\r\n    <strong>{{post.name}}</strong><br>\r\n    <span class=\"el-user-title\">{{post.userTitle}}</span>\r\n  </div>\r\n\r\n  <div (click)=\"getBlogPost(post.blogId, i)\">\r\n   <div class=\"el-image\" *ngIf=\"post.coverImage\">\r\n     <img src=\"/uploads/{{post.coverImage}}\"  [ngStyle]=\"imageWidth\" >\r\n   </div>\r\n    <h1> {{post.title}}</h1>\r\n  </div>\r\n\r\n  <div class=\"el-tags\" style=\" width: 100%;\">\r\n    <div *ngFor=\"let tag of post.departmentsBlog; let j=index\">\r\n      <span (click)=\"filterByTag(tag.departments.departmentName)\"> {{tag.departments.departmentName}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"el-preview\">\r\n    {{post.preview}} ...\r\n  </div>\r\n\r\n  </div>\r\n  <hr>\r\n  <div class=\"el-reactions\"  >\r\n\r\n    <div>\r\n      <app-reaction [post]=\"post\" [index]=\"i\"></app-reaction>\r\n    </div>\r\n\r\n    <div>\r\n      <app-comments [post]=\"post\" ></app-comments>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<app-post [postid]=\"postid\" ></app-post>\r\n\r\n\r\n<br>\r\n\r\n\r\n<a (click)=\"sendMeHome()\"> Go home</a>\r\n"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogComponent = /** @class */ (function () {
    function BlogComponent(location, route, router, _data) {
        var _this = this;
        this.location = location;
        this.route = route;
        this.router = router;
        this._data = _data;
        this.reactionIdsCount = [];
        this.btn = "Add an item";
        this.items = [];
        this.comments = [];
        this.tags = [];
        this.isCommentOpen = [];
        this.commentForm = [];
        this.commentsCount = {};
        this.reactionToggle = [];
        this.currentlyLikePost = [];
        this.canReactLike = [];
        this.imageWidth = { 'width.px': (window.innerWidth - 25) };
        //gets url params
        this.route.params.subscribe(function (res) { return _this.currentId = res.id; });
    }
    BlogComponent.prototype.ngOnChanges = function (changes) {
    };
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        //only on the first, initial load
        this.itemCount = this.items.length;
        this.currentlyLikePost = [];
        var feature = this._data.getBlogItemsAjax(1);
        this._data.getBlogItemsAjax(0).subscribe(function (d) {
            _this._data.getAllTags().subscribe(function (c) {
                feature.subscribe(function (v) {
                    _this.tags = c;
                    _this.blogposts = d;
                    _this.blogFeatures = v;
                    _this.setReactionsAggregate(d);
                    for (var i = 0; i < d.length; i++) {
                        _this.commentsCount[d[i]["blogId"]] = d[i]["commentsCount"];
                        _this.reactionIdsCount[d[i]["blogId"]] = d[i]['reaction']["Like"]["count"];
                    }
                    for (var j = 0; j < v.length; j++) {
                        _this.commentsCount[v[j]["blogId"]] = v[j]["commentsCount"];
                    }
                });
            });
        });
    };
    BlogComponent.prototype.setReactionsAggregate = function (data) {
        var currentProfileId = this._data.profile[0].id;
        var post = [];
        for (var i = 0; i < data.length; i++) {
            //defaults
            var love = { "count": 0, "profiles": [] };
            var like = { "count": 0, "profiles": [] };
            if (this.blogposts) {
                this.blogposts[i]['reaction'] = { "Love": love, "Like": like };
            }
            post['reaction'] = { "Love": love, "Like": like };
            if (data[i]["reactions"] != undefined) {
                for (var j = 0; j < data[i]["reactions"].length; j++) {
                    if (data[i]["reactions"][j] != undefined) {
                        var Name = data[i]["reactions"][j]["reactions"]["name"];
                        var ProfileName = data[i]["reactions"][j]["profile"]["name"];
                        var UserTitle = data[i]["reactions"][j]["profile"]["title"];
                        switch (Name) {
                            case "Love":
                                love.count++;
                                love.profiles[(like.count - 1)] = ProfileName + ", " + UserTitle;
                                break;
                            case "Like":
                                like.count++;
                                like.profiles[(like.count - 1)] = ProfileName + ", " + UserTitle + " - " + data[i]["reactions"][j]["profile"]["id"];
                        }
                        if (this.blogposts) {
                            this.blogposts[i]['reaction'] = { "Love": love, "Like": like };
                        }
                        post['reaction'] = { "Love": love, "Like": like };
                    }
                }
            }
            //modiffies if the current user can react
            for (var k = 0; k < data[i]["reactions"].length; k++) {
                var userId = data[i]["reactions"][k].profileId;
                var name_1 = data[i]["reactions"][k]['reactions'].name;
                if (currentProfileId === userId) {
                    switch (name_1) {
                        case "Like":
                            this.canReactLike[data[i].blogId] = false;
                            this.currentlyLikePost[data[i].blogId] = data[i].blogId;
                            break;
                    }
                }
            }
        }
        return post;
    };
    BlogComponent.prototype.toggleReactionProfiles = function (id) {
        if (this.reactionToggle[id])
            this.reactionToggle[id] = false;
        else {
            this.reactionToggle[id] = true;
        }
    };
    BlogComponent.prototype.updateReaction = function (index, blogId) {
        var _this = this;
        var updateAction = "";
        if (this.currentlyLikePost[blogId] != blogId) {
            //add here
            updateAction = "add";
        }
        else {
            //remove here
            updateAction = "delete";
        }
        this._data.setReaction(2, blogId, updateAction).subscribe(function (data) {
            if (updateAction == "delete") {
                _this.reactionIdsCount[blogId]--;
                _this.currentlyLikePost[blogId] = null;
            }
            if (updateAction == "add") {
                _this.reactionIdsCount[blogId]++;
                _this.currentlyLikePost[blogId] = blogId;
            }
        });
    };
    BlogComponent.prototype.filterByTag = function (tag) {
        var _this = this;
        this._data.getBlogByTagAjax(tag).subscribe(function (d) {
            _this.blogposts = d;
            _this.setReactionsAggregate(d);
        });
    };
    BlogComponent.prototype.getAllBlogs = function () {
        var _this = this;
        this._data.getBlogItemsAjax().subscribe(function (d) {
            _this.blogposts = d;
            _this.setReactionsAggregate(d);
        });
    };
    BlogComponent.prototype.sendMeHome = function () {
        this.router.navigate(['']); //navigates to route name
    };
    BlogComponent.prototype.getBlogPost = function (id, index) {
        var _this = this;
        this.location.replaceState('Portal/post/' + id);
        //sets component parameter
        this.postid = id;
        //change it back to engage another change action
        setTimeout(function () {
            _this.postid = 0;
        }, 0);
        // document.getElementsByTagName("body")[0].style.overflow = "hidden"
    };
    BlogComponent.prototype.getComents = function (blogid) {
        //todo: revisit this, as I don't like how the array keys are created
        var _this = this;
        this._data.getCommentsAjax(blogid).subscribe(function (data) {
            _this.comments[blogid] = data;
            _this.isCommentOpen[blogid] = blogid;
        });
        return true;
    };
    BlogComponent.prototype.submitComment = function (blogid) {
        var _this = this;
        var comment = this.commentForm[blogid];
        this._data.setComment(comment, blogid).subscribe(function (data) {
            _this.getComents(blogid);
            _this.commentsCount[blogid]++;
            _this.commentForm.length = 0;
        });
    };
    BlogComponent.prototype.submitReaction = function (blogid, name, updateAction) {
    };
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-blog',
            template: __webpack_require__("./src/app/blog/blog.component.html"),
            styles: [__webpack_require__("./src/app/blog/blog.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/***/ (function(module, exports) {

module.exports = ".active {color:red}\r\n.chatMessageBox {\r\n\r\n  margin: 5px;\r\n  display: inline-block;\r\n  width: 90%;\r\n  background-color: #f3f6ff;\r\n  padding: 10px;\r\n  border-radius: 20px;\r\n\r\n}\r\n.chatMessage {\r\n  width: 80%;\r\n  display: block;\r\n  float: left;\r\n  margin-top: 10px;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <div>In-house</div>\r\n  <div>Mentions <span *ngIf=\"_data.directNotifications > 0\">{{_data.directNotifications}}</span></div>\r\n\r\n<div class=\"el-chat-messages\">\r\n  <div *ngFor=\"let message of chat\" class=\"chatMessageBox\">\r\n    <div>\r\n      <img class='profile-image' src =\"uploads/{{message.image}}\" >\r\n    </div>\r\n      <div>\r\n\r\n        <span class=\"profile-name\">{{message.name}}</span><span class=\"profile-date\"> {{message.date | date }}</span>\r\n      </div>\r\n\r\n      <div ngClass=\"chatMessage\" [innerHTML]=\" domSanitizer.bypassSecurityTrustHtml(message.message)\" ></div>\r\n    </div>\r\n</div>\r\n  <div style=\"position: relative\">\r\n  <div class=\"el-chat-box\">\r\n    <div>\r\n        <ul class=\"nameslist\" [hidden]=\"showSuggestionBox\">\r\n        <li *ngFor=\"let list of filteredList; let i=index\" tabindex=\"2\"\r\n            (keydown)=\"tabEnter($event, list )\"\r\n            (click)=\"slectClick(list, i)\">\r\n          {{list.name}}\r\n        </li>\r\n        </ul>\r\n      </div>\r\n    <hr>\r\n    <div style=\"padding: 20px;\">\r\n      <div placeholder=\"Message...\" class=\"el-message-input\" tabindex=\"1\" contenteditable=\"true\" (keydown)=\"tabAction($event)\"  (keyup)=\"parseKey($event)\" (keypress)=\"checkforCharacter($event)\"  (input)=\"chatinput=$event.target.innerText\" id=\"message\" name=\"message\" ></div>\r\n    <button contenteditable=\"true\" tabindex=\"3\" (click)=\"processChat()\" (keyup)=\"processChat($event)\" class=\"el-post-button\"> Post </button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aspnet_signalr__ = __webpack_require__("./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interfaces_IChat__ = __webpack_require__("./src/interfaces/IChat.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponent = /** @class */ (function () {
    function ChatComponent(http, _data, domSanitizer) {
        this.http = http;
        this._data = _data;
        this.domSanitizer = domSanitizer;
        this.chat = [];
        this.filteredList = [];
        this.currentSearchString = "";
        this.arrowindex = 0;
        this.messageUsersIds = [];
        this.showSuggestionBox = true;
        this.directNotifications = 0;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var connection = new __WEBPACK_IMPORTED_MODULE_1__aspnet_signalr__["a" /* HubConnectionBuilder */]().withUrl("message").build();
        connection.start().then(function () { return console.log("connected"); });
        connection.on('send', function (data) {
            _this.messageUsersIds = [];
            _this.chat.push(data);
            console.log(data);
            _this.alertOnMentionMessage(data["ids"]);
        });
        this._data.getMessages().subscribe(function (c) {
            for (var i = 0; i < c.length; i++) {
                var chat = new __WEBPACK_IMPORTED_MODULE_5__interfaces_IChat__["a" /* IChat */]();
                chat.image = c[i]['profile']['image'];
                chat.name = c[i]['profile']['name'];
                chat.message = c[i]['message'],
                    chat.date = c[i]['date'],
                    _this.chat.unshift(chat);
            }
        });
        this.currentChatBox = document.getElementById("message");
        setTimeout(function () {
            var msscontaier = document.querySelector(".el-chat-messages");
            msscontaier.scrollTo(0, msscontaier.scrollHeight);
        }, 200);
    };
    ChatComponent.prototype.alertOnMentionMessage = function (ids) {
        var c = this._data.profile;
        var profileId = c[0].internalId;
        for (var i = 0; i < ids.length; i++) {
            if (profileId == ids[i]) {
                this.browserNotification();
                this._data.updateDirectNotifications();
            }
        }
    };
    ChatComponent.prototype.processChat = function () {
        var _this = this;
        //var DateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        var currentTimestamp = new Date().toLocaleTimeString();
        this.getUserIds(this.currentChatBox);
        var message = {
            message: this.currentChatBox.innerHTML,
            name: this._data.profile[0].name,
            image: this._data.profile[0].image,
            date: currentTimestamp,
            ids: this.messageUsersIds
        };
        //let message = "<div><img class='profile-image' src='/uploads/" + this._data.profile[0].image + "' ></div> <div>" + this._data.profile[0].name  + " " +   + " " + currentTimestamp.toLocaleTimeString() + "<br>" + this.currentChatBox.innerHTML + "</div>"
        var body = message;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        var options = {
            headers: headers
        };
        return this.http.post("/api/message", body, options).subscribe(function (c) {
            _this.currentChatBox.innerHTML = '';
            var msscontaier = document.querySelector(".el-chat-messages");
            msscontaier.scrollTo(0, msscontaier.scrollHeight + 1000);
        });
    };
    ChatComponent.prototype.checkforCharacter = function (event) {
        this.atkey = (event.key == "@" || event.code == 64 || event.which == 64) ? "@" : "ddd";
    };
    ChatComponent.prototype.parseKey = function (event) {
        this.filteredList = [];
        //include only alphanumeric
        var regex = new RegExp("^[a-zA-Z0-9]+$");
        var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        //@ symbol
        if (this.atkey == "@" || this.currentSearchString.length > 0) {
            //start recording
            this.showSuggestionBox = false;
            this.UpdateUserList();
            if (regex.test(str)) {
                //we dont want to carry @ symbol
                if (this.atkey == "@") {
                    this.currentSearchString = " ";
                }
                else {
                    this.currentSearchString += event.key;
                }
            }
            //backspace
            if (event.keyCode == 8) {
                this.currentSearchString = this.currentSearchString.substring(0, this.currentSearchString.length - 1);
                if (this.currentSearchString.length == 0) {
                    this.filteredList = [];
                    this.currentSearchString = "";
                    this.showSuggestionBox = true;
                }
                else {
                    this.UpdateUserList();
                }
            }
            //spcebar
            if (event.keyCode == 32) {
                this.updateArrowKeys(event);
                //end recording
                this.currentSearchString = "";
                this.filteredList = [];
            }
        }
    };
    ChatComponent.prototype.UpdateUserList = function () {
        var _this = this;
        this._data.getAllUsersAjax().subscribe(function (u) {
            var searchString = "";
            _this.filteredList = [];
            searchString = _this.currentSearchString.trim().toLowerCase();
            for (var i = 0; i < u.length; i++) {
                var user = u[i].name.toLowerCase();
                if (user.indexOf(searchString) != -1) {
                    //console.log(searchString + " " + user.indexOf(searchString) + " " +u[i].name);
                    _this.filteredList.push({ name: u[i].name, id: u[i].internalId });
                }
            }
        });
    };
    //first action
    ChatComponent.prototype.tabAction = function (event) {
        if (event.keyCode == 13) {
            this.processChat();
            return false;
        }
        this.arrowindex = 0;
        this.atkey = "";
        if (event.keyCode == 9) {
            this.selectedListContent = this.filteredList[0];
            this.listElements = document.querySelectorAll(".nameslist li");
            if (this.listElements.length != 0) {
                this.listElements[0].classList.add("active");
            }
        }
    };
    //on enter
    ChatComponent.prototype.tabEnter = function (event, content) {
        event.preventDefault();
        this.updateArrowKeys(event);
        if (event.key == "Enter") {
            this.updateMessageTextField();
        }
    };
    //arrows up and down
    ChatComponent.prototype.updateArrowKeys = function (event) {
        var currentList = this.filteredList;
        if (this.listElements) {
            for (var i = 0; i < this.listElements.length; i++) {
                this.listElements[i].classList.remove("active");
            }
        }
        if (event.key == "ArrowDown") {
            if (this.arrowindex < (this.listElements.length - 1)) {
                this.arrowindex++;
            }
        }
        if (event.key == "ArrowUp") {
            if (this.arrowindex > 0) {
                this.arrowindex--;
            }
        }
        try {
            if (this.listElements.length > 0) {
                this.selectedListContent = this.filteredList[this.arrowindex];
                var index = this.arrowindex ? this.arrowindex : 0;
                this.listElements[index].classList.add("active");
            }
        }
        catch (e) {
        }
    };
    ChatComponent.prototype.updateMessageTextField = function () {
        var currentSearchString = "@" + this.currentSearchString.trim().toLowerCase();
        var newContent = "<div data-user='" + this.selectedListContent.id + "' style='display: inline' ><span contentEditable=\"false\"><b>&nbsp;" + this.selectedListContent.name + "&nbsp;</b><span></div>";
        var currentChatString = this.currentChatBox.innerHTML;
        this.currentChatBox.innerHTML = currentChatString.replace(currentSearchString, newContent);
        var range = document.createRange();
        var sel = window.getSelection();
        range.selectNodeContents(this.currentChatBox);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
        this.currentChatBox.focus();
        range.detach(); // optimization
        this.currentSearchString = "";
        this.filteredList = [];
    };
    //regular mouse click
    ChatComponent.prototype.slectClick = function (value, index) {
        this.showSuggestionBox = true;
        this.listElements = document.querySelectorAll(".nameslist li");
        this.listElements[index].classList.add("active");
        this.selectedListContent = this.filteredList[index];
        this.updateMessageTextField();
    };
    ChatComponent.prototype.getUserIds = function (message) {
        var g = message.getElementsByTagName("Div");
        for (var i = 0; i < g.length; i++) {
            var users = g[i].dataset.user.trim();
            this.messageUsersIds.push(users);
        }
    };
    ChatComponent.prototype.browserNotification = function () {
        Notification.requestPermission().then(function (result) {
            if ((result === 'denied') || (result === 'default')) {
                alert("denied");
            }
            var options = {
                body: "test mesage"
            };
            var n = new Notification("just testing", options);
        });
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__("./src/app/chat/chat.component.html"),
            styles: [__webpack_require__("./src/app/chat/chat.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'users' }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'noSanitize' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/comments/comments.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"blog.getComents(post.blogId)\" class=\"el-reaction\">\r\n\r\n  <div *ngIf=\"blog.commentsCount[post.blogId] != 0\" >\r\n    <i class='far fa-comments'></i> {{blog.commentsCount[post.blogId]}}\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"blog.commentsCount[post.blogId] == 0\" >\r\n    <i class='far fa-comments'></i>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<div *ngIf=\"blog.comments.length > 0 && blog.isCommentOpen[post.blogId] == post.blogId\" class=\"el-comment-box\">\r\n<div style=\"width: 100%\">\r\n\r\n  <form (ngSubmit)=\"blog.submitComment(post.blogId)\">\r\n    <input type=\"text\" name=\"comment\" [(ngModel)]=\"blog.commentForm[post.blogId]\" placeholder=\"Add a comment...\"/>\r\n    <button type=\"submit\"> Post</button>\r\n  </form>\r\n</div>\r\n\r\n  <div style=\"width: 100%\">\r\n  <div *ngFor=\"let comment of blog.comments[post.blogId];\">\r\n    <ul *ngFor=\"let com of  comment.comments\">\r\n      <li>\r\n\r\n\r\n        <div>\r\n\r\n          <div *ngFor=\"let author of com.author ;\" class=\"el-comment-meta\">\r\n            <img class=\"profile-image\" src=\"/uploads/{{author.image}}\" style=\"width:20px; height: 20px;\">\r\n            <a href=\"mailto:{{author.email}}\"> {{author.name}}, {{author.title}}</a>\r\n            <br>{{com.createdAt | date: 'mediumDate'}}\r\n            <br>\r\n\r\n          </div>\r\n          <div class=\"el-comment\">{{com.comment}}</div>\r\n        </div>\r\n\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_blog_component__ = __webpack_require__("./src/app/blog/blog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(BlogComponent) {
        this.BlogComponent = BlogComponent;
        this.blog = BlogComponent;
    }
    CommentsComponent.prototype.ngOnInit = function () {
    };
    CommentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comments',
            template: __webpack_require__("./src/app/comments/comments.component.html"),
            styles: [__webpack_require__("./src/app/comments/comments.component.css")],
            inputs: ["post"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__blog_blog_component__["a" /* BlogComponent */]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/counter/counter.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p>Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button (click)=\"incrementCounter()\">Increment</button>\r\n\r\n\r\n<nav>\r\n  You need to speciffy parent route and oultlet name in the routes.module\r\n  <a [routerLink]=\"[{ outlets: { here: ['fetch-data'] } }]\">Data</a>\r\n\r\n</nav>\r\n\r\n\r\n\r\n<div style=\"background-color: aqua\">\r\njjj\r\n  <router-outlet name=\"here\"></router-outlet>\r\nkkk\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CounterComponent = /** @class */ (function () {
    function CounterComponent(router) {
        this.router = router;
        this.currentCount = 0;
    }
    CounterComponent.prototype.ngOnInit = function () {
    };
    CounterComponent.prototype.incrementCounter = function () {
        this.currentCount++;
    };
    CounterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-counter-component',
            template: __webpack_require__("./src/app/counter/counter.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this._url = "/api/Blogs";
        this.directNotifications = 0;
    }
    DataService.prototype.getBlogItemsAjax = function (feature) {
        if (feature === void 0) { feature = 0; }
        return this.http.get(this._url + "?feature=" + feature);
    };
    DataService.prototype.getBlogByTagAjax = function (filter) {
        return this.http.get(this._url + "?tag=" + filter);
    };
    DataService.prototype.getBlogPostAjax = function (id) {
        return this.http.get(this._url + "/" + id);
    };
    DataService.prototype.getAllTags = function () {
        return this.http.get(this._url + "/" + "Tags");
    };
    DataService.prototype.getCommentsAjax = function (blogid) {
        return this.http.get(this._url + "/" + "Comments/" + blogid);
    };
    DataService.prototype.getCurrentProfileAjax = function () {
        return this.http.get("/api/Profile/");
    };
    DataService.prototype.getAllUsersAjax = function () {
        return this.http.get("/api/message/users");
    };
    DataService.prototype.setComment = function (comment, blogId) {
        var body = JSON.stringify(comment);
        //let body = "comment=" + comment;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        var options = {
            headers: headers
        };
        return this.http.post("/api/Blogs/create/comment/" + blogId, body, options);
    };
    DataService.prototype.setReaction = function (reactionId, blogId, updateAction) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        var options = {
            headers: headers
        };
        return this.http.post("/api/Reaction/Update/" + updateAction + "/" + reactionId + "/" + blogId, options);
    };
    DataService.prototype.getMessages = function () {
        return this.http.get("/api/messages");
    };
    DataService.prototype.updateDirectNotifications = function () {
        this.directNotifications++;
    };
    DataService.prototype.getBlogItems = function () {
        return [
            { "title": "hers the title", "content": "content for first enty" },
            { "title": "another enty", "content": "content for second enty" },
        ];
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/feature/feature.component.css":
/***/ (function(module, exports) {

module.exports = ".carusel-item {\r\n\r\n  display: inline-block;\r\n  /*width: 700px;*/\r\n  /*overflow: hidden;*/\r\n  overflow-x: scroll;\r\n  overflow-y: hidden;\r\n  scroll-snap-align: center;\r\n  position: relative;\r\n}\r\n\r\n.carusel-container {\r\n\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.carusel {\r\n\r\n  height: 320px;\r\n  /*width: 700px;*/\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  margin: 0 auto;\r\n  overflow-x: scroll;\r\n  overflow-y: hidden;\r\n  background-color: white;\r\n  border: 1px solid lightgrey;\r\n  -ms-scroll-snap-type: x mandatory;\r\n      scroll-snap-type: x mandatory;\r\n\r\n\r\n}\r\n\r\n.carusel h1 {\r\n  padding :0;\r\n  margin: 0;\r\n  font-size: 20px;\r\n}\r\n\r\n.carusel-content {\r\n\r\n  padding:10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/feature/feature.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"carusel\">\r\n  <div class=\"carusel-container\">\r\n<div *ngFor=\"let post of posts; let i=index\">\r\n  <div *ngIf=\"post.feature == 1\">\r\n      <div class=\"carusel-item\" [attr.data-item]=\"i\">\r\n        <img src=\"/uploads/{{post.coverImage}}\"  [ngStyle]=\"imageWidth\">\r\n\r\n       <div class=\"carusel-content\">\r\n        <h1>\r\n          <div (click)=\"blog.getBlogPost(post.blogId)\"> {{post.title}}</div>\r\n        </h1>\r\n        <div>{{post.preview}}</div>\r\n\r\n      </div></div>\r\n\r\n    </div>\r\n  </div>\r\n  </div>\r\n  <div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--<span (click)=\"nav('prev')\" >Prev</span>-->\r\n<!--<span (click)=\"nav('next')\">Next</span>-->\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/feature/feature.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_blog_component__ = __webpack_require__("./src/app/blog/blog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeatureComponent = /** @class */ (function () {
    function FeatureComponent(BlogComponent) {
        this.BlogComponent = BlogComponent;
        this.curretIndex = 1;
        this.currentPos = 0;
        this.imageWidth = { 'width.px': (window.innerWidth) };
        this.blog = this.BlogComponent;
    }
    FeatureComponent.prototype.ngOnInit = function () {
        this.caruselItem = document.getElementsByClassName("carusel")[0];
        this.caruselcontainer = this.caruselItem.querySelectorAll(".carusel-container")[0];
        this.runslideshow();
    };
    FeatureComponent.prototype.nav = function (direction) {
        var caruseleItems = this.caruselItem.querySelectorAll(".carusel-item");
        var left = 0;
        if (direction == "next") {
            if (this.curretIndex != caruseleItems.length) {
                left = (this.currentPos - 100);
                this.caruselItem.scrollBy({
                    top: 0,
                    left: window.innerWidth,
                    behavior: 'smooth'
                });
                console.log(this.imageWidth);
                // this.caruselcontainer.style.left = left + "%";
                this.currentPos = left;
                this.curretIndex++;
            }
        }
        else {
            if ((this.curretIndex) != 1) {
                left = (this.currentPos + 100);
                this.caruselItem.scrollBy({
                    top: 0,
                    left: -window.innerWidth,
                    behavior: 'smooth'
                });
                // this.caruselcontainer.style.left = left + "%";
                this.currentPos = left;
                this.curretIndex--;
            }
        }
    };
    FeatureComponent.prototype.runslideshow = function () {
        var _this = this;
        var index = 1;
        setInterval(function () {
            var count = _this.caruselItem.querySelectorAll(".carusel-item").length;
            if (index != count) {
                _this.caruselItem.scrollBy({
                    top: 0,
                    left: (window.innerWidth),
                    behavior: 'smooth'
                });
                index++;
            }
            else {
                _this.caruselItem.scrollBy({
                    top: 0,
                    left: -(window.innerWidth * count),
                    behavior: 'smooth'
                });
                index = 1;
            }
        }, 7000);
    };
    FeatureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-feature',
            template: __webpack_require__("./src/app/feature/feature.component.html"),
            styles: [__webpack_require__("./src/app/feature/feature.component.css")],
            inputs: ["posts"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__blog_blog_component__["a" /* BlogComponent */]])
    ], FeatureComponent);
    return FeatureComponent;
}());



/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table' *ngIf=\"forecasts\">\r\n  <thead>\r\n    <tr>\r\n      <th>Date</th>\r\n      <th>Temp. (C)</th>\r\n      <th>Temp. (F)</th>\r\n      <th>Summary</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let forecast of forecasts\">\r\n      <td>{{ forecast.dateFormatted }}</td>\r\n      <td>{{ forecast.temperatureC }}</td>\r\n      <td>{{ forecast.temperatureF }}</td>\r\n      <td>{{ forecast.summary }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var FetchDataComponent = /** @class */ (function () {
    function FetchDataComponent(http, baseUrl) {
        var _this = this;
        http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(function (result) {
            _this.forecasts = result;
        }, function (error) { return console.error(error); });
    }
    FetchDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fetch-data',
            template: __webpack_require__("./src/app/fetch-data/fetch-data.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('BASE_URL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], String])
    ], FetchDataComponent);
    return FetchDataComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 50px\">\r\n<div class=\"el-head\">\r\n\r\n<div *ngFor=\"let p of profile\">\r\n\r\n  <div style=\"float: left; margin-right:15px;\"><img src=\"/uploads/{{p.image}}\" class=\"profile-image\" style=\"width:30px; height:30px;\"></div>\r\n  <div style=\"float: left;  width: 70%\"><h1 class=\"logo\">elate</h1></div>\r\n  <div style=\"float: right; margin-right:15px;  position: relative;\" class=\"el-message-icon\"><i class=\"far fa-comment-dots\" (click)=\"scrollToMessages()\"></i>\r\n    <div class=\"el-notification-count\" (click)=\"scrollToMessages()\" *ngIf=\"_data.directNotifications\">\r\n     <div class=\"el-notification-number\" > {{_data.directNotifications}} </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_data) {
        this._data = _data;
        this.clicked = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.getCurrentProfileAjax().subscribe(function (d) {
            _this._data.profile = d;
            _this.setProfile();
        });
    };
    HeaderComponent.prototype.setProfile = function () {
        this.profile = this._data.profile;
    };
    HeaderComponent.prototype.scrollToMessages = function () {
        console.log("asdasd");
        var container = document.getElementsByTagName("body")[0];
        var direction = 0;
        if (this.clicked) {
            direction = 2000;
            this.clicked = false;
        }
        else {
            direction = -2000;
            this.clicked = true;
        }
        container.scrollBy({
            top: 0,
            left: direction,
            behavior: 'smooth'
        });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"el-contents\">\r\n\r\n  <div class=\"el-leftpanel\">\r\n   <app-blog></app-blog>\r\n  </div>\r\n\r\n  <div class=\"el-rightpanel\">\r\n   <app-chat></app-chat>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var container = document.querySelector(".el-contents");
        var leftpanel = document.querySelector(".el-leftpanel");
        var rightpanel = document.querySelector(".el-rightpanel");
        var mssgs = document.querySelector(".el-chat-messages");
        mssgs.style.height = (windowHeight - 120) + "px";
        container.style.width = (windowWidth * 2) + "px";
        container.style.height = windowHeight + "px";
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/***/ (function(module, exports) {

module.exports = "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\n\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse' [attr.aria-expanded]='isExpanded' (click)='toggle()'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]='[\"/\"]'>ElatePortal</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse' [ngClass]='{ \"in\": isExpanded }'>\r\n            <ul class='nav navbar-nav'>\r\n              <li [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n                <a [routerLink]='[\"/blog/45\"]' (click)='collapse()'>\r\n                  <span class='glyphicon glyphicon-home'></span> Blog\r\n                </a>\r\n              </li>\r\n\r\n                <li [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n                    <a [routerLink]='[\"/\"]' (click)='collapse()'>\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n\r\n                  <a [routerLink]=\"['/counter'] \"  (click)='collapse()' >\r\n\r\n\r\n                        <span class='glyphicon glyphicon-education'></span> Counter\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]='[\"link-active\"]'>\r\n                    <a [routerLink]='[\"/fetch-data\"]' (click)='collapse()'>\r\n                        <span class='glyphicon glyphicon-th-list'></span> Fetch data\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
        this.isExpanded = false;
    }
    NavMenuComponent.prototype.collapse = function () {
        this.isExpanded = false;
    };
    NavMenuComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    NavMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-menu',
            template: __webpack_require__("./src/app/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__("./src/app/nav-menu/nav-menu.component.css")]
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.mainPost {\r\n\r\n  padding: 40px;\r\n  background-color: white;\r\n  height: 80%;\r\n  margin-top:50px;\r\n  overflow: scroll;\r\n}\r\n\r\n\r\n.exit-post {\r\n  position: absolute;\r\n  left: 0;\r\n  width: 100%;\r\n  background-color: #f1f4f7;\r\n  padding: 10px;\r\n  color: #5a5a5a;\r\n  top: 40px;\r\n\r\n}\r\n\r\n\r\n.author {\r\n\r\n  width: 100%;\r\n  padding:20px 0\r\n\r\n}\r\n\r\n\r\n.el-reactions-post {\r\n\r\n\r\n  font-size: 14px;\r\n  min-height: 20px;\r\n\r\n\r\n}\r\n\r\n\r\n.el-reaction-post {\r\n\r\n  float:right;\r\n  margin: 0 12px\r\n\r\n}\r\n\r\n\r\n/*::ng-deep body{ overflow: hidden !important;}*/\r\n"

/***/ }),

/***/ "./src/app/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div *ngIf=\"postActive\">\r\n\r\n\r\n<div style=\"background-color: rgba(255, 255, 255, 0.8); position: fixed;\r\n    top: 0;\r\n    height: 100%;\r\n    width: 100%;\"  >\r\n\r\n\r\n\r\n  <div class=\"mainPost\">\r\n    <div class=\"exit-post\" (click)=\"back($event)\"><i class=\"fas fa-times\" id=\"backgroundElement\" ></i>\r\n\r\n    </div>\r\n\r\n    <div *ngFor=\"let post of blogpost; \" >\r\n\r\n      <h1>{{post.title}}</h1>\r\n\r\n\r\n\r\n\r\n      <div [innerHTML] =\"post.content\">\r\n\r\n      </div>\r\n      <br>\r\n      <hr>\r\n\r\n      <div class=\"author\">\r\n        <div *ngFor=\"let author of post.author\" >\r\n          <img class=\"profile-image\" style=\"width:30px; height:30px;\" src=\"/uploads/{{author.image}}\">\r\n\r\n\r\n          <strong> {{author.name}}</strong>, <span class=\"el-user-title\" > {{author.title}}</span>\r\n        </div>\r\n\r\n        <small>{{post.createdAt | date: 'dd/MM/yyyy'}}</small>\r\n      </div>\r\n\r\n\r\n      <div class=\"el-tags\">\r\n        <div *ngFor=\"let tag of post.departmentsBlog\" >\r\n\r\n          <span>{{ tag.departments.departmentName}}</span>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"el-reactions-post\">\r\n\r\n        <div>\r\n          <app-reaction [post]=\"post\" [index]=\"index\"></app-reaction>\r\n        </div>\r\n\r\n        <div>\r\n          <app-comments [post]=\"post\" ></app-comments>\r\n        </div>\r\n\r\n      </div>\r\n      <br>\r\n      <hr>\r\n    </div>\r\n\r\n\r\n</div>\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blog_blog_component__ = __webpack_require__("./src/app/blog/blog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostComponent = /** @class */ (function () {
    function PostComponent(BlogComponent, location, route, _data, router) {
        this.BlogComponent = BlogComponent;
        this.location = location;
        this.route = route;
        this._data = _data;
        this.router = router;
        this.blogpost = [];
        this.postActive = false;
        this.blog = BlogComponent;
    }
    PostComponent.prototype.ngOnChanges = function (changes) {
        var postid = changes.postid;
        this.postid = postid.currentValue;
        if (postid.currentValue) {
            this.getBlogPost(postid.currentValue);
        }
    };
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getBlogPost(params.id);
        });
        this.blog.currentlyLikePost = [];
    };
    PostComponent.prototype.back = function (event) {
        if (event.target.id == "backgroundElement") {
            this.postActive = false;
            this.location.replaceState('Portal');
        }
    };
    PostComponent.prototype.getBlogPost = function (postid) {
        var _this = this;
        this._data.getBlogPostAjax(postid).subscribe(function (c) {
            _this._data.getCommentsAjax(postid).subscribe(function (f) {
                _this.blogpost = c;
                _this.comments = f;
                if (c.length > 0) {
                    _this.postActive = true;
                    _this.blogpost[0]["reaction"] = _this.BlogComponent.setReactionsAggregate(c)['reaction'];
                    _this.blog.reactionIdsCount[_this.blogpost[0]["blogId"]] = _this.blogpost[0]["reaction"]["Like"]["count"];
                    document.getElementsByTagName("body")[0].style.overflow = "hidden";
                }
                _this.blog.post = _this.blogpost;
            });
        });
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post',
            template: __webpack_require__("./src/app/post/post.component.html"),
            styles: [__webpack_require__("./src/app/post/post.component.css")],
            inputs: ['postid', 'index']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__blog_blog_component__["a" /* BlogComponent */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/reaction/reaction.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reaction/reaction.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"el-reaction\" >\r\n<span (click)=\"blog.updateReaction(index,post.blogId, 2)\"> <i class=\"far fa-thumbs-up\"></i></span>\r\n\r\n<span (click)=\"blog.toggleReactionProfiles(post.blogId)\">\r\n\r\n          <span *ngIf=\"blog.reactionIdsCount[post.blogId] !=0\">{{blog.reactionIdsCount[post.blogId]}}</span>\r\n </span>\r\n\r\n<!--        Love\r\n      <span (click)=\"toggleReactionProfiles(post.blogId)\">\r\n            <span *ngIf=\"post.reaction && post.reaction.Love.count !=0\">{{post.reaction.Love.count}}</span>\r\n\r\n      </span>-->\r\n\r\n<div *ngIf=\"blog.reactionToggle[post.blogId] == true\">\r\n  <!--<div *ngFor=\"let profile of post.reaction.Like.profiles\">-->\r\n    <!--<ul>-->\r\n      <!--<li>{{profile}} &#45;&#45;LIKE&#45;&#45; </li>-->\r\n    <!--</ul>-->\r\n  <!--</div>-->\r\n\r\n  <!--          <div *ngFor=\"let profile of post.reaction.Love.profiles\">\r\n              <ul>\r\n                <li>{{profile}} &#45;&#45;LOVE&#45;&#45; </li>\r\n              </ul>\r\n\r\n            </div>-->\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/reaction/reaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_blog_component__ = __webpack_require__("./src/app/blog/blog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReactionComponent = /** @class */ (function () {
    function ReactionComponent(BlogComponent) {
        this.BlogComponent = BlogComponent;
        this.blog = this.BlogComponent;
    }
    ReactionComponent.prototype.ngOnInit = function () {
    };
    ReactionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reaction',
            template: __webpack_require__("./src/app/reaction/reaction.component.html"),
            styles: [__webpack_require__("./src/app/reaction/reaction.component.css")],
            inputs: ['post', 'index']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__blog_blog_component__["a" /* BlogComponent */]])
    ], ReactionComponent);
    return ReactionComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true
};


/***/ }),

/***/ "./src/interfaces/IChat.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IChat; });
var IChat = /** @class */ (function () {
    function IChat() {
    }
    return IChat;
}());



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getBaseUrl"] = getBaseUrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])(providers).bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map