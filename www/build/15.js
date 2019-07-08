webpackJsonp([15],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout__ = __webpack_require__(302);
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

/***/ 302:
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
    CheckoutPage.prototype.ngOnInit = function () {
        var cart = JSON.parse(localStorage['cart']);
        this.items = cart.items;
    };
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-checkout",template:/*ion-inline-start:"E:\Backup\Abhinav-data\github\ali\test1\src\pages\checkout\checkout.html"*/'<ion-content>\n\n  <ion-row class="header_section">\n\n    <ion-col col-2>\n\n      <ion-buttons left>\n\n        <button ion-button clear icon-only color="primary">\n\n          <ion-icon name="md-list"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <ion-item no-lines class="delivery_address" (click)="changeAddress()">\n\n        <ion-icon name="ios-pin-outline" item-start></ion-icon>\n\n        {{ address }}\n\n      </ion-item>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n      <ion-buttons end>\n\n        <button ion-button clear icon-only color="primary">\n\n          <ion-icon name="md-time"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-col>\n\n  </ion-row>\n\n  <div class="allProduct">\n\n    <ion-label class="checkout_lbl">Checkout</ion-label>\n\n    <ion-card *ngFor="let item of items">\n\n      <img src="[item.img]" class="side_img" />\n\n      <ion-card-content class="product_sections">\n\n        <ion-card-title> {{item.title}} </ion-card-title>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <ion-label class="product_price">{{item.price}}</ion-label>\n\n          </ion-col>\n\n\n\n          <ion-col col-6>\n\n            <button ion-button icon-only float-right clear color="dark">\n\n              <ion-icon name="md-trash"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <button ion-button class="btn_count" color="light">-</button>\n\n            <button ion-button class="btn_count" color="light">2</button>\n\n            <button ion-button class="btn_count" color="light">+</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    \n\n  </div>\n\n  <div class="card_div">\n\n    <ion-row>\n\n      <ion-col> <ion-label class="card_lbl1">Payment</ion-label> </ion-col>\n\n      <ion-col>\n\n        <ion-label class="card_lbl2" (click)="addNewCard()">Add New</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-slides slidesPerView="1.5" style="height:100px;">\n\n      <ion-slide>\n\n        <ion-card>\n\n          <ion-item class="pay_card_active">\n\n            <ion-icon name="ios-card-outline" item-start></ion-icon>\n\n            * * 23 45\n\n            <ion-icon name="md-create" item-end></ion-icon>\n\n          </ion-item>\n\n        </ion-card>\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <ion-card>\n\n          <ion-item class="pay_card">\n\n            <ion-icon name="ios-card-outline" item-start></ion-icon>\n\n            * * 21 67\n\n            <ion-icon name="md-create" item-end></ion-icon>\n\n          </ion-item>\n\n        </ion-card>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n  <div class="all_price">\n\n    <ion-list no-lines>\n\n      <ion-item>\n\n        <ion-label text-left class="comman">Basket Charges</ion-label>\n\n        <ion-label text-right class="charge_price">Rs. 300</ion-label>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-left class="comman">Delivery Charges</ion-label>\n\n        <ion-label text-right class="charge_price">Rs. 0.00</ion-label>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-left class="total_amont"\n\n          >Total Amount Payable</ion-label\n\n        >\n\n        <ion-label text-right class="total_price">Rs. 300</ion-label>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <button\n\n    ion-button\n\n    block\n\n    round\n\n    color="primary"\n\n    class="pay_btn"\n\n    (click)="OrderConfirm()"\n\n  >\n\n    Pay\n\n  </button>\n\n  <button\n\n    ion-button\n\n    block\n\n    outline\n\n    round\n\n    color="primary"\n\n    class="cod_btn"\n\n    (click)="OrderConfirm()"\n\n  >\n\n    Cash On Delivery\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Backup\Abhinav-data\github\ali\test1\src\pages\checkout\checkout.html"*/
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
//# sourceMappingURL=15.js.map