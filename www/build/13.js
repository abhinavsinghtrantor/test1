webpackJsonp([13],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAddressPageModule", function() { return NewAddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_address__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_google_places_autocomplete__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewAddressPageModule = /** @class */ (function () {
    function NewAddressPageModule() {
    }
    NewAddressPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__new_address__["a" /* NewAddressPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_address__["a" /* NewAddressPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_google_places_autocomplete__["a" /* GooglePlacesAutocompleteComponentModule */]
            ]
        })
    ], NewAddressPageModule);
    return NewAddressPageModule;
}());

//# sourceMappingURL=new-address.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAddressPage; });
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


var NewAddressPage = /** @class */ (function () {
    function NewAddressPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NewAddressPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    NewAddressPage.prototype.loadMap = function () {
        var latLng = new google.maps.LatLng(-34.929, 138.601);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    NewAddressPage.prototype.detail = function (address) {
        console.log("adddress", address);
        localStorage.setItem("deliveryAddress", address.description);
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("map"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], NewAddressPage.prototype, "mapElement", void 0);
    NewAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-new-address",template:/*ion-inline-start:"E:\Backup\Abhinav-data\github\ali\test1\src\pages\new-address\new-address.html"*/'<ion-header>\n\n  <ion-navbar> <ion-title> Choose Address </ion-title> </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <google-places-autocomplete\n\n    class="pngdiv"\n\n    (callback)="detail($event[0])"\n\n    key="AIzaSyDETzUTMYQiO8um87W4LsSQrzThLcUmHJY"\n\n  ></google-places-autocomplete>\n\n\n\n  <div #map id="map"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Backup\Abhinav-data\github\ali\test1\src\pages\new-address\new-address.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], NewAddressPage);
    return NewAddressPage;
}());

//# sourceMappingURL=new-address.js.map

/***/ })

});
//# sourceMappingURL=13.js.map