webpackJsonp([14],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckoutPageModule = /** @class */ (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]),
            ],
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());

//# sourceMappingURL=checkout.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
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


var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    CheckoutPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad CheckoutPage");
    };
    CheckoutPage.prototype.ionViewWillEnter = function () {
        this.address = localStorage.getItem("deliveryAddress");
    };
    CheckoutPage.prototype.changeAddress = function () {
        this.navCtrl.push("NewAddressPage");
    };
    CheckoutPage.prototype.addNewCard = function () {
        this.navCtrl.push("AddCardPage");
    };
    CheckoutPage.prototype.OrderConfirm = function () {
        console.log("popup");
        var modal = this.modalCtrl.create("OrderDonePage");
        modal.onDidDismiss(function () {
            console.log("");
        });
        modal.present();
    };
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-checkout",template:/*ion-inline-start:"/Users/abhinav/Alibaba/App_Source_Code/food_update/src/pages/checkout/checkout.html"*/'<ion-content>\n  <ion-row class="header_section">\n    <ion-col col-2>\n      <ion-buttons left>\n        <button ion-button clear icon-only color="primary">\n          <ion-icon name="md-list"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-col>\n    <ion-col col-8>\n      <ion-item no-lines class="delivery_address" (click)="changeAddress()">\n        <ion-icon name="ios-pin-outline" item-start></ion-icon>\n        {{ address }}\n      </ion-item>\n    </ion-col>\n    <ion-col col-2>\n      <ion-buttons end>\n        <button ion-button clear icon-only color="primary">\n          <ion-icon name="md-time"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-col>\n  </ion-row>\n  <div class="allProduct">\n    <ion-label class="checkout_lbl">Checkout</ion-label>\n    <ion-card>\n      <img src="assets/imgs/slider1.jpg" class="side_img" />\n      <ion-card-content class="product_sections">\n        <ion-card-title> Mexican Green Wave </ion-card-title>\n        <ion-row>\n          <ion-col col-6>\n            <ion-label class="product_price">$ 8.25</ion-label>\n          </ion-col>\n\n          <ion-col col-6>\n            <button ion-button icon-only float-right clear color="dark">\n              <ion-icon name="md-trash"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <button ion-button class="btn_count" color="light">-</button>\n            <button ion-button class="btn_count" color="light">2</button>\n            <button ion-button class="btn_count" color="light">+</button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <img src="assets/imgs/slider1.jpg" class="side_img" />\n      <ion-card-content class="product_sections">\n        <ion-card-title> Mexican Green Wave </ion-card-title>\n        <ion-row>\n          <ion-col col-6>\n            <ion-label class="product_price">$ 8.25</ion-label>\n          </ion-col>\n\n          <ion-col col-6>\n            <button ion-button icon-only float-right clear color="dark">\n              <ion-icon name="md-trash"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <button ion-button class="btn_count" color="light">-</button>\n            <button ion-button class="btn_count" color="light">2</button>\n            <button ion-button class="btn_count" color="light">+</button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div class="card_div">\n    <ion-row>\n      <ion-col> <ion-label class="card_lbl1">Payment</ion-label> </ion-col>\n      <ion-col>\n        <ion-label class="card_lbl2" (click)="addNewCard()">Add New</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-slides slidesPerView="1.5" style="height:100px;">\n      <ion-slide>\n        <ion-card>\n          <ion-item class="pay_card_active">\n            <ion-icon name="ios-card-outline" item-start></ion-icon>\n            * * 23 45\n            <ion-icon name="md-create" item-end></ion-icon>\n          </ion-item>\n        </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card>\n          <ion-item class="pay_card">\n            <ion-icon name="ios-card-outline" item-start></ion-icon>\n            * * 21 67\n            <ion-icon name="md-create" item-end></ion-icon>\n          </ion-item>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <div class="all_price">\n    <ion-list no-lines>\n      <ion-item>\n        <ion-label text-left class="comman">Basket Charges</ion-label>\n        <ion-label text-right class="charge_price">$33.50</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label text-left class="comman">Delivery Charges</ion-label>\n        <ion-label text-right class="charge_price">$2.50</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label text-left class="total_amont"\n          >Total Amount Payable</ion-label\n        >\n        <ion-label text-right class="total_price">$36.00</ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n  <button\n    ion-button\n    block\n    round\n    color="primary"\n    class="pay_btn"\n    (click)="OrderConfirm()"\n  >\n    Pay\n  </button>\n  <button\n    ion-button\n    block\n    outline\n    round\n    color="primary"\n    class="cod_btn"\n    (click)="OrderConfirm()"\n  >\n    Cash On Delivery\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/abhinav/Alibaba/App_Source_Code/food_update/src/pages/checkout/checkout.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ })

});
//# sourceMappingURL=14.js.map