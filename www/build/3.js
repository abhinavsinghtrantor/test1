webpackJsonp([3],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersPageModule", function() { return FiltersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FiltersPageModule = /** @class */ (function () {
    function FiltersPageModule() {
    }
    FiltersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filters__["a" /* FiltersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filters__["a" /* FiltersPage */]),
            ],
        })
    ], FiltersPageModule);
    return FiltersPageModule;
}());

//# sourceMappingURL=filters.module.js.map

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

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersPage; });
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
 * Generated class for the FiltersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FiltersPage = /** @class */ (function () {
    function FiltersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.structure = { lower: 5, upper: 20 };
    }
    FiltersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FiltersPage');
    };
    FiltersPage.prototype.filter = function () {
        /// Code for filter
        console.log('filter');
        this.navCtrl.pop();
    };
    FiltersPage.prototype.clear = function () {
        // code for clear filter
        console.log('clear');
    };
    FiltersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-filters',template:/*ion-inline-start:"E:\Backup\Abhinav-data\github\ali\test1\src\pages\filters\filters.html"*/'<!--\n\n  Generated template for the FiltersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Filters</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="primary">\n\n        <ion-icon name="md-time"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>All</ion-label>\n\n      <ion-checkbox checked="true"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Restaurant</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Cafe</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Market</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Snack & Drinks</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Bakeries</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      Diet\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-label>All</ion-label>\n\n      <ion-checkbox checked="true"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Dietary</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Vegetarian</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Kosher</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Eco</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Without gluten</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Sugarless</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Without lactose </ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      Payments\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-label>Cash</ion-label>\n\n      <ion-checkbox checked="true"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Online</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Card</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      Catalog\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-label>All</ion-label>\n\n      <ion-checkbox checked="true"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Grocery</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Preserving</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Beverages</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      Distance\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-range dualKnobs="true" pin="true" [(ngModel)]="structure" color="dark" max="30">\n\n      </ion-range>\n\n      <ion-label>Distance Range {{structure.lower}} m - {{structure.upper}} km </ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button color="primary" full round (tap)="filter()">Filter</button>\n\n  <button ion-button color="primary" outline round class="clear_btn" (tap)="clear()">Clear</button>\n\n</ion-content>'/*ion-inline-end:"E:\Backup\Abhinav-data\github\ali\test1\src\pages\filters\filters.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FiltersPage);
    return FiltersPage;
}());

//# sourceMappingURL=filters.js.map

/***/ })

});
//# sourceMappingURL=3.js.map