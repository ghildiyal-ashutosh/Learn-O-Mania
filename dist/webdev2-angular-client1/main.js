(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-homepage/admin.component.css":
/*!****************************************************!*\
  !*** ./src/app/admin-homepage/admin.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-homepage/admin.component.html":
/*!*****************************************************!*\
  !*** ./src/app/admin-homepage/admin.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <span class = \"float-left btn-group\" >\n     <button class=\"btn \">\n      <a routerLink=\"/profile\"> Profile</a>\n    </button>\n\n    <button class=\"btn \">\n      <a routerLink=\"/\"> WhiteBoard</a>\n    </button>\n    <button (click)= \"logout()\"\n      class=\"btn \">\n       Log-Out\n    </button>\n\n  </span>\n  <br/>\n  <br/>\n  <div [hidden] = \"loginStatus\">\n  <h1> Welcome Admin !!! </h1>\n\n      <div class = \"row\">\n        <div class = \"col-8\">\n        <ul class =\"list-group\">\n          <li class = \"list-group-item active\">\n            Courses\n          </li>\n          <br/>\n          <li\n            [ngClass]= \"{'active': course.id === selectedCourse.id}\"\n            (click) = \"selectCourse(course)\"\n              *ngFor = \"let course of courses\"\n              class = \"list-group-item\">\n            {{course.title}}\n            <span class = \"float-right\">\n\n                <button class = \"btn btn-block \">\n                 <a routerLink = \"/course/{{course.id}}/section\">\n                   Update Course\n                 </a>\n              </button>\n\n            </span>\n\n          </li>\n        </ul>\n      </div>\n\n        <div class = \"col-4\">\n          <ul class =\"list-group\">\n            <li class = \"list-group-item active\">\n              Sections\n            </li>\n            <br/>\n            <li\n              [ngClass]= \"{'active': section._id === selectedSection._id}\"\n                (click) = \"selectSection(section)\"\n                *ngFor = \"let section of sections\"\n                class = \"list-group-item\">\n              {{section.title}}\n            </li>\n          </ul>\n        </div>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin-homepage/admin.component.ts":
/*!***************************************************!*\
  !*** ./src/app/admin-homepage/admin.component.ts ***!
  \***************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/course.service.client */ "./src/services/course.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/section.service.client */ "./src/services/section.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = /** @class */ (function () {
    function AdminComponent(courseService, sectionService, userService, router) {
        this.courseService = courseService;
        this.sectionService = sectionService;
        this.userService = userService;
        this.router = router;
        this.selectedCourse = {};
        this.courseId = '';
        this.sections = [];
        this.courses = [];
        this.selectedSection = {};
        this.loginStatus = true;
    }
    AdminComponent.prototype.selectCourse = function (course) {
        var _this = this;
        this.selectedCourse = course;
        this.courseId = course.id;
        this.sectionService
            .findSectionsForCourse(this.courseId)
            .then(function (sections) { return _this.sections = sections; });
    };
    AdminComponent.prototype.selectSection = function (section) {
        this.selectedSection = section;
    };
    AdminComponent.prototype.logout = function () {
        var _this = this;
        this.loginStatus = true;
        this.userService.logOut()
            .then(function () { return _this.router.navigate(['login']); });
    };
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .currentUser()
            .then(function (user) {
            if (user !== null) {
                _this.loginStatus = false;
                _this.courseService
                    .findAllCourses()
                    .then(function (courses) { return _this.courses = courses; });
            }
            else {
                alert('Admin Rights Revoked');
            }
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin-homepage/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin-homepage/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'webdev2-angular-client1';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./white-board/white-board.component */ "./src/app/white-board/white-board.component.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/course.service.client */ "./src/services/course.service.client.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/user.service.client */ "./src/services/user.service.client.ts");
/* harmony import */ var _sections_sections_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/sections.component */ "./src/app/sections/sections.component.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/section.service.client */ "./src/services/section.service.client.ts");
/* harmony import */ var _enrollment_enrollment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./enrollment/enrollment.component */ "./src/app/enrollment/enrollment.component.ts");
/* harmony import */ var _admin_homepage_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-homepage/admin.component */ "./src/app/admin-homepage/admin.component.ts");
/* harmony import */ var _course_list_course_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./course-list/course-list.component */ "./src/app/course-list/course-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_4__["WhiteBoardComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _sections_sections_component__WEBPACK_IMPORTED_MODULE_11__["SectionsComponent"],
                _enrollment_enrollment_component__WEBPACK_IMPORTED_MODULE_13__["EnrollmentComponent"],
                _admin_homepage_admin_component__WEBPACK_IMPORTED_MODULE_14__["AdminComponent"],
                _course_list_course_list_component__WEBPACK_IMPORTED_MODULE_15__["CourseListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"]
            ],
            providers: [
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_10__["UserServiceClient"],
                _services_course_service_client__WEBPACK_IMPORTED_MODULE_5__["CourseServiceClient"],
                _services_section_service_client__WEBPACK_IMPORTED_MODULE_12__["SectionServiceClient"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _sections_sections_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/sections.component */ "./src/app/sections/sections.component.ts");
/* harmony import */ var _enrollment_enrollment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enrollment/enrollment.component */ "./src/app/enrollment/enrollment.component.ts");
/* harmony import */ var _admin_homepage_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-homepage/admin.component */ "./src/app/admin-homepage/admin.component.ts");
/* harmony import */ var _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./white-board/white-board.component */ "./src/app/white-board/white-board.component.ts");
/* harmony import */ var _course_list_course_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./course-list/course-list.component */ "./src/app/course-list/course-list.component.ts");









var appRoutes = [
    { path: 'courses', component: _course_list_course_list_component__WEBPACK_IMPORTED_MODULE_8__["CourseListComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: 'course/:courseId/section', component: _sections_sections_component__WEBPACK_IMPORTED_MODULE_4__["SectionsComponent"] },
    { path: 'enrollment', component: _enrollment_enrollment_component__WEBPACK_IMPORTED_MODULE_5__["EnrollmentComponent"] },
    { path: 'admin', component: _admin_homepage_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: '**', component: _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_7__["WhiteBoardComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_7__["WhiteBoardComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/course-list/course-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/course-list/course-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course-list/course-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/course-list/course-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\"  ng-app=\"DemoApp\" ng-controller=\"DemoController\">\n\n  <h1> Course-Information-Page</h1>\n\n\n  <ul class = \"list-group\">\n    <li class=\"list-group-item active\">\n      Courses\n    </li>\n    <br/>\n    <li\n      class=\"list-group-item\"\n      [ngClass] = \"{'active': course.id === selectedCourse.id}\"\n      (click)= \"selectCourse(course)\"\n      *ngFor = \"let course of courses\">\n\n       {{course.title}}\n    </li>\n\n  </ul>\n  <br/>\n\n<div class = \"row\">\n  <div [hidden] = \"!moduleStatus\" class = \"col-4\">\n\n\n\n      <ul class = \"list-group\">\n        <li class=\"list-group-item active\">\n          <h2>  Modules of {{selectedCourse.title}} </h2>\n        </li>\n        <br/>\n        <li\n          class=\"list-group-item\"\n          [ngClass] = \"{'active': module.id === selectedModule.id}\"\n          (click)= \"selectModule(module)\"\n          *ngFor = \"let module of selectedCourse.module\">\n\n         {{module.title}}\n        </li>\n\n      </ul>\n\n    </div>\n\n\n\n  <div class = \"col-8\">\n    <div [hidden] = \"!lessonStatus\">\n    <h3>Lessons of {{selectedModule.title}}</h3>\n    <ul class = \"nav nav-tabs\">\n      <li\n        [ngClass] = \"{'active': lesson.id === selectedLesson.id}\"\n        (click) = \"selectLesson(lesson)\"\n        *ngFor = \"let lesson of selectedModule.lessons\"\n          class = \"nav-link\">\n        {{lesson.title}}\n      </li>\n    </ul>\n    </div>\n\n\n\n    <div [hidden] = \"!widgetStatus\">\n      <h4> Content of {{selectedLesson.title}}</h4>\n      <br/>\n      <div  (click)=\"selectWidget(widget)\"\n        *ngFor = \"let widget of selectedLesson.widgets\">\n\n\n        <div [ngSwitch] = \"widget.widgetType\">\n\n\n          <div *ngSwitchCase= \"'Heading Widget'\">\n            <div [ngSwitch] = \"widget.size\">\n              <h1 *ngSwitchCase = \"'4'\"> {{widget.text}} </h1>\n              <h2 *ngSwitchCase = \"'3'\"> {{widget.text}} </h2>\n              <h3 *ngSwitchCase = \"'2'\"> {{widget.text}} </h3>\n              <h4 *ngSwitchCase = \"'1'\"> {{widget.text}} </h4>\n            </div>\n          </div>\n\n\n          <div *ngSwitchCase= \"'Link Widget'\">\n            <a href = \"{{widget.link}}\"> {{widget.text}}</a>\n\n          </div>\n\n          <br/>\n\n          <div *ngSwitchCase = \"'List Widget'\">\n\n            <div [ngSwitch] = \"widget.layout\">\n\n\n\n\n               <ol *ngSwitchCase = \"'ol'\">\n\n                <li\n                  *ngFor = \"let item of widget.text.split('\\n')\">\n                  {{item}}\n                </li>\n               </ol>\n\n\n\n              <ul\n                *ngSwitchCase = \"'ul'\">\n\n                <li\n                  *ngFor = \"let item of widget.text.split('\\n')\">\n                  {{item}} </li>\n              </ul>\n            </div>\n\n\n\n          </div>\n          <br/>\n\n          <div *ngSwitchCase= \"'Paragraph Widget'\">\n            <p>  {{widget.text}}</p>\n          </div>\n          <br/>\n\n\n          <div *ngSwitchCase= \"'Image Widget'\">\n\n            <img src=\"{{widget.link}}\"/>\n\n          </div>\n\n          <br/>\n\n\n\n\n\n        </div>\n\n\n\n      </div>\n\n    </div>\n  </div>\n\n\n\n\n</div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/course-list/course-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/course-list/course-list.component.ts ***!
  \******************************************************/
/*! exports provided: CourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListComponent", function() { return CourseListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/course.service.client */ "./src/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseListComponent = /** @class */ (function () {
    function CourseListComponent(courseService) {
        this.courseService = courseService;
        this.courses = [];
        this.selectedCourse = { id: -1, module: [], title: '' };
        this.modules = [];
        this.selectedModule = { id: -1, lessons: [], title: '' };
        this.lessons = [];
        this.selectedLesson = { widgets: [], title: '' };
        this.widgets = [];
        this.selectedWidget = {};
        this.moduleStatus = false;
        this.lessonStatus = false;
        this.widgetStatus = false;
    }
    CourseListComponent.prototype.selectCourse = function (course) {
        this.selectedCourse = course;
        this.modules = this.selectedCourse.module;
        this.moduleStatus = true;
    };
    CourseListComponent.prototype.selectModule = function (module) {
        this.selectedModule = module;
        this.lessonStatus = true;
        this.lessons = this.selectedModule.lessons;
    };
    CourseListComponent.prototype.selectLesson = function (lesson) {
        this.selectedLesson = lesson;
        console.log(this.selectedLesson);
        this.widgetStatus = true;
        this.widgets = this.selectedLesson.widgets;
    };
    CourseListComponent.prototype.selectWidget = function (widget) {
        this.selectedWidget = widget;
        console.log(widget);
    };
    CourseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService
            .findAllCourses()
            .then(function (courses) { return _this.courses = courses; });
    };
    CourseListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-list',
            template: __webpack_require__(/*! ./course-list.component.html */ "./src/app/course-list/course-list.component.html"),
            styles: [__webpack_require__(/*! ./course-list.component.css */ "./src/app/course-list/course-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"]])
    ], CourseListComponent);
    return CourseListComponent;
}());



/***/ }),

/***/ "./src/app/enrollment/enrollment.component.css":
/*!*****************************************************!*\
  !*** ./src/app/enrollment/enrollment.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/enrollment/enrollment.component.html":
/*!******************************************************!*\
  !*** ./src/app/enrollment/enrollment.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container-fluid\">\n\n  <h2>Enrollments</h2>\n  <br/>\n\n  <div class = row>\n    <div class = \"col-4\">\n<ul class=\"list-group\">\n  <li class = \"list-group-item active\">\n    Courses\n  </li>\n  <br/>\n\n<li\n  [ngClass] = \"{'active' : course.id === selectedCourse.id}\"\n  (click)= \"selectCourse(course)\"\n  *ngFor = \"let course of courses\" class=\"list-group-item\">\n\n   {{course.title}}\n</li>\n</ul>\n    </div>\n\n    <div class = \"col-8\" [hidden]=\"sectionStatus\">\n\n      <ul class=\"list-group\">\n        <li class = \"list-group-item active\">\n          Sections\n        </li>\n        <br/>\n\n        <li\n          *ngFor = \"let section of sections\" class=\"list-group-item\">\n          {{section.title}}\n          <span class=\"float-right\">\n            <button  [hidden]=\"viewStatus\"\n              (click)=\"enrollSection(section)\"\n             class = \"btn btn-primary \"> Enroll</button>\n  </span>\n\n        </li>\n      </ul>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/enrollment/enrollment.component.ts":
/*!****************************************************!*\
  !*** ./src/app/enrollment/enrollment.component.ts ***!
  \****************************************************/
/*! exports provided: EnrollmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentComponent", function() { return EnrollmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/section.service.client */ "./src/services/section.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/course.service.client */ "./src/services/course.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnrollmentComponent = /** @class */ (function () {
    function EnrollmentComponent(sectionService, courseService, userService) {
        this.sectionService = sectionService;
        this.courseService = courseService;
        this.userService = userService;
        this.courses = [];
        this.selectedCourse = { id: '' };
        this.sections = [];
        this.selectedSection = {};
        this.sectionStatus = true;
        this.viewStatus = true;
    }
    EnrollmentComponent.prototype.selectCourse = function (course) {
        var _this = this;
        this.selectedCourse = course;
        this.sectionStatus = false;
        this.sectionService
            .findSectionsForCourse(course.id)
            .then(function (sections) { return _this.sections = sections; });
    };
    EnrollmentComponent.prototype.selectSection = function (section) {
        this.selectedSection = section;
    };
    EnrollmentComponent.prototype.enrollSection = function (section) {
        this.selectedSection = section;
        this.sectionService
            .enrollSection(section._id)
            .then(function (response) {
            if (response !== null) {
                alert('Enrolled in' + '  ' + section.title);
            }
            else
                alert('You are not logged in');
        });
    };
    EnrollmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.currentUser()
            .then(function (user) {
            if (user !== null) {
                _this.viewStatus = false;
            }
        });
        this.courseService
            .findAllCourses()
            .then(function (courses) { return _this.courses = courses; });
    };
    EnrollmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enrollment',
            template: __webpack_require__(/*! ./enrollment.component.html */ "./src/app/enrollment/enrollment.component.html"),
            styles: [__webpack_require__(/*! ./enrollment.component.css */ "./src/app/enrollment/enrollment.component.css")]
        }),
        __metadata("design:paramtypes", [_services_section_service_client__WEBPACK_IMPORTED_MODULE_1__["SectionServiceClient"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__["CourseServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"]])
    ], EnrollmentComponent);
    return EnrollmentComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" />\n\n<div class=\"container-fluid\">\n<h2> Log-In </h2>\n\n\n  <div class=\"form-group\">\n    <label for=\"usernameFld\">Email address</label>\n    <input [(ngModel)] = \"username\"\n           type=\"text\" class=\"form-control\" id=\"usernameFld\"  placeholder=\"Enter username\">\n\n  </div>\n  <div class=\"form-group\">\n    <label for=\"passwordFld\">Password</label>\n    <input  [(ngModel)] = \"password\"\n            type=\"password\" class=\"form-control\" id=\"passwordFld\" placeholder=\"Password\">\n  </div>\n\n  <button  (click)= \"logIn(username,password)\"\n    type=\"submit\" class=\"btn btn-primary\" id = \"submitBtn\">Submit</button>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.logIn = function (username, password) {
            var user = { username: username, password: password };
            _this.userService.logIn(user)
                .then(function (user1) {
                if (user1._id === 0) {
                    alert('Log In fail Try again');
                }
                else {
                    _this.router.navigate(['profile']);
                }
            });
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class =\"container-fluid\" >\n  <span class = \"float-right\">\n    <div class =\"btn-group\">\n      <button (click)= \"logout()\" class=\"btn\">\n       Log-Out\n      </button>\n      <button class=\"btn\">\n      <a routerLink='/'> Home </a>\n      </button>\n       <button class=\"btn\" [hidden]=\"adminStatus\">\n         <a routerLink = '/admin'>Admin</a>\n       </button>\n    </div>\n  </span>\n\n\n  <br/>\n  <br/>\n\n<div [hidden]=\"adminStatus\">\n<h2> Welcome {{currentUser.username}} !!!</h2>\n\n  <label for = \"inputFld1\"> Username </label>\n  <input [(ngModel)]=\"username\"\n         placeholder=\"username\"\n         class=\"form-control\"\n          id = \"inputFld1\"/>\n\n  <label for = \"inputFld2\" > Firstname </label>\n  <input [(ngModel)]=\"firstName\"\n         placeholder=\"First Name\"\n         class=\"form-control\"\n         id = \"inputFld2\"/>\n\n  <label for = \"inputFld3\" >Last Name </label>\n  <input [(ngModel)]=\"lastName\"\n         placeholder=\"LastName\"\n         class=\"form-control\"\n         id = \"inputFld3\"/>\n\n  <label for = \"inputFld4\"> Email </label>\n  <input [(ngModel)]=\"email\"\n         placeholder=\"Email\"\n         class=\"form-control\"\n         id = \"inputFld4\"\n         type = \"email\"/>\n\n  <label for = \"inputFld5\"> Contact </label>\n  <input [(ngModel)]=\"contact\"\n         placeholder=\"Contact\"\n         class=\"form-control\"\n         id = \"inputFld5\"\n         type = \"number\"/>\n</div>\n  <br/>\n\n  <button class = \"form-control btn btn-primary\" (click)=\"update()\"> Update</button>\n  <br/>\n  <br/>\n\n  <h3> Enrolled Sections</h3>\n\n  <br/>\n\n    <ul class = \"list-group\">\n\n        <li  *ngFor = \"let enrolled of sections\"\n          class = \"list-group-item\">\n          {{enrolled.section.title}}\n          <span class = float-right> <button (click)=\"unenroll(enrolled.section._id)\"\n            class = \"btn btn-danger\"> UN-Enroll</button></span>\n        </li>\n\n    </ul>\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/services/user.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/section.service.client */ "./src/services/section.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/course.service.client */ "./src/services/course.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, sectionService, router, courseService) {
        var _this = this;
        this.userService = userService;
        this.sectionService = sectionService;
        this.router = router;
        this.courseService = courseService;
        this.currentUser = { username: '' };
        this.user = {};
        this.adminStatus = true;
        this.sections = [];
        this.courses = [];
        this.logout = function () {
            _this.adminStatus = true;
            _this.userService.logOut()
                .then(function () { return _this.router.navigate(['login']); });
        };
    }
    ProfileComponent.prototype.unenroll = function (sectionId) {
        var _this = this;
        this.sectionService.unenrollSection(sectionId)
            .then(function (status) {
            if (status._id === -1) {
                _this.sectionService
                    .findSectionsForStudent()
                    .then(function (sections) { return _this.sections = sections; });
            }
        });
    };
    ProfileComponent.prototype.update = function () {
        var profile = { _id: this._id, username: this.username, lastName: this.lastName, firsName: this.firstName,
            email: this.email, contact: this.contact };
        this.userService.updateProfile(profile).then(function (user) {
            if (user !== null) {
                alert('Profile Updated');
            }
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.currentUser()
            .then(function (user) {
            if (user !== null) {
                _this._id = user._id;
                _this.username = user.username;
                _this.firstName = user.firstName;
                _this.lastName = user.lastName;
                _this.contact = user.contact;
                _this.email = user.email;
                _this.currentUser = user;
            }
            else {
                _this._id = -1;
            }
        }).then(function () {
            if (_this._id !== -1) {
                _this.sectionService
                    .findSectionsForStudent()
                    .then(function (sections) { return _this.sections = sections; });
                _this.courseService.findAllCourses()
                    .then(function (courses) { return _this.courses = courses; });
                _this.adminStatus = false;
            }
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_3__["CourseServiceClient"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" />\n\n<div class=\"container-fluid\">\n  <span class = \"float-right\">\n    <div class = \"btn-group\">\n      <button class = \"btn\">\n        <a routerLink=\"/login\">Log-In</a>\n      </button>\n\n      <button class = \"btn\">\n      <a routerLink = \"/\"> Home</a>\n      </button>\n\n    </div>\n  </span>\n  <br/>\n  <h2> Register </h2>\n\n\n  <div class=\"form-group\">\n    <label for=\"usernameFld\"> Username </label>\n    <input [(ngModel)] = \"username\"\n           type=\"text\" class=\"form-control\" id=\"usernameFld\"  placeholder=\"Enter username\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"passwordFld\">Password</label>\n    <input  [(ngModel)] = \"password\"\n            type=\"password\" class=\"form-control\" id=\"passwordFld\" placeholder=\"Password\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"passwordFld2\">Confirm-Password</label>\n    <input  [(ngModel)] = \"password2\"\n            type=\"password\" class=\"form-control\" id=\"passwordFld2\" placeholder=\"Confirm - Password\">\n  </div>\n\n\n  <button  (click)= \"register(username,password)\"\n           type=\"submit\" class=\"btn btn-primary\" id = \"submitBtn\">Submit</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.username = '';
        this.password = '';
        this.password2 = '';
    }
    RegisterComponent.prototype.register = function (username, password) {
        var _this = this;
        if ((this.password !== '' && this.username !== '') && (this.password === this.password2)) {
            this.userService.findUserByUsername(this.username).then(function (response) {
                if (response._id === 0) {
                    _this.userService
                        .createUser(_this.username, _this.password)
                        .then(function () { return _this.router.navigate(['profile']); });
                }
                else {
                    alert('Username exist in database ...Try Again');
                }
            });
        }
        else {
            alert('Incorrect Entries');
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/sections/sections.component.css":
/*!*************************************************!*\
  !*** ./src/app/sections/sections.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sections/sections.component.html":
/*!**************************************************!*\
  !*** ./src/app/sections/sections.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container-fluid\">\n\n  <h2>Sections For Course : {{courseId}}</h2>\n  <br/>\n\n  <ul class=\"list-group-item\">\n    <li>\n      <label for = \"sname\" > Section Name</label>\n\n      <input\n        [(ngModel)] = \"title\"\n        placeholder=\"Enter Section\"\n        class = \"form-control\"\n         id = \"sname\"/>\n      <br/>\n\n      <label for = \"remSeats\" > Available Seats</label>\n\n      <input\n        [(ngModel)] = \"remSeats\"\n        placeholder=\"Enter Available Seats\"\n        class = \"form-control\"\n        id = \"remSeats\"/>\n      <br/>\n\n      <label for = \"maxSeats\" > Maximum Seats</label>\n\n      <input\n        [(ngModel)] = \"maxSeats\"\n        placeholder=\"Enter Maximum Seats\"\n        class = \"form-control\"\n        id = \"maxSeats\"/>\n\n      <br/>\n\n      <button (click)=\"createSection(title, remSeats, maxSeats)\"\n              class=\"btn btn-success form-control\">\n        Add Section\n      </button>\n\n      <br>\n      <button (click)=\"updateSection()\"\n              class=\"btn btn-primary form-control\">\n        Save Section\n      </button>\n      <br/>\n    </li>\n\n    <li *ngFor =\"let section of sections\" class=\"list-group-item\">\n      <div class=\"row\">\n        <div class = \"col-8\">\n          Name : {{section.title}} &nbsp; Availability : {{section.remSeats}} &nbsp; Maximum Seats : {{section.maxSeats}}\n        </div>\n        <div class = \"col-4\">\n      <span class=\"float-right btn-group\">\n      <button class=\"btn btn-primary\"\n        (click)= \"setSection(section.title, section.remSeats, section.maxSeats, section._id)\">\n        Update Section\n      </button>\n        <button class=\"btn btn-danger\"\n                (click) = \"deleteSection(section._id)\">\n          Delete Section\n        </button>\n      </span>\n        </div>\n        </div>\n    </li>\n\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/sections/sections.component.ts":
/*!************************************************!*\
  !*** ./src/app/sections/sections.component.ts ***!
  \************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/course.service.client */ "./src/services/course.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/section.service.client */ "./src/services/section.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SectionsComponent = /** @class */ (function () {
    function SectionsComponent(sectionService, courseService, router, route) {
        var _this = this;
        this.sectionService = sectionService;
        this.courseService = courseService;
        this.router = router;
        this.route = route;
        this.title = '';
        this.remSeats = 0;
        this.maxSeats = 0;
        this.sections = [];
        this.sectionId = '';
        this.courseId = '';
        this.selectedCourse = { id: -1, title: '' };
        this.selectedSection = {};
        this.route.params.subscribe(function (params) { return _this.getSections(params['courseId']); });
    }
    SectionsComponent.prototype.getSections = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this.courseService.findCourseById(courseId)
            .then(function (course) {
            if (course.status !== 400) {
                _this.title = course.title + ',' + 'Section';
            }
        });
        this.sectionService
            .findSectionsForCourse(courseId)
            .then(function (sections) { return _this.sections = sections; });
    };
    SectionsComponent.prototype.createSection = function (title, remSeats, maxSeats) {
        var _this = this;
        var section = { title: title, remSeats: remSeats, maxSeats: maxSeats, courseId: this.courseId };
        this.sectionService
            .createSection(section)
            .then(function () {
            _this.getSections(_this.courseId);
        });
    };
    SectionsComponent.prototype.setSection = function (title, remSeats, maxSeats, sectionId) {
        this.sectionId = sectionId;
        this.title = title;
        this.remSeats = remSeats;
        this.maxSeats = maxSeats;
    };
    SectionsComponent.prototype.deleteSection = function (sectionId) {
        var _this = this;
        this.sectionService.deleteSection(sectionId)
            .then(function () {
            _this.getSections(_this.courseId);
        });
    };
    SectionsComponent.prototype.updateSection = function () {
        var _this = this;
        var section = { sectionId: this.sectionId, title: this.title,
            remSeats: this.remSeats, maxSeats: this.maxSeats };
        this.sectionService.updateSection(section)
            .then(function () {
            _this.getSections(_this.courseId);
        });
    };
    SectionsComponent.prototype.ngOnInit = function () {
    };
    SectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sections',
            template: __webpack_require__(/*! ./sections.component.html */ "./src/app/sections/sections.component.html"),
            styles: [__webpack_require__(/*! ./sections.component.css */ "./src/app/sections/sections.component.css")]
        }),
        __metadata("design:paramtypes", [_services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "./src/app/white-board/white-board.component.css":
/*!*******************************************************!*\
  !*** ./src/app/white-board/white-board.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/white-board/white-board.component.html":
/*!********************************************************!*\
  !*** ./src/app/white-board/white-board.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1> Welcome To  WhiteBoard</h1>\n\n  <span class=\"float-right\">\n    <div class=\"btn-group\">\n\n        <button (click)=\"logout()\"\n          [hidden]=\"viewStatus\"\n          class=\"btn\">\n     LogOut\n  </button>\n\n\n\n      <button [hidden]=\"!viewStatus\"\n        class=\"btn\">\n    <a routerLink=\"/login\"> LogIn </a>\n  </button>\n\n\n      <button class=\"btn\">\n    <a routerLink=\"/register\"> Register </a>\n  </button>\n      <button class=\"btn\">\n    <a routerLink=\"/profile\"> Profile </a>\n  </button>\n    </div>\n  </span>\n\n  <span class=\"float-left\">\n    <div class=\"btn-group\">\n      <button class=\"btn\" >\n        <a routerLink= \"/courses\"> Course-Navigator</a>\n      </button>\n\n       <button class=\"btn\">\n        <a routerLink= \"/enrollment\"> Course-Enrollment</a>\n      </button>\n    </div>\n  </span>\n\n  <br/>\n  <br/>\n\n  <ul class=\"list-group\">\n\n\n    <li\n      class = \"list-group-item active\">\n      Enrolled Course/Sections\n    </li>\n\n       <li *ngFor=\"let enrolled of sections\"\n         class = \"list-group-item\">\n          {{enrolled.section.title}}\n        </li>\n  </ul>\n  <br/>\n  <br/>\n\n\n\n\n  <!-- equivalent to Router in react -->\n</div>\n"

/***/ }),

/***/ "./src/app/white-board/white-board.component.ts":
/*!******************************************************!*\
  !*** ./src/app/white-board/white-board.component.ts ***!
  \******************************************************/
/*! exports provided: WhiteBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteBoardComponent", function() { return WhiteBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/services/user.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/section.service.client */ "./src/services/section.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/course.service.client */ "./src/services/course.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WhiteBoardComponent = /** @class */ (function () {
    function WhiteBoardComponent(userService, sectionService, courseService, router) {
        this.userService = userService;
        this.sectionService = sectionService;
        this.courseService = courseService;
        this.router = router;
        this.user = {};
        this.id = -1;
        this.sections = [];
        this.courses = [];
        this.viewStatus = true;
    }
    WhiteBoardComponent.prototype.logout = function () {
        var _this = this;
        this.viewStatus = true;
        this.userService.logOut()
            .then(function () { return _this.router.navigate(['']); });
    };
    WhiteBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .currentUser()
            .then(function (user) {
            if (user !== null) {
                _this.id = user._id;
                _this.viewStatus = false;
            }
            else {
                _this.id = -1;
            }
        }).then(function () {
            if (_this.id !== -1) {
                _this.sectionService
                    .findSectionsForStudent()
                    .then(function (sections) {
                    return _this.sections = sections;
                });
                _this.courseService.findAllCourses()
                    .then(function (courses) { return _this.courses = courses; });
            }
        });
    };
    WhiteBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-white-board',
            template: __webpack_require__(/*! ./white-board.component.html */ "./src/app/white-board/white-board.component.html"),
            styles: [__webpack_require__(/*! ./white-board.component.css */ "./src/app/white-board/white-board.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_3__["CourseServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], WhiteBoardComponent);
    return WhiteBoardComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/services/course.service.client.ts":
/*!***********************************************!*\
  !*** ./src/services/course.service.client.ts ***!
  \***********************************************/
/*! exports provided: CourseServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseServiceClient", function() { return CourseServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var COURSE_API_URL = 'https://webdev-2.herokuapp.com/api/course';

var CourseServiceClient = /** @class */ (function () {
    function CourseServiceClient() {
    }
    CourseServiceClient.prototype.findAllCourses = function () {
        return fetch(COURSE_API_URL)
            .then(function (response) { return response.json(); });
    };
    CourseServiceClient.prototype.findCourseById = function (courseId) {
        return fetch(COURSE_API_URL + '/findCourse/' + courseId)
            .then(function (response) { return response.json(); });
    };
    CourseServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CourseServiceClient);
    return CourseServiceClient;
}());



/***/ }),

/***/ "./src/services/section.service.client.ts":
/*!************************************************!*\
  !*** ./src/services/section.service.client.ts ***!
  \************************************************/
/*! exports provided: SectionServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionServiceClient", function() { return SectionServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// const SECTION_API_URL = 'http://localhost:3000/api';
var SECTION_API_URL = 'https://webdev2-node-server-ashu95.herokuapp.com/api';

var SectionServiceClient = /** @class */ (function () {
    function SectionServiceClient() {
    }
    SectionServiceClient.prototype.createSection = function (section) {
        return fetch((SECTION_API_URL + '/course/' + section.courseId + '/section'), {
            method: 'POST',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            return response.json();
        });
    };
    SectionServiceClient.prototype.deleteSection = function (sectionId) {
        return fetch((SECTION_API_URL + '/section/' + sectionId), {
            method: 'DELETE',
            credentials: 'include'
        }).then(function (response) {
            return response;
        });
    };
    SectionServiceClient.prototype.updateSection = function (section) {
        return fetch((SECTION_API_URL + '/section/' + section.sectionId), {
            credentials: 'include',
            method: 'PUT',
            body: JSON.stringify(section),
            headers: { 'content-type': 'application/json' }
        }).then(function (response) {
            return response;
        });
    };
    SectionServiceClient.prototype.findSectionsForCourse = function (courseId) {
        return fetch((SECTION_API_URL + '/course/' + courseId + '/section'), {
            credentials: 'include'
        }).then(function (response) {
            return response.json();
        });
    };
    SectionServiceClient.prototype.findAllSections = function () {
        return fetch((SECTION_API_URL + '/findAllSections'), {
            credentials: 'include'
        }).then(function (response) {
            return response.json();
        });
    };
    SectionServiceClient.prototype.enrollSection = function (sectionId) {
        return fetch((SECTION_API_URL + '/section/enroll/' + sectionId), {
            credentials: 'include',
            method: 'PUT'
        }).then(function (response) {
            return response.json();
        });
    };
    SectionServiceClient.prototype.unenrollSection = function (sectionId) {
        return fetch((SECTION_API_URL + '/section/unenroll/' + sectionId), {
            credentials: 'include',
            method: 'delete'
        }).then(function (response) {
            return response.json();
        });
    };
    SectionServiceClient.prototype.findSectionsForStudent = function () {
        return fetch((SECTION_API_URL + '/student/section'), {
            credentials: 'include'
        }).then(function (response) {
            return response.json();
        });
    };
    SectionServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SectionServiceClient);
    return SectionServiceClient;
}());



/***/ }),

/***/ "./src/services/user.service.client.ts":
/*!*********************************************!*\
  !*** ./src/services/user.service.client.ts ***!
  \*********************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// const USER_API_URL = 'http://localhost:3000/api';
var USER_API_URL = 'https://webdev2-node-server-ashu95.herokuapp.com/api';

var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
        this.logIn = function (user) {
            return fetch((USER_API_URL + '/login'), {
                method: 'POST',
                body: JSON.stringify(user),
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            }).then(function (response) {
                return response.json();
            });
        };
        this.currentUser = function () {
            return fetch((USER_API_URL + '/profile'), {
                credentials: 'include'
            }).then(function (response) {
                return response.json();
            });
        };
        this.logOut = function () {
            return fetch((USER_API_URL + '/logout'), {
                method: 'POST',
                credentials: 'include'
            }).then(function (response) {
                return response;
            });
        };
    }
    UserServiceClient.prototype.createUser = function (username, password) {
        var credentials = { username: username, password: password };
        return fetch((USER_API_URL + '/register'), {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'content-type': 'application/json' }
        }).then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.updateProfile = function (profile) {
        return fetch((USER_API_URL + '/profile'), {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(profile),
            headers: { 'content-type': 'application/json' }
        }).then(function (response) {
            return response.json();
        });
    };
    UserServiceClient.prototype.deleteProfile = function () {
        return fetch((USER_API_URL + '/profile'), {
            method: 'DELETE',
            credentials: 'include'
        }).then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.findUserByUsername = function (username) {
        return fetch((USER_API_URL + '/username/' + username))
            .then(function (response) {
            return response.json();
        });
    };
    UserServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UserServiceClient);
    return UserServiceClient;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ashu/Downloads/Projects/webdev2-angular-client1/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map