function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-donor-search-donor-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search-donor/donor-details-page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search-donor/donor-details-page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchSearchDonorDonorDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent>\n    <ion-toolbar>\n        <ion-title>\n            <div>\n                <h5>Donor Details</h5>\n            </div>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"closeDetailsPage()\">\n                <h6>Close<ion-icon name=\"close-circle-outline\"></ion-icon>\n                </h6>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<!--  test -->\n<ion-content fullscreen>\n    <!-- List of Text Items -->\n    <!-- <ion-list>\n        <ion-item>\n            <ion-row>\n                <ion-label>Pokémon Yellow</ion-label>\n                <ion-label>{{donorDetails.Name}}</ion-label>\n            </ion-row>\n        </ion-item>\n        <ion-item>\n            <ion-label>Mega Man X</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label>The Legend of Zelda</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label>Pac-Man</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label>Super Mario World</ion-label>\n        </ion-item>\n    </ion-list> -->\n\n    <ion-grid>\n        <ion-item>\n            <ion-row>\n                <ion-col class=\"ion-float-left\">\n                    <div class=\"ion-text-start\">\n                        <h7>Name</h7>\n                    </div>\n                </ion-col>\n                <ion-col class=\"ion-float-right\">\n                    <div class=\"ion-text-end\">\n                        <ion-label>{{donorDetails.DonorName}}</ion-label>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n        <ion-item>\n            <ion-row>\n                <ion-col>\n                    <ion-label>Phone:</ion-label>\n                </ion-col>\n                <ion-col>\n                    <ion-label>{{donorDetails.ContactNo}}</ion-label>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n        <ion-item>\n            <ion-row>\n                <ion-col>\n                    <ion-label>Blood Group:</ion-label>\n                </ion-col>\n                <ion-col>\n                    <ion-label>{{donorDetails.BloodGroup}}</ion-label>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n        <ion-item>\n            <ion-row>\n                <ion-col>\n                    <ion-label>Address:</ion-label>\n                </ion-col>\n                <ion-col>\n                    <ion-label>{{state}}, {{city}}</ion-label>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n        <ion-item>\n            <ion-row>\n                <ion-col>\n                    <ion-label>Last Donated On:</ion-label>\n                </ion-col>\n                <ion-col>\n                    <ion-label>{{donateDetails}}</ion-label>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n    </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search-donor/search-donor.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search-donor/search-donor.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchSearchDonorSearchDonorPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img src=\"../assets/logo.png\">\n        </ion-avatar>\n        <ion-label>Search Blood Donors</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <form (ngSubmit)=\"searchBloodDonorsClick($event)\">\n    <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\" ngNativeValidate>\n\n      <ion-item>\n        <ion-label>State</ion-label>\n        <ion-select interface=\"action-sheet\" placeholder=\"Select State\" (ionChange)=\"getCities($event)\"\n          name=\"stateDropDown\" id=\"stateDropDown\" [(ngModel)]=\"selectedSearchOptions.State\">\n          <ion-select-option *ngFor=\"let state of statesList\" [value]=\"state.id\">{{state.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>City</ion-label>\n        <ion-select interface=\"action-sheet\" placeholder=\"Select City\" name=\"cityDropDown\" id=\"cityDropDown\"\n          [(ngModel)]=\"selectedSearchOptions.City\">\n          <ion-select-option *ngFor=\"let city of citiesList\" [value]=\"city.id\">{{city.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Blood Group</ion-label>\n        <ion-select interface=\"action-sheet\" class=\"custom-options\" placeholder=\"Select Blood Group\"\n          name=\"bloodGroupDropDown\" id=\"bloodGroupDropDown\" [(ngModel)]=\"selectedSearchOptions.BloodGroup\">\n          <ion-select-option value=\"\">Select Blood Group</ion-select-option>\n          <ion-select-option value=\"A+\">A+</ion-select-option>\n          <ion-select-option value=\"B+\">B+</ion-select-option>\n          <ion-select-option value=\"AB+\">AB+</ion-select-option>\n          <ion-select-option value=\"O+\">O+</ion-select-option>\n          <ion-select-option value=\"A-\">A-</ion-select-option>\n          <ion-select-option value=\"B-\">B-</ion-select-option>\n          <ion-select-option value=\"AB-\">AB-</ion-select-option>\n          <ion-select-option value=\"O-\">O-</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <div class=\"ion-padding\">\n      <div *ngIf=\"!selectedSearchOptions.SearchBtnClicked;else loadingButton\">\n        <ion-button slot=\"start\" color=\"medium\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">\n          <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>Search Donors\n        </ion-button>\n      </div>\n      <ng-template #loadingButton>\n        <ion-button expand=\"block\" type=\"button\" disabled class=\"ion-no-margin\">\n          <ion-spinner name=\"bubbles\"></ion-spinner>\n        </ion-button>\n      </ng-template>\n    </div>\n\n  </form>\n\n  <div *ngIf=\"selectedSearchOptions.SearchBtnClicked;else searchResultContent\">\n    <!-- Skeleton screen -->\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-card>\n        <ion-card-header color=\"light\">\n          <ion-card-title>\n            <ion-row>\n              <ion-col>\n                <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n              </ion-col>\n              <ion-col>\n                <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n              </ion-col>\n            </ion-row>\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-row>\n            <ion-col>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </ion-col>\n            <ion-col>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n  <ng-template #searchResultContent>\n    <!-- <div *ngIf=\"selectedSearchOptions.AvailableDonors.length>0 && selectedSearchOptions.SearchBtnClicked==false\"> -->\n    <div *ngIf=\"selectedSearchOptions.SearchBtnClicked==false\">\n      <ion-card color=\"white\" *ngFor=\"let donor of AvailableDonors\">\n        <ion-card-header>\n          <ion-card-title (click)=\"showDonorDetails(donor, statesList[donor.State].name, citiesList[donor.City].name)\">\n            <ion-row>\n              <ion-col>\n                <ion-icon name=\"person-outline\"></ion-icon> {{donor.DonorName}}\n              </ion-col>\n              <!-- <ion-col class=\"ion-float-right\"> -->\n              <ion-icon name=\"expand-outline\"></ion-icon>\n              <!-- </ion-col> -->\n            </ion-row>\n          </ion-card-title>\n          <ion-card-subtitle>\n            <ion-icon name=\"water-sharp\"></ion-icon>Blood Group: {{donor.BloodGroup}}\n          </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-item>\n            <ion-icon name=\"call-outline\"></ion-icon> {{donor.ContactNo}}\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"location-outline\"></ion-icon> {{statesList[donor.State].name}},\n            {{citiesList[donor.City].name}}\n          </ion-item>\n          <!-- <ion-col>\n              <ion-icon name=\"calendar-outline\"></ion-icon> Last Donated On:<ion-datetime disabled\n                [value]=\"donor.LastDonatedOn\">\n              </ion-datetime>\n            </ion-col> -->\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    <div *ngIf=\"noDonorsFound == true && selectedSearchOptions.SearchBtnClicked==false\">\n      <ion-label class=\"ion-padding\">Sorry, No Donors Found</ion-label>\n    </div>\n  </ng-template>\n\n</ion-content>\n<ion-footer class=\"ion-justify-content-center\" style=\"background-color: #fe616a !important; color: #ffff !important;\">\n  <p style=\"text-align: center; background-color: #fe616a; color: #ffff;\">All India Payam-E-Insaniyat\n    Forum.<br>&copy;&nbsp;All Rights Reserved.</p>\n</ion-footer>\n<!-- <ion-alert-controller>\n\n</ion-alert-controller> -->";
    /***/
  },

  /***/
  "./src/app/search/search-donor/donor-details-page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/search/search-donor/donor-details-page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchSearchDonorDonorDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content, ion-select, ion-select-option, ion-list, ion-button, ion-item, ion-title, ion-menu-button, form, ion-ripple-effect {\n  --ion-background-color:#fe616a;\n  color: #ffffff;\n  --ion-font-color:#ffffff;\n}\n\nion-item, ion-router-outlet, ion-card {\n  color: #ffffff;\n  --ion-font-color:#ffffff;\n}\n\nion-list, ion-label {\n  color: #ffffff;\n  --ion-font-color:#ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC1kb25vci9FOlxcTGVhcm5pbmctUHJvamVjdHNcXGlvbmljLWNyYXNoQ291cnNlXFxibG9vZC1kb25hdGUtYXBwXFxCbG9vZERvbmF0ZUFwcC1QaG9uZUdhcC9zcmNcXGFwcFxcc2VhcmNoXFxzZWFyY2gtZG9ub3JcXGRvbm9yLWRldGFpbHMtcGFnZS5zY3NzIiwic3JjL2FwcC9zZWFyY2gvc2VhcmNoLWRvbm9yL2Rvbm9yLWRldGFpbHMtcGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksOEJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSx3QkFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLHdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLWRvbm9yL2Rvbm9yLWRldGFpbHMtcGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29udGVudCwgaW9uLXNlbGVjdCwgaW9uLXNlbGVjdC1vcHRpb24sIGlvbi1saXN0LCBpb24tYnV0dG9uLCBpb24taXRlbSwgaW9uLXRpdGxlLCBpb24tbWVudS1idXR0b24sIGZvcm0sIGlvbi1yaXBwbGUtZWZmZWN0ICB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmU2MTZhO1xuICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgLS1pb24tZm9udC1jb2xvcjojZmZmZmZmO1xufVxuXG5pb24taXRlbSwgaW9uLXJvdXRlci1vdXRsZXQsIGlvbi1jYXJke1xuICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgLS1pb24tZm9udC1jb2xvcjojZmZmZmZmO1xufVxuXG5pb24tbGlzdCwgaW9uLWxhYmVse1xuICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgLS1pb24tZm9udC1jb2xvcjojZmZmZmZmO1xufVxuIiwiaW9uLWNvbnRlbnQsIGlvbi1zZWxlY3QsIGlvbi1zZWxlY3Qtb3B0aW9uLCBpb24tbGlzdCwgaW9uLWJ1dHRvbiwgaW9uLWl0ZW0sIGlvbi10aXRsZSwgaW9uLW1lbnUtYnV0dG9uLCBmb3JtLCBpb24tcmlwcGxlLWVmZmVjdCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZlNjE2YTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLWZvbnQtY29sb3I6I2ZmZmZmZjtcbn1cblxuaW9uLWl0ZW0sIGlvbi1yb3V0ZXItb3V0bGV0LCBpb24tY2FyZCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi1mb250LWNvbG9yOiNmZmZmZmY7XG59XG5cbmlvbi1saXN0LCBpb24tbGFiZWwge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgLS1pb24tZm9udC1jb2xvcjojZmZmZmZmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/search/search-donor/donor-details-page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/search/search-donor/donor-details-page.ts ***!
    \***********************************************************/

  /*! exports provided: DonorDetailsPage */

  /***/
  function srcAppSearchSearchDonorDonorDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonorDetailsPage", function () {
      return DonorDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DonorDetailsPage = /*#__PURE__*/function () {
      function DonorDetailsPage(modalCtrl) {
        _classCallCheck(this, DonorDetailsPage);

        this.modalCtrl = modalCtrl;
        this.donateDetails = '';
      }

      _createClass(DonorDetailsPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.donateDetails = 'entered';

          if (this.donorDetails.BloodDonationOption == "NeverDonated") {
            this.donateDetails = "Never Donated";
          } else if (this.donorDetails.BloodDonationOption == "LastDonatedOn") {
            this.donateDetails = new Date(this.donorDetails.LastDonatedDate).toISOString().substring(0, 10);
          }
        }
      }, {
        key: "closeDetailsPage",
        value: function closeDetailsPage() {
          // using the injected ModalController this page
          // can "dismiss" itself and optionally pass back data
          this.modalCtrl.dismiss({
            'dismissed': true
          });
        }
      }]);

      return DonorDetailsPage;
    }();

    DonorDetailsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DonorDetailsPage.prototype, "donorDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DonorDetailsPage.prototype, "state", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], DonorDetailsPage.prototype, "city", void 0);
    DonorDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'modal-page',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./donor-details-page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search-donor/donor-details-page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./donor-details-page.scss */
      "./src/app/search/search-donor/donor-details-page.scss"))["default"]]
    })], DonorDetailsPage);
    /***/
  },

  /***/
  "./src/app/search/search-donor/search-donor-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/search/search-donor/search-donor-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: SearchDonorPageRoutingModule */

  /***/
  function srcAppSearchSearchDonorSearchDonorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchDonorPageRoutingModule", function () {
      return SearchDonorPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _search_donor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search-donor.page */
    "./src/app/search/search-donor/search-donor.page.ts");

    var routes = [{
      path: '',
      component: _search_donor_page__WEBPACK_IMPORTED_MODULE_3__["SearchDonorPage"]
    }];

    var SearchDonorPageRoutingModule = function SearchDonorPageRoutingModule() {
      _classCallCheck(this, SearchDonorPageRoutingModule);
    };

    SearchDonorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SearchDonorPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/search/search-donor/search-donor.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/search/search-donor/search-donor.module.ts ***!
    \************************************************************/

  /*! exports provided: SearchDonorPageModule */

  /***/
  function srcAppSearchSearchDonorSearchDonorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchDonorPageModule", function () {
      return SearchDonorPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _search_donor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search-donor-routing.module */
    "./src/app/search/search-donor/search-donor-routing.module.ts");
    /* harmony import */


    var _search_donor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./search-donor.page */
    "./src/app/search/search-donor/search-donor.page.ts");

    var SearchDonorPageModule = function SearchDonorPageModule() {
      _classCallCheck(this, SearchDonorPageModule);
    };

    SearchDonorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _search_donor_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchDonorPageRoutingModule"]],
      declarations: [_search_donor_page__WEBPACK_IMPORTED_MODULE_6__["SearchDonorPage"]]
    })], SearchDonorPageModule);
    /***/
  },

  /***/
  "./src/app/search/search-donor/search-donor.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/search/search-donor/search-donor.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchSearchDonorSearchDonorPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content, ion-item, ion-icon, ion-select, ion-select-option, ion-list, ion-button, ion-item, ion-title, ion-menu-button, form, ion-ripple-effect {\n  --ion-background-color:#fe616a;\n  color: #ffffff;\n  --ion-font-color:#ffffff;\n}\n\nion-item, ion-router-outlet, ion-card {\n  color: #ffffff;\n  --ion-font-color:#ffffff;\n}\n\nion-list, ion-label {\n  color: #ffffff;\n  --ion-font-color:#ffffff;\n}\n\nion-button {\n  --ion-font-color: --ion-color-light-tint;\n}\n\n.custom-options {\n  color: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC1kb25vci9FOlxcTGVhcm5pbmctUHJvamVjdHNcXGlvbmljLWNyYXNoQ291cnNlXFxibG9vZC1kb25hdGUtYXBwXFxCbG9vZERvbmF0ZUFwcC1QaG9uZUdhcC9zcmNcXGFwcFxcc2VhcmNoXFxzZWFyY2gtZG9ub3JcXHNlYXJjaC1kb25vci5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlYXJjaC9zZWFyY2gtZG9ub3Ivc2VhcmNoLWRvbm9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0Esd0JBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSx3QkFBQTtBQ0FKOztBREdBO0VBQ0ksd0NBQUE7QUNBSjs7QURJQTtFQUNJLHlCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLWRvbm9yL3NlYXJjaC1kb25vci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb250ZW50LCBpb24taXRlbSxpb24taWNvbiwgaW9uLXNlbGVjdCwgaW9uLXNlbGVjdC1vcHRpb24sIGlvbi1saXN0LCBpb24tYnV0dG9uLCBpb24taXRlbSwgaW9uLXRpdGxlLCBpb24tbWVudS1idXR0b24sIGZvcm0sIGlvbi1yaXBwbGUtZWZmZWN0ICB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmU2MTZhO1xuICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgLS1pb24tZm9udC1jb2xvcjojZmZmZmZmO1xufVxuXG5pb24taXRlbSwgaW9uLXJvdXRlci1vdXRsZXQsIGlvbi1jYXJke1xuICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgLS1pb24tZm9udC1jb2xvcjojZmZmZmZmO1xufVxuXG5pb24tbGlzdCwgaW9uLWxhYmVse1xuICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgLS1pb24tZm9udC1jb2xvcjojZmZmZmZmO1xufVxuXG5pb24tYnV0dG9ue1xuICAgIC0taW9uLWZvbnQtY29sb3I6IC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ7XG5cbn1cblxuLmN1c3RvbS1vcHRpb25ze1xuICAgIGNvbG9yOiNmZmZmZmYgIWltcG9ydGFudDsgXG59IiwiaW9uLWNvbnRlbnQsIGlvbi1pdGVtLCBpb24taWNvbiwgaW9uLXNlbGVjdCwgaW9uLXNlbGVjdC1vcHRpb24sIGlvbi1saXN0LCBpb24tYnV0dG9uLCBpb24taXRlbSwgaW9uLXRpdGxlLCBpb24tbWVudS1idXR0b24sIGZvcm0sIGlvbi1yaXBwbGUtZWZmZWN0IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmU2MTZhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgLS1pb24tZm9udC1jb2xvcjojZmZmZmZmO1xufVxuXG5pb24taXRlbSwgaW9uLXJvdXRlci1vdXRsZXQsIGlvbi1jYXJkIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLWZvbnQtY29sb3I6I2ZmZmZmZjtcbn1cblxuaW9uLWxpc3QsIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi1mb250LWNvbG9yOiNmZmZmZmY7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWlvbi1mb250LWNvbG9yOiAtLWlvbi1jb2xvci1saWdodC10aW50O1xufVxuXG4uY3VzdG9tLW9wdGlvbnMge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/search/search-donor/search-donor.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/search/search-donor/search-donor.page.ts ***!
    \**********************************************************/

  /*! exports provided: SearchDonorPage */

  /***/
  function srcAppSearchSearchDonorSearchDonorPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchDonorPage", function () {
      return SearchDonorPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_service_search_donor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/search-donor.service */
    "./src/app/service/search-donor.service.ts");
    /* harmony import */


    var src_app_models_city__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/city */
    "./src/app/models/city.ts");
    /* harmony import */


    var _donor_details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./donor-details-page */
    "./src/app/search/search-donor/donor-details-page.ts");

    var SearchDonorPage = /*#__PURE__*/function () {
      function SearchDonorPage(searchDonorService, modalController) {
        _classCallCheck(this, SearchDonorPage);

        this.searchDonorService = searchDonorService;
        this.modalController = modalController;
        this.noDonorsFound = false;
        this.counter = 0;
        this.AvailableDonors = [];
        this.selectedSearchOptions = {
          BloodGroup: '',
          City: 0,
          PageLoaded: true,
          State: 0,
          SearchBtnClicked: false
        };
      }

      _createClass(SearchDonorPage, [{
        key: "showDonorDetails",
        value: function showDonorDetails(donor, selectedState, selectedCity) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _donor_details_page__WEBPACK_IMPORTED_MODULE_5__["DonorDetailsPage"],
                      cssClass: 'my-custom-class',
                      componentProps: {
                        'donorDetails': donor,
                        'state': selectedState,
                        'city': selectedCity
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.statesList = this.searchDonorService.getStates();
        }
      }, {
        key: "getCities",
        value: function getCities(e) {
          var _this = this;

          if (e) e.preventDefault();
          this.counter = 0;
          var cities = [];
          src_app_models_city__WEBPACK_IMPORTED_MODULE_4__["CitiesList"][this.selectedSearchOptions.State].split('|').forEach(function (cityName) {
            cities.push({
              id: _this.counter,
              name: cityName.trim()
            });
            _this.counter = _this.counter + 1;
          });
          this.citiesList = cities;
        }
      }, {
        key: "searchBloodDonorsClick",
        value: function searchBloodDonorsClick(e) {
          var _this2 = this;

          if (e) e.preventDefault(); //console.log('State:', this.selectedSearchOptions.State, 'City:', this.selectedSearchOptions.City, 'BloodGroup:', this.selectedSearchOptions.BloodGroup);

          if (this.selectedSearchOptions.State !== 0 && this.selectedSearchOptions.City !== 0 && this.selectedSearchOptions.BloodGroup != '') {
            this.selectedSearchOptions.SearchBtnClicked = true;
            this.searchDonorService.searchDonors(this.selectedSearchOptions.State, this.selectedSearchOptions.City, this.selectedSearchOptions.BloodGroup).then(function (donors) {
              _this2.AvailableDonors = donors.filter(function (x) {
                return x.BloodDonationOption != 'NoDonationWish';
              });
              _this2.noDonorsFound = _this2.AvailableDonors.length > 0;
            }, function (reason) {
              console.log(reason);
              _this2.AvailableDonors = [];
              _this2.noDonorsFound = true;
            })["finally"](function () {
              _this2.selectedSearchOptions.SearchBtnClicked = false;
              _this2.noDonorsFound = _this2.AvailableDonors.length <= 0;
            });
          }
        }
      }]);

      return SearchDonorPage;
    }();

    SearchDonorPage.ctorParameters = function () {
      return [{
        type: src_app_service_search_donor_service__WEBPACK_IMPORTED_MODULE_3__["SearchDonorService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    SearchDonorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-donor',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./search-donor.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search-donor/search-donor.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./search-donor.page.scss */
      "./src/app/search/search-donor/search-donor.page.scss"))["default"]]
    })], SearchDonorPage);
    /***/
  }
}]);
//# sourceMappingURL=search-search-donor-search-donor-module-es5.js.map