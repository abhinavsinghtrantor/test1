webpackJsonp([5],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPageModule", function() { return ProductListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_list__ = __webpack_require__(309);
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

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return host; });
var host = "http://localhost:8080";
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductListPage = /** @class */ (function () {
    function ProductListPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
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
    ProductListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [];
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* host */] + "/getItems").toPromise()
            .then(function (data) {
            _this.items = data['items'];
        });
    };
    ProductListPage.prototype.add = function () {
        var cart = JSON.parse(localStorage['cart']);
        var items = cart.items;
        var item = { title: "Indian Tadka", price: "Rs. 150" };
        items.push(item);
        cart.items = items;
        localStorage['cart'] = JSON.stringify(cart);
        alert("Item added successfully");
    };
    ProductListPage.prototype.goCart = function () {
        this.navCtrl.push("UserCartPage");
    };
    ProductListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-product-list",template:/*ion-inline-start:"E:\Backup\Abhinav-data\github\ali\test1\src\pages\product-list\product-list.html"*/'<ion-content>\n\n  <div class="header">\n\n    <img src="{{ rest_images }}" class="rest_image" />\n\n    <ion-label class="rest_name">{{ rest_name }}</ion-label>\n\n    <ion-row class="header_section">\n\n      <ion-col col-2>\n\n        <ion-buttons left>\n\n          <button ion-button clear icon-only color="primary">\n\n            <ion-icon name="md-list"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-col>\n\n      <ion-col col-8>\n\n        <ion-item no-lines class="delivery_address" (click)="changeAddress()">\n\n          <ion-icon name="ios-pin-outline" item-start></ion-icon>\n\n          {{ address }}\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <ion-buttons end>\n\n          <button ion-button clear icon-only color="primary" (tap)="goCart()">\n\n            <ion-icon name="md-cart" ></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class="rest_details">\n\n      <ion-col col-6>\n\n        <ion-buttons>\n\n          <button ion-button clear icon-only color="light">\n\n            <ion-icon name="ios-star" color="primary"></ion-icon>\n\n            {{ rest_rating }}\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-buttons>\n\n          <button ion-button clear icon-only color="light">\n\n            <ion-icon name="ios-lock" color="primary"></ion-icon>\n\n            Order from Rs. 100\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class="product_search">\n\n      <ion-col> <ion-searchbar mode="ios"></ion-searchbar> </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <div class="allProduct">\n\n   <ion-card *ngFor="let item of items">\n\n      <img src="[item.img]" class="side_img" />\n\n      <ion-card-content class="product_sections">\n\n        <ion-card-title> {{item.title}} </ion-card-title>\n\n        <p class="product_descriptions">\n\n          {{item.desc}}\n\n        </p>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <ion-label class="product_price">{{item.price}}</ion-label>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <button ion-button outline round small (tap)="add()">Add</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Backup\Abhinav-data\github\ali\test1\src\pages\product-list\product-list.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object])
    ], ProductListPage);
    return ProductListPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=product-list.js.map

/***/ })

});
//# sourceMappingURL=5.js.map