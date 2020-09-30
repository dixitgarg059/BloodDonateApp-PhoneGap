(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donor-donor-registration-donor-registration-module"],{

/***/ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js ***!
  \*******************************************************************************/
/*! exports provided: AngularFireAuth, AngularFireAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuth", function() { return AngularFireAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuthModule", function() { return AngularFireAuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// WARNING: interface has both a type and a value, skipping emit

class AngularFireAuth {
    /**
     * @param {?} options
     * @param {?} nameOrConfig
     * @param {?} platformId
     * @param {?} zone
     */
    constructor(options, nameOrConfig, 
    // tslint:disable-next-line:ban-types
    platformId, zone) {
        /** @type {?} */
        const schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵAngularFireSchedulers"](zone);
        /** @type {?} */
        const keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵkeepUnstableUntilFirstFactory"])(schedulers);
        /** @type {?} */
        const auth = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
         * @return {?}
         */
        () => zone.runOutsideAngular((/**
         * @return {?}
         */
        () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js")))))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @return {?}
         */
        () => Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} app
         * @return {?}
         */
        app => zone.runOutsideAngular((/**
         * @return {?}
         */
        () => app.auth())))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({ bufferSize: 1, refCount: false }));
        // HACK, as we're exporting auth.Auth, rather than auth, developers importing firebase.auth
        //       (e.g, `import { auth } from 'firebase/app'`) are getting an undefined auth object unexpectedly
        //       as we're completely lazy. Let's eagerly load the Auth SDK here.
        //       There could potentially be race conditions still... but this greatly decreases the odds while
        //       we reevaluate the API.
        /** @type {?} */
        const _ = auth.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe();
        this.authState = auth.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
         * @param {?} auth
         * @return {?}
         */
        auth => zone.runOutsideAngular((/**
         * @return {?}
         */
        () => new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](auth.onAuthStateChanged.bind(auth)))))), keepUnstableUntilFirst);
        this.user = auth.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
         * @param {?} auth
         * @return {?}
         */
        auth => zone.runOutsideAngular((/**
         * @return {?}
         */
        () => new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](auth.onIdTokenChanged.bind(auth)))))), keepUnstableUntilFirst);
        this.idToken = this.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
         * @param {?} user
         * @return {?}
         */
        user => user ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(user.getIdToken()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null))));
        this.idTokenResult = this.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
         * @param {?} user
         * @return {?}
         */
        user => user ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(user.getIdTokenResult()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null))));
        return Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵlazySDKProxy"])(this, auth, zone);
    }
}
AngularFireAuth.ɵfac = function AngularFireAuth_Factory(t) { return new (t || AngularFireAuth)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
/** @nocollapse */
AngularFireAuth.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"],] }] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
/** @nocollapse */ AngularFireAuth.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function AngularFireAuth_Factory() { return new AngularFireAuth(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: AngularFireAuth, providedIn: "any" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFireAuth, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'any'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularFireAuthModule {
}
AngularFireAuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularFireAuthModule });
AngularFireAuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularFireAuthModule_Factory(t) { return new (t || AngularFireAuthModule)(); }, providers: [AngularFireAuth] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFireAuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [AngularFireAuth]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-fire-auth.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/donor/donor-registration/donor-registration.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donor/donor-registration/donor-registration.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img src=\"../assets/logo.png\">\n        </ion-avatar>\n        <ion-label>Donor Registration</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!(user | async)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col></ion-col>\n        <ion-col>\n          <ion-label>SignIn using Your Phone</ion-label>\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div id=\"firebaseui-auth-container\"></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngIf=\"(user | async) && obserVableReceivedData == true\">\n    <form [formGroup]=\"donorLoginForm\" (ngSubmit)=\"SaveDonorDetails($event)\">\n      <ion-item>\n        <ion-label position=\"floating\">Your Name</ion-label>\n        <ion-input placeholder=\"Your Name\" formControlName=\"name\"></ion-input>\n      </ion-item>\n      <span class=\"error ion-padding\"\n        *ngIf=\"(donorLoginForm.get('name').touched || donorLoginForm.get('name').dirty) && donorLoginForm.get('name').errors?.required\">\n        Name is required.\n      </span>\n      <span class=\"error ion-padding\"\n        *ngIf=\"(donorLoginForm.get('name').touched || donorLoginForm.get('name').dirty) && donorLoginForm.get('name').errors?.maxlength\">\n        only 30 characters long.\n      </span>\n\n      <ion-item>\n        <ion-label position=\"floating\">Your Mobile No</ion-label>\n        <ion-input placeholder=\"Your Mobile No\" disabled formControlName=\"phone\"></ion-input>\n      </ion-item>\n      <span class=\"error ion-padding\"\n        *ngIf=\"(donorLoginForm.get('phone').touched || donorLoginForm.get('phone').dirty) && donorLoginForm.get('phone').errors?.pattern\">\n        only digits allowed\n      </span>\n      <span class=\"error ion-padding\"\n        *ngIf=\"(donorLoginForm.get('phone').touched || donorLoginForm.get('phone').dirty) && (donorLoginForm.get('phone').errors?.maxlength)\">\n        10digits - only indian numbers allowed\n      </span>\n\n      <ion-item>\n        <ion-label position=\"floating\">State</ion-label>\n        <ion-select interface=\"action-sheet\" placeholder=\"Select State\" (ionChange)=\"getCities()\" name=\"stateDropDown\"\n          id=\"stateDropDown\" formControlName=\"state\">\n          <ion-select-option *ngFor=\"let state of statesList\" [value]=\"state.id\">{{state.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <span class=\"error ion-padding\"\n        *ngIf=\"(donorLoginForm.get('state').touched || donorLoginForm.get('state').dirty) && donorLoginForm.get('state').errors?.required\">\n        Select State\n      </span>\n\n      <ion-item>\n        <ion-label position=\"floating\">City</ion-label>\n        <ion-select interface=\"action-sheet\" placeholder=\"Select City\" name=\"cityDropDown\" formControlName=\"city\"\n          id=\"cityDropDown\">\n          <ion-select-option *ngFor=\"let city of citiesList\" [value]=\"city.id\">{{city.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <span class=\"error ion-padding\"\n        *ngIf=\"(donorLoginForm.get('city').touched || donorLoginForm.get('city').dirty) && donorLoginForm.get('city').errors?.required\">\n        Select City\n      </span>\n\n      <ion-item>\n        <ion-label position=\"floating\">Blood Group</ion-label>\n        <ion-select interface=\"action-sheet\" placeholder=\"Select Blood Group\" name=\"bloodGroupDropDown\"\n          id=\"bloodGroupDropDown\" formControlName=\"bloodgroup\">\n          <ion-select-option value=\"A+\">A+</ion-select-option>\n          <ion-select-option value=\"B+\">B+</ion-select-option>\n          <ion-select-option value=\"AB+\">AB+</ion-select-option>\n          <ion-select-option value=\"O+\">O+</ion-select-option>\n          <ion-select-option value=\"A-\">A-</ion-select-option>\n          <ion-select-option value=\"B-\">B-</ion-select-option>\n          <ion-select-option value=\"AB-\">AB-</ion-select-option>\n          <ion-select-option value=\"O-\">O-</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <span class=\"error ion-padding\"\n        *ngIf=\"(donorLoginForm.get('bloodgroup').touched || donorLoginForm.get('bloodgroup').dirty) && donorLoginForm.get('bloodgroup').errors?.required\">\n        select blood group\n      </span>\n\n      <ion-item>\n        <ion-label position=\"floating\">Your Previous Blood Donation Details</ion-label>\n        <p class=\"ion-padding-end\"></p>\n      </ion-item>\n\n\n      <ion-item lines=\"none\">\n        <ion-segment color=\"medium\" formControlName=\"bloodDonationOption\" (ionChange)=\"segmentChanged($event)\">\n          <ion-segment-button value=\"NeverDonated\">\n            <ion-icon name=\"alert-circle-outline\"></ion-icon>\n            <ion-label>Never Donated</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"LastDonatedOn\">\n            <ion-icon name=\"calendar-outline\"></ion-icon>\n            <ion-label>Donated On</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"NoDonationWish\">\n            <ion-icon name=\"close-circle-outline\"></ion-icon>\n            <ion-label>Opt Out</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-item>\n      <br>\n      <ng-template [ngIf]=\"donorRegistrationDetails.BloodDonationOption == 'LastDonatedOn'\" id=\"calendarControl\">\n        <ion-item>\n          <ion-label>Select your Last Donated Date</ion-label>\n          <ion-datetime displayFormat=\"DDDD MMM D, YYYY\" min=\"2005\" max=\"2050\" (ionChange)=\"SetLastDonatedDate($event)\"\n            formControlName=\"lastDonatedDate\"></ion-datetime>\n        </ion-item>\n      </ng-template>\n      <ng-template [ngIf]=\"donorRegistrationDetails.BloodDonationOption == 'NoDonationWish'\">\n        <ion-label><cite>Your details will not be shown in search results</cite></ion-label>\n      </ng-template>\n\n\n      <div class=\"ion-padding\">\n        <div *ngIf=\"!savingDetails;else loadingButton\">\n          <ion-button color=\"medium\" type=\"submit\" expand=\"block\" [disabled]=\"!donorLoginForm.valid\">\n            <ion-icon name=\"water-outline\"></ion-icon>Save My Details\n          </ion-button>\n        </div>\n        <ng-template #loadingButton>\n          <ion-button expand=\"block\" type=\"button\" disabled class=\"ion-no-margin\">\n            <ion-spinner name=\"bubbles\"></ion-spinner>\n          </ion-button>\n        </ng-template>\n      </div>\n\n    </form>\n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border ion-justify-content-center\"\n  style=\"background-color: #fe616a !important; color: #ffff !important;\">\n  <p style=\"text-align: center; background-color: #fe616a; color: #ffff;\">All India Payam-E-Insaniyat Forum.<br>&copy;&nbsp;All Rights Reserved.</p>\n</ion-footer>");

/***/ }),

/***/ "./src/app/donor/donor-registration/donor-registration-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/donor/donor-registration/donor-registration-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DonorRegistrationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorRegistrationPageRoutingModule", function() { return DonorRegistrationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _donor_registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./donor-registration.page */ "./src/app/donor/donor-registration/donor-registration.page.ts");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");





const routes = [
    {
        path: '',
        component: _donor_registration_page__WEBPACK_IMPORTED_MODULE_3__["DonorRegistrationPage"]
    }
];
let DonorRegistrationPageRoutingModule = class DonorRegistrationPageRoutingModule {
};
DonorRegistrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DonorRegistrationPageRoutingModule);



/***/ }),

/***/ "./src/app/donor/donor-registration/donor-registration.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/donor/donor-registration/donor-registration.module.ts ***!
  \***********************************************************************/
/*! exports provided: DonorRegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorRegistrationPageModule", function() { return DonorRegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _donor_registration_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./donor-registration-routing.module */ "./src/app/donor/donor-registration/donor-registration-routing.module.ts");
/* harmony import */ var _donor_registration_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./donor-registration.page */ "./src/app/donor/donor-registration/donor-registration.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







let DonorRegistrationPageModule = class DonorRegistrationPageModule {
};
DonorRegistrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _donor_registration_routing_module__WEBPACK_IMPORTED_MODULE_4__["DonorRegistrationPageRoutingModule"]
        ],
        declarations: [_donor_registration_page__WEBPACK_IMPORTED_MODULE_5__["DonorRegistrationPage"]]
    })
], DonorRegistrationPageModule);



/***/ }),

/***/ "./src/app/donor/donor-registration/donor-registration.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/donor/donor-registration/donor-registration.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content, ion-select, ion-select-option, ion-list, ion-button, ion-item, ion-title, ion-menu-button, ion-ripple-effect, ion-footer {\n  --ion-background-color:#fe616a;\n  --color:#ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9ub3IvZG9ub3ItcmVnaXN0cmF0aW9uL0U6XFxMZWFybmluZy1Qcm9qZWN0c1xcaW9uaWMtY3Jhc2hDb3Vyc2VcXGJsb29kLWRvbmF0ZS1hcHBcXEJsb29kRG9uYXRlQXBwLVBob25lR2FwL3NyY1xcYXBwXFxkb25vclxcZG9ub3ItcmVnaXN0cmF0aW9uXFxkb25vci1yZWdpc3RyYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9kb25vci9kb25vci1yZWdpc3RyYXRpb24vZG9ub3ItcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQ1pKIiwiZmlsZSI6InNyYy9hcHAvZG9ub3IvZG9ub3ItcmVnaXN0cmF0aW9uL2Rvbm9yLXJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLy8gZGl2Lm1vbnRodmlldy1jb250YWluZXIge1xuLy8gICAgIGhlaWdodDogMWVtICFpbXBvcnRhbnQ7XG4vLyB9XG4vLyAuaW52YWxpZCB7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhNjE1Mztcbi8vIH1cbi8vIC5lcnJvciB7XG4vLyAgY29sb3I6IHJlZDtcbiBcbi8vIH1cblxuaW9uLWNvbnRlbnQsIGlvbi1zZWxlY3QsIGlvbi1zZWxlY3Qtb3B0aW9uLCBpb24tbGlzdCwgaW9uLWJ1dHRvbiwgaW9uLWl0ZW0sIGlvbi10aXRsZSwgaW9uLW1lbnUtYnV0dG9uLCBpb24tcmlwcGxlLWVmZmVjdCwgaW9uLWZvb3RlciB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmU2MTZhO1xuICAgIC0tY29sb3I6I2ZmZmZmZjtcbn1cblxuIiwiaW9uLWNvbnRlbnQsIGlvbi1zZWxlY3QsIGlvbi1zZWxlY3Qtb3B0aW9uLCBpb24tbGlzdCwgaW9uLWJ1dHRvbiwgaW9uLWl0ZW0sIGlvbi10aXRsZSwgaW9uLW1lbnUtYnV0dG9uLCBpb24tcmlwcGxlLWVmZmVjdCwgaW9uLWZvb3RlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZlNjE2YTtcbiAgLS1jb2xvcjojZmZmZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/donor/donor-registration/donor-registration.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/donor/donor-registration/donor-registration.page.ts ***!
  \*********************************************************************/
/*! exports provided: DonorRegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorRegistrationPage", function() { return DonorRegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_city__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/city */ "./src/app/models/city.ts");
/* harmony import */ var _service_donor_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/donor-registration.service */ "./src/app/service/donor-registration.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_service_firebase_ui_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/firebase-ui-auth.service */ "./src/app/service/firebase-ui-auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");








let DonorRegistrationPage = class DonorRegistrationPage {
    // userPhoneNo: string = '';
    // otpSent: Boolean = false;
    // otp: string = '123456';
    constructor(donorRegistrationService, angularFireAuth, formBuilder, firebaseUiAuthService, toastController) {
        this.donorRegistrationService = donorRegistrationService;
        this.angularFireAuth = angularFireAuth;
        this.formBuilder = formBuilder;
        this.firebaseUiAuthService = firebaseUiAuthService;
        this.toastController = toastController;
        this.counter = 0;
        this.obserVableReceivedData = false;
        this.savingDetails = false;
        this.lastDonatedDefaultDate = new Date().toISOString().substring(0, 10);
        this.donorRegistrationDetails = {
            Id: '',
            DonorName: '',
            ContactNo: '',
            State: 0,
            City: 0,
            BloodGroup: '',
            Email: '',
            LastDonatedDate: '',
            BloodDonationOption: ''
        };
    }
    DonorLoggedIn(phoneNumber) {
        let donorDetails = { Id: '', BloodDonationOption: '', DonorName: '', BloodGroup: '', State: 0, City: 0, ContactNo: '', LastDonatedDate: '', Email: '' };
        this.savingDetails = true;
        this.donorRegistrationService.GetMyDetails(phoneNumber).subscribe(x => {
            x.docs.forEach(function (doc) {
                let data = doc.data();
                console.log('doc data', data);
                console.log('doc id:', doc.id);
                donorDetails.DonorName = data.DonorName.trim();
                donorDetails.State = data.State;
                donorDetails.City = data.City;
                donorDetails.ContactNo = phoneNumber;
                //donorDetails.ContactNo = data.ContactNo.trim();
                donorDetails.Email = data.Email.trim();
                donorDetails.BloodGroup = data.BloodGroup.trim();
                donorDetails.LastDonatedDate = data.LastDonatedDate;
                donorDetails.BloodDonationOption = data.BloodDonationOption;
                donorDetails.Id = doc.id;
            });
        }, error => {
            console.log(error);
        }, () => {
            console.log('ContactNo:', this.donorRegistrationDetails.ContactNo);
            this.donorRegistrationDetails = donorDetails;
            this.obserVableReceivedData = true;
            this.donorLoginForm.get('name').patchValue(this.donorRegistrationDetails.DonorName);
            this.donorLoginForm.get('phone').patchValue(phoneNumber);
            this.donorLoginForm.get('state').patchValue(this.donorRegistrationService.getStates().filter(x => x.id == this.donorRegistrationDetails.State)[0].id);
            this.getCities();
            this.donorLoginForm.get('city').patchValue(this.donorRegistrationDetails.City);
            this.donorLoginForm.get('bloodgroup').patchValue(this.donorRegistrationDetails.BloodGroup);
            if (this.donorRegistrationDetails.BloodDonationOption == '') {
                this.donorRegistrationDetails.BloodDonationOption = 'NeverDonated';
                this.donorLoginForm.get('bloodDonationOption').patchValue(this.donorRegistrationDetails.BloodDonationOption);
            }
            else {
                this.donorLoginForm.get('bloodDonationOption').patchValue(this.donorRegistrationDetails.BloodDonationOption);
            }
            if (this.donorRegistrationDetails.LastDonatedDate != '') {
                this.donorLoginForm.get('lastDonatedDate').patchValue(this.donorRegistrationDetails.LastDonatedDate);
            }
            else {
                this.donorRegistrationDetails.LastDonatedDate = this.lastDonatedDefaultDate;
                this.donorLoginForm.get('lastDonatedDate').patchValue(this.donorRegistrationDetails.LastDonatedDate);
            }
            this.savingDetails = false;
        });
    }
    ngOnInit() {
        this.statesList = this.donorRegistrationService.getStates();
        this.donorLoginForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.donorRegistrationDetails.DonorName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.donorRegistrationDetails.ContactNo, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.donorRegistrationDetails.State, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.donorRegistrationDetails.City, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
            bloodgroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.donorRegistrationDetails.BloodGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
            bloodDonationOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.donorRegistrationDetails.BloodDonationOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
            lastDonatedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.donorRegistrationDetails.LastDonatedDate, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]))
        });
    }
    ionViewDidEnter() {
        //alert('loading');
        this.firebaseUiAuthService.ui.start('#firebaseui-auth-container', this.firebaseUiAuthService.getUiConfig());
        this.user = this.angularFireAuth.authState;
        console.log('this.user:', this.user);
        this.angularFireAuth.onAuthStateChanged((user) => {
            if (user != null) {
                this.DonorLoggedIn(user.phoneNumber);
            }
        }, (error) => {
            alert(error);
        });
    }
    getCities() {
        //if (e) e.preventDefault();
        this.counter = 0;
        let cities = [];
        console.log('states', this.donorRegistrationDetails.State);
        console.log(this.donorLoginForm.get('state').value);
        src_app_models_city__WEBPACK_IMPORTED_MODULE_2__["CitiesList"][this.donorLoginForm.get('state').value].split('|').forEach(cityName => {
            cities.push({ id: this.counter, name: cityName.trim() });
            this.counter = this.counter + 1;
        });
        this.citiesList = cities;
    }
    segmentChanged($event) {
        this.donorRegistrationDetails.BloodDonationOption = $event.detail.value;
    }
    SetLastDonatedDate(e) {
        this.donorRegistrationDetails.LastDonatedDate = new Date(e.target.value).toISOString().substring(0, 10);
        this.donorLoginForm.get('lastDonatedDate').setValue(this.donorRegistrationDetails.LastDonatedDate, {
            onlyself: true
        });
    }
    presentSuccessToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Your details have been saved.',
                duration: 2000,
                color: 'success'
            });
            toast.present();
        });
    }
    presentFailureToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Unable to save details.',
                duration: 2000,
                color: 'danger'
            });
            toast.present();
        });
    }
    SaveDonorDetails(e) {
        e.preventDefault();
        //this.isFormSubmitted = true;
        let me = this;
        //console.log(this.donorLoginForm.value);
        //console.log(this.donorRegistrationDetails.BloodDonationDetails.lastDonatedDate);
        if (me.donorLoginForm.valid) {
            this.savingDetails = true;
            console.log('my id:', this.donorRegistrationDetails.Id);
            this.donorRegistrationDetails.DonorName = this.donorLoginForm.get('name').value;
            this.donorRegistrationDetails.ContactNo = this.donorLoginForm.get('phone').value;
            this.donorRegistrationDetails.State = this.donorLoginForm.get('state').value;
            this.donorRegistrationDetails.City = this.donorLoginForm.get('city').value;
            this.donorRegistrationDetails.BloodGroup = this.donorLoginForm.get('bloodgroup').value;
            this.donorRegistrationDetails.BloodDonationOption = this.donorLoginForm.get('bloodDonationOption').value;
            this.donorRegistrationDetails.LastDonatedDate = this.donorLoginForm.get('lastDonatedDate').value;
            if (this.donorRegistrationDetails.Id != '') {
                console.log('upadte:', this.donorRegistrationDetails);
                this.donorRegistrationService.UpdateMyDetails(this.donorRegistrationDetails).then(() => {
                    //alert('details updated');
                }).catch((err) => {
                    this.presentFailureToast();
                    console.log('err:', err);
                }).finally(() => {
                    this.savingDetails = false;
                    this.presentSuccessToast();
                    this.DonorLoggedIn(this.donorRegistrationDetails.ContactNo);
                });
                return;
            }
            else {
                console.log('add details:', this.donorRegistrationDetails);
                this.donorRegistrationService.AddMyDetails(this.donorRegistrationDetails).then((x) => {
                    //alert('details added');
                }).catch((err) => {
                    this.presentFailureToast();
                    console.log('err:', err);
                }).finally(() => {
                    this.savingDetails = false;
                    this.presentSuccessToast();
                    console.log('user contact no:', this.donorRegistrationDetails.ContactNo);
                    this.DonorLoggedIn(this.donorRegistrationDetails.ContactNo);
                });
                return;
            }
        }
        else {
            //invalid form, alert user
            //alert('empty fields');
            console.log('invalid form');
            this.donorLoginForm.markAsDirty();
            console.log(this.donorRegistrationDetails);
        }
    }
};
DonorRegistrationPage.ctorParameters = () => [
    { type: _service_donor_registration_service__WEBPACK_IMPORTED_MODULE_3__["DonorRegistrationService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_service_firebase_ui_auth_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseUiAuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] }
];
DonorRegistrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donor-registration',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./donor-registration.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/donor/donor-registration/donor-registration.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./donor-registration.page.scss */ "./src/app/donor/donor-registration/donor-registration.page.scss")).default]
    })
], DonorRegistrationPage);



/***/ }),

/***/ "./src/app/service/donor-registration.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/service/donor-registration.service.ts ***!
  \*******************************************************/
/*! exports provided: DonorRegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorRegistrationService", function() { return DonorRegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _locations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locations.service */ "./src/app/service/locations.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");





let DonorRegistrationService = class DonorRegistrationService extends _locations_service__WEBPACK_IMPORTED_MODULE_2__["LocationsService"] {
    constructor(angularFireStore, firebaseAuth) {
        super();
        this.angularFireStore = angularFireStore;
        this.firebaseAuth = firebaseAuth;
        this.user = firebaseAuth.authState;
    }
    GetMyDetails(phoneNo) {
        let dot = { Id: '', BloodDonationOption: '', DonorName: '', BloodGroup: '', State: 0, City: 0, ContactNo: '', LastDonatedDate: '', Email: '' };
        // this.angularFireStore.collection<DonateBlood>('Donors', ref => ref.where('ContactNo', '==', phoneNo)).get().subscribe((x) => {
        //   x.docs.forEach(function (doc) {
        //     let data = doc.data();
        //     console.log('doc data', data);
        //     dot.DonorName = data.DonorName.trim();
        //     dot.State = data.State.trim();
        //     dot.City = data.City.trim();
        //     dot.ContactNo = data.ContactNo.trim();
        //     dot.Email = data.Email.trim();
        //     dot.BloodGroup = data.BloodGroup.trim();
        //     dot.LastDonatedDate = data.LastDonatedDate;
        //     dot.BloodDonationOption = data.BloodDonationOption;
        //     dot.Id ='123';
        //   });
        // }, (error) => {
        //   console.log('error while getting data', error);
        // });
        return this.angularFireStore.collection('Donors', ref => ref.where('ContactNo', '==', phoneNo)).get();
        //console.log('data before returning', dot);
        //return dot;
    }
    UpdateMyDetails(donorObj) {
        return this.angularFireStore.collection('Donors').doc(donorObj.Id).update(donorObj);
        /*
        .then(() => {
           return 'success';
         }, err => {
           return err;
         });s
        */
    }
    AddMyDetails(donorObj) {
        return this.angularFireStore.collection('Donors').add(donorObj);
        /*
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
    
      }    */
    }
};
DonorRegistrationService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }
];
DonorRegistrationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DonorRegistrationService);



/***/ })

}]);
//# sourceMappingURL=donor-donor-registration-donor-registration-module-es2015.js.map