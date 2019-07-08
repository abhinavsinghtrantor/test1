webpackJsonp([1],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryPageModule", function() { return OrderHistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_history__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrderHistoryPageModule = /** @class */ (function () {
    function OrderHistoryPageModule() {
    }
    OrderHistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__order_history__["a" /* OrderHistoryPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__["a" /* StarRatingModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_history__["a" /* OrderHistoryPage */])]
        })
    ], OrderHistoryPageModule);
    return OrderHistoryPageModule;
}());

//# sourceMappingURL=order-history.module.js.map

/***/ }),

/***/ 289:
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

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic3_star_rating_module__ = __webpack_require__(291);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ionic3_star_rating_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ionic3_star_rating_component__ = __webpack_require__(289);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarRatingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ionic3_star_rating_component__ = __webpack_require__(289);
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

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoryPage; });
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


var OrderHistoryPage = /** @class */ (function () {
    function OrderHistoryPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.orders = "current";
    }
    OrderHistoryPage.prototype.ionViewDidLoad = function () { };
    OrderHistoryPage.prototype.goDetails = function (rate) {
        this.navCtrl.push("OrderDetailsPage", { rate: rate });
    };
    OrderHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-order-history",template:/*ion-inline-start:"/Users/abhinav/Alibaba/App_Source_Code/food_update/src/pages/order-history/order-history.html"*/'<ion-content>\n  <div class="header">\n    <ion-row class="header_section">\n      <ion-col col-2>\n        <ion-buttons left>\n          <button ion-button clear icon-only color="primary">\n            <ion-icon name="md-list"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col col-8>\n        <ion-item no-lines class="title"> Orders </ion-item>\n      </ion-col>\n      <ion-col col-2> </ion-col>\n    </ion-row>\n  </div>\n\n  <div class="main_content">\n    <div padding>\n      <ion-segment [(ngModel)]="orders" mode="md">\n        <ion-segment-button value="current"> Current </ion-segment-button>\n        <ion-segment-button value="past"> Past </ion-segment-button>\n      </ion-segment>\n    </div>\n\n    <div [ngSwitch]="orders">\n      <ion-list *ngSwitchCase="\'current\'">\n        <ion-card class="c_orders">\n          <ion-card-content>\n            <ion-item>\n              <ion-thumbnail item-start>\n                <img src="assets/imgs/slider1.jpg" />\n              </ion-thumbnail>\n              <ion-row>\n                <ion-col col-6>\n                  <p class="order_time">25 Aug 9.45</p>\n                </ion-col>\n                <ion-col col-6>\n                  <p text-right class="order_price">$4.5</p>\n                </ion-col>\n              </ion-row>\n              <h2 class="rest_name">Henry at Life Hotel</h2>\n              <ion-row>\n                <ion-col col-6>\n                  <p class="assigned" text-wrap>• Order Assigned</p>\n                </ion-col>\n                <ion-col col-6 (click)="goDetails(\'yes\')">\n                  <p text-right class="details">Detail</p>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n        <ion-card class="c_orders">\n          <ion-card-content>\n            <ion-item>\n              <ion-thumbnail item-start>\n                <img src="assets/imgs/slider1.jpg" />\n              </ion-thumbnail>\n              <ion-row>\n                <ion-col col-6>\n                  <p class="order_time">25 Aug 10.45</p>\n                </ion-col>\n                <ion-col col-6>\n                  <p text-right class="order_price">$6.5</p>\n                </ion-col>\n              </ion-row>\n              <h2 class="rest_name">Trattoria Bianca</h2>\n              <ion-row>\n                <ion-col col-6>\n                  <p class="waiting" text-wrap>• Waiting for Processing</p>\n                </ion-col>\n                <ion-col col-6 (click)="goDetails(\'no\')">\n                  <p text-right class="details">Detail</p>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n        <ion-card class="c_orders">\n          <ion-card-content>\n            <ion-item>\n              <ion-thumbnail item-start>\n                <img src="assets/imgs/slider1.jpg" />\n              </ion-thumbnail>\n              <ion-row>\n                <ion-col col-6>\n                  <p class="order_time">25 Aug 8.45</p>\n                </ion-col>\n                <ion-col col-6>\n                  <p text-right class="order_price">$6.5</p>\n                </ion-col>\n              </ion-row>\n              <h2 class="rest_name">Delmonico Steak</h2>\n              <ion-row>\n                <ion-col col-6>\n                  <p class="picked" text-wrap>• Product Picked</p>\n                </ion-col>\n                <ion-col col-6 (click)="goDetails(\'yes\')">\n                  <p text-right class="details">Detail</p>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'past\'">\n        <ion-card class="p_orders">\n          <ion-card-content>\n            <ion-item>\n              <ion-thumbnail item-start>\n                <img src="assets/imgs/slider1.jpg" />\n              </ion-thumbnail>\n              <ion-row>\n                <ion-col col-6>\n                  <p class="order_time">22 Aug 8.45</p>\n                </ion-col>\n                <ion-col col-6>\n                  <p text-right class="order_price">$6.5</p>\n                </ion-col>\n              </ion-row>\n              <h2 class="rest_name">Delmonico Steak</h2>\n              <ion-row>\n                <ion-col col-6>\n                  <p class="deliverd" text-wrap>• Order Delivered</p>\n                </ion-col>\n                <ion-col col-6> </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-card-content>\n          <hr />\n          <ion-row>\n            <ion-col col-6>\n              <div class="rating_sections" text-center>\n                <ionic3-star-rating activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#eaea80"\n                  defaultColor="#f4f4f4" readonly="true" [rating]="5">\n                </ionic3-star-rating>\n              </div>\n            </ion-col>\n            <ion-col col-6 (click)="goDetails(\'yes\')">\n              <p text-center class="details">Detail</p>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n        <ion-card class="p_orders">\n          <ion-card-content>\n            <ion-item>\n              <ion-thumbnail item-start>\n                <img src="assets/imgs/slider1.jpg" />\n              </ion-thumbnail>\n              <ion-row>\n                <ion-col col-6>\n                  <p class="order_time">22 Aug 8.45</p>\n                </ion-col>\n                <ion-col col-6>\n                  <p text-right class="order_price">$6.5</p>\n                </ion-col>\n              </ion-row>\n              <h2 class="rest_name">Delmonico Steak</h2>\n              <ion-row>\n                <ion-col col-6>\n                  <p class="Cancelled" text-wrap>• Order Cancelled</p>\n                </ion-col>\n                <ion-col col-6> </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-card-content>\n          <hr />\n          <ion-row>\n            <ion-col col-6>\n              <p class="repeat" text-center>• Repeat Order</p>\n            </ion-col>\n            <ion-col col-6>\n              <p text-center class="details" (click)="goDetails(\'no\')">\n                Detail\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/abhinav/Alibaba/App_Source_Code/food_update/src/pages/order-history/order-history.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], OrderHistoryPage);
    return OrderHistoryPage;
}());

//# sourceMappingURL=order-history.js.map

/***/ })

});
//# sourceMappingURL=1.js.map