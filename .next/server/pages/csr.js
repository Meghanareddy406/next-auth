(function() {
var exports = {};
exports.id = "pages/csr";
exports.ids = ["pages/csr"];
exports.modules = {

/***/ "./pages/csr.jsx":
/*!***********************!*\
  !*** ./pages/csr.jsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Meghana\\Projects\\auth-next\\auth0-nextjs-samples\\Sample-01\\pages\\csr.jsx";


/* harmony default export */ __webpack_exports__["default"] = ((0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__.withPageAuthRequired)(function SSRPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mb-5",
      "data-testid": "csr",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        "data-testid": "csr-title",
        children: "Client-side Rendered Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "data-testid": "csr-text",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["You can protect a client-side rendered page by wrapping it with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
            children: "withPageAuthRequired"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 77
          }, this), ". Only logged in users will be able to access it. If the user is logged out, they will be redirected to the login page instead."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Use the ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
            children: "useUser"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 21
          }, this), " hook to access the user profile from protected client-side rendered pages. The", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
            children: "useUser"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this), " hook relies on the ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
            children: "UserProvider"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 53
          }, this), " Context Provider, so you need to wrap your custom ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "https://nextjs.org/docs/advanced-features/custom-app",
            children: "App Component"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 20
          }, this), " with it."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["You can also fetch the user profile by calling the ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
            children: "/api/auth/me"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 64
          }, this), " API route."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false);
}));

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@auth0/nextjs-auth0");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/csr.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoMC1uZXh0anMtc2FtcGxlLy4vcGFnZXMvY3NyLmpzeCIsIndlYnBhY2s6Ly9hdXRoMC1uZXh0anMtc2FtcGxlL2V4dGVybmFsIFwiQGF1dGgwL25leHRqcy1hdXRoMFwiIiwid2VicGFjazovL2F1dGgwLW5leHRqcy1zYW1wbGUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2F1dGgwLW5leHRqcy1zYW1wbGUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJ3aXRoUGFnZUF1dGhSZXF1aXJlZCIsIlNTUlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLCtEQUFlQSx5RUFBb0IsQ0FBQyxTQUFTQyxPQUFULEdBQW1CO0FBQ3JELHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFzQixxQkFBWSxLQUFsQztBQUFBLDhCQUNFO0FBQUksdUJBQVksV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssdUJBQVksVUFBakI7QUFBQSxnQ0FDRTtBQUFBLHNHQUNrRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBTUU7QUFBQSw4Q0FDVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEVixxRkFDOEcsR0FEOUcsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRix1Q0FFMEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRjFDLHNFQUdTO0FBQUcsZ0JBQUksRUFBQyxzREFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsZUFXRTtBQUFBLHlGQUNxRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBc0JELENBdkJrQyxDQUFuQyxFOzs7Ozs7Ozs7OztBQ0hBLGlEOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2Nzci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhQYWdlQXV0aFJlcXVpcmVkIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFnZUF1dGhSZXF1aXJlZChmdW5jdGlvbiBTU1JQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIiBkYXRhLXRlc3RpZD1cImNzclwiPlxyXG4gICAgICAgIDxoMSBkYXRhLXRlc3RpZD1cImNzci10aXRsZVwiPkNsaWVudC1zaWRlIFJlbmRlcmVkIFBhZ2U8L2gxPlxyXG4gICAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9XCJjc3ItdGV4dFwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIFlvdSBjYW4gcHJvdGVjdCBhIGNsaWVudC1zaWRlIHJlbmRlcmVkIHBhZ2UgYnkgd3JhcHBpbmcgaXQgd2l0aCA8Y29kZT53aXRoUGFnZUF1dGhSZXF1aXJlZDwvY29kZT4uIE9ubHlcclxuICAgICAgICAgICAgbG9nZ2VkIGluIHVzZXJzIHdpbGwgYmUgYWJsZSB0byBhY2Nlc3MgaXQuIElmIHRoZSB1c2VyIGlzIGxvZ2dlZCBvdXQsIHRoZXkgd2lsbCBiZSByZWRpcmVjdGVkIHRvIHRoZSBsb2dpblxyXG4gICAgICAgICAgICBwYWdlIGluc3RlYWQuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgVXNlIHRoZSA8Y29kZT51c2VVc2VyPC9jb2RlPiBob29rIHRvIGFjY2VzcyB0aGUgdXNlciBwcm9maWxlIGZyb20gcHJvdGVjdGVkIGNsaWVudC1zaWRlIHJlbmRlcmVkIHBhZ2VzLiBUaGV7JyAnfVxyXG4gICAgICAgICAgICA8Y29kZT51c2VVc2VyPC9jb2RlPiBob29rIHJlbGllcyBvbiB0aGUgPGNvZGU+VXNlclByb3ZpZGVyPC9jb2RlPiBDb250ZXh0IFByb3ZpZGVyLCBzbyB5b3UgbmVlZCB0byB3cmFwIHlvdXJcclxuICAgICAgICAgICAgY3VzdG9tIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvZG9jcy9hZHZhbmNlZC1mZWF0dXJlcy9jdXN0b20tYXBwXCI+QXBwIENvbXBvbmVudDwvYT4gd2l0aCBpdC5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBZb3UgY2FuIGFsc28gZmV0Y2ggdGhlIHVzZXIgcHJvZmlsZSBieSBjYWxsaW5nIHRoZSA8Y29kZT4vYXBpL2F1dGgvbWU8L2NvZGU+IEFQSSByb3V0ZS5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGF1dGgwL25leHRqcy1hdXRoMFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==