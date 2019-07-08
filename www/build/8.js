webpackJsonp([8],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCartPageModule", function() { return UserCartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_cart__ = __webpack_require__(313);
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

/***/ 313:
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
    UserCartPage.prototype.ngOnInit = function () {
        var cart = JSON.parse(localStorage['cart']);
        this.items = cart.items;
    };
    UserCartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-user-cart",template:/*ion-inline-start:"E:\Backup\Abhinav-data\github\ali\test1\src\pages\user-cart\user-cart.html"*/'<ion-content>\n\n  <div class="header">\n\n    <ion-row class="header_section">\n\n      <ion-col col-2>\n\n        <ion-buttons left>\n\n          <button ion-button clear icon-only color="primary">\n\n            <ion-icon name="md-list"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-col>\n\n      <ion-col col-8>\n\n        <ion-item no-lines class="delivery_address" (click)="changeAddress()">\n\n          <ion-icon name="ios-pin-outline" item-start></ion-icon>\n\n          {{ address }}\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <ion-buttons end>\n\n          <button ion-button clear icon-only color="primary">\n\n            <ion-icon name="md-time"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <div class="allProduct">\n\n    <ion-row>\n\n      <ion-col> <ion-label class="basket_title">Basket</ion-label> </ion-col>\n\n      <ion-col>\n\n        <button (click)="checkout()" ion-button color="dark" float-right clear>\n\n          checkout\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-card *ngFor="let item of items">\n\n      <img src="[item.img]" class="side_img" />\n\n      <ion-card-content class="product_sections">\n\n        <ion-card-title> {{item.title}} </ion-card-title>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <ion-label class="product_price"> {{item.price}} </ion-label>\n\n          </ion-col>\n\n\n\n          <ion-col col-6>\n\n            <button ion-button icon-only float-right clear color="dark">\n\n              <ion-icon name="md-trash"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <button ion-button class="btn_count" color="light">-</button>\n\n            <button ion-button class="btn_count" color="light">1</button>\n\n            <button ion-button class="btn_count" color="light">+</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Backup\Abhinav-data\github\ali\test1\src\pages\user-cart\user-cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], UserCartPage);
    return UserCartPage;
}());

//# sourceMappingURL=user-cart.js.map

/***/ })

});
//# sourceMappingURL=8.js.map