webpackJsonp([6],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCartPageModule", function() { return UserCartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_cart__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserCartPageModule = /** @class */ (function () {
    function UserCartPageModule() {
    }
    UserCartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_cart__["a" /* UserCartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_cart__["a" /* UserCartPage */]),
            ],
        })
    ], UserCartPageModule);
    return UserCartPageModule;
}());

//# sourceMappingURL=user-cart.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserCartPage = /** @class */ (function () {
    function UserCartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserCartPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad UserCartPage");
    };
    UserCartPage.prototype.checkout = function () {
        this.navCtrl.push("CheckoutPage");
    };
    UserCartPage.prototype.ionViewWillEnter = function () {
        this.address = localStorage.getItem("deliveryAddress");
    };
    UserCartPage.prototype.changeAddress = function () {
        this.navCtrl.push("NewAddressPage");
    };
    UserCartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-user-cart",template:/*ion-inline-start:"/Users/abhinav/Alibaba/App_Source_Code/food_update/src/pages/user-cart/user-cart.html"*/'<ion-content>\n  <div class="header">\n    <ion-row class="header_section">\n      <ion-col col-2>\n        <ion-buttons left>\n          <button ion-button clear icon-only color="primary">\n            <ion-icon name="md-list"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col col-8>\n        <ion-item no-lines class="delivery_address" (click)="changeAddress()">\n          <ion-icon name="ios-pin-outline" item-start></ion-icon>\n          {{ address }}\n        </ion-item>\n      </ion-col>\n      <ion-col col-2>\n        <ion-buttons end>\n          <button ion-button clear icon-only color="primary">\n            <ion-icon name="md-time"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class="allProduct">\n    <ion-row>\n      <ion-col> <ion-label class="basket_title">Basket</ion-label> </ion-col>\n      <ion-col>\n        <button (click)="checkout()" ion-button color="dark" float-right clear>\n          checkout\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-card>\n      <img src="assets/imgs/slider1.jpg" class="side_img" />\n      <ion-card-content class="product_sections">\n        <ion-card-title> Mexican Green Wave </ion-card-title>\n        <ion-row>\n          <ion-col col-6>\n            <ion-label class="product_price">$ 8.25</ion-label>\n          </ion-col>\n\n          <ion-col col-6>\n            <button ion-button icon-only float-right clear color="dark">\n              <ion-icon name="md-trash"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <button ion-button class="btn_count" color="light">-</button>\n            <button ion-button class="btn_count" color="light">2</button>\n            <button ion-button class="btn_count" color="light">+</button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <img src="assets/imgs/slider1.jpg" class="side_img" />\n      <ion-card-content class="product_sections">\n        <ion-card-title> Mexican Green Wave </ion-card-title>\n        <ion-row>\n          <ion-col col-6>\n            <ion-label class="product_price">$ 8.25</ion-label>\n          </ion-col>\n\n          <ion-col col-6>\n            <button ion-button icon-only float-right clear color="dark">\n              <ion-icon name="md-trash"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <button ion-button class="btn_count" color="light">-</button>\n            <button ion-button class="btn_count" color="light">2</button>\n            <button ion-button class="btn_count" color="light">+</button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/abhinav/Alibaba/App_Source_Code/food_update/src/pages/user-cart/user-cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], UserCartPage);
    return UserCartPage;
}());

//# sourceMappingURL=user-cart.js.map

/***/ })

});
//# sourceMappingURL=6.js.map