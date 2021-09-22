(function() {
var exports = {};
exports.id = "pages/external";
exports.ids = ["pages/external"];
exports.modules = {

/***/ "./components/ErrorMessage.jsx":
/*!*************************************!*\
  !*** ./components/ErrorMessage.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Meghana\\Projects\\auth-next\\auth0-nextjs-samples\\Sample-01\\components\\ErrorMessage.jsx";



const ErrorMessage = ({
  children
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Alert, {
  color: "danger",
  fade: false,
  "data-testid": "error",
  children: children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (ErrorMessage);

/***/ }),

/***/ "./components/Highlight.jsx":
/*!**********************************!*\
  !*** ./components/Highlight.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/core */ "highlight.js/lib/core");
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/lib/languages/json */ "highlight.js/lib/languages/json");
/* harmony import */ var highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highlight_js_styles_monokai_sublime_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js/styles/monokai-sublime.css */ "./node_modules/highlight.js/styles/monokai-sublime.css");
/* harmony import */ var highlight_js_styles_monokai_sublime_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_monokai_sublime_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Meghana\\Projects\\auth-next\\auth0-nextjs-samples\\Sample-01\\components\\Highlight.jsx";





const Highlight = ({
  children,
  testId
}) => {
  const {
    0: isLoaded,
    1: setIsLoaded
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const codeNode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const language = 'json';
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    try {
      highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_2___default().registerLanguage(language, (highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_3___default()));
      setIsLoaded(true);
    } catch (error) {
      console.error(error);
      throw Error(`Cannot register the language ${language}`);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    codeNode && codeNode.current && highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_2___default().highlightBlock(codeNode.current);
  });
  if (!isLoaded) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
    className: "rounded",
    "data-testid": testId,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
      ref: codeNode,
      className: language,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Highlight);

/***/ }),

/***/ "./components/Loading.jsx":
/*!********************************!*\
  !*** ./components/Loading.jsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Meghana\\Projects\\auth-next\\auth0-nextjs-samples\\Sample-01\\components\\Loading.jsx";


const Loading = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  className: "spinner d-flex align-items-center justify-content-center w-100 h-100",
  "data-testid": "loading",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "120",
    height: "120",
    className: "uil-ring",
    preserveAspectRatio: "xMidYMid",
    viewBox: "0 0 100 100",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "none",
      d: "M0 0H100V100H0z",
      className: "bk"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("filter", {
        id: "uil-ring-shadow",
        width: "300%",
        height: "300%",
        x: "-100%",
        y: "-100%",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("feOffset", {
          in: "SourceGraphic",
          result: "offOut"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("feGaussianBlur", {
          in: "offOut",
          result: "blurOut"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("feBlend", {
          in: "SourceGraphic",
          in2: "blurOut"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#337ab7",
      d: "M10 50s0 .5.1 1.4c0 .5.1 1 .2 1.7 0 .3.1.7.1 1.1.1.4.1.8.2 1.2.2.8.3 1.8.5 2.8.3 1 .6 2.1.9 3.2.3 1.1.9 2.3 1.4 3.5.5 1.2 1.2 2.4 1.8 3.7.3.6.8 1.2 1.2 1.9.4.6.8 1.3 1.3 1.9 1 1.2 1.9 2.6 3.1 3.7 2.2 2.5 5 4.7 7.9 6.7 3 2 6.5 3.4 10.1 4.6 3.6 1.1 7.5 1.5 11.2 1.6 4-.1 7.7-.6 11.3-1.6 3.6-1.2 7-2.6 10-4.6 3-2 5.8-4.2 7.9-6.7 1.2-1.2 2.1-2.5 3.1-3.7.5-.6.9-1.3 1.3-1.9.4-.6.8-1.3 1.2-1.9.6-1.3 1.3-2.5 1.8-3.7.5-1.2 1-2.4 1.4-3.5.3-1.1.6-2.2.9-3.2.2-1 .4-1.9.5-2.8.1-.4.1-.8.2-1.2 0-.4.1-.7.1-1.1.1-.7.1-1.2.2-1.7.1-.9.1-1.4.1-1.4V54.2c0 .4-.1.8-.1 1.2-.1.9-.2 1.8-.4 2.8-.2 1-.5 2.1-.7 3.3-.3 1.2-.8 2.4-1.2 3.7-.2.7-.5 1.3-.8 1.9-.3.7-.6 1.3-.9 2-.3.7-.7 1.3-1.1 2-.4.7-.7 1.4-1.2 2-1 1.3-1.9 2.7-3.1 4-2.2 2.7-5 5-8.1 7.1L70 85.7c-.8.5-1.7.9-2.6 1.3l-1.4.7-1.4.5c-.9.3-1.8.7-2.8 1C58 90.3 53.9 90.9 50 91l-3-.2c-1 0-2-.2-3-.3l-1.5-.2-.7-.1-.7-.2c-1-.3-1.9-.5-2.9-.7-.9-.3-1.9-.7-2.8-1l-1.4-.6-1.3-.6c-.9-.4-1.8-.8-2.6-1.3l-2.4-1.5c-3.1-2.1-5.9-4.5-8.1-7.1-1.2-1.2-2.1-2.7-3.1-4-.5-.6-.8-1.4-1.2-2-.4-.7-.8-1.3-1.1-2-.3-.7-.6-1.3-.9-2-.3-.7-.6-1.3-.8-1.9-.4-1.3-.9-2.5-1.2-3.7-.3-1.2-.5-2.3-.7-3.3-.2-1-.3-2-.4-2.8-.1-.4-.1-.8-.1-1.2v-1.1-1.7c-.1-1-.1-1.5-.1-1.5z",
      filter: "url(#uil-ring-shadow)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateTransform", {
        attributeName: "transform",
        dur: "1s",
        from: "0 50 50",
        repeatCount: "indefinite",
        to: "360 50 50",
        type: "rotate"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./pages/external.jsx":
/*!****************************!*\
  !*** ./pages/external.jsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.jsx");
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ErrorMessage */ "./components/ErrorMessage.jsx");
/* harmony import */ var _components_Highlight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Highlight */ "./components/Highlight.jsx");


var _jsxFileName = "C:\\Users\\Meghana\\Projects\\auth-next\\auth0-nextjs-samples\\Sample-01\\pages\\external.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function External() {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    isLoading: false,
    response: undefined,
    error: undefined
  });

  const callApi = async () => {
    setState(previous => _objectSpread(_objectSpread({}, previous), {}, {
      isLoading: true
    }));

    try {
      const response = await fetch('/api/shows');
      const data = await response.json();
      setState(previous => _objectSpread(_objectSpread({}, previous), {}, {
        response: data,
        error: undefined
      }));
    } catch (error) {
      setState(previous => _objectSpread(_objectSpread({}, previous), {}, {
        response: undefined,
        error
      }));
    } finally {
      setState(previous => _objectSpread(_objectSpread({}, previous), {}, {
        isLoading: false
      }));
    }
  };

  const handle = (event, fn) => {
    event.preventDefault();
    fn();
  };

  const {
    isLoading,
    response,
    error
  } = state;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mb-5",
      "data-testid": "external",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        "data-testid": "external-title",
        children: "External API"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "data-testid": "external-text",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "lead",
          children: "Ping an external API by clicking the button below"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["This will call a local API on port 3001 that would have been started if you run ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
            children: "npm run dev"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 91
          }, this), "."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["An access token is sent as part of the request's ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
            children: "Authorization"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 60
          }, this), " header and the API will validate it using the API's audience value. The audience is the identifier of the API that you want to call (see", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "https://auth0.com/docs/get-started/dashboard/tenant-settings#api-authorization-settings",
            children: "API Authorization Settings"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 11
          }, this), " ", "for more info)."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
        color: "primary",
        className: "mt-5",
        onClick: e => handle(e, callApi),
        "data-testid": "external-action",
        children: "Ping API"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "result-block-container",
      children: [isLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 23
      }, this), (error || response) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "result-block",
        "data-testid": "external-result",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "muted",
          children: "Result"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__.default, {
          children: error.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 23
        }, this), response && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Highlight__WEBPACK_IMPORTED_MODULE_6__.default, {
          children: JSON.stringify(response, null, 2)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 26
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3__.withPageAuthRequired)(External, {
  onRedirecting: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 24
  }, undefined),
  onError: error => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__.default, {
    children: error.message
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 21
  }, undefined)
}));

/***/ }),

/***/ "./node_modules/highlight.js/styles/monokai-sublime.css":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/styles/monokai-sublime.css ***!
  \**************************************************************/
/***/ (function() {



/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@auth0/nextjs-auth0");;

/***/ }),

/***/ "highlight.js/lib/core":
/*!****************************************!*\
  !*** external "highlight.js/lib/core" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("highlight.js/lib/core");;

/***/ }),

/***/ "highlight.js/lib/languages/json":
/*!**************************************************!*\
  !*** external "highlight.js/lib/languages/json" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("highlight.js/lib/languages/json");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/external.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoMC1uZXh0anMtc2FtcGxlLy4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UuanN4Iiwid2VicGFjazovL2F1dGgwLW5leHRqcy1zYW1wbGUvLi9jb21wb25lbnRzL0hpZ2hsaWdodC5qc3giLCJ3ZWJwYWNrOi8vYXV0aDAtbmV4dGpzLXNhbXBsZS8uL2NvbXBvbmVudHMvTG9hZGluZy5qc3giLCJ3ZWJwYWNrOi8vYXV0aDAtbmV4dGpzLXNhbXBsZS8uL3BhZ2VzL2V4dGVybmFsLmpzeCIsIndlYnBhY2s6Ly9hdXRoMC1uZXh0anMtc2FtcGxlL2V4dGVybmFsIFwiQGF1dGgwL25leHRqcy1hdXRoMFwiIiwid2VicGFjazovL2F1dGgwLW5leHRqcy1zYW1wbGUvZXh0ZXJuYWwgXCJoaWdobGlnaHQuanMvbGliL2NvcmVcIiIsIndlYnBhY2s6Ly9hdXRoMC1uZXh0anMtc2FtcGxlL2V4dGVybmFsIFwiaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvanNvblwiIiwid2VicGFjazovL2F1dGgwLW5leHRqcy1zYW1wbGUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2F1dGgwLW5leHRqcy1zYW1wbGUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9hdXRoMC1uZXh0anMtc2FtcGxlL2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIl0sIm5hbWVzIjpbIkVycm9yTWVzc2FnZSIsImNoaWxkcmVuIiwiSGlnaGxpZ2h0IiwidGVzdElkIiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsInVzZVN0YXRlIiwiY29kZU5vZGUiLCJ1c2VSZWYiLCJsYW5ndWFnZSIsInVzZUVmZmVjdCIsImhsanMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiRXJyb3IiLCJjdXJyZW50IiwiTG9hZGluZyIsIkV4dGVybmFsIiwic3RhdGUiLCJzZXRTdGF0ZSIsImlzTG9hZGluZyIsInJlc3BvbnNlIiwidW5kZWZpbmVkIiwiY2FsbEFwaSIsInByZXZpb3VzIiwiZmV0Y2giLCJkYXRhIiwiaGFuZGxlIiwiZXZlbnQiLCJmbiIsInByZXZlbnREZWZhdWx0IiwiZSIsIm1lc3NhZ2UiLCJKU09OIiwic3RyaW5naWZ5Iiwid2l0aFBhZ2VBdXRoUmVxdWlyZWQiLCJvblJlZGlyZWN0aW5nIiwib25FcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELGtCQUNuQiw4REFBQyw2Q0FBRDtBQUFPLE9BQUssRUFBQyxRQUFiO0FBQXNCLE1BQUksRUFBRSxLQUE1QjtBQUFtQyxpQkFBWSxPQUEvQztBQUFBLFlBQ0dBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQU1BLCtEQUFlRCxZQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1FLFNBQVMsR0FBRyxDQUFDO0FBQUVELFVBQUY7QUFBWUU7QUFBWixDQUFELEtBQTBCO0FBQzFDLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsK0NBQVEsQ0FBQyxLQUFELENBQXhDO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQyw2Q0FBTSxFQUF2QjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFqQjtBQUVBQyxrREFBUyxDQUFDLE1BQU07QUFDZCxRQUFJO0FBQ0ZDLG1GQUFBLENBQXNCRixRQUF0QixFQUFnQ0csd0VBQWhDO0FBQ0FQLGlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0QsS0FIRCxDQUdFLE9BQU9RLEtBQVAsRUFBYztBQUNkQyxhQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDtBQUNBLFlBQU1FLEtBQUssQ0FBRSxnQ0FBK0JOLFFBQVMsRUFBMUMsQ0FBWDtBQUNEO0FBQ0YsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVVBQyxrREFBUyxDQUFDLE1BQU07QUFDZEgsWUFBUSxJQUFJQSxRQUFR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ekIsS0FBSyxpQkFBSSw4REFBQyw2REFBRDtBQUFBLGNBQWVBLEtBQUssQ0FBQ29CO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGMEIsQ0FBWCxDQUFuQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvZXh0ZXJuYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY29uc3QgRXJyb3JNZXNzYWdlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gIDxBbGVydCBjb2xvcj1cImRhbmdlclwiIGZhZGU9e2ZhbHNlfSBkYXRhLXRlc3RpZD1cImVycm9yXCI+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9BbGVydD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yTWVzc2FnZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9jb3JlJztcclxuaW1wb3J0IGpzb24gZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvanNvbic7XHJcblxyXG5pbXBvcnQgJ2hpZ2hsaWdodC5qcy9zdHlsZXMvbW9ub2thaS1zdWJsaW1lLmNzcyc7XHJcblxyXG5jb25zdCBIaWdobGlnaHQgPSAoeyBjaGlsZHJlbiwgdGVzdElkIH0pID0+IHtcclxuICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBjb2RlTm9kZSA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGxhbmd1YWdlID0gJ2pzb24nO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaGxqcy5yZWdpc3Rlckxhbmd1YWdlKGxhbmd1YWdlLCBqc29uKTtcclxuICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgdGhyb3cgRXJyb3IoYENhbm5vdCByZWdpc3RlciB0aGUgbGFuZ3VhZ2UgJHtsYW5ndWFnZX1gKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb2RlTm9kZSAmJiBjb2RlTm9kZS5jdXJyZW50ICYmIGhsanMuaGlnaGxpZ2h0QmxvY2soY29kZU5vZGUuY3VycmVudCk7XHJcbiAgfSk7XHJcblxyXG4gIGlmICghaXNMb2FkZWQpIHJldHVybiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHByZSBjbGFzc05hbWU9XCJyb3VuZGVkXCIgZGF0YS10ZXN0aWQ9e3Rlc3RJZH0+XHJcbiAgICAgIDxjb2RlIHJlZj17Y29kZU5vZGV9IGNsYXNzTmFtZT17bGFuZ3VhZ2V9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9jb2RlPlxyXG4gICAgPC9wcmU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhpZ2hsaWdodDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvYWRpbmcgPSAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciB3LTEwMCBoLTEwMFwiIGRhdGEtdGVzdGlkPVwibG9hZGluZ1wiPlxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgd2lkdGg9XCIxMjBcIlxyXG4gICAgICBoZWlnaHQ9XCIxMjBcIlxyXG4gICAgICBjbGFzc05hbWU9XCJ1aWwtcmluZ1wiXHJcbiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxyXG4gICAgICA8cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwSDEwMFYxMDBIMHpcIiBjbGFzc05hbWU9XCJia1wiPjwvcGF0aD5cclxuICAgICAgPGRlZnM+XHJcbiAgICAgICAgPGZpbHRlciBpZD1cInVpbC1yaW5nLXNoYWRvd1wiIHdpZHRoPVwiMzAwJVwiIGhlaWdodD1cIjMwMCVcIiB4PVwiLTEwMCVcIiB5PVwiLTEwMCVcIj5cclxuICAgICAgICAgIDxmZU9mZnNldCBpbj1cIlNvdXJjZUdyYXBoaWNcIiByZXN1bHQ9XCJvZmZPdXRcIj48L2ZlT2Zmc2V0PlxyXG4gICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIGluPVwib2ZmT3V0XCIgcmVzdWx0PVwiYmx1ck91dFwiPjwvZmVHYXVzc2lhbkJsdXI+XHJcbiAgICAgICAgICA8ZmVCbGVuZCBpbj1cIlNvdXJjZUdyYXBoaWNcIiBpbjI9XCJibHVyT3V0XCI+PC9mZUJsZW5kPlxyXG4gICAgICAgIDwvZmlsdGVyPlxyXG4gICAgICA8L2RlZnM+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD1cIiMzMzdhYjdcIlxyXG4gICAgICAgIGQ9XCJNMTAgNTBzMCAuNS4xIDEuNGMwIC41LjEgMSAuMiAxLjcgMCAuMy4xLjcuMSAxLjEuMS40LjEuOC4yIDEuMi4yLjguMyAxLjguNSAyLjguMyAxIC42IDIuMS45IDMuMi4zIDEuMS45IDIuMyAxLjQgMy41LjUgMS4yIDEuMiAyLjQgMS44IDMuNy4zLjYuOCAxLjIgMS4yIDEuOS40LjYuOCAxLjMgMS4zIDEuOSAxIDEuMiAxLjkgMi42IDMuMSAzLjcgMi4yIDIuNSA1IDQuNyA3LjkgNi43IDMgMiA2LjUgMy40IDEwLjEgNC42IDMuNiAxLjEgNy41IDEuNSAxMS4yIDEuNiA0LS4xIDcuNy0uNiAxMS4zLTEuNiAzLjYtMS4yIDctMi42IDEwLTQuNiAzLTIgNS44LTQuMiA3LjktNi43IDEuMi0xLjIgMi4xLTIuNSAzLjEtMy43LjUtLjYuOS0xLjMgMS4zLTEuOS40LS42LjgtMS4zIDEuMi0xLjkuNi0xLjMgMS4zLTIuNSAxLjgtMy43LjUtMS4yIDEtMi40IDEuNC0zLjUuMy0xLjEuNi0yLjIuOS0zLjIuMi0xIC40LTEuOS41LTIuOC4xLS40LjEtLjguMi0xLjIgMC0uNC4xLS43LjEtMS4xLjEtLjcuMS0xLjIuMi0xLjcuMS0uOS4xLTEuNC4xLTEuNFY1NC4yYzAgLjQtLjEuOC0uMSAxLjItLjEuOS0uMiAxLjgtLjQgMi44LS4yIDEtLjUgMi4xLS43IDMuMy0uMyAxLjItLjggMi40LTEuMiAzLjctLjIuNy0uNSAxLjMtLjggMS45LS4zLjctLjYgMS4zLS45IDItLjMuNy0uNyAxLjMtMS4xIDItLjQuNy0uNyAxLjQtMS4yIDItMSAxLjMtMS45IDIuNy0zLjEgNC0yLjIgMi43LTUgNS04LjEgNy4xTDcwIDg1LjdjLS44LjUtMS43LjktMi42IDEuM2wtMS40LjctMS40LjVjLS45LjMtMS44LjctMi44IDFDNTggOTAuMyA1My45IDkwLjkgNTAgOTFsLTMtLjJjLTEgMC0yLS4yLTMtLjNsLTEuNS0uMi0uNy0uMS0uNy0uMmMtMS0uMy0xLjktLjUtMi45LS43LS45LS4zLTEuOS0uNy0yLjgtMWwtMS40LS42LTEuMy0uNmMtLjktLjQtMS44LS44LTIuNi0xLjNsLTIuNC0xLjVjLTMuMS0yLjEtNS45LTQuNS04LjEtNy4xLTEuMi0xLjItMi4xLTIuNy0zLjEtNC0uNS0uNi0uOC0xLjQtMS4yLTItLjQtLjctLjgtMS4zLTEuMS0yLS4zLS43LS42LTEuMy0uOS0yLS4zLS43LS42LTEuMy0uOC0xLjktLjQtMS4zLS45LTIuNS0xLjItMy43LS4zLTEuMi0uNS0yLjMtLjctMy4zLS4yLTEtLjMtMi0uNC0yLjgtLjEtLjQtLjEtLjgtLjEtMS4ydi0xLjEtMS43Yy0uMS0xLS4xLTEuNS0uMS0xLjV6XCJcclxuICAgICAgICBmaWx0ZXI9XCJ1cmwoI3VpbC1yaW5nLXNoYWRvdylcIj5cclxuICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybVxyXG4gICAgICAgICAgYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBmcm9tPVwiMCA1MCA1MFwiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgdG89XCIzNjAgNTAgNTBcIlxyXG4gICAgICAgICAgdHlwZT1cInJvdGF0ZVwiPjwvYW5pbWF0ZVRyYW5zZm9ybT5cclxuICAgICAgPC9wYXRoPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyB3aXRoUGFnZUF1dGhSZXF1aXJlZCB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xyXG5cclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nJztcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZSc7XHJcbmltcG9ydCBIaWdobGlnaHQgZnJvbSAnLi4vY29tcG9uZW50cy9IaWdobGlnaHQnO1xyXG5cclxuZnVuY3Rpb24gRXh0ZXJuYWwoKSB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UsIHJlc3BvbnNlOiB1bmRlZmluZWQsIGVycm9yOiB1bmRlZmluZWQgfSk7XHJcblxyXG4gIGNvbnN0IGNhbGxBcGkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRTdGF0ZShwcmV2aW91cyA9PiAoeyAuLi5wcmV2aW91cywgaXNMb2FkaW5nOiB0cnVlIH0pKVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvc2hvd3MnKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgIHNldFN0YXRlKHByZXZpb3VzID0+ICh7IC4uLnByZXZpb3VzLCByZXNwb25zZTogZGF0YSwgZXJyb3I6IHVuZGVmaW5lZCB9KSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldFN0YXRlKHByZXZpb3VzID0+ICh7IC4uLnByZXZpb3VzLCByZXNwb25zZTogdW5kZWZpbmVkLCBlcnJvciB9KSlcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldFN0YXRlKHByZXZpb3VzID0+ICh7IC4uLnByZXZpb3VzLCBpc0xvYWRpbmc6IGZhbHNlIH0pKVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZSA9IChldmVudCwgZm4pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBmbigpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgaXNMb2FkaW5nLCByZXNwb25zZSwgZXJyb3IgfSA9IHN0YXRlO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCIgZGF0YS10ZXN0aWQ9XCJleHRlcm5hbFwiPlxyXG4gICAgICAgIDxoMSBkYXRhLXRlc3RpZD1cImV4dGVybmFsLXRpdGxlXCI+RXh0ZXJuYWwgQVBJPC9oMT5cclxuICAgICAgICA8ZGl2IGRhdGEtdGVzdGlkPVwiZXh0ZXJuYWwtdGV4dFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPlxyXG4gICAgICAgICAgICBQaW5nIGFuIGV4dGVybmFsIEFQSSBieSBjbGlja2luZyB0aGUgYnV0dG9uIGJlbG93XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgIFRoaXMgd2lsbCBjYWxsIGEgbG9jYWwgQVBJIG9uIHBvcnQgMzAwMSB0aGF0IHdvdWxkIGhhdmUgYmVlbiBzdGFydGVkIGlmIHlvdSBydW4gPGNvZGU+bnBtIHJ1biBkZXY8L2NvZGU+LlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICBBbiBhY2Nlc3MgdG9rZW4gaXMgc2VudCBhcyBwYXJ0IG9mIHRoZSByZXF1ZXN0J3MgPGNvZGU+QXV0aG9yaXphdGlvbjwvY29kZT4gaGVhZGVyIGFuZCB0aGUgQVBJIHdpbGwgdmFsaWRhdGUgXHJcbiAgICAgICAgICBpdCB1c2luZyB0aGUgQVBJJ3MgYXVkaWVuY2UgdmFsdWUuIFRoZSBhdWRpZW5jZSBpcyB0aGUgaWRlbnRpZmllciBvZiB0aGUgQVBJIHRoYXQgeW91IHdhbnQgdG8gY2FsbCAoc2Vle1wiIFwifVxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYXV0aDAuY29tL2RvY3MvZ2V0LXN0YXJ0ZWQvZGFzaGJvYXJkL3RlbmFudC1zZXR0aW5ncyNhcGktYXV0aG9yaXphdGlvbi1zZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICBBUEkgQXV0aG9yaXphdGlvbiBTZXR0aW5nc1xyXG4gICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgIGZvciBtb3JlIGluZm8pLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwibXQtNVwiIG9uQ2xpY2s9e2UgPT4gaGFuZGxlKGUsIGNhbGxBcGkpfSBkYXRhLXRlc3RpZD1cImV4dGVybmFsLWFjdGlvblwiPlxyXG4gICAgICAgICAgUGluZyBBUElcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LWJsb2NrLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIHtpc0xvYWRpbmcgJiYgPExvYWRpbmcgLz59XHJcbiAgICAgICAgeyhlcnJvciB8fCByZXNwb25zZSkgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtYmxvY2tcIiBkYXRhLXRlc3RpZD1cImV4dGVybmFsLXJlc3VsdFwiPlxyXG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXV0ZWRcIj5SZXN1bHQ8L2g2PlxyXG4gICAgICAgICAgICB7ZXJyb3IgJiYgPEVycm9yTWVzc2FnZT57ZXJyb3IubWVzc2FnZX08L0Vycm9yTWVzc2FnZT59XHJcbiAgICAgICAgICAgIHtyZXNwb25zZSAmJiA8SGlnaGxpZ2h0PntKU09OLnN0cmluZ2lmeShyZXNwb25zZSwgbnVsbCwgMil9PC9IaWdobGlnaHQ+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFnZUF1dGhSZXF1aXJlZChFeHRlcm5hbCwge1xyXG4gIG9uUmVkaXJlY3Rpbmc6ICgpID0+IDxMb2FkaW5nIC8+LFxyXG4gIG9uRXJyb3I6IGVycm9yID0+IDxFcnJvck1lc3NhZ2U+e2Vycm9yLm1lc3NhZ2V9PC9FcnJvck1lc3NhZ2U+XHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoaWdobGlnaHQuanMvbGliL2NvcmVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2pzb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=