webpackJsonp([16],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPageModule", function() { return AddCardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_card__ = __webpack_require__(300);
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

/***/ 300:
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
            selector: "page-add-card",template:/*ion-inline-start:"E:\Backup\Abhinav-data\github\ali\test1\src\pages\add-card\add-card.html"*/'<ion-header>\n\n  <ion-navbar> <ion-title>Add Card</ion-title> </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background-color:#EEEEEE;" padding>\n\n  <ion-card class="d_card"> <img src="assets/imgs/debit.png" /> </ion-card>\n\n\n\n  <ion-list no-lines>\n\n    <ion-item>\n\n      <ion-input\n\n        placeholder="Card Holder Name"\n\n        [(ngModel)]="name"\n\n        type="text"\n\n        value=""\n\n      ></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item class="input">\n\n      <ion-input\n\n        type="text"\n\n        [(ngModel)]="number"\n\n        placeholder="Card Number"\n\n        value=""\n\n      ></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <ion-item>\n\n            <ion-datetime\n\n              [(ngModel)]="date"\n\n              displayFormat="MM/YYYY"\n\n              min="2017"\n\n              max="2030"\n\n              placeholder="Exp. Date"\n\n              [(ngModel)]="myDate"\n\n            ></ion-datetime>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <ion-item>\n\n            <ion-input\n\n              [(ngModel)]="cvv"\n\n              type="text"\n\n              placeholder="CVV"\n\n              value=""\n\n            ></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button\n\n            ion-button\n\n            color="custom"\n\n            full\n\n            class="btn_addcarte"\n\n            (click)="addCard()"\n\n          >\n\n            Add Card\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Backup\Abhinav-data\github\ali\test1\src\pages\add-card\add-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddCardPage);
    return AddCardPage;
}());

//# sourceMappingURL=add-card.js.map

/***/ })

});
//# sourceMappingURL=16.js.map