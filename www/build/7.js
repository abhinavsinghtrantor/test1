webpackJsonp([7],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_profile__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserProfilePageModule = /** @class */ (function () {
    function UserProfilePageModule() {
    }
    UserProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */]),
            ],
        })
    ], UserProfilePageModule);
    return UserProfilePageModule;
}());

//# sourceMappingURL=user-profile.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
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
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserProfilePage = /** @class */ (function () {
    function UserProfilePage(navCtrl, navParams, toastCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.placeholderPicture = "https://api.adorable.io/avatar/200/bob";
        this.enableNotifications = true;
        this.languages = ["English", "Portuguese", "French"];
        this.paymentMethods = ["Paypal", "Credit Card"];
        this.currencies = ["USD", "BRL", "EUR"];
        this.user = {
            name: "John Doe",
            imageUrl: "assets/imgs/pic.png"
        };
    }
    UserProfilePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad UserProfilePage");
    };
    UserProfilePage.prototype.toggleNotifications = function () {
        if (this.enableNotifications) {
            var message = this.toastCtrl.create({
                message: "Notifications enabled.",
                duration: 1000,
                position: "bottom"
            });
            message.present();
        }
        else {
            var message = this.toastCtrl.create({
                message: "Notifications disabled..",
                duration: 1000,
                position: "bottom"
            });
            message.present();
        }
    };
    UserProfilePage.prototype.logOut = function () {
        // this.navCtrl.setRoot("LoginPage");
        this.app.getRootNav().setRoot("LoginPage");
    };
    UserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-user-profile",template:/*ion-inline-start:"E:\Backup\Abhinav-data\github\ali\test1\src\pages\user-profile\user-profile.html"*/'<ion-header>\n\n  <ion-navbar primary> <ion-title>User Settings</ion-title> </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      <ion-avatar item-start>\n\n        <img [src]="user.imageUrl ? user.imageUrl : placeholderPicture" />\n\n      </ion-avatar>\n\n      <p class="username">{{ user.name }}</p>\n\n    </ion-list-header>\n\n  </ion-list>\n\n  <ion-list no-border>\n\n    <ion-list-header> General </ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="settings" item-start></ion-icon>\n\n      <ion-label>App Language</ion-label>\n\n      <ion-select [(ngModel)]="language">\n\n        <ion-option *ngFor="let language of languages" [value]="language">{{\n\n          language\n\n        }}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-toggle\n\n        [(ngModel)]="enableNotifications"\n\n        (click)="toggleNotifications()"\n\n      ></ion-toggle>\n\n      <ion-label class="label"> Enable notifications </ion-label>\n\n      <ion-icon name="notifications" item-start></ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header> Currency </ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="card" item-start></ion-icon>\n\n      <ion-label>Payment Method</ion-label>\n\n      <ion-select [(ngModel)]="paymentMethod">\n\n        <ion-option *ngFor="let method of paymentMethods" [value]="method">{{\n\n          method\n\n        }}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="logo-usd" item-start></ion-icon>\n\n      <ion-label>Currency</ion-label>\n\n      <ion-select [(ngModel)]="currency">\n\n        <ion-option *ngFor="let currency of currencies" [value]="currency">{{\n\n          currency\n\n        }}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header> Other </ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="power" item-start></ion-icon>\n\n      <button ion-button (click)="logOut()" item-end>Logout</button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Backup\Abhinav-data\github\ali\test1\src\pages\user-profile\user-profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], UserProfilePage);
    return UserProfilePage;
}());

//# sourceMappingURL=user-profile.js.map

/***/ })

});
//# sourceMappingURL=7.js.map