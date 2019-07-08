webpackJsonp([6],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyNumberPageModule", function() { return VerifyNumberPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verify_number__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerifyNumberPageModule = /** @class */ (function () {
    function VerifyNumberPageModule() {
    }
    VerifyNumberPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verify_number__["a" /* VerifyNumberPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verify_number__["a" /* VerifyNumberPage */]),
            ],
        })
    ], VerifyNumberPageModule);
    return VerifyNumberPageModule;
}());

//# sourceMappingURL=verify-number.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyNumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerifyNumberPage = /** @class */ (function () {
    function VerifyNumberPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    VerifyNumberPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad VerifyNumberPage");
    };
    VerifyNumberPage.prototype.VerifyNumber = function () {
        localStorage['user'] = "yes";
        var message = this.toastCtrl.create({
            message: "Verification Success",
            position: "bottom",
            duration: 1000
        });
        message.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        console.log("verify number");
        //write code to verify code
    };
    VerifyNumberPage.prototype.resendCode = function () {
        this.otp = "";
        var message = this.toastCtrl.create({
            message: "OTP is Sent to your Register Mobile Number",
            position: "bottom",
            duration: 1000
        });
        message.present();
        console.log("resend code");
        //write code to resend OTP
    };
    VerifyNumberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-verify-number",template:/*ion-inline-start:"E:\Backup\Abhinav-data\github\ali\test1\src\pages\verify-number\verify-number.html"*/'<ion-content padding>\n\n  <h3 class="page-title">Enter OTP</h3>\n\n  <div class="top-pera">\n\n    <p>\n\n      Enter 6 digit number to validate mobile number\n\n    </p>\n\n  </div>\n\n  <div class=\'masked\'>\n\n    <input type="text" maxlength="6" [(ngModel)]="otp">\n\n  </div>\n\n  <div class=\'masked2\'>\n\n  </div>\n\n  <div class="code-container">\n\n  </div>\n\n  <div class="button-container">\n\n    <button ion-button block color="primary" (tap)="VerifyNumber()" tappable>Verify</button>\n\n  </div>\n\n  <div class="footer-text-container">\n\n    <span class="footer-text" (tap)="resendCode()">Resend code</span>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\Backup\Abhinav-data\github\ali\test1\src\pages\verify-number\verify-number.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], VerifyNumberPage);
    return VerifyNumberPage;
}());

//# sourceMappingURL=verify-number.js.map

/***/ })

});
//# sourceMappingURL=6.js.map