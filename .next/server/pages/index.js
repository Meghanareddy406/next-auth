(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Content.jsx":
/*!********************************!*\
  !*** ./components/Content.jsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_contentData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/contentData */ "./utils/contentData.js");

var _jsxFileName = "C:\\Users\\Meghana\\Projects\\auth-next\\auth0-nextjs-samples\\Sample-01\\components\\Content.jsx";





const Content = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  className: "next-steps my-5",
  "data-testid": "content",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
    className: "my-5 text-center",
    "data-testid": "content-title",
    children: "What can I do next?"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
    className: "d-flex justify-content-between",
    "data-testid": "content-items",
    children: _utils_contentData__WEBPACK_IMPORTED_MODULE_4__.default.map((col, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
      md: 5,
      className: "mb-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
        className: "mb-3",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: col.link,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
            icon: "link",
            className: "mr-2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 15
          }, undefined), col.title]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: col.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, undefined)]
    }, i, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./components/Hero.jsx":
/*!*****************************!*\
  !*** ./components/Hero.jsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo */ "./components/Logo.jsx");

var _jsxFileName = "C:\\Users\\Meghana\\Projects\\auth-next\\auth0-nextjs-samples\\Sample-01\\components\\Hero.jsx";



const Hero = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  className: "hero my-5 text-center",
  "data-testid": "hero",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_2__.default, {
    testId: "hero-logo"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    className: "mb-4",
    "data-testid": "hero-title",
    children: "Next.js Sample Project"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    className: "lead",
    "data-testid": "hero-lead",
    children: ["This is a sample application that demonstrates an authentication flow for a Regular Web App, using", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "https://nextjs.org",
      children: "Next.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/Logo.jsx":
/*!*****************************!*\
  !*** ./components/Logo.jsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Meghana\\Projects\\auth-next\\auth0-nextjs-samples\\Sample-01\\components\\Logo.jsx";


const Logo = ({
  testId
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("figure", {
  className: "",
  title: "Next.js",
  "data-testid": testId,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "207",
    height: "124",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M48.942 32.632h38.96v3.082H52.512v23.193h33.278v3.082H52.513v25.464h35.794v3.081H48.942V32.632zm42.45 0h4.139l18.343 25.464 18.749-25.464L158.124.287l-41.896 60.485 21.59 29.762h-4.302l-19.642-27.086L94.15 90.534h-4.22l21.751-29.762-20.29-28.14zm47.967 3.082v-3.082h44.397v3.082h-20.453v54.82h-3.571v-54.82h-20.373zM.203 32.632h4.464l61.557 91.671-25.439-33.769L3.936 37.011l-.162 53.523H.203zm183.194 53.89c.738 0 1.276-.562 1.276-1.289 0-.727-.538-1.29-1.276-1.29-.73 0-1.277.563-1.277 1.29 0 .727.547 1.29 1.277 1.29zm3.509-3.392c0 2.146 1.555 3.549 3.822 3.549 2.414 0 3.874-1.446 3.874-3.956v-8.837h-1.946v8.828c0 1.394-.704 2.138-1.946 2.138-1.112 0-1.867-.692-1.893-1.722h-1.911zm10.24-.113c.14 2.233 2.007 3.662 4.787 3.662 2.97 0 4.83-1.498 4.83-3.887 0-1.878-1.06-2.917-3.632-3.514l-1.38-.338c-1.634-.38-2.294-.891-2.294-1.783 0-1.125 1.025-1.86 2.563-1.86 1.459 0 2.466.718 2.649 1.869h1.893c-.113-2.103-1.971-3.583-4.516-3.583-2.737 0-4.56 1.48-4.56 3.704 0 1.835 1.033 2.926 3.3 3.454l1.616.39c1.659.389 2.388.96 2.388 1.912 0 1.108-1.146 1.913-2.71 1.913-1.676 0-2.84-.753-3.005-1.939h-1.928z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.jsx");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Content */ "./components/Content.jsx");


var _jsxFileName = "C:\\Users\\Meghana\\Projects\\auth-next\\auth0-nextjs-samples\\Sample-01\\pages\\index.jsx";



function Index() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Content__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./utils/contentData.js":
/*!******************************!*\
  !*** ./utils/contentData.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const contentData = [{
  title: 'Configure Other Identity Providers',
  link: 'https://auth0.com/docs/identityproviders',
  description: 'Auth0 supports social providers as Facebook, Twitter, Instagram and 100+, Enterprise providers as Microsoft Office 365, Google Apps, Azure, and more. You can also use any OAuth2 Authorization Server.'
}, {
  title: 'Enable Multifactor Authentication',
  link: 'https://auth0.com/docs/mfa',
  description: 'Add an extra layer of security by enabling Multi-factor Authentication, requiring your users to provide more than one piece of identifying information. Push notifications, authenticator apps, SMS, and DUO Security are supported.'
}, {
  title: 'Attack Protection',
  link: 'https://auth0.com/docs/attack-protection',
  description: 'Auth0 can detect anomalies and stop malicious attempts to access your application. Attack protection can alert you and your users of suspicious activity, as well as block further login attempts.'
}, {
  title: 'Learn About Rules',
  link: 'https://auth0.com/docs/rules',
  description: "Rules are JavaScript functions that execute when a user authenticates to your application. They run once the authentication process is complete, and you can use them to customize and extend Auth0's capabilities."
}];
/* harmony default export */ __webpack_exports__["default"] = (contentData);

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");;

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

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("reactstrap");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoMC1uZXh0anMtc2FtcGxlLy4vY29tcG9uZW50cy9Db250ZW50LmpzeCIsIndlYnBhY2s6Ly9hdXRoMC1uZXh0anMtc2FtcGxlLy4vY29tcG9uZW50cy9IZXJvLmpzeCIsIndlYnBhY2s6Ly9hdXRoMC1uZXh0anMtc2FtcGxlLy4vY29tcG9uZW50cy9Mb2dvLmpzeCIsIndlYnBhY2s6Ly9hdXRoMC1uZXh0anMtc2FtcGxlLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL2F1dGgwLW5leHRqcy1zYW1wbGUvLi91dGlscy9jb250ZW50RGF0YS5qcyIsIndlYnBhY2s6Ly9hdXRoMC1uZXh0anMtc2FtcGxlL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIiLCJ3ZWJwYWNrOi8vYXV0aDAtbmV4dGpzLXNhbXBsZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYXV0aDAtbmV4dGpzLXNhbXBsZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2F1dGgwLW5leHRqcy1zYW1wbGUvZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiXSwibmFtZXMiOlsiQ29udGVudCIsImNvbnRlbnREYXRhIiwiY29sIiwiaSIsImxpbmsiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiSGVybyIsIkxvZ28iLCJ0ZXN0SWQiLCJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxtQkFDZDtBQUFLLFdBQVMsRUFBQyxpQkFBZjtBQUFpQyxpQkFBWSxTQUE3QztBQUFBLDBCQUNFO0FBQUksYUFBUyxFQUFDLGtCQUFkO0FBQWlDLG1CQUFZLGVBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRSw4REFBQywyQ0FBRDtBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFnRCxtQkFBWSxlQUE1RDtBQUFBLGNBQ0dDLDJEQUFBLENBQWdCLENBQUNDLEdBQUQsRUFBTUMsQ0FBTixrQkFDZiw4REFBQywyQ0FBRDtBQUFhLFFBQUUsRUFBRSxDQUFqQjtBQUFvQixlQUFTLEVBQUMsTUFBOUI7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsTUFBZDtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFFRCxHQUFHLENBQUNFLElBQWI7QUFBQSxrQ0FDRSw4REFBQywyRUFBRDtBQUFpQixnQkFBSSxFQUFDLE1BQXRCO0FBQTZCLHFCQUFTLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUVHRixHQUFHLENBQUNHLEtBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU9FO0FBQUEsa0JBQUlILEdBQUcsQ0FBQ0k7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUEsT0FBVUgsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQXFCQSwrREFBZUgsT0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBRUE7O0FBRUEsTUFBTU8sSUFBSSxHQUFHLG1CQUNYO0FBQUssV0FBUyxFQUFDLHVCQUFmO0FBQXVDLGlCQUFZLE1BQW5EO0FBQUEsMEJBQ0UsOERBQUMsMENBQUQ7QUFBTSxVQUFNLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQXFCLG1CQUFZLFlBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFNRTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQW9CLG1CQUFZLFdBQWhDO0FBQUEscUhBQ3FHLEdBRHJHLGVBRUU7QUFBRyxVQUFJLEVBQUMsb0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBY0EsK0RBQWVBLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBOztBQUVBLE1BQU1DLElBQUksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxrQkFDWDtBQUFRLFdBQVMsRUFBQyxFQUFsQjtBQUFxQixPQUFLLEVBQUMsU0FBM0I7QUFBcUMsaUJBQWFBLE1BQWxEO0FBQUEseUJBQ0U7QUFBSyxTQUFLLEVBQUMsNEJBQVg7QUFBd0MsU0FBSyxFQUFDLEtBQTlDO0FBQW9ELFVBQU0sRUFBQyxLQUEzRDtBQUFBLDJCQUNFO0FBQU0sT0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBUUEsK0RBQWVELElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFFQTtBQUNBO0FBRWUsU0FBU0UsS0FBVCxHQUFpQjtBQUM5QixzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBLGtCQURGO0FBT0QsQzs7Ozs7Ozs7Ozs7O0FDYkQsTUFBTVQsV0FBVyxHQUFHLENBQ2xCO0FBQ0VJLE9BQUssRUFBRSxvQ0FEVDtBQUVFRCxNQUFJLEVBQUUsMENBRlI7QUFHRUUsYUFBVyxFQUNUO0FBSkosQ0FEa0IsRUFPbEI7QUFDRUQsT0FBSyxFQUFFLG1DQURUO0FBRUVELE1BQUksRUFBRSw0QkFGUjtBQUdFRSxhQUFXLEVBQ1Q7QUFKSixDQVBrQixFQWFsQjtBQUNFRCxPQUFLLEVBQUUsbUJBRFQ7QUFFRUQsTUFBSSxFQUFFLDBDQUZSO0FBR0VFLGFBQVcsRUFDVDtBQUpKLENBYmtCLEVBbUJsQjtBQUNFRCxPQUFLLEVBQUUsbUJBRFQ7QUFFRUQsTUFBSSxFQUFFLDhCQUZSO0FBR0VFLGFBQVcsRUFDVDtBQUpKLENBbkJrQixDQUFwQjtBQTJCQSwrREFBZUwsV0FBZixFOzs7Ozs7Ozs7OztBQzNCQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcblxyXG5pbXBvcnQgY29udGVudERhdGEgZnJvbSAnLi4vdXRpbHMvY29udGVudERhdGEnO1xyXG5cclxuY29uc3QgQ29udGVudCA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cIm5leHQtc3RlcHMgbXktNVwiIGRhdGEtdGVzdGlkPVwiY29udGVudFwiPlxyXG4gICAgPGgyIGNsYXNzTmFtZT1cIm15LTUgdGV4dC1jZW50ZXJcIiBkYXRhLXRlc3RpZD1cImNvbnRlbnQtdGl0bGVcIj5cclxuICAgICAgV2hhdCBjYW4gSSBkbyBuZXh0P1xyXG4gICAgPC9oMj5cclxuICAgIDxSb3cgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgZGF0YS10ZXN0aWQ9XCJjb250ZW50LWl0ZW1zXCI+XHJcbiAgICAgIHtjb250ZW50RGF0YS5tYXAoKGNvbCwgaSkgPT4gKFxyXG4gICAgICAgIDxDb2wga2V5PXtpfSBtZD17NX0gY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj17Y29sLmxpbmt9PlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImxpbmtcIiBjbGFzc05hbWU9XCJtci0yXCIgLz5cclxuICAgICAgICAgICAgICB7Y29sLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgPHA+e2NvbC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICkpfVxyXG4gICAgPC9Sb3c+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IExvZ28gZnJvbSAnLi9Mb2dvJztcclxuXHJcbmNvbnN0IEhlcm8gPSAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJoZXJvIG15LTUgdGV4dC1jZW50ZXJcIiBkYXRhLXRlc3RpZD1cImhlcm9cIj5cclxuICAgIDxMb2dvIHRlc3RJZD1cImhlcm8tbG9nb1wiIC8+XHJcbiAgICA8aDEgY2xhc3NOYW1lPVwibWItNFwiIGRhdGEtdGVzdGlkPVwiaGVyby10aXRsZVwiPlxyXG4gICAgICBOZXh0LmpzIFNhbXBsZSBQcm9qZWN0XHJcbiAgICA8L2gxPlxyXG5cclxuICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIiBkYXRhLXRlc3RpZD1cImhlcm8tbGVhZFwiPlxyXG4gICAgICBUaGlzIGlzIGEgc2FtcGxlIGFwcGxpY2F0aW9uIHRoYXQgZGVtb25zdHJhdGVzIGFuIGF1dGhlbnRpY2F0aW9uIGZsb3cgZm9yIGEgUmVndWxhciBXZWIgQXBwLCB1c2luZ3snICd9XHJcbiAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmdcIj5OZXh0LmpzPC9hPlxyXG4gICAgPC9wPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvZ28gPSAoeyB0ZXN0SWQgfSkgPT4gKFxyXG4gIDxmaWd1cmUgY2xhc3NOYW1lPVwiXCIgdGl0bGU9XCJOZXh0LmpzXCIgZGF0YS10ZXN0aWQ9e3Rlc3RJZH0+XHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwN1wiIGhlaWdodD1cIjEyNFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTQ4Ljk0MiAzMi42MzJoMzguOTZ2My4wODJINTIuNTEydjIzLjE5M2gzMy4yNzh2My4wODJINTIuNTEzdjI1LjQ2NGgzNS43OTR2My4wODFINDguOTQyVjMyLjYzMnptNDIuNDUgMGg0LjEzOWwxOC4zNDMgMjUuNDY0IDE4Ljc0OS0yNS40NjRMMTU4LjEyNC4yODdsLTQxLjg5NiA2MC40ODUgMjEuNTkgMjkuNzYyaC00LjMwMmwtMTkuNjQyLTI3LjA4Nkw5NC4xNSA5MC41MzRoLTQuMjJsMjEuNzUxLTI5Ljc2Mi0yMC4yOS0yOC4xNHptNDcuOTY3IDMuMDgydi0zLjA4Mmg0NC4zOTd2My4wODJoLTIwLjQ1M3Y1NC44MmgtMy41NzF2LTU0LjgyaC0yMC4zNzN6TS4yMDMgMzIuNjMyaDQuNDY0bDYxLjU1NyA5MS42NzEtMjUuNDM5LTMzLjc2OUwzLjkzNiAzNy4wMTFsLS4xNjIgNTMuNTIzSC4yMDN6bTE4My4xOTQgNTMuODljLjczOCAwIDEuMjc2LS41NjIgMS4yNzYtMS4yODkgMC0uNzI3LS41MzgtMS4yOS0xLjI3Ni0xLjI5LS43MyAwLTEuMjc3LjU2My0xLjI3NyAxLjI5IDAgLjcyNy41NDcgMS4yOSAxLjI3NyAxLjI5em0zLjUwOS0zLjM5MmMwIDIuMTQ2IDEuNTU1IDMuNTQ5IDMuODIyIDMuNTQ5IDIuNDE0IDAgMy44NzQtMS40NDYgMy44NzQtMy45NTZ2LTguODM3aC0xLjk0NnY4LjgyOGMwIDEuMzk0LS43MDQgMi4xMzgtMS45NDYgMi4xMzgtMS4xMTIgMC0xLjg2Ny0uNjkyLTEuODkzLTEuNzIyaC0xLjkxMXptMTAuMjQtLjExM2MuMTQgMi4yMzMgMi4wMDcgMy42NjIgNC43ODcgMy42NjIgMi45NyAwIDQuODMtMS40OTggNC44My0zLjg4NyAwLTEuODc4LTEuMDYtMi45MTctMy42MzItMy41MTRsLTEuMzgtLjMzOGMtMS42MzQtLjM4LTIuMjk0LS44OTEtMi4yOTQtMS43ODMgMC0xLjEyNSAxLjAyNS0xLjg2IDIuNTYzLTEuODYgMS40NTkgMCAyLjQ2Ni43MTggMi42NDkgMS44NjloMS44OTNjLS4xMTMtMi4xMDMtMS45NzEtMy41ODMtNC41MTYtMy41ODMtMi43MzcgMC00LjU2IDEuNDgtNC41NiAzLjcwNCAwIDEuODM1IDEuMDMzIDIuOTI2IDMuMyAzLjQ1NGwxLjYxNi4zOWMxLjY1OS4zODkgMi4zODguOTYgMi4zODggMS45MTIgMCAxLjEwOC0xLjE0NiAxLjkxMy0yLjcxIDEuOTEzLTEuNjc2IDAtMi44NC0uNzUzLTMuMDA1LTEuOTM5aC0xLjkyOHpcIj48L3BhdGg+XHJcbiAgICA8L3N2Zz5cclxuICA8L2ZpZ3VyZT5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ287XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8nO1xyXG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRlbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZXJvIC8+XHJcbiAgICAgIDxociAvPlxyXG4gICAgICA8Q29udGVudCAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJjb25zdCBjb250ZW50RGF0YSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ0NvbmZpZ3VyZSBPdGhlciBJZGVudGl0eSBQcm92aWRlcnMnLFxyXG4gICAgbGluazogJ2h0dHBzOi8vYXV0aDAuY29tL2RvY3MvaWRlbnRpdHlwcm92aWRlcnMnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdBdXRoMCBzdXBwb3J0cyBzb2NpYWwgcHJvdmlkZXJzIGFzIEZhY2Vib29rLCBUd2l0dGVyLCBJbnN0YWdyYW0gYW5kIDEwMCssIEVudGVycHJpc2UgcHJvdmlkZXJzIGFzIE1pY3Jvc29mdCBPZmZpY2UgMzY1LCBHb29nbGUgQXBwcywgQXp1cmUsIGFuZCBtb3JlLiBZb3UgY2FuIGFsc28gdXNlIGFueSBPQXV0aDIgQXV0aG9yaXphdGlvbiBTZXJ2ZXIuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdFbmFibGUgTXVsdGlmYWN0b3IgQXV0aGVudGljYXRpb24nLFxyXG4gICAgbGluazogJ2h0dHBzOi8vYXV0aDAuY29tL2RvY3MvbWZhJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnQWRkIGFuIGV4dHJhIGxheWVyIG9mIHNlY3VyaXR5IGJ5IGVuYWJsaW5nIE11bHRpLWZhY3RvciBBdXRoZW50aWNhdGlvbiwgcmVxdWlyaW5nIHlvdXIgdXNlcnMgdG8gcHJvdmlkZSBtb3JlIHRoYW4gb25lIHBpZWNlIG9mIGlkZW50aWZ5aW5nIGluZm9ybWF0aW9uLiBQdXNoIG5vdGlmaWNhdGlvbnMsIGF1dGhlbnRpY2F0b3IgYXBwcywgU01TLCBhbmQgRFVPIFNlY3VyaXR5IGFyZSBzdXBwb3J0ZWQuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdBdHRhY2sgUHJvdGVjdGlvbicsXHJcbiAgICBsaW5rOiAnaHR0cHM6Ly9hdXRoMC5jb20vZG9jcy9hdHRhY2stcHJvdGVjdGlvbicsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0F1dGgwIGNhbiBkZXRlY3QgYW5vbWFsaWVzIGFuZCBzdG9wIG1hbGljaW91cyBhdHRlbXB0cyB0byBhY2Nlc3MgeW91ciBhcHBsaWNhdGlvbi4gQXR0YWNrIHByb3RlY3Rpb24gY2FuIGFsZXJ0IHlvdSBhbmQgeW91ciB1c2VycyBvZiBzdXNwaWNpb3VzIGFjdGl2aXR5LCBhcyB3ZWxsIGFzIGJsb2NrIGZ1cnRoZXIgbG9naW4gYXR0ZW1wdHMuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdMZWFybiBBYm91dCBSdWxlcycsXHJcbiAgICBsaW5rOiAnaHR0cHM6Ly9hdXRoMC5jb20vZG9jcy9ydWxlcycsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJSdWxlcyBhcmUgSmF2YVNjcmlwdCBmdW5jdGlvbnMgdGhhdCBleGVjdXRlIHdoZW4gYSB1c2VyIGF1dGhlbnRpY2F0ZXMgdG8geW91ciBhcHBsaWNhdGlvbi4gVGhleSBydW4gb25jZSB0aGUgYXV0aGVudGljYXRpb24gcHJvY2VzcyBpcyBjb21wbGV0ZSwgYW5kIHlvdSBjYW4gdXNlIHRoZW0gdG8gY3VzdG9taXplIGFuZCBleHRlbmQgQXV0aDAncyBjYXBhYmlsaXRpZXMuXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250ZW50RGF0YTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdHN0cmFwXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9