webpackJsonp([15],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPageModule", function() { return AddCardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_card__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddCardPageModule = /** @class */ (function () {
    function AddCardPageModule() {
    }
    AddCardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_card__["a" /* AddCardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_card__["a" /* AddCardPage */]),
            ],
        })
    ], AddCardPageModule);
    return AddCardPageModule;
}());

//# sourceMappingURL=add-card.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCardPage; });
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
 * Generated class for the AddCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddCardPage = /** @class */ (function () {
    function AddCardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddCardPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad AddCardPage");
    };
    AddCardPage.prototype.addCard = function () {
        this.navCtrl.pop();
    };
    AddCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-add-card",template:/*ion-inline-start:"/Users/abhinav/Alibaba/App_Source_Code/food_update/src/pages/add-card/add-card.html"*/'<ion-header>\n  <ion-navbar> <ion-title>Add Card</ion-title> </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color:#EEEEEE;" padding>\n  <ion-card class="d_card"> <img src="assets/imgs/debit.png" /> </ion-card>\n\n  <ion-list no-lines>\n    <ion-item>\n      <ion-input\n        placeholder="Card Holder Name"\n        [(ngModel)]="name"\n        type="text"\n        value=""\n      ></ion-input>\n    </ion-item>\n\n    <ion-item class="input">\n      <ion-input\n        type="text"\n        [(ngModel)]="number"\n        placeholder="Card Number"\n        value=""\n      ></ion-input>\n    </ion-item>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <ion-item>\n            <ion-datetime\n              [(ngModel)]="date"\n              displayFormat="MM/YYYY"\n              min="2017"\n              max="2030"\n              placeholder="Exp. Date"\n              [(ngModel)]="myDate"\n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <ion-item>\n            <ion-input\n              [(ngModel)]="cvv"\n              type="text"\n              placeholder="CVV"\n              value=""\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button\n            ion-button\n            color="custom"\n            full\n            class="btn_addcarte"\n            (click)="addCard()"\n          >\n            Add Card\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/abhinav/Alibaba/App_Source_Code/food_update/src/pages/add-card/add-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddCardPage);
    return AddCardPage;
}());

//# sourceMappingURL=add-card.js.map

/***/ })

});
//# sourceMappingURL=15.js.map