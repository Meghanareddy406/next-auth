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

var _jsxFileName = "C:\\Users\\Meghana\\Projects\\auth\\next-auth\\next-auth\\components\\Content.jsx";





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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo */ "./components/Logo.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dropbox_chooser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dropbox-chooser */ "react-dropbox-chooser");
/* harmony import */ var react_dropbox_chooser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropbox_chooser__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Meghana\\Projects\\auth\\next-auth\\next-auth\\components\\Hero.jsx";



const APP_KEY = "dqr2u5twivdlzzv";
function App() {
  const {
    0: url,
    1: setUrl
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");

  function handleSuccess(files) {
    setUrl(files[0].thumbnailLink);
    console.log(url);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "App",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      style: {
        textAlign: "center"
      },
      children: "Upload Or Choose Files to DropBox"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 12
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_dropbox_chooser__WEBPACK_IMPORTED_MODULE_3___default()), {
        appKey: APP_KEY,
        success: handleSuccess,
        cancel: () => console.log('closed'),
        multiselect: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          children: "Upload or Choose Files"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dropbox"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 14
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: url,
          width: "200",
          height: "200",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
} // const Hero = () => (
//   <div className="hero my-5 text-center" data-testid="hero">
//     <Logo testId="hero-logo" />
//     <h1 className="mb-4" data-testid="hero-title">
//       Next.js Sample Project
//     </h1>
//     <p className="lead" data-testid="hero-lead">
//       This is a sample application that demonstrates an authentication flow for a Regular Web App, using{' '}
//       <a href="https://nextjs.org">Next.js</a>
//     </p>
//   </div>
// );
// export default Hero;

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

var _jsxFileName = "C:\\Users\\Meghana\\Projects\\auth\\next-auth\\next-auth\\components\\Logo.jsx";


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


var _jsxFileName = "C:\\Users\\Meghana\\Projects\\auth\\next-auth\\next-auth\\pages\\index.jsx";



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

/***/ "react-dropbox-chooser":
/*!****************************************!*\
  !*** external "react-dropbox-chooser" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-dropbox-chooser");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoMC1uZXh0anMtc2FtcGxlLy4vY29tcG9uZW50cy9Db250ZW50LmpzeCIsIndlYnBhY2s6Ly9hdXRoMC1uZXh0anMtc2FtcGxlLy4vY29tcG9uZW50cy9IZXJvLmpzeCIsIndlYnBhY2s6Ly9hdXRoMC1uZXh0anMtc2FtcGxlLy4vY29tcG9uZW50cy9Mb2dvLmpzeCIsIndlYnBhY2s6Ly9hdXRoMC1uZXh0anMtc2FtcGxlLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL2F1dGgwLW5leHRqcy1zYW1wbGUvLi91dGlscy9jb250ZW50RGF0YS5qcyIsIndlYnBhY2s6Ly9hdXRoMC1uZXh0anMtc2FtcGxlL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIiLCJ3ZWJwYWNrOi8vYXV0aDAtbmV4dGpzLXNhbXBsZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYXV0aDAtbmV4dGpzLXNhbXBsZS9leHRlcm5hbCBcInJlYWN0LWRyb3Bib3gtY2hvb3NlclwiIiwid2VicGFjazovL2F1dGgwLW5leHRqcy1zYW1wbGUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9hdXRoMC1uZXh0anMtc2FtcGxlL2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIl0sIm5hbWVzIjpbIkNvbnRlbnQiLCJjb250ZW50RGF0YSIsImNvbCIsImkiLCJsaW5rIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkFQUF9LRVkiLCJBcHAiLCJ1cmwiLCJzZXRVcmwiLCJ1c2VTdGF0ZSIsImhhbmRsZVN1Y2Nlc3MiLCJmaWxlcyIsInRodW1ibmFpbExpbmsiLCJjb25zb2xlIiwibG9nIiwidGV4dEFsaWduIiwiTG9nbyIsInRlc3RJZCIsIkluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLG1CQUNkO0FBQUssV0FBUyxFQUFDLGlCQUFmO0FBQWlDLGlCQUFZLFNBQTdDO0FBQUEsMEJBQ0U7QUFBSSxhQUFTLEVBQUMsa0JBQWQ7QUFBaUMsbUJBQVksZUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLDhEQUFDLDJDQUFEO0FBQUssYUFBUyxFQUFDLGdDQUFmO0FBQWdELG1CQUFZLGVBQTVEO0FBQUEsY0FDR0MsMkRBQUEsQ0FBZ0IsQ0FBQ0MsR0FBRCxFQUFNQyxDQUFOLGtCQUNmLDhEQUFDLDJDQUFEO0FBQWEsUUFBRSxFQUFFLENBQWpCO0FBQW9CLGVBQVMsRUFBQyxNQUE5QjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxNQUFkO0FBQUEsK0JBQ0U7QUFBRyxjQUFJLEVBQUVELEdBQUcsQ0FBQ0UsSUFBYjtBQUFBLGtDQUNFLDhEQUFDLDJFQUFEO0FBQWlCLGdCQUFJLEVBQUMsTUFBdEI7QUFBNkIscUJBQVMsRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUdGLEdBQUcsQ0FBQ0csS0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBT0U7QUFBQSxrQkFBSUgsR0FBRyxDQUFDSTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQSxPQUFVSCxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBcUJBLCtEQUFlSCxPQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFFQSxNQUFNTyxPQUFPLEdBQUMsaUJBQWQ7QUFFZSxTQUFTQyxHQUFULEdBQWU7QUFDNUIsUUFBTTtBQUFBLE9BQUNDLEdBQUQ7QUFBQSxPQUFLQztBQUFMLE1BQWVDLCtDQUFRLENBQUMsRUFBRCxDQUE3Qjs7QUFDQSxXQUFTQyxhQUFULENBQXVCQyxLQUF2QixFQUE2QjtBQUMzQkgsVUFBTSxDQUFDRyxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNDLGFBQVYsQ0FBTjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVAsR0FBWjtBQUNEOztBQUNELHNCQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQSw0QkFDRTtBQUFJLFdBQUssRUFBRTtBQUFDUSxpQkFBUyxFQUFDO0FBQVgsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBRU87QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZQLGVBR0E7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNFLDhEQUFDLDhEQUFEO0FBQWdCLGNBQU0sRUFBRVYsT0FBeEI7QUFDZ0IsZUFBTyxFQUFFSyxhQUR6QjtBQUVnQixjQUFNLEVBQUUsTUFBTUcsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixDQUY5QjtBQUdnQixtQkFBVyxFQUFFLElBSDdCO0FBQUEsZ0NBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsZUFNRTtBQUFLLG1CQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GLGVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixlQU9PO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUFAsZUFRRTtBQUFLLGFBQUcsRUFBRVAsR0FBVjtBQUFlLGVBQUssRUFBQyxLQUFyQjtBQUEyQixnQkFBTSxFQUFDLEtBQWxDO0FBQXdDLGFBQUcsRUFBQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsdUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTs7QUFFQSxNQUFNUyxJQUFJLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsa0JBQ1g7QUFBUSxXQUFTLEVBQUMsRUFBbEI7QUFBcUIsT0FBSyxFQUFDLFNBQTNCO0FBQXFDLGlCQUFhQSxNQUFsRDtBQUFBLHlCQUNFO0FBQUssU0FBSyxFQUFDLDRCQUFYO0FBQXdDLFNBQUssRUFBQyxLQUE5QztBQUFvRCxVQUFNLEVBQUMsS0FBM0Q7QUFBQSwyQkFDRTtBQUFNLE9BQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQVFBLCtEQUFlRCxJQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBRUE7QUFDQTtBQUVlLFNBQVNFLEtBQVQsR0FBaUI7QUFDOUIsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQSxrQkFERjtBQU9ELEM7Ozs7Ozs7Ozs7OztBQ2JELE1BQU1uQixXQUFXLEdBQUcsQ0FDbEI7QUFDRUksT0FBSyxFQUFFLG9DQURUO0FBRUVELE1BQUksRUFBRSwwQ0FGUjtBQUdFRSxhQUFXLEVBQ1Q7QUFKSixDQURrQixFQU9sQjtBQUNFRCxPQUFLLEVBQUUsbUNBRFQ7QUFFRUQsTUFBSSxFQUFFLDRCQUZSO0FBR0VFLGFBQVcsRUFDVDtBQUpKLENBUGtCLEVBYWxCO0FBQ0VELE9BQUssRUFBRSxtQkFEVDtBQUVFRCxNQUFJLEVBQUUsMENBRlI7QUFHRUUsYUFBVyxFQUNUO0FBSkosQ0Fia0IsRUFtQmxCO0FBQ0VELE9BQUssRUFBRSxtQkFEVDtBQUVFRCxNQUFJLEVBQUUsOEJBRlI7QUFHRUUsYUFBVyxFQUNUO0FBSkosQ0FuQmtCLENBQXBCO0FBMkJBLCtEQUFlTCxXQUFmLEU7Ozs7Ozs7Ozs7O0FDM0JBLDREOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuXHJcbmltcG9ydCBjb250ZW50RGF0YSBmcm9tICcuLi91dGlscy9jb250ZW50RGF0YSc7XHJcblxyXG5jb25zdCBDb250ZW50ID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibmV4dC1zdGVwcyBteS01XCIgZGF0YS10ZXN0aWQ9XCJjb250ZW50XCI+XHJcbiAgICA8aDIgY2xhc3NOYW1lPVwibXktNSB0ZXh0LWNlbnRlclwiIGRhdGEtdGVzdGlkPVwiY29udGVudC10aXRsZVwiPlxyXG4gICAgICBXaGF0IGNhbiBJIGRvIG5leHQ/XHJcbiAgICA8L2gyPlxyXG4gICAgPFJvdyBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiBkYXRhLXRlc3RpZD1cImNvbnRlbnQtaXRlbXNcIj5cclxuICAgICAge2NvbnRlbnREYXRhLm1hcCgoY29sLCBpKSA9PiAoXHJcbiAgICAgICAgPENvbCBrZXk9e2l9IG1kPXs1fSBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPXtjb2wubGlua30+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwibGlua1wiIGNsYXNzTmFtZT1cIm1yLTJcIiAvPlxyXG4gICAgICAgICAgICAgIHtjb2wudGl0bGV9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICA8cD57Y29sLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgKSl9XHJcbiAgICA8L1Jvdz5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XHJcbiIsImltcG9ydCBMb2dvIGZyb20gJy4vTG9nbyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRHJvcGJveENob29zZXIgZnJvbSAncmVhY3QtZHJvcGJveC1jaG9vc2VyJ1xyXG5cclxuY29uc3QgQVBQX0tFWT1cImRxcjJ1NXR3aXZkbHp6dlwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3QgW3VybCxzZXRVcmxdID0gdXNlU3RhdGUoXCJcIilcclxuICBmdW5jdGlvbiBoYW5kbGVTdWNjZXNzKGZpbGVzKXtcclxuICAgIHNldFVybChmaWxlc1swXS50aHVtYm5haWxMaW5rKVxyXG4gICAgY29uc29sZS5sb2codXJsKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgPGgxIHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fT5VcGxvYWQgT3IgQ2hvb3NlIEZpbGVzIHRvIERyb3BCb3g8L2gxPlxyXG4gICAgICA8YnIvPjxici8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8RHJvcGJveENob29zZXIgYXBwS2V5PXtBUFBfS0VZfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz17aGFuZGxlU3VjY2Vzc31cclxuICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbD17KCkgPT4gY29uc29sZS5sb2coJ2Nsb3NlZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbXVsdGlzZWxlY3Q9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgPGJ1dHRvbj5VcGxvYWQgb3IgQ2hvb3NlIEZpbGVzPC9idXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wYm94XCI+PC9kaXY+XHJcbiAgICAgICAgPGJyLz48YnIvPlxyXG4gICAgICAgIDxpbWcgc3JjPXt1cmx9IHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgYWx0PVwiXCIvPlxyXG4gICAgICA8L0Ryb3Bib3hDaG9vc2VyPlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIGNvbnN0IEhlcm8gPSAoKSA9PiAoXHJcbi8vICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvIG15LTUgdGV4dC1jZW50ZXJcIiBkYXRhLXRlc3RpZD1cImhlcm9cIj5cclxuLy8gICAgIDxMb2dvIHRlc3RJZD1cImhlcm8tbG9nb1wiIC8+XHJcbi8vICAgICA8aDEgY2xhc3NOYW1lPVwibWItNFwiIGRhdGEtdGVzdGlkPVwiaGVyby10aXRsZVwiPlxyXG4vLyAgICAgICBOZXh0LmpzIFNhbXBsZSBQcm9qZWN0XHJcbi8vICAgICA8L2gxPlxyXG5cclxuLy8gICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIiBkYXRhLXRlc3RpZD1cImhlcm8tbGVhZFwiPlxyXG4vLyAgICAgICBUaGlzIGlzIGEgc2FtcGxlIGFwcGxpY2F0aW9uIHRoYXQgZGVtb25zdHJhdGVzIGFuIGF1dGhlbnRpY2F0aW9uIGZsb3cgZm9yIGEgUmVndWxhciBXZWIgQXBwLCB1c2luZ3snICd9XHJcbi8vICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmdcIj5OZXh0LmpzPC9hPlxyXG4vLyAgICAgPC9wPlxyXG4vLyAgIDwvZGl2PlxyXG4vLyApO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvZ28gPSAoeyB0ZXN0SWQgfSkgPT4gKFxyXG4gIDxmaWd1cmUgY2xhc3NOYW1lPVwiXCIgdGl0bGU9XCJOZXh0LmpzXCIgZGF0YS10ZXN0aWQ9e3Rlc3RJZH0+XHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwN1wiIGhlaWdodD1cIjEyNFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTQ4Ljk0MiAzMi42MzJoMzguOTZ2My4wODJINTIuNTEydjIzLjE5M2gzMy4yNzh2My4wODJINTIuNTEzdjI1LjQ2NGgzNS43OTR2My4wODFINDguOTQyVjMyLjYzMnptNDIuNDUgMGg0LjEzOWwxOC4zNDMgMjUuNDY0IDE4Ljc0OS0yNS40NjRMMTU4LjEyNC4yODdsLTQxLjg5NiA2MC40ODUgMjEuNTkgMjkuNzYyaC00LjMwMmwtMTkuNjQyLTI3LjA4Nkw5NC4xNSA5MC41MzRoLTQuMjJsMjEuNzUxLTI5Ljc2Mi0yMC4yOS0yOC4xNHptNDcuOTY3IDMuMDgydi0zLjA4Mmg0NC4zOTd2My4wODJoLTIwLjQ1M3Y1NC44MmgtMy41NzF2LTU0LjgyaC0yMC4zNzN6TS4yMDMgMzIuNjMyaDQuNDY0bDYxLjU1NyA5MS42NzEtMjUuNDM5LTMzLjc2OUwzLjkzNiAzNy4wMTFsLS4xNjIgNTMuNTIzSC4yMDN6bTE4My4xOTQgNTMuODljLjczOCAwIDEuMjc2LS41NjIgMS4yNzYtMS4yODkgMC0uNzI3LS41MzgtMS4yOS0xLjI3Ni0xLjI5LS43MyAwLTEuMjc3LjU2My0xLjI3NyAxLjI5IDAgLjcyNy41NDcgMS4yOSAxLjI3NyAxLjI5em0zLjUwOS0zLjM5MmMwIDIuMTQ2IDEuNTU1IDMuNTQ5IDMuODIyIDMuNTQ5IDIuNDE0IDAgMy44NzQtMS40NDYgMy44NzQtMy45NTZ2LTguODM3aC0xLjk0NnY4LjgyOGMwIDEuMzk0LS43MDQgMi4xMzgtMS45NDYgMi4xMzgtMS4xMTIgMC0xLjg2Ny0uNjkyLTEuODkzLTEuNzIyaC0xLjkxMXptMTAuMjQtLjExM2MuMTQgMi4yMzMgMi4wMDcgMy42NjIgNC43ODcgMy42NjIgMi45NyAwIDQuODMtMS40OTggNC44My0zLjg4NyAwLTEuODc4LTEuMDYtMi45MTctMy42MzItMy41MTRsLTEuMzgtLjMzOGMtMS42MzQtLjM4LTIuMjk0LS44OTEtMi4yOTQtMS43ODMgMC0xLjEyNSAxLjAyNS0xLjg2IDIuNTYzLTEuODYgMS40NTkgMCAyLjQ2Ni43MTggMi42NDkgMS44NjloMS44OTNjLS4xMTMtMi4xMDMtMS45NzEtMy41ODMtNC41MTYtMy41ODMtMi43MzcgMC00LjU2IDEuNDgtNC41NiAzLjcwNCAwIDEuODM1IDEuMDMzIDIuOTI2IDMuMyAzLjQ1NGwxLjYxNi4zOWMxLjY1OS4zODkgMi4zODguOTYgMi4zODggMS45MTIgMCAxLjEwOC0xLjE0NiAxLjkxMy0yLjcxIDEuOTEzLTEuNjc2IDAtMi44NC0uNzUzLTMuMDA1LTEuOTM5aC0xLjkyOHpcIj48L3BhdGg+XHJcbiAgICA8L3N2Zz5cclxuICA8L2ZpZ3VyZT5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ287XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8nO1xyXG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRlbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZXJvIC8+XHJcbiAgICAgIDxociAvPlxyXG4gICAgICA8Q29udGVudCAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJjb25zdCBjb250ZW50RGF0YSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ0NvbmZpZ3VyZSBPdGhlciBJZGVudGl0eSBQcm92aWRlcnMnLFxyXG4gICAgbGluazogJ2h0dHBzOi8vYXV0aDAuY29tL2RvY3MvaWRlbnRpdHlwcm92aWRlcnMnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdBdXRoMCBzdXBwb3J0cyBzb2NpYWwgcHJvdmlkZXJzIGFzIEZhY2Vib29rLCBUd2l0dGVyLCBJbnN0YWdyYW0gYW5kIDEwMCssIEVudGVycHJpc2UgcHJvdmlkZXJzIGFzIE1pY3Jvc29mdCBPZmZpY2UgMzY1LCBHb29nbGUgQXBwcywgQXp1cmUsIGFuZCBtb3JlLiBZb3UgY2FuIGFsc28gdXNlIGFueSBPQXV0aDIgQXV0aG9yaXphdGlvbiBTZXJ2ZXIuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdFbmFibGUgTXVsdGlmYWN0b3IgQXV0aGVudGljYXRpb24nLFxyXG4gICAgbGluazogJ2h0dHBzOi8vYXV0aDAuY29tL2RvY3MvbWZhJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnQWRkIGFuIGV4dHJhIGxheWVyIG9mIHNlY3VyaXR5IGJ5IGVuYWJsaW5nIE11bHRpLWZhY3RvciBBdXRoZW50aWNhdGlvbiwgcmVxdWlyaW5nIHlvdXIgdXNlcnMgdG8gcHJvdmlkZSBtb3JlIHRoYW4gb25lIHBpZWNlIG9mIGlkZW50aWZ5aW5nIGluZm9ybWF0aW9uLiBQdXNoIG5vdGlmaWNhdGlvbnMsIGF1dGhlbnRpY2F0b3IgYXBwcywgU01TLCBhbmQgRFVPIFNlY3VyaXR5IGFyZSBzdXBwb3J0ZWQuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdBdHRhY2sgUHJvdGVjdGlvbicsXHJcbiAgICBsaW5rOiAnaHR0cHM6Ly9hdXRoMC5jb20vZG9jcy9hdHRhY2stcHJvdGVjdGlvbicsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0F1dGgwIGNhbiBkZXRlY3QgYW5vbWFsaWVzIGFuZCBzdG9wIG1hbGljaW91cyBhdHRlbXB0cyB0byBhY2Nlc3MgeW91ciBhcHBsaWNhdGlvbi4gQXR0YWNrIHByb3RlY3Rpb24gY2FuIGFsZXJ0IHlvdSBhbmQgeW91ciB1c2VycyBvZiBzdXNwaWNpb3VzIGFjdGl2aXR5LCBhcyB3ZWxsIGFzIGJsb2NrIGZ1cnRoZXIgbG9naW4gYXR0ZW1wdHMuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdMZWFybiBBYm91dCBSdWxlcycsXHJcbiAgICBsaW5rOiAnaHR0cHM6Ly9hdXRoMC5jb20vZG9jcy9ydWxlcycsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJSdWxlcyBhcmUgSmF2YVNjcmlwdCBmdW5jdGlvbnMgdGhhdCBleGVjdXRlIHdoZW4gYSB1c2VyIGF1dGhlbnRpY2F0ZXMgdG8geW91ciBhcHBsaWNhdGlvbi4gVGhleSBydW4gb25jZSB0aGUgYXV0aGVudGljYXRpb24gcHJvY2VzcyBpcyBjb21wbGV0ZSwgYW5kIHlvdSBjYW4gdXNlIHRoZW0gdG8gY3VzdG9taXplIGFuZCBleHRlbmQgQXV0aDAncyBjYXBhYmlsaXRpZXMuXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250ZW50RGF0YTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZHJvcGJveC1jaG9vc2VyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=