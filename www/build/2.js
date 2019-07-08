webpackJsonp([2],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPageModule", function() { return OrderDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_details__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrderDetailsPageModule = /** @class */ (function () {
    function OrderDetailsPageModule() {
    }
    OrderDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__order_details__["a" /* OrderDetailsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__["a" /* StarRatingModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_details__["a" /* OrderDetailsPage */])]
        })
    ], OrderDetailsPageModule);
    return OrderDetailsPageModule;
}());

//# sourceMappingURL=order-details.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarRating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);


var HTML_TEMPLATE = "\n<div class=\"ionic3-star-rating\">\n  <button *ngFor=\"let index of [0,1,2,3,4]\" id=\"{{index}}\" type=\"button\" ion-button icon-only (click)=\"changeRating($event)\">\n    <ion-icon [ngStyle]=\"{'color':index < this.Math.round(this.parseFloat(rating)) ? activeColor : defaultColor }\" name=\"{{index < this.Math.round(this.parseFloat(rating)) ? activeIcon : defaultIcon}}\"></ion-icon>\n  </button>\n</div>\n";
var CSS_STYLE = "\n    .ionic3-star-rating .button {\n        height: 28px;\n        background: none;\n        box-shadow: none;\n        -webkit-box-shadow: none;\n        width: 28px;\n    }\n    .ionic3-star-rating .button ion-icon {\n        font-size: 32px;\n    }\n";
var StarRating = (function () {
    function StarRating(events) {
        this.events = events;
        this.rating = 3;
        this.readonly = "false";
        this.activeColor = '#488aff';
        this.defaultColor = '#f4f4f4';
        this.activeIcon = 'ios-star';
        this.defaultIcon = 'ios-star-outline';
        this.Math = Math;
        this.parseFloat = parseFloat;
    }
    StarRating.prototype.changeRating = function (event) {
        if (this.readonly && this.readonly === "true")
            return;
        // event is different for firefox and chrome
        this.rating = event.target.id ? parseInt(event.target.id) + 1 : parseInt(event.target.parentElement.id) + 1;
        // subscribe this event to get the changed value in ypour parent compoanent
        this.events.publish('star-rating:changed', this.rating);
    };
    StarRating.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'ionic3-star-rating',
                    template: HTML_TEMPLATE,
                    styles: [CSS_STYLE]
                },] },
    ];
    /** @nocollapse */
    StarRating.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], },
    ]; };
    StarRating.propDecorators = {
        "rating": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        "readonly": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        "activeColor": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        "defaultColor": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        "activeIcon": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        "defaultIcon": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    };
    return StarRating;
}());

//# sourceMappingURL=ionic3-star-rating-component.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic3_star_rating_module__ = __webpack_require__(298);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ionic3_star_rating_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ionic3_star_rating_component__ = __webpack_require__(296);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarRatingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ionic3_star_rating_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);



var StarRatingModule = (function () {
    function StarRatingModule() {
    }
    StarRatingModule.forRoot = function () {
        return {
            ngModule: StarRatingModule,
        };
    };
    StarRatingModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */]
                    ],
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_1__components_ionic3_star_rating_component__["a" /* StarRating */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_1__components_ionic3_star_rating_component__["a" /* StarRating */]
                    ]
                },] },
    ];
    /** @nocollapse */
    StarRatingModule.ctorParameters = function () { return []; };
    return StarRatingModule;
}());

//# sourceMappingURL=ionic3-star-rating.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsPage; });
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
 * Generated class for the OrderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderDetailsPage = /** @class */ (function () {
    function OrderDetailsPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    OrderDetailsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad OrderDetailsPage");
    };
    OrderDetailsPage.prototype.ionViewWillEnter = function () {
        if (this.navParams.get("rate") == "yes") {
            this.haveRate = false;
        }
        else {
            this.haveRate = true;
        }
    };
    OrderDetailsPage.prototype.report = function () {
        console.log("report an issue");
        var message = this.toastCtrl.create({
            message: "Reported As Issue",
            duration: 1000,
            position: "bottom"
        });
        message.present();
    };
    OrderDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-order-details",template:/*ion-inline-start:"E:\Backup\Abhinav-data\github\ali\test1\src\pages\order-details\order-details.html"*/'<ion-content>\n\n  <div class="header">\n\n    <ion-row class="header_section">\n\n      <ion-col col-2>\n\n        <ion-buttons left>\n\n          <button ion-button clear icon-only color="primary">\n\n            <ion-icon name="md-list"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-col>\n\n      <ion-col col-8>\n\n        <ion-item no-lines class="title">Henry at Life Hotel </ion-item>\n\n      </ion-col>\n\n      <ion-col col-2> </ion-col>\n\n    </ion-row>\n\n  </div>\n\n  <div class="main_content">\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <p class="delivered" text-center>• Order Delivered</p>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <p class="order_time" text-center>25 Aug 9.45</p>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-card class="d_orders" *ngIf="haveRate">\n\n      <ion-card-content>\n\n        <ion-label text-center class="rateTitle"\n\n          >Please Rate Delivery Service</ion-label\n\n        >\n\n        <div class="rating_sections" text-center>\n\n          <ionic3-star-rating\n\n            activeIcon="ios-star"\n\n            defaultIcon="ios-star-outline"\n\n            activeColor="#eaea80"\n\n            defaultColor="#f4f4f4"\n\n            readonly="true"\n\n            [rating]="5"\n\n          >\n\n          </ionic3-star-rating>\n\n          <ion-label text-center class="rateBtn">Rate</ion-label>\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="d_orders" *ngIf="!haveRate">\n\n      <ion-card-content>\n\n        <ion-label text-center class="rateTitle"\n\n          >Please Rate Delivery Service</ion-label\n\n        >\n\n        <div class="rating_sections" text-center>\n\n          <ionic3-star-rating\n\n            activeIcon="ios-star"\n\n            defaultIcon="ios-star-outline"\n\n            activeColor="#eaea80"\n\n            defaultColor="#f4f4f4"\n\n            readonly="false"\n\n            [rating]="0"\n\n          >\n\n          </ionic3-star-rating>\n\n          <ion-label text-center class="rateBtn">Rate</ion-label>\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="d_orders">\n\n      <ion-card-content>\n\n        <ion-label text-left class="rateBtn"\n\n          >To: 77 East Cheyenne Ave.Las Vegas</ion-label\n\n        >\n\n\n\n        <ion-label text-left class="rateTitle"\n\n          >From : Delmonico Steak</ion-label\n\n        >\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <div class="card_div">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-label class="card_lbl1">Payment Method</ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-slides slidesPerView="1.5" style="height:100px;">\n\n        <ion-slide>\n\n          <ion-card>\n\n            <ion-item class="pay_card_active">\n\n              <ion-icon name="ios-card-outline" item-start></ion-icon>\n\n              * * 23 45\n\n            </ion-item>\n\n          </ion-card>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n    <div class="all_price">\n\n      <ion-list no-lines>\n\n        <ion-item>\n\n          <ion-label text-left class="comman">Basket Charges</ion-label>\n\n          <ion-label text-right class="charge_price">$33.50</ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label text-left class="comman">Delivery Charges</ion-label>\n\n          <ion-label text-right class="charge_price">$2.50</ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label text-left class="total_amont"\n\n            >Total Amount Payable</ion-label\n\n          >\n\n          <ion-label text-right class="total_price">$36.00</ion-label>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n    <button\n\n      ion-button\n\n      block\n\n      round\n\n      color="primary"\n\n      class="pay_btn"\n\n      (click)="report()"\n\n    >\n\n      Report an Issue with Order\n\n    </button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Backup\Abhinav-data\github\ali\test1\src\pages\order-details\order-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], OrderDetailsPage);
    return OrderDetailsPage;
}());

//# sourceMappingURL=order-details.js.map

/***/ })

});
//# sourceMappingURL=2.js.map