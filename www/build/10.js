webpackJsonp([10],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPageModule", function() { return ProductListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_list__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductListPageModule = /** @class */ (function () {
    function ProductListPageModule() {
    }
    ProductListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_list__["a" /* ProductListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_list__["a" /* ProductListPage */]),
            ],
        })
    ], ProductListPageModule);
    return ProductListPageModule;
}());

//# sourceMappingURL=product-list.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListPage; });
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


/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductListPage = /** @class */ (function () {
    function ProductListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // Getting the Data from Home Page using NavParams
        this.rest_images = this.navParams.get("restaurant").image;
        this.rest_name = this.navParams.get("restaurant").name;
        this.rest_rating = this.navParams.get("restaurant").rating;
    }
    ProductListPage.prototype.ionViewWillEnter = function () {
        this.address = localStorage.getItem("deliveryAddress");
    };
    ProductListPage.prototype.changeAddress = function () {
        this.navCtrl.push("NewAddressPage");
    };
    ProductListPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ProductListPage");
    };
    ProductListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-product-list",template:/*ion-inline-start:"/Users/abhinav/Alibaba/App_Source_Code/food_update/src/pages/product-list/product-list.html"*/'<ion-content>\n  <div class="header">\n    <img src="{{ rest_images }}" class="rest_image" />\n    <ion-label class="rest_name">{{ rest_name }}</ion-label>\n    <ion-row class="header_section">\n      <ion-col col-2>\n        <ion-buttons left>\n          <button ion-button clear icon-only color="primary">\n            <ion-icon name="md-list"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col col-8>\n        <ion-item no-lines class="delivery_address" (click)="changeAddress()">\n          <ion-icon name="ios-pin-outline" item-start></ion-icon>\n          {{ address }}\n        </ion-item>\n      </ion-col>\n      <ion-col col-2>\n        <ion-buttons end>\n          <button ion-button clear icon-only color="primary">\n            <ion-icon name="md-time"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n    <ion-row class="rest_details">\n      <ion-col col-6>\n        <ion-buttons>\n          <button ion-button clear icon-only color="light">\n            <ion-icon name="ios-star" color="primary"></ion-icon>\n            {{ rest_rating }}\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col col-6>\n        <ion-buttons>\n          <button ion-button clear icon-only color="light">\n            <ion-icon name="ios-lock" color="primary"></ion-icon>\n            Order from $ 5\n          </button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n    <ion-row class="product_search">\n      <ion-col> <ion-searchbar mode="ios"></ion-searchbar> </ion-col>\n    </ion-row>\n  </div>\n\n  <div class="allProduct">\n    <ion-card>\n      <img src="assets/imgs/slider1.jpg" class="side_img" />\n      <ion-card-content class="product_sections">\n        <ion-card-title> Mexican Green Wave </ion-card-title>\n        <p class="product_descriptions">\n          Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno\n        </p>\n        <ion-row>\n          <ion-col col-6>\n            <ion-label class="product_price">$ 8.25</ion-label>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button outline round small>Add</button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <img src="assets/imgs/slider1.jpg" class="side_img" />\n      <ion-card-content class="product_sections">\n        <ion-card-title> Mexican Green Wave </ion-card-title>\n        <p class="product_descriptions">\n          Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno\n        </p>\n        <ion-row>\n          <ion-col col-6>\n            <ion-label class="product_price">$ 8.25</ion-label>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button outline round small>Add</button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <img src="assets/imgs/slider1.jpg" class="side_img" />\n      <ion-card-content class="product_sections">\n        <ion-card-title> Mexican Green Wave </ion-card-title>\n        <p class="product_descriptions">\n          Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno\n        </p>\n        <ion-row>\n          <ion-col col-6>\n            <ion-label class="product_price">$ 8.25</ion-label>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button outline round small>Add</button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <img src="assets/imgs/slider1.jpg" class="side_img" />\n      <ion-card-content class="product_sections">\n        <ion-card-title> Mexican Green Wave </ion-card-title>\n        <p class="product_descriptions">\n          Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno\n        </p>\n        <ion-row>\n          <ion-col col-6>\n            <ion-label class="product_price">$ 8.25</ion-label>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button outline round small>Add</button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/abhinav/Alibaba/App_Source_Code/food_update/src/pages/product-list/product-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProductListPage);
    return ProductListPage;
}());

//# sourceMappingURL=product-list.js.map

/***/ })

});
//# sourceMappingURL=10.js.map