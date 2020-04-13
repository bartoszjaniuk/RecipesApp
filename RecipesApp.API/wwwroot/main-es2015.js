(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n\r\n\r\n  \r\n  \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer id=\"footer\" class=\"py-4  bg-light\">\n  <div class=\"container text-center \">\n    <small> &copy; <a href=\"https://www.linkedin.com/in/bartosz-janiuk-89265717b/\"> 2020 Bartosz Janiuk</a></small>\n  </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5\">\n  <div *ngIf=\"!registerMode\" style=\"text-align: center\">\n    <h1>Find recipe for you!</h1>\n    <p class=\"lead\">Recipes for every time of the day! Join the group of gourmands</p>\n    <div class=\"text-center\">\n      <button class=\"btn btn-primary btn-lg mr-2\" (click)=\"registerToggle()\">Register</button>\n      <button class=\"btn btn-warning btn-lg\">Learn more</button>\n    </div>\n  </div>\n\n  <div *ngIf=\"registerMode\" class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-4\">\n        <app-register (cancelRegister)=\"cancelRegisterMode($event)\"></app-register>\n        \n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lists/like-lists/favRecipe-lists/fav-recipe-card/fav-recipe-card.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lists/like-lists/favRecipe-lists/fav-recipe-card/fav-recipe-card.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card text-white\">\n  <div class=\"card-img-wrapper\">\n    <img class=\"card-img\"  src=\"{{recipe.recipePhotos[0].url|| '../../../../../../assets/image.png'}}\" alt=\"{{recipe.name}}\">\n      <div class=\"card-img-overlay d-flex flex-column p-0\">\n\n        <div class=\"d-flex flex-column text-center  mb-3 mt-4\">\n          <h4 class=\"card-text-name bg-opacity text-white\">{{recipe.name}}</h4>\n        </div>\n        <div class=\" d-flex mt-auto\">\n            <h4 class=\"card-text text-white  p-2 mb-0\">{{recipe.dateAdded | date}}</h4>\n            <h4 class=\"card-text  text-white p-2 ml-auto\">{{recipe.preparationTime}} <i class=\"fa fa-clock-o\"></i></h4>\n            <ul class=\"list-inline recipe-icons animate text-center\">\n              <li class=\"list-inline-item\"><h2 class=\"text-white\"><i class=\"fa fa-eye\" [routerLink]=\"['/recipes/', recipe.id]\"></i></h2></li>\n            </ul>\n    \n        </div>\n      </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lists/like-lists/favRecipe-lists/favRecipe-lists.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lists/like-lists/favRecipe-lists/favRecipe-lists.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"row recipes-body\">\n    <div *ngFor=\"let recipe of recipe\" class=\"col-md-4 col-sm-6 mb-4\">\n      <app-fav-recipe-card [recipe]=\"recipe\"></app-fav-recipe-card>\n    </div>\n  </div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lists/like-lists/like-lists.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lists/like-lists/like-lists.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center mt-3\">\n  <h2>{{likesParam === 'Likers' ? 'Members who like me' : 'Members who I\\'ve Liked'}} : {{pagination.totalItems}}</h2>\n</div>\n\n<div class=\"container mt-3\">\n\n<div class=\"row\">\n  <div class=\"btn-group\">\n    <button class=\"btn btn-primary\" [(ngModel)]=\"likesParam\" btnRadio=\"Likers\" (click)=\"loadUsers()\">Members who like me</button>\n    <button class=\"btn btn-primary\" [(ngModel)]=\"likesParam\" btnRadio=\"Likees\" (click)=\"loadUsers()\">Members who I like</button>\n  </div>\n</div>\n\n<br>\n\n<div class=\"row\">\n  <div *ngFor=\"let user of users\" class=\"col-sm-6 col-md-4 col-lg-4 col-xl-2\">\n    <app-member-card [user]=\"user\"></app-member-card>\n  </div>\n</div>\n\n\n\n</div>\n\n<div class=\"d-flex justify-content-center\">\n<pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" [(ngModel)]=\"pagination.currentPage\"\n  (pageChanged)=\"pageChanged($event)\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"\n  >\n\n</pagination>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/member-card/member-card.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/member-card/member-card.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mb-4\">\n  <div class=\"card-img-wrapper\">\n    <img class=\"card-img\"  src=\"{{user.photoUrl || '../../../assets/user.png'}}\" alt=\"{{user.knownAs}}\">\n    <ul class=\"list-inline member-icons animate text-center\">\n      <li class=\"list-inline-item\"><button class=\"btn btn-primary\" [routerLink]=\"['/members/', user.id]\" ><i class=\"fa fa-user\"></i></button></li>\n      <li class=\"list-inline-item\"><button class=\"btn btn-primary\" (click)=\"sendLike(user.id)\"><i class=\"fa fa-heart\"></i></button></li>\n      <li class=\"list-inline-item\"><button class=\"btn btn-primary\"  [routerLink]=\"['/members/', user.id]\" [queryParams]=\"{tab: 1}\"><i class=\"fa fa-envelope\"></i></button></li>\n    </ul>\n  </div>\n  <div class=\"card-body p-1\">\n    <h6 class=\"card-title text-center mb-1\"><i class=\"fa fa-user\"></i>{{user.knownAs}}, {{user.age}}\n    </h6>\n    <p class=\"card-text text-muted text-center\">{{user.city}}</p>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/member-detail/member-detail.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/member-detail/member-detail.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-4\">\r\n  <!-- Control the column width, and how they should appear on different devices -->\r\n  \r\n\r\n  <div class=\"row\">\r\n      <div class=\"col-sm-4 justify-content-center text-center border\">\r\n        <img src=\"{{user.photoUrl || '../../../assets/user.png'}}\" class=\"img-fluid rounded-circle\" alt=\"Responsive image\">\r\n      </div>\r\n\r\n      <div class=\"col-sm-8 border\">\r\n        <div class=\"row\">\r\n          <div class=\"col text-center border\">{{user.username.toLocaleLowerCase()}}</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col text-center border\" >Posts: {{user.recipes.length}}</div>\r\n          <div class=\"col text-center border\" >Followers:{{user.likers.length}}</div>\r\n          <div class=\"col text-center border\" >Following:{{user.likees.length}}</div>\r\n          <div class=\"col text-center border\" >Last active: {{user.lastActive | timeAgo}}</div>\r\n        </div>\r\n        <p class=\"text-center\">{{user.introduction}}</p>\r\n      </div>\r\n  </div>\r\n\r\n    <br>\r\n    <hr>\r\n    <div class=\"tab-panel\">\r\n      <tabset class=\"member-tabset\" #memberTabs [justified]=\"true\">\r\n        <tab heading =\"Recipes\">\r\n          <p class=\"text-center\">User Recipes: </p>\r\n          <div class=\"row recipes-body\">\r\n            <div *ngFor=\"let recipe of user.recipes\" class=\"col-md-4 col-sm-6 mt-4 mb-4\">\r\n              <app-member-recipe-card [recipe]=\"recipe\"></app-member-recipe-card>\r\n            </div>\r\n          </div>\r\n      </tab>\r\n      <tab heading =\"Messages\">\r\n        <app-member-messages [recipientId]=\"user.id\"></app-member-messages>\r\n      </tab>\r\n      </tabset>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/member-edit/member-edit.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/member-edit/member-edit.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-4\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <h1>Your Profile</h1>\n    </div>\n    <div class=\"col-sm-8\">\n      <div *ngIf=\"editForm.dirty\" class=\"alert alert-info\"> <p><strong>Information:</strong> You have made changes. Any unsaved changes will be lost!</p> </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4 mb-5\">\n      <div class=\"card\">\n      <img class=\" img-circle card-img-top\" src=\"{{photoUrl || '../../../assets/user.png'}}\" alt=\"{{user.knownAs}}\">\n      <div class=\"card-body\">\n        <div>\n          <strong>Location:</strong>\n          <p>{{user.city}}, {{user.country}}</p>\n        </div>\n        <div>\n          <strong>Age:</strong>\n          <p>{{user.age}}</p>\n        </div>\n        <div>\n          <strong>Last Active:</strong>\n          <p>{{user.lastActive | timeAgo}}</p>\n        </div>\n        <div>\n          <strong>Member since:</strong>\n          <p>{{user.created | date}}</p>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n          <button [disabled]=\"!editForm.dirty\" form=\"editForm\" class=\"btn btn-success btn-block\">Save changes</button>\n      </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"tab-panel\">\n        <tabset class=\"member-tabset\">\n          <tab heading =\"Edit Profile\">\n            <form #editForm=\"ngForm\" id=\"editForm\" (ngSubmit)=\"updateUser()\" >\n              <h5 class=\" text-center mt-4\">Description</h5>\n              <textarea name=\"introduction\"  cols=100% rows=\"6\" class=\"form-contorl mt-2\" \n                [(ngModel)]=\"user.introduction\"></textarea>\n                <h5 class=\" text-center mt-2\">Location Details:</h5>\n                <div class=\"form-group mt-3\">\n                  <label for=\"city\">City</label>\n                  <input class=\"form-control\" type=\"text\" name=\"city\" [(ngModel)]=\"user.city\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"country\">Country</label>\n                  <input class=\"form-control\" type=\"text\" name=\"country\" [(ngModel)]=\"user.country\">\n                </div>\n            </form>  \n        </tab>\n        <tab heading =\"Edit Photos\">\n          <app-photo-editor [photos] = \"user.userPhotos\" (getMemberPhotoChange) =\"updateMainPhoto($event)\"></app-photo-editor>\n        </tab>\n\n        <tab heading =\"Edit Recipes\">\n          <app-recipe-editor [recipes] = \"user.recipes\"></app-recipe-editor>\n        </tab>\n        </tabset>\n      </div>\n    </div>\n  </div>\n</div> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/member-list.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/member-list.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5\">\n  \n  \n  <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit) =\"loadUsers()\" novalidate>\n    <div class=\"form-group\">\n      <label for=\"minAge\">Age From</label>\n      <input type=\"number\" class=\"form-control ml-1\" style=\"width: 120px\" id=\"minAge\"\n      [(ngModel)]=\"userParams.minAge\" name=\"minAge\">\n    </div>\n  \n    <div class=\"form-group px-2\">\n      <label for=\"maxAge\">Age To</label>\n      <input type=\"number\" class=\"form-control ml-1\" style=\"width: 120px\" id=\"maxAge\"\n      [(ngModel)]=\"userParams.maxAge\" name=\"maxAge\">\n    </div>\n  \n    <button type=\"submit\" class=\"btn btn-primary\" style=\"margin-left:10px\">Apply Filters</button>\n    <button type=\"button\" class=\"btn btn-warning\" style=\"margin-left:10px\" (click)=\"resetFilters()\">Reset Filter</button>\n\n    <div class=\"col mb-2\">\n      <div class=\"btn-group float-right\">\n        <button type=\"button\" name=\"orderBy\" class=\"btn btn-info\" [(ngModel)]=\"userParams.orderBy\" (click)=\"loadUsers()\" btnRadio=\"lastActive\">Last Active</button>\n        <button type=\"button\" name=\"orderBy\" class=\"btn btn-primary\" [(ngModel)]=\"userParams.orderBy\" (click)=\"loadUsers()\" btnRadio=\"created\">Newest Members</button>\n      </div>\n    </div>\n  </form>\n\n\n  <div class=\"row\">\n    <div *ngFor=\"let user of users\" class=\"col-lg-3 col-md-3 col-sm-6\">\n      <app-member-card [user]=\"user\"></app-member-card>\n    </div>\n  </div>\n  \n  <div class=\"d-flex justify-content-center mt-5 mb-5\">\n    <pagination [boundaryLinks]=\"true\" \n                [totalItems]=\"pagination.totalItems\" \n                [itemsPerPage]=\"pagination.itemsPerPage\" \n                [(ngModel)]=\"pagination.currentPage\"\n                name = \"pagination\"\n                (pageChanged)=\"pageChanged($event)\"\n                previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"lastText=\"&raquo;\">\n  \n    </pagination>\n</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/member-messages/member-messages.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/member-messages/member-messages.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-body\">\n    <div *ngIf=\"messages?.length === 0\">\n      No messages yet... say hi by using the message box below\n    </div>\n\n    <ul class=\"chat\">\n      <li *ngFor=\"let message of messages\">\n        <!-- to them -->\n        <div *ngIf=\"message.senderId == recipientId\">\n          <span class=\"chat-img float-left\">\n            <img src=\"{{message.senderPhotoUrl}}\" alt=\"{{message.senderKnownAs}}\" class=\"rounded-circle\">\n          </span>\n          <div class=\"chat-body\">\n            <div class=\"header\">\n              <strong class=\"primary-font\">{{message.senderKnownAs}}</strong>\n              <small class=\"text-muted float-right\">\n                <span class=\"fa fa-clock-o\">{{message.messageSent | timeAgo}}</span>\n              </small>\n            </div>\n            <p>{{message.content}}</p>\n          </div>\n        </div>\n\n        <!-- to me -->\n        <div *ngIf=\"message.senderId != recipientId\">\n            <span class=\"chat-img float-right\">\n              <img src=\"{{message.senderPhotoUrl}}\" alt=\"{{message.senderKnownAs}}\" class=\"rounded-circle\">\n            </span>\n            <div class=\"chat-body\">\n              <div class=\"header\">\n                  <small class=\"text-muted\">\n                      <span class=\"fa fa-clock-o\">{{message.messageSent | timeAgo}}</span>\n                      <span *ngIf=\"!message.isRead\" class=\"text-danger\">(unread)</span>\n                      <span *ngIf=\"message.isRead\" class=\"text-success\">(Read {{message.dateRead | timeAgo}})</span>\n                    </small>\n                <strong class=\"primary-font float-right\">{{message.senderKnownAs}}</strong>\n\n              </div>\n              <p>{{message.content}}</p>\n            </div>\n          </div>\n      </li>\n    </ul>\n\n  </div>\n\n  <div class=\"card-footer mb-5\">\n    <form #messageForm=\"ngForm\" (ngSubmit)=\"messageForm.valid && sendMessage()\">\n      <div class=\"input-group\">\n        <input type=\"text\"\n          [(ngModel)]=\"newMessage.content\"\n          name=\"content\"\n          required\n          class=\"form-control input-sm\"\n          placeholder=\"send a private message\">\n        <div class=\"input-group-append\">\n          <button [disabled]=\"!messageForm.valid\" class=\"btn btn-primary\">Send</button>\n        </div>\n      </div>\n    </form>\n  </div>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/member-recipe-card/member-recipe-card.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/member-recipe-card/member-recipe-card.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card text-white\">\n  <div class=\"card-img-wrapper\">\n    <img class=\"card-img\"  src=\"{{recipe.photoUrl || '../../../../../../assets/image.png'}}\" alt=\"{{recipe.name}}\">\n      <div class=\"card-img-overlay d-flex flex-column p-0\">\n\n   \n        <div class=\" d-flex mt-auto\">\n            <ul class=\"list-inline recipe-icons animate text-center\">\n              <li class=\"list-inline-item\"><h2 class=\"text-white mr-5\" (click)=\"addToFav(recipe.id)\"><i class=\"fa fa-heart\"></i></h2></li>\n              <li class=\"list-inline-item\"><h2 class=\"text-white\"><i class=\"fa fa-eye\" [routerLink]=\"['/recipes/', recipe.id]\"></i></h2></li>\n            </ul>\n    \n        </div>\n      </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/photo-editor/photo-editor.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/photo-editor/photo-editor.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-2\" *ngFor=\"let photo of photos\">\n    <img src=\"{{photo.url}}\" class=\"img-thumbnail p-1\" alt=\"\">\n    <div class=\"text-center\">\n      <button type=\"button\" class=\"btn btn-sm mr-1 mb-2\" \n      (click) = \"setMainPhoto(photo)\" \n      [disabled]=\"photo.isMain\" \n      [ngClass] = \"photo.isMain ? 'btn-danger active' : 'btn-secondary'\"\n      >Main</button>\n      <button type=\"button\" class=\"btn btn-sm btn-danger\" \n      (click)=\"deletePhoto(photo.id)\" \n       ><i class=\"fa fa-trash-o\"></i></button>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row mt-3\">\n\n  <div class=\"col-md-3 mt-3\">\n\n      <h3>Add Photos</h3>\n\n      <div ng2FileDrop\n           [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n           (fileOver)=\"fileOverBase($event)\"\n           [uploader]=\"uploader\"\n           class=\"card  bg-faded p-3 text-center mt-3 mb-3 my-drop-zone\">\n           <i class=\"fa fa-upload fa-3x\"></i>\n          Drop Photos Here\n      </div>\n\n\n\n      Multiple\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\n\n      Single\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n  </div>\n\n  <div class=\"col-md-6 ml-5\" style=\"margin-bottom: 40px\" *ngIf=\"uploader?.queue?.length\">\n\n      <h3>Upload queue</h3>\n      <p>Queue length: {{ uploader?.queue?.length }}</p>\n\n      <table class=\"table\">\n          <thead>\n          <tr>\n              <th width=\"50%\">Name</th>\n              <th>Size</th>\n\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let item of uploader.queue\">\n              <td><strong>{{ item?.file?.name }}</strong></td>\n              <td *ngIf=\"uploader.options.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n              <td *ngIf=\"uploader.options.isHTML5\">      \n          </tr>\n          </tbody>\n      </table>\n\n      <div>\n          <div>\n              Queue progress:\n              <div class=\"progress mb-4\" >\n                  <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n              </div>\n          </div>\n          <button type=\"button\" class=\"btn btn-success btn-s\"\n                  (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n              <span class=\"fa fa-upload\"></span> Upload \n          </button>\n          <button type=\"button\" class=\"btn btn-warning btn-s\"\n                  (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n              <span class=\"fa fa-ban\"></span> Cancel \n          </button>\n          <button type=\"button\" class=\"btn btn-danger btn-s\"\n                  (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n              <span class=\"fa fa-trash\"></span> Remove \n          </button>\n      </div>\n\n  </div>\n\n</div> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/recipe-editor/recipe-editor.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/recipe-editor/recipe-editor.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-3\" *ngFor=\"let recipe of recipes\">\n    <img src=\"{{recipe.photoUrl ||  '../../../../../../assets/image.png'}}\" class=\"img-thumbnail p-1\" alt=\"\" width=\"150px\">\n    <div class=\"text-center\">\n      <button type=\"button\" class=\"btn btn-sm btn-danger\" \n      (click)=\"deleteRecipe(recipe.id)\" \n       ><i class=\"fa fa-trash-o\"></i></button>\n       <button type=\"button\" class=\"btn btn-sm btn-primary\" \n       [routerLink]=\"['/recipe/edit/', recipe.id]\" \n       ><i class=\"fa fa-pencil-square-o\"></i></button>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5\">\n  <div class=\"row\">\n    <div class=\"btn-group\">\n      <button\n        class=\"btn btn-primary\"\n        [(ngModel)]=\"messageContainer\"\n        btnRadio=\"Unread\"\n        (click)=\"loadMessages()\"\n      >\n        <i class=\"fa fa-envelope\"></i> Unread\n      </button>\n      <button\n        class=\"btn btn-primary\"\n        [(ngModel)]=\"messageContainer\"\n        btnRadio=\"Inbox\"\n        (click)=\"loadMessages()\"\n      >\n        <i class=\"fa fa-envelope-open\"></i> Inbox\n      </button>\n      <button\n        class=\"btn btn-primary\"\n        [(ngModel)]=\"messageContainer\"\n        btnRadio=\"Outbox\"\n        (click)=\"loadMessages()\"\n      >\n        <i class=\"fa fa-paper-plane\"></i> Outbox\n      </button>\n    </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"messages.length == 0\">\n    <h3>No messages</h3>\n  </div>\n\n  <div class=\"row\" *ngIf=\"messages.length > 0\">\n    <table class=\"table table-hover\" style=\"cursor: pointer\">\n      <tr>\n        <th style=\"width: 40%\">Message</th>\n        <th style=\"width: 20%\">From / To</th>\n        <th style=\"width: 20%\">Sent / Received</th>\n        <th style=\"width: 20%\"></th>\n      </tr>\n      <tr\n        *ngFor=\"let message of messages\"\n        [routerLink]=\"[\n          '/members',\n          messageContainer == 'Outbox' ? message.recipientId : message.senderId\n        ]\"\n        [queryParams]=\"{ tab: 1 }\"\n      >\n        <td>{{ message.content }}</td>\n        <td>\n          <div *ngIf=\"messageContainer != 'Outbox'\">\n            <img\n              src=\"{{ message?.senderPhotoUrl }}\"\n              class=\"img-circle rounded-circle mr-1\"\n            />\n            <strong>{{ message.senderKnownAs }}</strong>\n          </div>\n          <div *ngIf=\"messageContainer == 'Outbox'\">\n            <img\n              src=\"{{ message?.recipientPhotoUrl }}\"\n              class=\"img-circle rounded-circle mr-1\"\n            />\n            <strong>{{ message.recipientKnownAs }}</strong>\n          </div>\n        </td>\n        <td>{{ message.messageSent | timeAgo }}</td>\n        <td>\n          <button\n            class=\"btn btn-danger\"\n            (click)=\"$event.stopPropagation()\"\n            (click)=\"deleteMessage(message.id)\"\n          >\n            Delete\n          </button>\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>\n\n<div class=\"d-flex justify-content-center\">\n  <pagination\n    [boundaryLinks]=\"true\"\n    [totalItems]=\"pagination.totalItems\"\n    [itemsPerPage]=\"pagination.itemsPerPage\"\n    [(ngModel)]=\"pagination.currentPage\"\n    (pageChanged)=\"pageChanged($event)\"\n    previousText=\"&lsaquo;\"\n    nextText=\"&rsaquo;\"\n    firstText=\"&laquo;\"\n    lastText=\"&raquo;\"\n  >\n  </pagination>\n</div> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-light bg-light border\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/recipes']\" ><img src=\"../../../assets/cookhat.png\" alt=\"\"></a>\n  \n    <ul class=\"navbar-nav mr-auto\" *ngIf=\"loggedIn()\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link \" [routerLink]=\"['/recipes']\">Recipes</a>\n      </li>\n      <li class=\"nav-item \" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['/members']\">Users</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['/likes']\">Like Users</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['/my-fav-recipes']\">Favourite Recipes</a>\n      </li>\n    </ul>\n\n\n    \n    <div *ngIf=\"loggedIn()\" class=\"dropdown\" dropdown>\n      <a class=\"dropdown-toggle \" dropdownToggle>\n        <span class=\"mr-3\">\n          <img  class=\"rounded\" src=\"{{photoUrl || '../../assets/user.png'}}\" alt=\"\">\n        </span>\n        Welcome, {{authService.decodedToken?.unique_name | titlecase}}\n      </a>\n    \n      <div class=\"dropdown-menu mt-4\" *dropdownMenu>\n        <a class=\"dropdown-item\" [routerLink]=\"['/member/edit']\"> <i class=\"fa fa-user\"></i>Edit Profile</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" [routerLink]=\"['/recipe-add']\"> <i class=\"fa fa-book\"></i>Add Recipe</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" [routerLink]=\"['/messages']\"> <i class=\"fa fa-comment\"></i>Messages</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fa fa-sign-out\"></i>Logout</a>\n      </div>\n    </div>\n    \n    \n    \n    \n    \n    <form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" class=\"form-inline my-2 my-lg-0\" (ngSubmit)=\"login()\">\n\n      <input class=\"form-control mr-sm-2\" type=\"text\" name=\"username\" \n      placeholder=\"Username\" required [(ngModel)]=\"model.Username\">\n\n      <input class=\"form-control mr-sm-2\" type=\"password\" name=\"password\" \n      placeholder=\"Password\" required [(ngModel)]=\"model.password\">\n\n      <button [disabled]=\"!loginForm.valid\" class=\"btn btn-warning my-2 my-sm-0\" type=\"submit\">Login</button>\n    </form>\n  </div>\n \n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes-list/add-recipe/add-recipe.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes-list/add-recipe/add-recipe.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" >\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg body-card-shadow\">\n      <form [formGroup]=\"addRecipeForm\" class=\"p-5\" \n      (ngSubmit)=\"createRecipe()\">\n        <h2 class=\"text-center text-primary\"> ADD NEW RECIPE</h2>\n        <hr>\n\n        <div class=\"form-group\">\n          <input type=\"text\" [ngClass]=\"{\n              'is-invalid':\n                addRecipeForm.get('name').errors &&\n                addRecipeForm.get('name').touched\n            }\" class=\"form-control\" formControlName=\"name\" placeholder=\"Name\" />\n          <div class=\"invalid-feedback\">Please name your Recipe</div>\n        </div>\n\n        <div class=\"form-group\">\n          <input type=\"text\" [ngClass]=\"{\n              'is-invalid':\n                addRecipeForm.get('ingredients').errors &&\n                addRecipeForm.get('ingredients').touched\n            }\" class=\"form-control\" formControlName=\"ingredients\" placeholder=\"Ingredients..\" />\n          <div class=\"invalid-feedback\"\n          *ngIf=\"addRecipeForm.get('ingredients').touched && addRecipeForm.get('ingredients').hasError('required')\"> Ingredients are required\n        </div>\n        </div>\n\n        <div class=\"form-group\">\n          <input type=\"number\" [ngClass]=\"{\n              'is-invalid':\n                addRecipeForm.get('preparationTime').errors &&\n                addRecipeForm.get('preparationTime').touched\n            }\" class=\"form-control\" formControlName=\"preparationTime\" placeholder=\"Preparation Time\" />\n          <div class=\"invalid-feedback\"\n          *ngIf=\"addRecipeForm.get('preparationTime').touched && addRecipeForm.get('preparationTime').hasError('required')\"> Preparation Time is required\n        </div>\n        </div>\n\n        <div class=\"form-group\">\n          <textarea cols=100% rows=\"6\" [ngClass]=\"{\n              'is-invalid':\n                addRecipeForm.get('description').errors &&\n                addRecipeForm.get('description').touched\n            }\" class=\"form-control\" formControlName=\"description\" placeholder=\"Description\"></textarea>\n          <div class=\"invalid-feedback\"\n          *ngIf=\"addRecipeForm.get('description').touched && addRecipeForm.get('description').hasError('required')\"> Descripe your recipe, it's important!\n        </div>\n        </div>\n\n        <div class=\"form-group\">\n          <select class=\"form-control\" formControlName=\"categoryId\" placeholder=\"Category\">\n              <option *ngFor=\"let category of categories\" [value]=\"category.id\">{{category.name}}</option>\n          </select>\n          <div class=\"invalid-feedback\"\n        *ngIf=\"addRecipeForm.get('categoryId').touched && addRecipeForm.get('categoryId').hasError('required')\"> You must select category\n          </div>\n      </div>\n        <div class=\"form-group text-center\">\n          <button class=\"btn btn-success\" [disabled]=\"!addRecipeForm.valid\" type=\"submit\">Add</button>\n          <button class=\"btn btn-default\" type=\"button\" (click)=\"cancel()\">\n            Cancel\n          </button>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes-list/recipe-detail/recipe-detail.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes-list/recipe-detail/recipe-detail.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-4 border\">\r\n  <!-- Control the column width, and how they should appear on different devices -->\r\n  \r\n  <div class=\"row \">\r\n    <div class=\"col col-sm-6 \">\r\n      <h5 class=\"text-center\">{{recipe.name}}</h5>\r\n    </div>\r\n    <div class=\"col col-sm-4\">\r\n      <h5>\r\n         Date added: {{recipe.dateAdded | date}}\r\n      </h5>\r\n      </div>\r\n      <div class=\"col col-sm-1\">\r\n        <h5>\r\n          <i class=\"fa fa-clock-o\"></i>{{recipe.preparationTime}}\r\n        </h5>\r\n        </div>\r\n        <div class=\"col col-sm-1\">\r\n          <h5>\r\n             <i (click)=\"printPage()\" class=\"fa fa-print\"></i>\r\n          </h5>\r\n          </div>\r\n  </div>\r\n  \r\n  \r\n  <div class=\"row border\">\r\n      <div class=\"col-sm-6 border\">\r\n        <img src=\"{{recipe.photoUrl || '../../../../../../assets/image.png'}}\" class=\"img-fluid\" alt=\"Responsive image\">\r\n      </div>\r\n      <div class=\"col-sm-6 border\">\r\n        <h4 class=\"text-center\">Ingredients:</h4>\r\n         {{recipe.ingredients}}\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-5\">\r\n    <div class=\"col\">\r\n      <h4 class=\"text-center\">Description:</h4> \r\n      <p class=\"description\">{{recipe.description}}</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"mb-5\">\r\n  <h2 class=\"text-center\">Photos</h2>\r\n        <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\r\n    </div>\r\n    \r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes-list/recipe-edit/recipe-edit.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes-list/recipe-edit/recipe-edit.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-4 border\">\r\n  <h3 class=\"text-center\">Add Photos</h3>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\" *ngFor=\"let photo of recipe.recipePhotos\">\r\n        <img src=\"{{photo.url}}\" class=\"img-thumbnail p-1\" alt=\"\">\r\n        <div class=\"text-center\">\r\n          <button type=\"button\" class=\"btn btn-sm mr-1 mb-2\" \r\n        (click) = \"setMainPhoto(photo)\" \r\n        [disabled]=\"photo.isMain\" \r\n        [ngClass] = \"photo.isMain ? 'btn-danger active' : 'btn-secondary'\"\r\n        >Main</button>\r\n          <button type=\"button\" class=\"btn btn-sm btn-danger mb-2\" \r\n          (click)=\"deletePhoto(photo.id)\" >\r\n          <i class=\"fa fa-trash-o\"></i></button>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"row justify-content-md-center mt-5 border\">\r\n    <div class=\"col col-sm-4\">\r\n      <div class=\"mt-4 text-center\">\r\n      Multiple\r\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\r\n    \r\n      Single\r\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\r\n    </div>\r\n    </div>\r\n    <div class=\"col col-sm-6\">\r\n      <div ng2FileDrop\r\n          [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\r\n          (fileOver)=\"fileOverBase($event)\"\r\n          [uploader]=\"uploader\"\r\n          class=\"card  bg-faded p-3 text-center mt-3 mb-3 my-drop-zone\">\r\n          <i class=\"fa fa-upload fa-3x\"></i>\r\n          Drop Photos Here\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col-md-6 mt-5\" style=\"margin-bottom: 40px\" *ngIf=\"uploader?.queue?.length\">\r\n  <h3 class=\"text-center\">Upload queue</h3>\r\n  <p>Queue length: {{ uploader?.queue?.length }}</p>\r\n\r\n  <table class=\"table\">\r\n      <thead>\r\n      <tr>\r\n          <th width=\"50%\">Name</th>\r\n          <th>Size</th>\r\n\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let item of uploader.queue\">\r\n          <td><strong>{{ item?.file?.name }}</strong></td>\r\n          <td *ngIf=\"uploader.options.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n          <td *ngIf=\"uploader.options.isHTML5\">      \r\n      </tr>\r\n      </tbody>\r\n  </table>\r\n\r\n  <div>\r\n      <div>\r\n          Queue progress:\r\n          <div class=\"progress mb-4\" >\r\n              <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n          </div>\r\n      </div>\r\n      <button type=\"button\" class=\"btn btn-success btn-s\"\r\n              (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n          <span class=\"fa fa-upload\"></span> Upload \r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-warning btn-s\"\r\n              (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n          <span class=\"fa fa-ban\"></span> Cancel \r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-danger btn-s\"\r\n              (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n          <span class=\"fa fa-trash\"></span> Remove \r\n      </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n  <form #editForm=\"ngForm\" id=\"editForm\" (ngSubmit)=\"updateRecipe(recipe.id)\" >\r\n    <h5 class=\" text-center mt-2\">Recipe details:</h5>\r\n      <div class=\"form-group mt-3\">\r\n        <label for=\"city\">Name</label>\r\n        <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"recipe.name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"country\">Ingredients</label>\r\n        <input class=\"form-control\" type=\"text\" name=\"country\" [(ngModel)]=\"recipe.ingredients\">\r\n      </div>\r\n    <h5 class=\" text-center mt-4\">Description</h5>\r\n    <textarea name=\"description\"  cols=100% rows=\"8\" class=\"form-control mt-2\" \r\n      [(ngModel)]=\"recipe.description\"></textarea>\r\n  </form>  \r\n\r\n  <button [disabled]=\"!editForm.dirty\" form=\"editForm\" class=\"btn btn-success btn-block mb-5 mt-5\">Save changes</button>\r\n\r\n  \r\n  \r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes-list/recipes-card/recipes-card.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes-list/recipes-card/recipes-card.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card text-white\">\n  <div class=\"card-img-wrapper\">\n    <img class=\"card-img\"  src=\"{{recipe.photoUrl || '../../../../../../assets/image.png'}}\" alt=\"{{recipe.name}}\">\n      <div class=\"card-img-overlay d-flex flex-column p-0\">\n\n        <div class=\"d-flex flex-column text-center  mb-3 mt-4\">\n          <h4 class=\"card-text-name bg-opacity text-white\">{{recipe.name}}</h4>\n        </div>\n        <div class=\" d-flex mt-auto\">\n            <h4 class=\"card-text text-white  p-2 mb-0\">{{recipe.dateAdded}}</h4>\n            <h4 class=\"card-text  text-white p-2 ml-auto\">{{recipe.preparationTime}} <i class=\"fa fa-clock-o\"></i></h4>\n            <ul class=\"list-inline recipe-icons animate text-center\">\n              <li class=\"list-inline-item\"><h2 class=\"text-white mr-5\" (click)=\"addToFav(recipe.id)\"><i class=\"fa fa-heart\"></i></h2></li>\n              <li class=\"list-inline-item\"><h2 class=\"text-white\"><i class=\"fa fa-eye\" [routerLink]=\"['/recipes/', recipe.id]\"></i></h2></li>\n            </ul>\n    \n        </div>\n      </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes-list/recipes-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes-list/recipes-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5\">\n  \n  <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit) =\"loadRecipes()\" novalidate>\n    <div class=\"form-group\">\n\n      <div class=\"form-group px-2\">\n        <label for=\"category\">Category</label>\n          <select class=\"form-control\" [(ngModel)]=\"recipeParams.category\" name=\"category\" id=\"category\">\n              <option *ngFor=\"let category of categories\" >{{category.name}}</option>\n          </select>\n      </div>\n\n      <label for=\"minTime\">Preparation time from</label>\n      <input type=\"number\" class=\"form-control ml-1\" style=\"width: 120px\" id=\"minTime\"\n      [(ngModel)]=\"recipeParams.minTime\" name=\"minTime\">\n    </div>\n    <div class=\"form-group px-2\">\n      <label for=\"maxTime\">to</label>\n      <input type=\"number\" class=\"form-control ml-1\" style=\"width: 120px\" id=\"maxTime\"\n      [(ngModel)]=\"recipeParams.maxTime\" name=\"maxTime\">\n    </div>\n    minutes\n\n  \n  \n    <div class=\"mb-2\">\n    <button type=\"submit\" class=\"btn btn-primary\" style=\"margin-left:10px\">Apply Filters</button>\n    <button type=\"button\" class=\"btn btn-warning\" style=\"margin-left:10px\" (click)=\"resetFilters()\">Reset Filter</button>\n    </div>\n  </form>\n\n\n\n\n  <div class=\"row recipes-body\">\n    <div *ngFor=\"let recipe of recipes\" class=\"col-md-4 col-sm-6 mb-4 mt-5\">\n      <app-recipes-card [recipe]=\"recipe\"></app-recipes-card>\n    </div>\n  </div>\n\n  <div class=\"d-flex justify-content-center mt-5 mb-5\">\n    <pagination [boundaryLinks]=\"true\" \n                [totalItems]=\"pagination.totalItems\" \n                [itemsPerPage]=\"pagination.itemsPerPage\" \n                [(ngModel)]=\"pagination.currentPage\"\n                name = \"pagination\"\n                (pageChanged)=\"pageChanged($event)\"\n                previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"lastText=\"&raquo;\">\n  \n    </pagination>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"containter\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg body-card-shadow\">\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\" class=\"p-5\">\n        <h2 class=\"text-center text-primary\">Sign Up</h2>\n        <hr />\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" style=\"margin-right:10px\">I am a: </label>\n          <label class=\"radio-inline\">\n            <input class=\"mr-3\" type=\"radio\" value=\"male\" formControlName=\"gender\">Male\n          </label>\n          <label class=\"radio-inline ml-3\">\n            <input class=\"mr-3\" type=\"radio\" value=\"female\" formControlName=\"gender\">Female\n          </label>\n        </div>\n\n        <div class=\"form-group\">\n          <input type=\"text\" [ngClass]=\"{\n              'is-invalid':\n                registerForm.get('username').errors &&\n                registerForm.get('username').touched\n            }\" class=\"form-control\" formControlName=\"username\" placeholder=\"Username\" />\n          <div class=\"invalid-feedback\">Please choose a username</div>\n        </div>\n\n        <div class=\"form-group\">\n          <input [ngClass]=\"{'is-invalid': registerForm.get('knownAs').errors && registerForm.get('knownAs').touched}\"\n            class=\"form-control\" placeholder=\"Known as\" formControlName=\"knownAs\">\n          <div class=\"invalid-feedback\"\n            *ngIf=\"registerForm.get('knownAs').touched && registerForm.get('knownAs').hasError('required')\">\n            Known as is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <input [ngClass]=\"{'is-invalid': registerForm.get('dateOfBirth').errors && registerForm.get('dateOfBirth').touched}\"\n            class=\"form-control\" placeholder=\"Date of Birth\" formControlName=\"dateOfBirth\" type=\"text\" bsDatepicker [bsConfig]=\"bsConfig\">\n          <div class=\"invalid-feedback\"\n            *ngIf=\"registerForm.get('dateOfBirth').touched && registerForm.get('dateOfBirth').hasError('required')\">Date of\n            Birth is required</div>\n        </div>\n\n\n        <div class=\"form-group\">\n          <input [ngClass]=\"{'is-invalid': registerForm.get('city').errors && registerForm.get('city').touched}\"\n            class=\"form-control\" placeholder=\"City\" formControlName=\"city\">\n          <div class=\"invalid-feedback\"\n            *ngIf=\"registerForm.get('city').touched && registerForm.get('city').hasError('required')\">City is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <input [ngClass]=\"{'is-invalid': registerForm.get('country').errors && registerForm.get('country').touched}\"\n            class=\"form-control\" placeholder=\"Country\" formControlName=\"country\">\n          <div class=\"invalid-feedback\"\n            *ngIf=\"registerForm.get('country').touched && registerForm.get('country').hasError('required')\">Country is\n            required\n          </div>\n        </div>\n\n\n        <div class=\"form-group\">\n          <input type=\"password\" [ngClass]=\"{\n              'is-invalid':\n                registerForm.get('password').errors &&\n                registerForm.get('password').touched}\" class=\"form-control\" formControlName=\"password\"\n            placeholder=\"Password\" />\n          <div class=\"invalid-feedback\" *ngIf=\"\n              registerForm.get('password').hasError('required') &&\n              registerForm.get('password').touched\">\n            Password is required\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"\n              registerForm.get('password').hasError('minlength') &&\n              registerForm.get('password').touched\">\n            Password must be at least 4 characters\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"\n              registerForm.get('password').hasError('maxlength') &&\n              registerForm.get('password').touched\">\n            Password cannot exceed 8 characters\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <input type=\"password\" [ngClass]=\"{\n              'is-invalid':\n                registerForm.get('confirmPassword').errors \n                && registerForm.get('confirmPassword').touched\n                || registerForm.get('confirmPassword').touched\n                && registerForm.hasError('mismatch')}\" class=\"form-control\" formControlName=\"confirmPassword\"\n            placeholder=\"Confirm Password\" />\n          <div class=\"invalid-feedback\" *ngIf=\"\n              registerForm.get('confirmPassword').hasError('required') &&\n              registerForm.get('confirmPassword').touched\">\n            Password is required\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"\n              registerForm.hasError('mismatch') &&\n              registerForm.get('confirmPassword').touched\">\n            Passwords must match\n          </div>\n        </div>\n\n        <div class=\"form-group text-center\">\n          <button class=\"btn btn-success\" [disabled]=\"!registerForm.valid\" type=\"submit\">Register</button>\n          <button class=\"btn btn-default\" type=\"button\" (click)=\"cancel()\">\n            Cancel\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");





let AuthGuard = class AuthGuard {
    constructor(authService, router, alertify) {
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.alertify.error('You shall not pass !!!');
        this.router.navigate(['/home']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/_guards/prevent-unsaved-changes.guard.ts":
/*!**********************************************************!*\
  !*** ./src/app/_guards/prevent-unsaved-changes.guard.ts ***!
  \**********************************************************/
/*! exports provided: PreventUnsavedChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventUnsavedChanges", function() { return PreventUnsavedChanges; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PreventUnsavedChanges = class PreventUnsavedChanges {
    canDeactivate(component) {
        if (component.editForm.dirty) {
            return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
        }
        return true;
    }
};
PreventUnsavedChanges = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PreventUnsavedChanges);



/***/ }),

/***/ "./src/app/_models/messages-resolver.ts":
/*!**********************************************!*\
  !*** ./src/app/_models/messages-resolver.ts ***!
  \**********************************************/
/*! exports provided: MessagesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesResolver", function() { return MessagesResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");








let MessagesResolver = class MessagesResolver {
    constructor(userService, router, alertify, authService) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.authService = authService;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.messageContainer = 'Unread';
    }
    resolve(route) {
        return this.userService
            .getMessages(this.authService.decodedToken.nameid, this.pageNumber, this.pageSize, this.messageContainer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            this.alertify.error('Problem retrieving messages');
            this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    }
};
MessagesResolver.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
MessagesResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MessagesResolver);



/***/ }),

/***/ "./src/app/_models/pagination.ts":
/*!***************************************!*\
  !*** ./src/app/_models/pagination.ts ***!
  \***************************************/
/*! exports provided: PaginatedResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedResult", function() { return PaginatedResult; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PaginatedResult {
}


/***/ }),

/***/ "./src/app/_resolvers/fav-recipes-resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/_resolvers/fav-recipes-resolver.ts ***!
  \****************************************************/
/*! exports provided: FavRecipesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavRecipesResolver", function() { return FavRecipesResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");








let FavRecipesResolver = class FavRecipesResolver {
    constructor(userService, router, alertify, authService) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.authService = authService;
    }
    resolve(route) {
        return this.userService.getFavRecipes(this.authService.decodedToken.nameid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    }
};
FavRecipesResolver.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
FavRecipesResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FavRecipesResolver);



/***/ }),

/***/ "./src/app/_resolvers/lists.resovler.ts":
/*!**********************************************!*\
  !*** ./src/app/_resolvers/lists.resovler.ts ***!
  \**********************************************/
/*! exports provided: ListsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsResolver", function() { return ListsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");







let ListsResolver = class ListsResolver {
    constructor(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.likesParam = 'Likers';
    }
    resolve(route) {
        return this.userService.getUsers(this.pageNumber, this.pageSize, null, this.likesParam).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    }
};
ListsResolver.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"] }
];
ListsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ListsResolver);



/***/ }),

/***/ "./src/app/_resolvers/member-detail-resolver.ts":
/*!******************************************************!*\
  !*** ./src/app/_resolvers/member-detail-resolver.ts ***!
  \******************************************************/
/*! exports provided: MemberDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailResolver", function() { return MemberDetailResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");







let MemberDetailResolver = class MemberDetailResolver {
    constructor(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
    }
    resolve(route) {
        return this.userService.getUser(route.params.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/members']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    }
};
MemberDetailResolver.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"] }
];
MemberDetailResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MemberDetailResolver);



/***/ }),

/***/ "./src/app/_resolvers/member-edit-resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/_resolvers/member-edit-resolver.ts ***!
  \****************************************************/
/*! exports provided: MemberEditResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberEditResolver", function() { return MemberEditResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");








let MemberEditResolver = class MemberEditResolver {
    constructor(authService, userService, router, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
    }
    resolve(route) {
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/members']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    }
};
MemberEditResolver.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"] }
];
MemberEditResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MemberEditResolver);



/***/ }),

/***/ "./src/app/_resolvers/member-list-resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/_resolvers/member-list-resolver.ts ***!
  \****************************************************/
/*! exports provided: MemberListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListResolver", function() { return MemberListResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");







let MemberListResolver = class MemberListResolver {
    constructor(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.pageNumber = 1;
        this.pageSize = 5;
    }
    resolve(route) {
        return this.userService.getUsers(this.pageNumber, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    }
};
MemberListResolver.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"] }
];
MemberListResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MemberListResolver);



/***/ }),

/***/ "./src/app/_resolvers/recipe-detail-resolver.ts":
/*!******************************************************!*\
  !*** ./src/app/_resolvers/recipe-detail-resolver.ts ***!
  \******************************************************/
/*! exports provided: RecipeDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailResolver", function() { return RecipeDetailResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/recipe/recipe.service */ "./src/app/_services/recipe/recipe.service.ts");







let RecipeDetailResolver = class RecipeDetailResolver {
    constructor(recipeService, router, alertify) {
        this.recipeService = recipeService;
        this.router = router;
        this.alertify = alertify;
    }
    resolve(route) {
        return this.recipeService.getRecipe(route.params.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/recipes']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    }
};
RecipeDetailResolver.ctorParameters = () => [
    { type: _services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_6__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"] }
];
RecipeDetailResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RecipeDetailResolver);



/***/ }),

/***/ "./src/app/_resolvers/recipe-edit-resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/_resolvers/recipe-edit-resolver.ts ***!
  \****************************************************/
/*! exports provided: RecipeEditResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditResolver", function() { return RecipeEditResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/recipe/recipe.service */ "./src/app/_services/recipe/recipe.service.ts");








let RecipeEditResolver = class RecipeEditResolver {
    constructor(recipeService, router, alertify, authService) {
        this.recipeService = recipeService;
        this.router = router;
        this.alertify = alertify;
        this.authService = authService;
    }
    resolve(route) {
        return this.recipeService.getRecipe(route.params.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/members']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    }
};
RecipeEditResolver.ctorParameters = () => [
    { type: _services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_7__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
RecipeEditResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RecipeEditResolver);



/***/ }),

/***/ "./src/app/_resolvers/recipe-list-resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/_resolvers/recipe-list-resolver.ts ***!
  \****************************************************/
/*! exports provided: RecipeListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListResolver", function() { return RecipeListResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/recipe/recipe.service */ "./src/app/_services/recipe/recipe.service.ts");







let RecipeListResolver = class RecipeListResolver {
    constructor(recipeService, router, alertify) {
        this.recipeService = recipeService;
        this.router = router;
        this.alertify = alertify;
        this.pageNumber = 1;
        this.pageSize = 9;
    }
    resolve(route) {
        return this.recipeService.getRecipes(this.pageNumber, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    }
};
RecipeListResolver.ctorParameters = () => [
    { type: _services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_6__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"] }
];
RecipeListResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RecipeListResolver);



/***/ }),

/***/ "./src/app/_services/alertify.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/alertify.service.ts ***!
  \***********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alertifyjs */ "./node_modules/alertifyjs/build/alertify.js");
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_2__);



let AlertifyService = class AlertifyService {
    constructor() { }
    confirm(message, okCallback) {
        alertifyjs__WEBPACK_IMPORTED_MODULE_2__["confirm"](message, (e) => {
            if (e) {
                okCallback();
            }
            else { }
        });
    }
    success(message) {
        alertifyjs__WEBPACK_IMPORTED_MODULE_2__["success"](message);
    }
    error(message) {
        alertifyjs__WEBPACK_IMPORTED_MODULE_2__["error"](message);
    }
    warning(message) {
        alertifyjs__WEBPACK_IMPORTED_MODULE_2__["warning"](message);
    }
    message(message) {
        alertifyjs__WEBPACK_IMPORTED_MODULE_2__["message"](message);
    }
};
AlertifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertifyService);



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + 'auth/';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]();
        this.photoUrl = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('../../assets/user.png');
        this.currentPhotoUrl = this.photoUrl.asObservable();
    }
    changeMemberPhoto(photoUrl) {
        this.photoUrl.next(photoUrl);
    }
    login(model) {
        return this.http.post(this.baseUrl + 'login', model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            const user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                localStorage.setItem('user', JSON.stringify(user.user));
                this.decodedToken = this.jwtHelper.decodeToken(user.token);
                this.currentUser = user.user;
                this.changeMemberPhoto(this.currentUser.photoUrl);
            }
        }));
    }
    register(user) {
        return this.http.post(this.baseUrl + 'register', user);
    }
    loggedIn() {
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/_services/error.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/_services/error.interceptor.ts ***!
  \************************************************/
/*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function() { return ErrorInterceptorProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let ErrorInterceptor = class ErrorInterceptor {
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            if (error.status === 401) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.statusText);
            }
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                const applicationError = error.headers.get('Application');
                if (applicationError) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(applicationError);
                }
                const serverError = error.error;
                let modalStateErrors = '';
                if (serverError.errors && typeof serverError.errors === 'object') {
                    for (const key in serverError.errors) {
                        if (serverError.errors[key]) {
                            modalStateErrors += serverError.errors[key] + '\n';
                        }
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(modalStateErrors || serverError || 'Server Error');
            }
        }));
    }
};
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);

const ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_services/recipe/recipe.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/recipe/recipe.service.ts ***!
  \****************************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_models_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_models/pagination */ "./src/app/_models/pagination.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        Authorization: 'Bearer ' + localStorage.getItem('token')
    })
};
let RecipeService = class RecipeService {
    constructor(http) {
        this.http = http;
        this.photoUrl = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('../../assets/image.png');
        this.currentPhotoUrl = this.photoUrl.asObservable();
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    changeRecipePhoto(photoUrl) {
        this.photoUrl.next(photoUrl);
    }
    getRecipes(page, itemsPerPage, recipeParams) {
        const paginatedResult = new src_app_models_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatedResult"]();
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        if (recipeParams != null) {
            params = params.append('minTime', recipeParams.minTime);
            params = params.append('maxTime', recipeParams.maxTime);
            params = params.append('category', recipeParams.category);
            // params = params.append('orderBy', recipeParams.orderBy);
        }
        return this.http.get(this.baseUrl + 'recipes', { observe: 'response', params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(repsonse => {
            paginatedResult.result = repsonse.body;
            if (repsonse.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(repsonse.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    }
    getRecipe(id) {
        return this.http.get(this.baseUrl + 'recipes/' + id, httpOptions);
    }
    addNewRecipe(userId, recipe) {
        return this.http.post(this.baseUrl + 'users/' + userId + '/addNewRecipe', recipe);
    }
    deleteRecipe(userId, id) {
        return this.http.delete(this.baseUrl + 'users/' + userId + '/recipes/' + id);
    }
    editRecipe(userId, id, recipe) {
        return this.http.put(this.baseUrl + 'users/' + userId + '/recipes/' + id, recipe);
    }
    // http://localhost:5000/api/users/1/recipes/1/photos/17
    deletePhoto(userId, recipeId, id) {
        return this.http.delete(this.baseUrl + 'users/' + userId + '/recipes/' + recipeId + '/photos/' + id);
    }
    // http://localhost:5000/api/users/1/recipes/1/photos/16/setMain
    setMainPhoto(userId, recipeId, id) {
        return this.http.post(this.baseUrl + 'users/' + userId + '/recipes/' + recipeId + '/photos/' + id + '/setMain', {});
    }
    getCategories() {
        return this.http.get(this.baseUrl + 'recipes' + '/categories');
    }
};
RecipeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RecipeService);



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/pagination */ "./src/app/_models/pagination.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    getUsers(page, itemsPerPage, userParams, likesParam) {
        const paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatedResult"]();
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        if (userParams != null) {
            params = params.append('minAge', userParams.minAge);
            params = params.append('maxAge', userParams.maxAge);
            params = params.append('gender', userParams.gender);
            params = params.append('orderBy', userParams.orderBy);
        }
        if (likesParam === 'Likers') {
            params = params.append('likers', 'true');
        }
        if (likesParam === 'Likees') {
            params = params.append('likees', 'true');
        }
        return this.http.get(this.baseUrl + 'users', { observe: 'response', params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(repsonse => {
            paginatedResult.result = repsonse.body;
            if (repsonse.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(repsonse.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    }
    getUser(id) {
        return this.http.get(this.baseUrl + 'users/' + id);
    }
    updateUser(id, user) {
        return this.http.put(this.baseUrl + 'users/' + id, user);
    }
    setMainPhoto(userId, id) {
        return this.http.post(this.baseUrl + 'users/' + userId + '/photos/' + id + '/setMain', {});
    }
    deletePhoto(userId, id) {
        return this.http.delete(this.baseUrl + 'users/' + userId + '/photos/' + id);
    }
    sendLike(id, recipientId) {
        return this.http.post(this.baseUrl + 'users/' + id + '/like/' + recipientId, {});
    }
    addToFav(id, recipeId) {
        return this.http.post(this.baseUrl + 'users/' + id + '/addToFav/' + recipeId, {});
    }
    // http://localhost:5000/api/users/7/favouriteRecipes
    getFavRecipes(id) {
        return this.http.get(this.baseUrl + 'users/' + id + '/favouriteRecipes');
    }
    getMessages(id, page, itemsPerPage, messageContainer) {
        const paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatedResult"]();
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('MessageContainer', messageContainer);
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        return this.http
            .get(this.baseUrl + 'users/' + id + '/messages', {
            observe: 'response',
            params
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') !== null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    }
    getMessageThread(id, recipientId) {
        return this.http.get(this.baseUrl + 'users/' + id + '/messages/thread/' + recipientId);
    }
    sendMessage(id, message) {
        return this.http.post(this.baseUrl + 'users/' + id + '/messages', message);
    }
    deleteMessage(id, userId) {
        return this.http.post(this.baseUrl + 'users/' + userId + '/messages/' + id, {});
    }
    markAsRead(userId, messageId) {
        this.http.post(this.baseUrl + 'users/' + userId + '/messages/' + messageId + '/read', {})
            .subscribe();
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");




let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
    }
    ngOnInit() {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        if (token) {
            this.authService.decodedToken = this.jwtHelper.decodeToken(token);
        }
        if (user) {
            this.authService.currentUser = user;
            this.authService.changeMemberPhoto(user.photoUrl);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, CustomHammerConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHammerConfig", function() { return CustomHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_services/error.interceptor */ "./src/app/_services/error.interceptor.ts");
/* harmony import */ var _recipes_recipes_list_recipes_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./recipes/recipes-list/recipes-list.component */ "./src/app/recipes/recipes-list/recipes-list.component.ts");
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./members/member-list/member-list.component */ "./src/app/members/member-list/member-list.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _members_member_list_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./members/member-list/member-card/member-card.component */ "./src/app/members/member-list/member-card/member-card.component.ts");
/* harmony import */ var _recipes_recipes_list_recipes_card_recipes_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./recipes/recipes-list/recipes-card/recipes-card.component */ "./src/app/recipes/recipes-list/recipes-card/recipes-card.component.ts");
/* harmony import */ var _members_member_list_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./members/member-list/member-detail/member-detail.component */ "./src/app/members/member-list/member-detail/member-detail.component.ts");
/* harmony import */ var _recipes_recipes_list_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./recipes/recipes-list/recipe-detail/recipe-detail.component */ "./src/app/recipes/recipes-list/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_resolvers/member-detail-resolver */ "./src/app/_resolvers/member-detail-resolver.ts");
/* harmony import */ var _resolvers_recipe_detail_resolver__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_resolvers/recipe-detail-resolver */ "./src/app/_resolvers/recipe-detail-resolver.ts");
/* harmony import */ var _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_resolvers/member-list-resolver */ "./src/app/_resolvers/member-list-resolver.ts");
/* harmony import */ var _resolvers_recipe_list_resolver__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_resolvers/recipe-list-resolver */ "./src/app/_resolvers/recipe-list-resolver.ts");
/* harmony import */ var _members_member_list_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./members/member-list/member-edit/member-edit.component */ "./src/app/members/member-list/member-edit/member-edit.component.ts");
/* harmony import */ var _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./_resolvers/member-edit-resolver */ "./src/app/_resolvers/member-edit-resolver.ts");
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./_guards/prevent-unsaved-changes.guard */ "./src/app/_guards/prevent-unsaved-changes.guard.ts");
/* harmony import */ var _members_member_list_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./members/member-list/photo-editor/photo-editor.component */ "./src/app/members/member-list/photo-editor/photo-editor.component.ts");
/* harmony import */ var _members_member_list_member_recipe_card_member_recipe_card_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./members/member-list/member-recipe-card/member-recipe-card.component */ "./src/app/members/member-list/member-recipe-card/member-recipe-card.component.ts");
/* harmony import */ var _recipes_recipes_list_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./recipes/recipes-list/add-recipe/add-recipe.component */ "./src/app/recipes/recipes-list/add-recipe/add-recipe.component.ts");
/* harmony import */ var _members_member_list_recipe_editor_recipe_editor_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./members/member-list/recipe-editor/recipe-editor.component */ "./src/app/members/member-list/recipe-editor/recipe-editor.component.ts");
/* harmony import */ var _recipes_recipes_list_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./recipes/recipes-list/recipe-edit/recipe-edit.component */ "./src/app/recipes/recipes-list/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var _resolvers_recipe_edit_resolver__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./_resolvers/recipe-edit-resolver */ "./src/app/_resolvers/recipe-edit-resolver.ts");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js");
/* harmony import */ var _resolvers_lists_resovler__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./_resolvers/lists.resovler */ "./src/app/_resolvers/lists.resovler.ts");
/* harmony import */ var _lists_like_lists_like_lists_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./lists/like-lists/like-lists.component */ "./src/app/lists/like-lists/like-lists.component.ts");
/* harmony import */ var _lists_like_lists_favRecipe_lists_favRecipe_lists_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./lists/like-lists/favRecipe-lists/favRecipe-lists.component */ "./src/app/lists/like-lists/favRecipe-lists/favRecipe-lists.component.ts");
/* harmony import */ var _resolvers_fav_recipes_resolver__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./_resolvers/fav-recipes-resolver */ "./src/app/_resolvers/fav-recipes-resolver.ts");
/* harmony import */ var _lists_like_lists_favRecipe_lists_fav_recipe_card_fav_recipe_card_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./lists/like-lists/favRecipe-lists/fav-recipe-card/fav-recipe-card.component */ "./src/app/lists/like-lists/favRecipe-lists/fav-recipe-card/fav-recipe-card.component.ts");
/* harmony import */ var _models_messages_resolver__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./_models/messages-resolver */ "./src/app/_models/messages-resolver.ts");
/* harmony import */ var _members_member_list_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./members/member-list/member-messages/member-messages.component */ "./src/app/members/member-list/member-messages/member-messages.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");















































function tokenGetter() {
    return localStorage.getItem('token');
}
class CustomHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            pinch: { enable: false },
            rotate: { enable: false }
        };
    }
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
            _recipes_recipes_list_recipes_list_component__WEBPACK_IMPORTED_MODULE_17__["RecipesListComponent"],
            _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_18__["MemberListComponent"],
            _lists_like_lists_like_lists_component__WEBPACK_IMPORTED_MODULE_40__["LikeListsComponent"],
            _lists_like_lists_favRecipe_lists_favRecipe_lists_component__WEBPACK_IMPORTED_MODULE_41__["FavRecipeListsComponent"],
            _messages_messages_component__WEBPACK_IMPORTED_MODULE_19__["MessagesComponent"],
            _members_member_list_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_21__["MemberCardComponent"],
            _recipes_recipes_list_recipes_card_recipes_card_component__WEBPACK_IMPORTED_MODULE_22__["RecipesCardComponent"],
            _members_member_list_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_23__["MemberDetailComponent"],
            _lists_like_lists_favRecipe_lists_fav_recipe_card_fav_recipe_card_component__WEBPACK_IMPORTED_MODULE_43__["FavRecipeCardComponent"],
            _recipes_recipes_list_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_24__["RecipeDetailComponent"],
            _members_member_list_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_29__["MemberEditComponent"],
            _members_member_list_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_32__["PhotoEditorComponent"],
            _members_member_list_member_recipe_card_member_recipe_card_component__WEBPACK_IMPORTED_MODULE_33__["MemberRecipeCardComponent"],
            _recipes_recipes_list_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_34__["AddRecipeComponent"],
            _members_member_list_recipe_editor_recipe_editor_component__WEBPACK_IMPORTED_MODULE_35__["RecipeEditorComponent"],
            _members_member_list_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_45__["MemberMessagesComponent"],
            _recipes_recipes_list_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_36__["RecipeEditComponent"],
            time_ago_pipe__WEBPACK_IMPORTED_MODULE_38__["TimeAgoPipe"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_46__["FooterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_20__["appRoutes"]),
            ngx_gallery__WEBPACK_IMPORTED_MODULE_9__["NgxGalleryModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ButtonsModule"].forRoot(),
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtModule"].forRoot({
                config: {
                    tokenGetter,
                    whitelistedDomains: ['localhost:5000'],
                    blacklistedRoutes: ['localhost:5000/api/auth']
                }
            })
        ],
        providers: [
            _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
            _services_error_interceptor__WEBPACK_IMPORTED_MODULE_16__["ErrorInterceptorProvider"],
            _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_25__["MemberDetailResolver"],
            _resolvers_recipe_detail_resolver__WEBPACK_IMPORTED_MODULE_26__["RecipeDetailResolver"],
            _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_27__["MemberListResolver"],
            _resolvers_recipe_list_resolver__WEBPACK_IMPORTED_MODULE_28__["RecipeListResolver"],
            _models_messages_resolver__WEBPACK_IMPORTED_MODULE_44__["MessagesResolver"],
            _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_30__["MemberEditResolver"],
            _resolvers_fav_recipes_resolver__WEBPACK_IMPORTED_MODULE_42__["FavRecipesResolver"],
            _resolvers_recipe_edit_resolver__WEBPACK_IMPORTED_MODULE_37__["RecipeEditResolver"],
            _resolvers_lists_resovler__WEBPACK_IMPORTED_MODULE_39__["ListsResolver"],
            _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_31__["PreventUnsavedChanges"],
            { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_GESTURE_CONFIG"], useClass: CustomHammerConfig }
        ],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 4.5rem;            /* Footer height */\r\n    color: black;\r\n    left: 0;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsY0FBYyxhQUFhLGtCQUFrQjtJQUM3QyxZQUFZO0lBQ1osT0FBTztFQUNUIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNC41cmVtOyAgICAgICAgICAgIC8qIEZvb3RlciBoZWlnaHQgKi9cclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGxlZnQ6IDA7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HomeComponent = class HomeComponent {
    constructor(http) {
        this.http = http;
        this.registerMode = false;
    }
    ngOnInit() {
    }
    registerToggle() {
        this.registerMode = true;
        // przełącznik
    }
    cancelRegisterMode(registerMode) {
        this.registerMode = registerMode;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/lists/like-lists/favRecipe-lists/fav-recipe-card/fav-recipe-card.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/lists/like-lists/favRecipe-lists/fav-recipe-card/fav-recipe-card.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card:hover img{\n    -webkit-transform: scale(1.1, 1.1);\n            transform: scale(1.1, 1.1);\n    -webkit-transition-duration: 500ms;\n            transition-duration: 500ms;\n    -webkit-transition-timing-function: ease-out;\n            transition-timing-function: ease-out;\n    -webkit-filter: brightness(40%);\n\t-moz-filter: brightness(40%);\n\t-o-filter: brightness(40%);\n\t-ms-filter: brightness(40%);\n\tfilter: brightness(40%);\n}\n\n.card img{\n    -webkit-transform: scale(1.0, 1.0);\n            transform: scale(1.0, 1.0);\n    -webkit-transition-duration: 500ms;\n            transition-duration: 500ms;\n    -webkit-transition-timing-function: ease-out;\n            transition-timing-function: ease-out;\n    width: 100%;\n    height: 20vw;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -webkit-filter: brightness(100%);\n\t-moz-filter: brightness(100%);\n\t-o-filter: brightness(100%);\n\t-ms-filter: brightness(100%);\n\tfilter: brightness(100%);\n}\n\n.card-img-wrapper {\n    overflow: hidden;\n    position: relative;\n}\n\n.recipe-icons {\n    position: absolute;\n    bottom: -30%;\n    left: 0;\n    right: 0;\n    margin-right: auto;\n    margin-left: auto;\n    opacity: 0;\n}\n\n.card-img-wrapper:hover .recipe-icons{\n    bottom: 40%;\n    opacity: 1;\n}\n\n.animate {\n    -webkit-transition: all 0.7s ease-in-out;\n    transition: all 0.7s ease-in-out;\n}\n\n.bg-opacity {\n  /*#ffba00*/ \n  background: rgba(0, 0, 0, 0.6); \n\n}\n\n.bg-mydark {\n    /*#ffba00*/ \n  background: rgba(52,58,64, 0.7); \n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdHMvbGlrZS1saXN0cy9mYXZSZWNpcGUtbGlzdHMvZmF2LXJlY2lwZS1jYXJkL2Zhdi1yZWNpcGUtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLDRDQUFvQztZQUFwQyxvQ0FBb0M7SUFDcEMsK0JBQStCO0NBQ2xDLDRCQUE0QjtDQUM1QiwwQkFBMEI7Q0FDMUIsMkJBQTJCO0NBQzNCLHVCQUF1QjtBQUN4Qjs7QUFFQTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQiw0Q0FBb0M7WUFBcEMsb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixnQ0FBZ0M7Q0FDbkMsNkJBQTZCO0NBQzdCLDJCQUEyQjtDQUMzQiw0QkFBNEI7Q0FDNUIsd0JBQXdCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx3Q0FBZ0M7SUFBaEMsZ0NBQWdDO0FBQ3BDOztBQUdBO0VBQ0UsVUFBVTtFQUNWLDhCQUE4Qjs7QUFFaEM7O0FBRUE7SUFDSSxVQUFVO0VBQ1osK0JBQStCO0VBQy9CIiwiZmlsZSI6InNyYy9hcHAvbGlzdHMvbGlrZS1saXN0cy9mYXZSZWNpcGUtbGlzdHMvZmF2LXJlY2lwZS1jYXJkL2Zhdi1yZWNpcGUtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQ6aG92ZXIgaW1ne1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAtd2Via2l0LWZpbHRlcjogYnJpZ2h0bmVzcyg0MCUpO1xuXHQtbW96LWZpbHRlcjogYnJpZ2h0bmVzcyg0MCUpO1xuXHQtby1maWx0ZXI6IGJyaWdodG5lc3MoNDAlKTtcblx0LW1zLWZpbHRlcjogYnJpZ2h0bmVzcyg0MCUpO1xuXHRmaWx0ZXI6IGJyaWdodG5lc3MoNDAlKTtcbn1cblxuLmNhcmQgaW1ne1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wLCAxLjApO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwdnc7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XG5cdC1tb3otZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xuXHQtby1maWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XG5cdC1tcy1maWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XG5cdGZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKTtcbn1cblxuLmNhcmQtaW1nLXdyYXBwZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbi5yZWNpcGUtaWNvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0zMCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmNhcmQtaW1nLXdyYXBwZXI6aG92ZXIgLnJlY2lwZS1pY29uc3tcbiAgICBib3R0b206IDQwJTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uYW5pbWF0ZSB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1pbi1vdXQ7XG59XG5cblxuLmJnLW9wYWNpdHkge1xuICAvKiNmZmJhMDAqLyBcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpOyBcblxufVxuXG4uYmctbXlkYXJrIHtcbiAgICAvKiNmZmJhMDAqLyBcbiAgYmFja2dyb3VuZDogcmdiYSg1Miw1OCw2NCwgMC43KTsgXG4gIH1cblxuIl19 */");

/***/ }),

/***/ "./src/app/lists/like-lists/favRecipe-lists/fav-recipe-card/fav-recipe-card.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/lists/like-lists/favRecipe-lists/fav-recipe-card/fav-recipe-card.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: FavRecipeCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavRecipeCardComponent", function() { return FavRecipeCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");





let FavRecipeCardComponent = class FavRecipeCardComponent {
    constructor(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
    }
    ngOnInit() {
    }
    addToFav(id) {
        this.userService.addToFav(this.authService.decodedToken.nameid, id).subscribe(data => {
            this.alertify.success('Added to fav ' + this.recipe.name);
        }, error => {
            this.alertify.error(error);
        });
    }
};
FavRecipeCardComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FavRecipeCardComponent.prototype, "recipe", void 0);
FavRecipeCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fav-recipe-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fav-recipe-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lists/like-lists/favRecipe-lists/fav-recipe-card/fav-recipe-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fav-recipe-card.component.css */ "./src/app/lists/like-lists/favRecipe-lists/fav-recipe-card/fav-recipe-card.component.css")).default]
    })
], FavRecipeCardComponent);



/***/ }),

/***/ "./src/app/lists/like-lists/favRecipe-lists/favRecipe-lists.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/lists/like-lists/favRecipe-lists/favRecipe-lists.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RzL2xpa2UtbGlzdHMvZmF2UmVjaXBlLWxpc3RzL2ZhdlJlY2lwZS1saXN0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/lists/like-lists/favRecipe-lists/favRecipe-lists.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/lists/like-lists/favRecipe-lists/favRecipe-lists.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FavRecipeListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavRecipeListsComponent", function() { return FavRecipeListsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let FavRecipeListsComponent = class FavRecipeListsComponent {
    constructor(authService, userService, route, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.route = route;
        this.alertify = alertify;
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.recipe = data.recipes;
        });
    }
};
FavRecipeListsComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] }
];
FavRecipeListsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-favRecipe-lists',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favRecipe-lists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lists/like-lists/favRecipe-lists/favRecipe-lists.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favRecipe-lists.component.css */ "./src/app/lists/like-lists/favRecipe-lists/favRecipe-lists.component.css")).default]
    })
], FavRecipeListsComponent);



/***/ }),

/***/ "./src/app/lists/like-lists/like-lists.component.css":
/*!***********************************************************!*\
  !*** ./src/app/lists/like-lists/like-lists.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RzL2xpa2UtbGlzdHMvbGlrZS1saXN0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/lists/like-lists/like-lists.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/lists/like-lists/like-lists.component.ts ***!
  \**********************************************************/
/*! exports provided: LikeListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeListsComponent", function() { return LikeListsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");






let LikeListsComponent = class LikeListsComponent {
    constructor(authService, userService, route, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.route = route;
        this.alertify = alertify;
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.users = data.users.result;
            this.pagination = data.users.pagination;
        });
        this.likesParam = 'Likers';
    }
    loadUsers() {
        this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, null, this.likesParam)
            .subscribe((res) => {
            this.users = res.result;
            this.pagination = res.pagination;
        }, error => {
            this.alertify.error(error);
        });
    }
    pageChanged(event) {
        this.pagination.currentPage = event.page;
        this.loadUsers();
        console.log(this.pagination.currentPage);
    }
};
LikeListsComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"] }
];
LikeListsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-like-lists',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./like-lists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lists/like-lists/like-lists.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./like-lists.component.css */ "./src/app/lists/like-lists/like-lists.component.css")).default]
    })
], LikeListsComponent);



/***/ }),

/***/ "./src/app/members/member-list/member-card/member-card.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/members/member-list/member-card/member-card.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card:hover img{\n    -webkit-transform: scale(1.1, 1.1);\n            transform: scale(1.1, 1.1);\n    -webkit-transition-duration: 500ms;\n            transition-duration: 500ms;\n    -webkit-transition-timing-function: ease-out;\n            transition-timing-function: ease-out;\n    opacity: 0.7;\n}\n\n.card img{\n    -webkit-transform: scale(1.0, 1.0);\n            transform: scale(1.0, 1.0);\n    -webkit-transition-duration: 500ms;\n            transition-duration: 500ms;\n    -webkit-transition-timing-function: ease-out;\n            transition-timing-function: ease-out;\n    width: 100%;\n    height: 20vw;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -webkit-filter: brightness(100%);\n\t-moz-filter: brightness(100%);\n\t-o-filter: brightness(100%);\n\t-ms-filter: brightness(100%);\n\tfilter: brightness(100%);\n}\n\n.card-img-wrapper {\n    overflow: hidden;\n    position: relative;\n}\n\n.member-icons {\n    position: absolute;\n    bottom: -30%;\n    left: 0;\n    right: 0;\n    margin-right: auto;\n    margin-left: auto;\n    opacity: 0;\n}\n\n.card-img-wrapper:hover .member-icons{\n    bottom: 0;\n    opacity: 1;\n}\n\n.animate {\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItbGlzdC9tZW1iZXItY2FyZC9tZW1iZXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLDRDQUFvQztZQUFwQyxvQ0FBb0M7SUFDcEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQiw0Q0FBb0M7WUFBcEMsb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixnQ0FBZ0M7Q0FDbkMsNkJBQTZCO0NBQzdCLDJCQUEyQjtDQUMzQiw0QkFBNEI7Q0FDNUIsd0JBQXdCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx3Q0FBZ0M7SUFBaEMsZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9tZW1iZXItbGlzdC9tZW1iZXItY2FyZC9tZW1iZXItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQ6aG92ZXIgaW1ne1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi5jYXJkIGltZ3tcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCwgMS4wKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMHZ3O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIC13ZWJraXQtZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xuXHQtbW96LWZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKTtcblx0LW8tZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xuXHQtbXMtZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xuXHRmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XG59XG5cbi5jYXJkLWltZy13cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tZW1iZXItaWNvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0zMCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmNhcmQtaW1nLXdyYXBwZXI6aG92ZXIgLm1lbWJlci1pY29uc3tcbiAgICBib3R0b206IDA7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmFuaW1hdGUge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/members/member-list/member-card/member-card.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/members/member-list/member-card/member-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: MemberCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberCardComponent", function() { return MemberCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");





let MemberCardComponent = class MemberCardComponent {
    constructor(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
    }
    ngOnInit() {
    }
    sendLike(id) {
        this.userService.sendLike(this.authService.decodedToken.nameid, id).subscribe(data => {
            this.alertify.success('You have liked ' + this.user.knownAs);
        }, error => {
            this.alertify.error(error);
        });
    }
};
MemberCardComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MemberCardComponent.prototype, "user", void 0);
MemberCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-member-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./member-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/member-card/member-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./member-card.component.css */ "./src/app/members/member-list/member-card/member-card.component.css")).default]
    })
], MemberCardComponent);



/***/ }),

/***/ "./src/app/members/member-list/member-detail/member-detail.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/members/member-list/member-detail/member-detail.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-thumbnail {\n    margin: 25px;\n    width: 85%;\n    height: 85%;\n}\n\n.card-body {\n    padding: 0 25px;\n}\n\n.card-footer {\n    padding: 10px 15px;\n    background-color: #fff;\n    border-top: none;\n}\n\nhr{\n    color: white;\n}\n\n.recipes-body\n{\n    background-color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nimg\n{\n width: 168px;\n height: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItbGlzdC9tZW1iZXItZGV0YWlsL21lbWJlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsNEVBQTRFO0FBQ2hGOztBQUVBOztDQUVDLFlBQVk7Q0FDWixhQUFhO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL21lbWJlci1saXN0L21lbWJlci1kZXRhaWwvbWVtYmVyLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy10aHVtYm5haWwge1xuICAgIG1hcmdpbjogMjVweDtcbiAgICB3aWR0aDogODUlO1xuICAgIGhlaWdodDogODUlO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAwIDI1cHg7XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuaHJ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucmVjaXBlcy1ib2R5XG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuaW1nXG57XG4gd2lkdGg6IDE2OHB4O1xuIGhlaWdodDogMjAwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/members/member-list/member-detail/member-detail.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/members/member-list/member-detail/member-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: MemberDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailComponent", function() { return MemberDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let MemberDetailComponent = class MemberDetailComponent {
    constructor(userService, alertify, route) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.user = data.user;
            this.route.queryParams.subscribe(params => {
                const selectTab = params.tab;
                this.memberTabs.tabs[selectTab > 0 ? selectTab : 0].active = true;
            });
        });
    }
    selectTab(tabId) {
        this.memberTabs.tabs[tabId].active = true;
    }
};
MemberDetailComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('memberTabs', { static: true })
], MemberDetailComponent.prototype, "memberTabs", void 0);
MemberDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-member-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./member-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/member-detail/member-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./member-detail.component.css */ "./src/app/members/member-list/member-detail/member-detail.component.css")).default]
    })
], MemberDetailComponent);



/***/ }),

/***/ "./src/app/members/member-list/member-edit/member-edit.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/members/member-list/member-edit/member-edit.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-thumbnail {\n    margin: 25px;\n    width: 85%;\n    height: 85%;\n}\n\n.card-body {\n    padding: 0 25px;\n}\n\n.card-footer {\n    padding: 10px 15px;\n    background-color: #fff;\n    border-top: none;\n}\n\nhr{\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItbGlzdC9tZW1iZXItZWRpdC9tZW1iZXItZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9tZW1iZXItbGlzdC9tZW1iZXItZWRpdC9tZW1iZXItZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy10aHVtYm5haWwge1xuICAgIG1hcmdpbjogMjVweDtcbiAgICB3aWR0aDogODUlO1xuICAgIGhlaWdodDogODUlO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAwIDI1cHg7XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuaHJ7XG4gICAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/members/member-list/member-edit/member-edit.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/members/member-list/member-edit/member-edit.component.ts ***!
  \**************************************************************************/
/*! exports provided: MemberEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberEditComponent", function() { return MemberEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");






let MemberEditComponent = class MemberEditComponent {
    constructor(route, alertify, userService, authService) {
        this.route = route;
        this.alertify = alertify;
        this.userService = userService;
        this.authService = authService;
    }
    unloadNotlification($event) {
        if (this.editForm.dirty) {
            $event.returnValue = true;
        }
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.user = data.user;
            this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
        });
    }
    updateUser() {
        this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(next => {
            this.alertify.success('Profile updated successfully');
            this.editForm.reset(this.user);
        }, error => {
            this.alertify.error(error);
        });
    }
    updateMainPhoto(photoUrl) {
        this.user.photoUrl = photoUrl;
    }
};
MemberEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editForm', { static: true })
], MemberEditComponent.prototype, "editForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload', ['$event'])
], MemberEditComponent.prototype, "unloadNotlification", null);
MemberEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-member-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./member-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/member-edit/member-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./member-edit.component.css */ "./src/app/members/member-list/member-edit/member-edit.component.css")).default]
    })
], MemberEditComponent);



/***/ }),

/***/ "./src/app/members/member-list/member-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvbWVtYmVyLWxpc3QvbWVtYmVyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/members/member-list/member-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListComponent", function() { return MemberListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let MemberListComponent = class MemberListComponent {
    constructor(userService, alertify, route) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.genderList = [{ value: 'male', display: 'Males' }, { value: 'female', display: 'Females' }];
        this.userParams = {};
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.users = data.users.result;
            this.pagination = data.users.pagination;
        });
        this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.userParams.orderBy = 'lastActive';
    }
    pageChanged(event) {
        this.pagination.currentPage = event.page;
        this.loadUsers();
        console.log(this.pagination.currentPage);
    }
    resetFilters() {
        this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.loadUsers();
    }
    loadUsers() {
        this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams)
            .subscribe((res) => {
            this.users = res.result;
            this.pagination = res.pagination;
        }, error => {
            this.alertify.error(error);
        });
    }
};
MemberListComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
MemberListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-member-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./member-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/member-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./member-list.component.css */ "./src/app/members/member-list/member-list.component.css")).default]
    })
], MemberListComponent);



/***/ }),

/***/ "./src/app/members/member-list/member-messages/member-messages.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/members/member-list/member-messages/member-messages.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\r\n    border: none;\r\n  }\r\n  \r\n  .chat {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  .chat li {\r\n    margin-bottom: 10px;\r\n    padding-bottom: 10px;\r\n    border-bottom: 1px dotted #B3A9A9;\r\n  }\r\n  \r\n  .rounded-circle {\r\n    height: 50px;\r\n    width: 50px;\r\n  }\r\n  \r\n  .card-body {\r\n    overflow-y: scroll;\r\n    height: 400px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItbGlzdC9tZW1iZXItbWVzc2FnZXMvbWVtYmVyLW1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7RUFDWjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL21lbWJlci1saXN0L21lbWJlci1tZXNzYWdlcy9tZW1iZXItbWVzc2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmNoYXQge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGF0IGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI0IzQTlBOTtcclxuICB9XHJcbiAgXHJcbiAgLnJvdW5kZWQtY2lyY2xlIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1ib2R5IHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/members/member-list/member-messages/member-messages.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/members/member-list/member-messages/member-messages.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MemberMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberMessagesComponent", function() { return MemberMessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let MemberMessagesComponent = class MemberMessagesComponent {
    constructor(userService, authService, alertify) {
        this.userService = userService;
        this.authService = authService;
        this.alertify = alertify;
        this.newMessage = {};
    }
    ngOnInit() {
        this.loadMessages();
    }
    loadMessages() {
        const currentUserId = +this.authService.decodedToken.nameid;
        this.userService.getMessageThread(this.authService.decodedToken.nameid, this.recipientId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(messages => {
            for (let i = 0; i < messages.length; i++) {
                if (messages[i].isRead === false && messages[i].recipientId === currentUserId) {
                    this.userService.markAsRead(currentUserId, messages[i].id);
                }
            }
        }))
            .subscribe(messages => {
            this.messages = messages;
        }, error => {
            this.alertify.error(error);
        });
    }
    sendMessage() {
        this.newMessage.recipientId = this.recipientId;
        this.userService.sendMessage(this.authService.decodedToken.nameid, this.newMessage)
            .subscribe((message) => {
            this.messages.unshift(message);
            this.newMessage.content = '';
        }, error => {
            this.alertify.error(error);
        });
    }
};
MemberMessagesComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MemberMessagesComponent.prototype, "recipientId", void 0);
MemberMessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-member-messages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./member-messages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/member-messages/member-messages.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./member-messages.component.css */ "./src/app/members/member-list/member-messages/member-messages.component.css")).default]
    })
], MemberMessagesComponent);



/***/ }),

/***/ "./src/app/members/member-list/member-recipe-card/member-recipe-card.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/members/member-list/member-recipe-card/member-recipe-card.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card:hover img{\n    -webkit-transform: scale(1.1, 1.1);\n            transform: scale(1.1, 1.1);\n    -webkit-transition-duration: 500ms;\n            transition-duration: 500ms;\n    -webkit-transition-timing-function: ease-out;\n            transition-timing-function: ease-out;\n    -webkit-filter: brightness(40%);\n\t-moz-filter: brightness(40%);\n\t-o-filter: brightness(40%);\n\t-ms-filter: brightness(40%);\n\tfilter: brightness(40%);\n}\n\n.card img{\n    -webkit-transform: scale(1.0, 1.0);\n            transform: scale(1.0, 1.0);\n    -webkit-transition-duration: 500ms;\n            transition-duration: 500ms;\n    -webkit-transition-timing-function: ease-out;\n            transition-timing-function: ease-out;\n    width: 100%;\n    height: 17vw;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -webkit-filter: brightness(100%);\n\t-moz-filter: brightness(100%);\n\t-o-filter: brightness(100%);\n\t-ms-filter: brightness(100%);\n\tfilter: brightness(100%);\n}\n\n.card-img-wrapper {\n    overflow: hidden;\n    position: relative;\n}\n\n.recipe-icons {\n    position: absolute;\n    bottom: -30%;\n    left: 0;\n    right: 0;\n    margin-right: auto;\n    margin-left: auto;\n    opacity: 0;\n}\n\n.card-img-wrapper:hover .recipe-icons{\n    bottom: 40%;\n    opacity: 1;\n}\n\n.animate {\n    -webkit-transition: all 0.7s ease-in-out;\n    transition: all 0.7s ease-in-out;\n}\n\n.bg-opacity {\n  /*#ffba00*/ \n  background: rgba(0, 0, 0, 0.6); \n\n}\n\n.bg-mydark {\n    /*#ffba00*/ \n  background: rgba(52,58,64, 0.7); \n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItbGlzdC9tZW1iZXItcmVjaXBlLWNhcmQvbWVtYmVyLXJlY2lwZS1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsNENBQW9DO1lBQXBDLG9DQUFvQztJQUNwQywrQkFBK0I7Q0FDbEMsNEJBQTRCO0NBQzVCLDBCQUEwQjtDQUMxQiwyQkFBMkI7Q0FDM0IsdUJBQXVCO0FBQ3hCOztBQUVBO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLDRDQUFvQztZQUFwQyxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLGdDQUFnQztDQUNuQyw2QkFBNkI7Q0FDN0IsMkJBQTJCO0NBQzNCLDRCQUE0QjtDQUM1Qix3QkFBd0I7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixPQUFPO0lBQ1AsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHdDQUFnQztJQUFoQyxnQ0FBZ0M7QUFDcEM7O0FBR0E7RUFDRSxVQUFVO0VBQ1YsOEJBQThCOztBQUVoQzs7QUFFQTtJQUNJLFVBQVU7RUFDWiwrQkFBK0I7RUFDL0IiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL21lbWJlci1saXN0L21lbWJlci1yZWNpcGUtY2FyZC9tZW1iZXItcmVjaXBlLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkOmhvdmVyIGltZ3tcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJyaWdodG5lc3MoNDAlKTtcblx0LW1vei1maWx0ZXI6IGJyaWdodG5lc3MoNDAlKTtcblx0LW8tZmlsdGVyOiBicmlnaHRuZXNzKDQwJSk7XG5cdC1tcy1maWx0ZXI6IGJyaWdodG5lc3MoNDAlKTtcblx0ZmlsdGVyOiBicmlnaHRuZXNzKDQwJSk7XG59XG5cbi5jYXJkIGltZ3tcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCwgMS4wKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxN3Z3O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIC13ZWJraXQtZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xuXHQtbW96LWZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKTtcblx0LW8tZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xuXHQtbXMtZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xuXHRmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XG59XG5cbi5jYXJkLWltZy13cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG4ucmVjaXBlLWljb25zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMzAlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5jYXJkLWltZy13cmFwcGVyOmhvdmVyIC5yZWNpcGUtaWNvbnN7XG4gICAgYm90dG9tOiA0MCU7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmFuaW1hdGUge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2UtaW4tb3V0O1xufVxuXG5cbi5iZy1vcGFjaXR5IHtcbiAgLyojZmZiYTAwKi8gXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTsgXG5cbn1cblxuLmJnLW15ZGFyayB7XG4gICAgLyojZmZiYTAwKi8gXG4gIGJhY2tncm91bmQ6IHJnYmEoNTIsNTgsNjQsIDAuNyk7IFxuICB9XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/members/member-list/member-recipe-card/member-recipe-card.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/members/member-list/member-recipe-card/member-recipe-card.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MemberRecipeCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberRecipeCardComponent", function() { return MemberRecipeCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");





let MemberRecipeCardComponent = class MemberRecipeCardComponent {
    constructor(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
    }
    ngOnInit() {
    }
    addToFav(id) {
        this.userService.addToFav(this.authService.decodedToken.nameid, id).subscribe(data => {
            this.alertify.success('Added to fav ' + this.recipe.name);
        }, error => {
            this.alertify.error(error);
        });
    }
};
MemberRecipeCardComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MemberRecipeCardComponent.prototype, "recipe", void 0);
MemberRecipeCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-member-recipe-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./member-recipe-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/member-recipe-card/member-recipe-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./member-recipe-card.component.css */ "./src/app/members/member-list/member-recipe-card/member-recipe-card.component.css")).default]
    })
], MemberRecipeCardComponent);



/***/ }),

/***/ "./src/app/members/member-list/photo-editor/photo-editor.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/members/member-list/photo-editor/photo-editor.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img.img-thumbnail {\n    height: 100px;\n    min-width: 100px !important;\n    margin-bottom: 2px;\n}\n\n.nv-file-over {\n    border: dotted 3px red;\n\n}\n\ninput [type = file] {\n    color: transparent;\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItbGlzdC9waG90by1lZGl0b3IvcGhvdG8tZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL21lbWJlci1saXN0L3Bob3RvLWVkaXRvci9waG90by1lZGl0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZy5pbWctdGh1bWJuYWlsIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1pbi13aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5udi1maWxlLW92ZXIge1xuICAgIGJvcmRlcjogZG90dGVkIDNweCByZWQ7XG5cbn1cblxuaW5wdXQgW3R5cGUgPSBmaWxlXSB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufSAiXX0= */");

/***/ }),

/***/ "./src/app/members/member-list/photo-editor/photo-editor.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/members/member-list/photo-editor/photo-editor.component.ts ***!
  \****************************************************************************/
/*! exports provided: PhotoEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoEditorComponent", function() { return PhotoEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");







let PhotoEditorComponent = class PhotoEditorComponent {
    constructor(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.getMemberPhotoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hasBaseDropZoneOver = false;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ngOnInit() {
        this.initializeUploader();
    }
    fileOverBase(e) {
        this.hasBaseDropZoneOver = e;
    }
    initializeUploader() {
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/photos',
            authToken: 'Bearer ' + localStorage.getItem('token'),
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024
        });
        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        this.uploader.onSuccessItem = (item, response, status, headers) => {
            if (response) {
                const res = JSON.parse(response);
                const photo = {
                    id: res.id,
                    url: res.url,
                    dateAdded: res.dateAdded,
                    description: res.description,
                    isMain: res.isMain
                };
                this.photos.push(photo);
                if (photo.isMain) {
                    this.authService.changeMemberPhoto(photo.url);
                    this.authService.currentUser.photoUrl = photo.url;
                    localStorage.setItem('user', JSON.stringify(this.authService.currentUser));
                }
            }
        };
    }
    setMainPhoto(photo) {
        this.userService.setMainPhoto(this.authService.decodedToken.nameid, photo.id).subscribe(() => {
            this.currentMain = this.photos.filter(p => p.isMain === true)[0];
            this.currentMain.isMain = false;
            photo.isMain = true;
            this.authService.changeMemberPhoto(photo.url);
            this.authService.currentUser.photoUrl = photo.url;
            localStorage.setItem('user', JSON.stringify(this.authService.currentUser));
        }, error => {
            this.alertify.error(error);
        });
    }
    deletePhoto(id) {
        this.alertify.confirm('Are you sure you want to delete this photo?', () => {
            this.userService.deletePhoto(this.authService.decodedToken.nameid, id).subscribe(() => {
                this.photos.splice(this.photos.findIndex(p => p.id === id), 1);
                this.alertify.success('Photo has been deleted');
            }, error => {
                this.alertify.error('Failed to delete the photo');
            });
        });
    }
};
PhotoEditorComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhotoEditorComponent.prototype, "photos", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PhotoEditorComponent.prototype, "getMemberPhotoChange", void 0);
PhotoEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-photo-editor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./photo-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/photo-editor/photo-editor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./photo-editor.component.css */ "./src/app/members/member-list/photo-editor/photo-editor.component.css")).default]
    })
], PhotoEditorComponent);



/***/ }),

/***/ "./src/app/members/member-list/recipe-editor/recipe-editor.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/members/member-list/recipe-editor/recipe-editor.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\r\n    width: 150px; /* You can set the dimensions to whatever you want */\r\n    height: 150px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItbGlzdC9yZWNpcGUtZWRpdG9yL3JlY2lwZS1lZGl0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVksRUFBRSxvREFBb0Q7SUFDbEUsYUFBYTtJQUNiLG9CQUFpQjtPQUFqQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL21lbWJlci1saXN0L3JlY2lwZS1lZGl0b3IvcmVjaXBlLWVkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIHdpZHRoOiAxNTBweDsgLyogWW91IGNhbiBzZXQgdGhlIGRpbWVuc2lvbnMgdG8gd2hhdGV2ZXIgeW91IHdhbnQgKi9cclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/members/member-list/recipe-editor/recipe-editor.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/members/member-list/recipe-editor/recipe-editor.component.ts ***!
  \******************************************************************************/
/*! exports provided: RecipeEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditorComponent", function() { return RecipeEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var src_app_services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/recipe/recipe.service */ "./src/app/_services/recipe/recipe.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");





let RecipeEditorComponent = class RecipeEditorComponent {
    constructor(alertify, recipeService, authService) {
        this.alertify = alertify;
        this.recipeService = recipeService;
        this.authService = authService;
    }
    ngOnInit() {
    }
    deleteRecipe(id) {
        this.alertify.confirm('Are you sure you want to delete this recipe?', () => {
            this.recipeService.deleteRecipe(this.authService.decodedToken.nameid, id).subscribe(() => {
                this.recipes.splice(this.recipes.findIndex(p => p.id === id), 1);
                this.alertify.success('Recipe has been deleted');
            }, error => {
                this.alertify.error('Failed to delete the recipe');
            });
        });
    }
};
RecipeEditorComponent.ctorParameters = () => [
    { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"] },
    { type: src_app_services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipeEditorComponent.prototype, "recipes", void 0);
RecipeEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-editor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/recipe-editor/recipe-editor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-editor.component.css */ "./src/app/members/member-list/recipe-editor/recipe-editor.component.css")).default]
    })
], RecipeEditorComponent);



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    margin-top: 15px;\r\n  }\r\n\r\n  .img-circle {\r\n    max-height: 50px;\r\n  }\r\n\r\n  td {\r\n    vertical-align: middle;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmltZy1jaXJjbGUge1xyXG4gICAgbWF4LWhlaWdodDogNTBweDtcclxuICB9XHJcblxyXG4gIHRkIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");






let MessagesComponent = class MessagesComponent {
    constructor(userService, authService, route, alertify) {
        this.userService = userService;
        this.authService = authService;
        this.route = route;
        this.alertify = alertify;
        this.messageContainer = 'Unread';
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.messages = data.messages.result;
            this.pagination = data.messages.pagination;
        });
    }
    loadMessages() {
        this.userService
            .getMessages(this.authService.decodedToken.nameid, this.pagination.currentPage, this.pagination.itemsPerPage, this.messageContainer)
            .subscribe((res) => {
            this.messages = res.result;
            this.pagination = res.pagination;
        }, error => {
            this.alertify.error(error);
        });
    }
    deleteMessage(id) {
        this.alertify.confirm('Are you sure you want to delete this message?', () => {
            this.userService.deleteMessage(id, this.authService.decodedToken.nameid).subscribe(() => {
                this.messages.splice(this.messages.findIndex(m => m.id === id), 1);
                this.alertify.success('Message has been deleted');
            }, error => {
                this.alertify.error('Failed to delete the message');
            });
        });
    }
    pageChanged(event) {
        this.pagination.currentPage = event.page;
        this.loadMessages();
    }
};
MessagesComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"] }
];
MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")).default]
    })
], MessagesComponent);



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropdown-toggle, .dropdown-item {\n    cursor: pointer;\n}\n\n.navbar {\n    font-size: 100%;\n    text-transform: uppercase;\n    font-weight: 600;\n}\n\n.mt-4, .my-4 {\n    margin-top: 2.4rem !important;\n}\n\nimg {\n    max-height: 50px;\n    border: 1px solid white;\n    display: inline;\n}\n\nli {\n    margin-bottom: 10px;\n}\n\n.navbar li a{\n    display: inline-block;\n    color: #000;\n    text-decoration: none;\n}\n\nli {\n    margin-bottom: 10px;\n}\n\n.navbar li a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 2px;\n    background: #000;\n    -webkit-transition: width .4s;\n    transition: width .4s;\n}\n\n.navbar li a:hover::after {\n    width: 100%;\n    -webkit-transition: width .4s;\n    transition: width .4s;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUlBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBSUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFFBQVE7SUFDUixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDZCQUFxQjtJQUFyQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsNkJBQXFCO0lBQXJCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi10b2dnbGUsIC5kcm9wZG93bi1pdGVtIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZiYXIge1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tdC00LCAubXktNCB7XG4gICAgbWFyZ2luLXRvcDogMi40cmVtICFpbXBvcnRhbnQ7XG59XG5cbmltZyB7XG4gICAgbWF4LWhlaWdodDogNTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59IFxuXG5cblxubGkge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5uYXZiYXIgbGkgYXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5saSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuXG5cbi5uYXZiYXIgbGkgYTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggLjRzO1xufVxuXG4ubmF2YmFyIGxpIGE6aG92ZXI6OmFmdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAuNHM7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let NavComponent = class NavComponent {
    constructor(authService, alertifyService, router) {
        this.authService = authService;
        this.alertifyService = alertifyService;
        this.router = router;
        this.model = {};
        this.isCollapsed = false;
    }
    ngOnInit() {
        this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
    }
    login() {
        this.authService.login(this.model).subscribe(next => {
            this.alertifyService.success('Logged in succesfully');
        }, error => {
            this.alertifyService.error(error);
        }, () => {
            this.router.navigate(['recipes']);
        });
    }
    loggedIn() {
        return this.authService.loggedIn();
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.authService.decodedToken = null;
        this.authService.currentUser = null;
        this.alertifyService.message('Logged Out!');
        this.router.navigate(['/home']);
    }
};
NavComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
        providers: [{ provide: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDropdownConfig"], useValue: { isAnimated: true, autoClose: true } }],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/recipes/recipes-list/add-recipe/add-recipe.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/recipes/recipes-list/add-recipe/add-recipe.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy1saXN0L2FkZC1yZWNpcGUvYWRkLXJlY2lwZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/recipes/recipes-list/add-recipe/add-recipe.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/recipes/recipes-list/add-recipe/add-recipe.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecipeComponent", function() { return AddRecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/recipe/recipe.service */ "./src/app/_services/recipe/recipe.service.ts");







let AddRecipeComponent = class AddRecipeComponent {
    constructor(fb, alertifyService, router, recipeService, authService) {
        this.fb = fb;
        this.alertifyService = alertifyService;
        this.router = router;
        this.recipeService = recipeService;
        this.authService = authService;
    }
    ngOnInit() {
        this.createRecipeForm();
        this.getCategories();
    }
    createRecipeForm() {
        this.addRecipeForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ingredients: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            preparationTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            categoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    createRecipe(id) {
        if (this.addRecipeForm.valid) {
            this.recipe = Object.assign({}, this.addRecipeForm.value);
            this.recipeService.addNewRecipe(this.authService.currentUser.id, this.recipe)
                .subscribe((result) => {
                this.alertifyService.success('New recipe has been added!');
                // tslint:disable-next-line: no-shadowed-variable
                const id = result.id;
                this.router.navigate([`/recipe/edit/${id}`]);
            }, error => {
                this.alertifyService.error(error);
            });
        }
    }
    cancel() {
        this.router.navigate(['members']);
        this.alertifyService.warning('Cancelled');
    }
    getCategories() {
        this.recipeService.getCategories().subscribe(response => {
            this.categories = response;
        }, error => {
            this.alertifyService.error(error);
        });
    }
};
AddRecipeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_6__["RecipeService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
AddRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-recipe',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-recipe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes-list/add-recipe/add-recipe.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-recipe.component.css */ "./src/app/recipes/recipes-list/add-recipe/add-recipe.component.css")).default]
    })
], AddRecipeComponent);



/***/ }),

/***/ "./src/app/recipes/recipes-list/recipe-detail/recipe-detail.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/recipes/recipes-list/recipe-detail/recipe-detail.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".description{\r\n    font-family: 'Gotu', sans-serif;\r\n    color: black;\r\n}\r\n\r\n.img-fluid{\r\n    width: 500px;\r\n    height: 400px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGVzLWxpc3QvcmVjaXBlLWRldGFpbC9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7SUFDL0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBlcy9yZWNpcGVzLWxpc3QvcmVjaXBlLWRldGFpbC9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVzY3JpcHRpb257XHJcbiAgICBmb250LWZhbWlseTogJ0dvdHUnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uaW1nLWZsdWlke1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/recipes/recipes-list/recipe-detail/recipe-detail.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/recipes/recipes-list/recipe-detail/recipe-detail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/recipe/recipe.service */ "./src/app/_services/recipe/recipe.service.ts");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_5__);






let RecipeDetailComponent = class RecipeDetailComponent {
    constructor(recipeService, alertify, route) {
        this.recipeService = recipeService;
        this.alertify = alertify;
        this.route = route;
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.recipe = data.recipe;
        });
        this.galleryOptions = [
            {
                width: '500px',
                height: '500px',
                imagePercent: 100,
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_5__["NgxGalleryAnimation"].Slide,
                preview: false
            }
        ];
        this.galleryImages = this.getImages();
    }
    getImages() {
        const imageUrls = [];
        for (const photo of this.recipe.recipePhotos) {
            imageUrls.push({
                small: photo.url,
                medium: photo.url,
                big: photo.url,
                description: photo.description
            });
        }
        return imageUrls;
    }
    printPage() {
        window.print();
    }
};
RecipeDetailComponent.ctorParameters = () => [
    { type: src_app_services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"] },
    { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
RecipeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes-list/recipe-detail/recipe-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-detail.component.css */ "./src/app/recipes/recipes-list/recipe-detail/recipe-detail.component.css")).default]
    })
], RecipeDetailComponent);



/***/ }),

/***/ "./src/app/recipes/recipes-list/recipe-edit/recipe-edit.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/recipes/recipes-list/recipe-edit/recipe-edit.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-thumbnail\r\n{\r\n    width: 300px;\r\n    height: 180px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGVzLWxpc3QvcmVjaXBlLWVkaXQvcmVjaXBlLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxZQUFZO0lBQ1osYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy1saXN0L3JlY2lwZS1lZGl0L3JlY2lwZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXRodW1ibmFpbFxyXG57XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/recipes/recipes-list/recipe-edit/recipe-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/recipes/recipes-list/recipe-edit/recipe-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: RecipeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditComponent", function() { return RecipeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/recipe/recipe.service */ "./src/app/_services/recipe/recipe.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








let RecipeEditComponent = class RecipeEditComponent {
    constructor(route, recipeService, authService, alertify) {
        this.route = route;
        this.recipeService = recipeService;
        this.authService = authService;
        this.alertify = alertify;
        this.photos = [];
        this.hasBaseDropZoneOver = false;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.recipe = data.recipe;
        });
        this.initializeUploader();
    }
    fileOverBase(e) {
        this.hasBaseDropZoneOver = e;
    }
    initializeUploader() {
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploader"]({
            url: this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/recipes/' + this.recipe.id + '/photos',
            authToken: 'Bearer ' + localStorage.getItem('token'),
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024
        });
        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        this.uploader.onSuccessItem = (item, response, status, headers) => {
            if (response) {
                const res = JSON.parse(response);
                const photo = {
                    id: res.id,
                    url: res.url,
                    dateAdded: res.dateAdded,
                    description: res.description,
                    isMain: res.isMain
                };
                this.photos.push(photo);
                this.recipe.recipePhotos.push(photo);
                if (photo.isMain) {
                    this.recipeService.changeRecipePhoto(photo.url);
                    this.recipeService.currentRecipe.photoUrl = photo.url;
                    this.recipe = this.recipeService.currentRecipe;
                }
            }
        };
    }
    updateRecipe(id) {
        this.recipeService.editRecipe(this.authService.decodedToken.nameid, id, this.recipe).subscribe(next => {
            this.alertify.success('Recipe updated successfully');
            this.editForm.reset(this.recipe);
        }, error => {
            this.alertify.error(error);
        });
    }
    setMainPhoto(photo) {
        this.recipeService.setMainPhoto(this.authService.decodedToken.nameid, this.recipe.id, photo.id)
            .subscribe(() => {
            this.currentMain = this.recipe.recipePhotos.filter(p => p.isMain === true)[0];
            if (this.currentMain) {
                this.currentMain.isMain = false;
                photo.isMain = true;
                this.alertify.success('Succesfully changed main photo');
            }
            // this.recipeService.changeRecipePhoto(photo.url);
            // this.recipeService.currentRecipe.photoUrl = photo.url;
            // this.recipe = this.recipeService.currentRecipe;
        }, error => {
            this.alertify.error(error);
        });
    }
    deletePhoto(id) {
        this.alertify.confirm('Are you sure you want to delete this photo?', () => {
            this.recipeService.deletePhoto(this.authService.decodedToken.nameid, this.recipe.id, id).subscribe(() => {
                this.recipe.recipePhotos.splice(this.recipe.recipePhotos.findIndex(p => p.id === id), 1);
                this.alertify.success('Photo has been deleted');
            }, error => {
                this.alertify.error('Failed to delete the photo');
            });
        });
    }
};
RecipeEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editForm', { static: true })
], RecipeEditComponent.prototype, "editForm", void 0);
RecipeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes-list/recipe-edit/recipe-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-edit.component.css */ "./src/app/recipes/recipes-list/recipe-edit/recipe-edit.component.css")).default]
    })
], RecipeEditComponent);



/***/ }),

/***/ "./src/app/recipes/recipes-list/recipes-card/recipes-card.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/recipes/recipes-list/recipes-card/recipes-card.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card:hover img{\n    -webkit-transform: scale(1.1, 1.1);\n            transform: scale(1.1, 1.1);\n    -webkit-transition-duration: 500ms;\n            transition-duration: 500ms;\n    -webkit-transition-timing-function: ease-out;\n            transition-timing-function: ease-out;\n    -webkit-filter: brightness(40%);\n\t-moz-filter: brightness(40%);\n\t-o-filter: brightness(40%);\n\t-ms-filter: brightness(40%);\n\tfilter: brightness(40%);\n}\n\n.card img{\n    -webkit-transform: scale(1.0, 1.0);\n            transform: scale(1.0, 1.0);\n    -webkit-transition-duration: 500ms;\n            transition-duration: 500ms;\n    -webkit-transition-timing-function: ease-out;\n            transition-timing-function: ease-out;\n    width: 100%;\n    height: 20vw;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -webkit-filter: brightness(100%);\n\t-moz-filter: brightness(100%);\n\t-o-filter: brightness(100%);\n\t-ms-filter: brightness(100%);\n\tfilter: brightness(100%);\n}\n\n.card-img-wrapper {\n    overflow: hidden;\n    position: relative;\n}\n\n.recipe-icons {\n    position: absolute;\n    bottom: -30%;\n    left: 0;\n    right: 0;\n    margin-right: auto;\n    margin-left: auto;\n    opacity: 0;\n}\n\n.card-img-wrapper:hover .recipe-icons{\n    bottom: 40%;\n    opacity: 1;\n}\n\n.animate {\n    -webkit-transition: all 0.7s ease-in-out;\n    transition: all 0.7s ease-in-out;\n}\n\n.bg-opacity {\n  /*#ffba00*/ \n  background: rgba(0, 0, 0, 0.6); \n\n}\n\n.bg-mydark {\n    /*#ffba00*/ \n  background: rgba(52,58,64, 0.7); \n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGVzLWxpc3QvcmVjaXBlcy1jYXJkL3JlY2lwZXMtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLDRDQUFvQztZQUFwQyxvQ0FBb0M7SUFDcEMsK0JBQStCO0NBQ2xDLDRCQUE0QjtDQUM1QiwwQkFBMEI7Q0FDMUIsMkJBQTJCO0NBQzNCLHVCQUF1QjtBQUN4Qjs7QUFFQTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQiw0Q0FBb0M7WUFBcEMsb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixnQ0FBZ0M7Q0FDbkMsNkJBQTZCO0NBQzdCLDJCQUEyQjtDQUMzQiw0QkFBNEI7Q0FDNUIsd0JBQXdCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx3Q0FBZ0M7SUFBaEMsZ0NBQWdDO0FBQ3BDOztBQUdBO0VBQ0UsVUFBVTtFQUNWLDhCQUE4Qjs7QUFFaEM7O0FBRUE7SUFDSSxVQUFVO0VBQ1osK0JBQStCO0VBQy9CIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBlcy9yZWNpcGVzLWxpc3QvcmVjaXBlcy1jYXJkL3JlY2lwZXMtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQ6aG92ZXIgaW1ne1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAtd2Via2l0LWZpbHRlcjogYnJpZ2h0bmVzcyg0MCUpO1xuXHQtbW96LWZpbHRlcjogYnJpZ2h0bmVzcyg0MCUpO1xuXHQtby1maWx0ZXI6IGJyaWdodG5lc3MoNDAlKTtcblx0LW1zLWZpbHRlcjogYnJpZ2h0bmVzcyg0MCUpO1xuXHRmaWx0ZXI6IGJyaWdodG5lc3MoNDAlKTtcbn1cblxuLmNhcmQgaW1ne1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wLCAxLjApO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwdnc7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XG5cdC1tb3otZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xuXHQtby1maWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XG5cdC1tcy1maWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XG5cdGZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKTtcbn1cblxuLmNhcmQtaW1nLXdyYXBwZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbi5yZWNpcGUtaWNvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0zMCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmNhcmQtaW1nLXdyYXBwZXI6aG92ZXIgLnJlY2lwZS1pY29uc3tcbiAgICBib3R0b206IDQwJTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uYW5pbWF0ZSB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1pbi1vdXQ7XG59XG5cblxuLmJnLW9wYWNpdHkge1xuICAvKiNmZmJhMDAqLyBcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpOyBcblxufVxuXG4uYmctbXlkYXJrIHtcbiAgICAvKiNmZmJhMDAqLyBcbiAgYmFja2dyb3VuZDogcmdiYSg1Miw1OCw2NCwgMC43KTsgXG4gIH1cblxuIl19 */");

/***/ }),

/***/ "./src/app/recipes/recipes-list/recipes-card/recipes-card.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/recipes/recipes-list/recipes-card/recipes-card.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RecipesCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesCardComponent", function() { return RecipesCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");





let RecipesCardComponent = class RecipesCardComponent {
    constructor(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
    }
    ngOnInit() {
    }
    addToFav(id) {
        this.userService.addToFav(this.authService.decodedToken.nameid, id).subscribe(data => {
            this.alertify.success('Added to fav ' + this.recipe.name);
        }, error => {
            this.alertify.error(error);
        });
    }
};
RecipesCardComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipesCardComponent.prototype, "recipe", void 0);
RecipesCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipes-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipes-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes-list/recipes-card/recipes-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipes-card.component.css */ "./src/app/recipes/recipes-list/recipes-card/recipes-card.component.css")).default]
    })
], RecipesCardComponent);



/***/ }),

/***/ "./src/app/recipes/recipes-list/recipes-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/recipes/recipes-list/recipes-list.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".recipes-body\n{\n    background-color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGVzLWxpc3QvcmVjaXBlcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksdUJBQXVCO0lBQ3ZCLDRFQUE0RTtBQUNoRiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy1saXN0L3JlY2lwZXMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY2lwZXMtYm9keVxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/recipes/recipes-list/recipes-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipes-list/recipes-list.component.ts ***!
  \****************************************************************/
/*! exports provided: RecipesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesListComponent", function() { return RecipesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var src_app_services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/recipe/recipe.service */ "./src/app/_services/recipe/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RecipesListComponent = class RecipesListComponent {
    constructor(recipeService, alertify, route) {
        this.recipeService = recipeService;
        this.alertify = alertify;
        this.route = route;
        this.recipeParams = {};
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.recipes = data.recipes.result;
            this.getCategories();
            this.pagination = data.recipes.pagination;
        });
        this.recipeParams.minTime = 2;
        this.recipeParams.maxTime = 360;
        this.recipeParams.category = '';
    }
    pageChanged(event) {
        this.pagination.currentPage = event.page;
        this.loadRecipes();
        this.getCategories();
        console.log(this.pagination.currentPage);
    }
    resetFilters() {
        this.recipeParams.minTime = 2;
        this.recipeParams.maxTime = 360;
        this.recipeParams.category = '';
        this.loadRecipes();
        this.getCategories();
    }
    loadRecipes() {
        this.recipeService.getRecipes(this.pagination.currentPage, this.pagination.itemsPerPage, this.recipeParams).subscribe((res) => {
            this.recipes = res.result;
            this.pagination = res.pagination;
        }, error => {
            this.alertify.error(error);
        });
    }
    getCategories() {
        this.recipeService.getCategories().subscribe(response => {
            this.categories = response;
        }, error => {
            this.alertify.error(error);
        });
    }
};
RecipesListComponent.ctorParameters = () => [
    { type: src_app_services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"] },
    { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
RecipesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipes-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipes-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes-list/recipes-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipes-list.component.css */ "./src/app/recipes/recipes-list/recipes-list.component.css")).default]
    })
], RecipesListComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let RegisterComponent = class RegisterComponent {
    constructor(authService, alertifyService, fb, router) {
        this.authService = authService;
        this.alertifyService = alertifyService;
        this.fb = fb;
        this.router = router;
        this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.bsConfig = {
            containerClass: 'theme-default'
        };
        this.createRegisterForm();
    }
    createRegisterForm() {
        this.registerForm = this.fb.group({
            gender: ['male'],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            knownAs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dateOfBirth: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(12)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        }, { validators: this.passwordMatchValidator });
    }
    passwordMatchValidator(g) {
        return g.get('password').value === g.get('confirmPassword').value ? null : { mismatch: true };
    }
    register() {
        if (this.registerForm.valid) {
            this.user = Object.assign({}, this.registerForm.value);
            this.authService.register(this.user).subscribe(() => {
                this.alertifyService.success('Registration successful');
            }, error => {
                this.alertifyService.error(error);
            }, () => {
                this.authService.login(this.user).subscribe(() => {
                    this.router.navigate(['/recipes']);
                });
            });
        }
    }
    cancel() {
        this.cancelRegister.emit(false);
        this.alertifyService.warning('Cancelled');
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], RegisterComponent.prototype, "cancelRegister", void 0);
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./members/member-list/member-list.component */ "./src/app/members/member-list/member-list.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _lists_like_lists_like_lists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lists/like-lists/like-lists.component */ "./src/app/lists/like-lists/like-lists.component.ts");
/* harmony import */ var _recipes_recipes_list_recipes_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipes/recipes-list/recipes-list.component */ "./src/app/recipes/recipes-list/recipes-list.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _members_member_list_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./members/member-list/member-detail/member-detail.component */ "./src/app/members/member-list/member-detail/member-detail.component.ts");
/* harmony import */ var _recipes_recipes_list_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipes/recipes-list/recipe-detail/recipe-detail.component */ "./src/app/recipes/recipes-list/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_resolvers/member-detail-resolver */ "./src/app/_resolvers/member-detail-resolver.ts");
/* harmony import */ var _resolvers_recipe_detail_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_resolvers/recipe-detail-resolver */ "./src/app/_resolvers/recipe-detail-resolver.ts");
/* harmony import */ var _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_resolvers/member-list-resolver */ "./src/app/_resolvers/member-list-resolver.ts");
/* harmony import */ var _resolvers_recipe_list_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_resolvers/recipe-list-resolver */ "./src/app/_resolvers/recipe-list-resolver.ts");
/* harmony import */ var _members_member_list_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./members/member-list/member-edit/member-edit.component */ "./src/app/members/member-list/member-edit/member-edit.component.ts");
/* harmony import */ var _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_resolvers/member-edit-resolver */ "./src/app/_resolvers/member-edit-resolver.ts");
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_guards/prevent-unsaved-changes.guard */ "./src/app/_guards/prevent-unsaved-changes.guard.ts");
/* harmony import */ var _recipes_recipes_list_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./recipes/recipes-list/add-recipe/add-recipe.component */ "./src/app/recipes/recipes-list/add-recipe/add-recipe.component.ts");
/* harmony import */ var _recipes_recipes_list_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./recipes/recipes-list/recipe-edit/recipe-edit.component */ "./src/app/recipes/recipes-list/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var _resolvers_recipe_edit_resolver__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_resolvers/recipe-edit-resolver */ "./src/app/_resolvers/recipe-edit-resolver.ts");
/* harmony import */ var _resolvers_lists_resovler__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_resolvers/lists.resovler */ "./src/app/_resolvers/lists.resovler.ts");
/* harmony import */ var _lists_like_lists_favRecipe_lists_favRecipe_lists_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lists/like-lists/favRecipe-lists/favRecipe-lists.component */ "./src/app/lists/like-lists/favRecipe-lists/favRecipe-lists.component.ts");
/* harmony import */ var _resolvers_fav_recipes_resolver__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_resolvers/fav-recipes-resolver */ "./src/app/_resolvers/fav-recipes-resolver.ts");
/* harmony import */ var _models_messages_resolver__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_models/messages-resolver */ "./src/app/_models/messages-resolver.ts");























const appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            { path: 'members', component: _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_1__["MemberListComponent"], resolve: { users: _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_11__["MemberListResolver"] } },
            { path: 'members/:id', component: _members_member_list_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_7__["MemberDetailComponent"], resolve: { user: _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_9__["MemberDetailResolver"] } },
            { path: 'messages', component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__["MessagesComponent"], resolve: { messages: _models_messages_resolver__WEBPACK_IMPORTED_MODULE_22__["MessagesResolver"] } },
            { path: 'member/edit', component: _members_member_list_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_13__["MemberEditComponent"],
                resolve: { user: _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_14__["MemberEditResolver"] }, canDeactivate: [_guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_15__["PreventUnsavedChanges"]] },
            { path: 'likes', component: _lists_like_lists_like_lists_component__WEBPACK_IMPORTED_MODULE_3__["LikeListsComponent"], resolve: { users: _resolvers_lists_resovler__WEBPACK_IMPORTED_MODULE_19__["ListsResolver"] } },
            { path: 'my-fav-recipes', component: _lists_like_lists_favRecipe_lists_favRecipe_lists_component__WEBPACK_IMPORTED_MODULE_20__["FavRecipeListsComponent"], resolve: { recipes: _resolvers_fav_recipes_resolver__WEBPACK_IMPORTED_MODULE_21__["FavRecipesResolver"] } },
            { path: 'recipes', component: _recipes_recipes_list_recipes_list_component__WEBPACK_IMPORTED_MODULE_4__["RecipesListComponent"], resolve: { recipes: _resolvers_recipe_list_resolver__WEBPACK_IMPORTED_MODULE_12__["RecipeListResolver"] } },
            { path: 'recipes/:id', component: _recipes_recipes_list_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_8__["RecipeDetailComponent"], resolve: { recipe: _resolvers_recipe_detail_resolver__WEBPACK_IMPORTED_MODULE_10__["RecipeDetailResolver"] } },
            { path: 'recipe-add', component: _recipes_recipes_list_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_16__["AddRecipeComponent"] },
            { path: 'recipe/edit/:id', component: _recipes_recipes_list_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_17__["RecipeEditComponent"], resolve: { recipe: _resolvers_recipe_edit_resolver__WEBPACK_IMPORTED_MODULE_18__["RecipeEditResolver"] } },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: 'http://localhost:5000/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\RecipesApp\RecipesApp-SPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map