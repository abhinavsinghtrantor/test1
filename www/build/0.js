webpackJsonp([0],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomePageModule", function() { return UserHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_home__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserHomePageModule = /** @class */ (function () {
    function UserHomePageModule() {
    }
    UserHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_home__["a" /* UserHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_home__["a" /* UserHomePage */]),
            ],
        })
    ], UserHomePageModule);
    return UserHomePageModule;
}());

//# sourceMappingURL=user-home.module.js.map

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

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return host; });
var host = "http://localhost:8080";
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHomePage; });
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




var UserHomePage = /** @class */ (function () {
    function UserHomePage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    UserHomePage.prototype.ngOnInit = function () {
        var _this = this;
        var cart = { items: [], tPrice: 0 };
        localStorage['cart'] = JSON.stringify(cart);
        localStorage['userMobile'] = "0000000000";
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* host */] + "/getRestaurents", {}).toPromise()
            .then(function (data) {
            _this.restaurants = data['restaurants'];
            console.log(data); // data received by server
        });
    };
    UserHomePage.prototype.goProductList = function (restaurant) {
        console.log("products", restaurant);
        this.navCtrl.push("ProductListPage", { restaurant: restaurant });
    };
    UserHomePage.prototype.filter = function () {
        this.navCtrl.push("ChatBot");
    };
    UserHomePage.prototype.ionViewWillEnter = function () {
        this.address = localStorage.getItem("deliveryAddress");
    };
    UserHomePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad UserHomePage");
    };
    UserHomePage.prototype.changeAddress = function () {
        this.navCtrl.push("NewAddressPage");
    };
    UserHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-user-home",template:/*ion-inline-start:"E:\Backup\Abhinav-data\github\ali\test1\src\pages\user-home\user-home.html"*/'<ion-content>\n\n  <ion-row class="header_section">\n\n    <ion-col col-2>\n\n      <ion-buttons left>\n\n        <button ion-button clear icon-only color="primary">\n\n          <ion-icon name="md-list"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <ion-item no-lines class="delivery_address" (click)="changeAddress()">\n\n        <ion-icon name="ios-pin-outline" item-start></ion-icon>\n\n        {{ address }}\n\n      </ion-item>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n      <ion-buttons end>\n\n        <button ion-button clear icon-only color="primary">\n\n          <ion-icon name="md-cart"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-col>\n\n  </ion-row>\n\n  <div class="main_section">\n\n    <ion-label class="explore_lbl">Explore</ion-label>\n\n    <ion-searchbar mode="md"></ion-searchbar>\n\n    <div class="restaurant">\n\n      <ion-card\n\n        class="restaurant_card"\n\n        *ngFor="let restaurant of restaurants; let i = index"\n\n        (tap)="goProductList(restaurant)"\n\n        tappable\n\n      >\n\n        <img src="{{ restaurant.image }}" class="main_img" />\n\n        <ion-card-content> <div class="card_content"></div> </ion-card-content>\n\n        <div class="restaurant_content">\n\n          <ion-row>\n\n            <ion-col col-6>\n\n              <h2 class="restaurant_name">{{ restaurant.name }}</h2>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <h2 class="restaurant_time">{{ restaurant.time }} min</h2>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              <h2 class="restaurant_address">{{ restaurant.address }}</h2>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-6>\n\n              <div class="rating_sections">\n\n                <ionic3-star-rating\n\n                  activeIcon="ios-star"\n\n                  defaultIcon="ios-star-outline"\n\n                  activeColor="#eaea80"\n\n                  defaultColor="#f4f4f4"\n\n                  readonly="true"\n\n                  [rating]="5"\n\n                >\n\n                </ionic3-star-rating>\n\n                <h2 class="user_rating">{{ restaurant.rating }}</h2>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <h2 class="restaurant_time_opening">\n\n                {{ restaurant.openign_time }}\n\n              </h2>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n      </ion-card>\n\n    </div>\n\n  </div>\n\n  <ion-fab right bottom (tap)="filter()">\n\n    <button ion-fab color="primary" mini>\n\n      <ion-icon name="chatbubbles"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Backup\Abhinav-data\github\ali\test1\src\pages\user-home\user-home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], UserHomePage);
    return UserHomePage;
}());

//# sourceMappingURL=user-home.js.map

/***/ })

});
//# sourceMappingURL=0.js.map