(function() {
var exports = {};
exports.id = "pages/ssr";
exports.ids = ["pages/ssr"];
exports.modules = {

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

/***/ "./pages/ssr.jsx":
/*!***********************!*\
  !*** ./pages/ssr.jsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SSRPage; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Highlight */ "./components/Highlight.jsx");


var _jsxFileName = "C:\\Users\\Meghana\\Projects\\auth-next\\auth0-nextjs-samples\\Sample-01\\pages\\ssr.jsx";



function SSRPage({
  user
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mb-5",
      "data-testid": "ssr",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        "data-testid": "ssr-title",
        children: "Server-side Rendered Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "data-testid": "ssr-text",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["You can protect a server-side rendered page by wrapping the ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
            children: "getServerSideProps"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 73
          }, this), " function with", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
            children: "withPageAuthRequired"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, this), ". Only logged in users will be able to access it. If the user is logged out, they will be redirected to the login page instead.", ' ']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Protected server-side rendered pages automatically receive a ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
            children: "user"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 74
          }, this), " prop containing the user profile."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "result-block-container",
      "data-testid": "ssr-json",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "result-block",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "muted",
          children: "User prop"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Highlight__WEBPACK_IMPORTED_MODULE_3__.default, {
          children: JSON.stringify(user, null, 2)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
const getServerSideProps = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__.withPageAuthRequired)();

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/ssr.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoMC1uZXh0anMtc2FtcGxlLy4vY29tcG9uZW50cy9IaWdobGlnaHQuanN4Iiwid2VicGFjazovL2F1dGgwLW5leHRqcy1zYW1wbGUvLi9wYWdlcy9zc3IuanN4Iiwid2VicGFjazovL2F1dGgwLW5leHRqcy1zYW1wbGUvZXh0ZXJuYWwgXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCIiLCJ3ZWJwYWNrOi8vYXV0aDAtbmV4dGpzLXNhbXBsZS9leHRlcm5hbCBcImhpZ2hsaWdodC5qcy9saWIvY29yZVwiIiwid2VicGFjazovL2F1dGgwLW5leHRqcy1zYW1wbGUvZXh0ZXJuYWwgXCJoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qc29uXCIiLCJ3ZWJwYWNrOi8vYXV0aDAtbmV4dGpzLXNhbXBsZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYXV0aDAtbmV4dGpzLXNhbXBsZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkhpZ2hsaWdodCIsImNoaWxkcmVuIiwidGVzdElkIiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsInVzZVN0YXRlIiwiY29kZU5vZGUiLCJ1c2VSZWYiLCJsYW5ndWFnZSIsInVzZUVmZmVjdCIsImhsanMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiRXJyb3IiLCJjdXJyZW50IiwiU1NSUGFnZSIsInVzZXIiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwid2l0aFBhZ2VBdXRoUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLENBQUM7QUFBRUMsVUFBRjtBQUFZQztBQUFaLENBQUQsS0FBMEI7QUFDMUMsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQywrQ0FBUSxDQUFDLEtBQUQsQ0FBeEM7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLDZDQUFNLEVBQXZCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLE1BQWpCO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUk7QUFDRkMsbUZBQUEsQ0FBc0JGLFFBQXRCLEVBQWdDRyx3RUFBaEM7QUFDQVAsaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDRCxLQUhELENBR0UsT0FBT1EsS0FBUCxFQUFjO0FBQ2RDLGFBQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0EsWUFBTUUsS0FBSyxDQUFFLGdDQUErQk4sUUFBUyxFQUExQyxDQUFYO0FBQ0Q7QUFDRixHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkSCxZQUFRLElBQUlBLFFBQVEsQ0FBQ1MsT0FBckIsSUFBZ0NMLDJFQUFBLENBQW9CSixRQUFRLENBQUNTLE9BQTdCLENBQWhDO0FBQ0QsR0FGUSxDQUFUO0FBSUEsTUFBSSxDQUFDWixRQUFMLEVBQWUsT0FBTyxJQUFQO0FBRWYsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUF5QixtQkFBYUQsTUFBdEM7QUFBQSwyQkFDRTtBQUFNLFNBQUcsRUFBRUksUUFBWDtBQUFxQixlQUFTLEVBQUVFLFFBQWhDO0FBQUEsZ0JBQ0dQO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9ELENBNUJEOztBQThCQSwrREFBZUQsU0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBRUE7QUFFZSxTQUFTZ0IsT0FBVCxDQUFpQjtBQUFFQztBQUFGLENBQWpCLEVBQTJCO0FBQ3hDLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFzQixxQkFBWSxLQUFsQztBQUFBLDhCQUNFO0FBQUksdUJBQVksV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssdUJBQVksVUFBakI7QUFBQSxnQ0FDRTtBQUFBLGtHQUM4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEOUQsb0JBQzRHLEdBRDVHLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYscUlBRzBELEdBSDFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU1FO0FBQUEsbUdBQytEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUQvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFlRTtBQUFLLGVBQVMsRUFBQyx3QkFBZjtBQUF3QyxxQkFBWSxVQUFwRDtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQywwREFBRDtBQUFBLG9CQUFZQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEzQjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGO0FBQUEsa0JBREY7QUF3QkQ7QUFFTSxNQUFNRyxrQkFBa0IsR0FBR0MseUVBQW9CLEVBQS9DLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDUCxpRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9zc3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaGxqcyBmcm9tICdoaWdobGlnaHQuanMvbGliL2NvcmUnO1xyXG5pbXBvcnQganNvbiBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qc29uJztcclxuXHJcbmltcG9ydCAnaGlnaGxpZ2h0LmpzL3N0eWxlcy9tb25va2FpLXN1YmxpbWUuY3NzJztcclxuXHJcbmNvbnN0IEhpZ2hsaWdodCA9ICh7IGNoaWxkcmVuLCB0ZXN0SWQgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNvZGVOb2RlID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbGFuZ3VhZ2UgPSAnanNvbic7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UobGFuZ3VhZ2UsIGpzb24pO1xyXG4gICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB0aHJvdyBFcnJvcihgQ2Fubm90IHJlZ2lzdGVyIHRoZSBsYW5ndWFnZSAke2xhbmd1YWdlfWApO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvZGVOb2RlICYmIGNvZGVOb2RlLmN1cnJlbnQgJiYgaGxqcy5oaWdobGlnaHRCbG9jayhjb2RlTm9kZS5jdXJyZW50KTtcclxuICB9KTtcclxuXHJcbiAgaWYgKCFpc0xvYWRlZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8cHJlIGNsYXNzTmFtZT1cInJvdW5kZWRcIiBkYXRhLXRlc3RpZD17dGVzdElkfT5cclxuICAgICAgPGNvZGUgcmVmPXtjb2RlTm9kZX0gY2xhc3NOYW1lPXtsYW5ndWFnZX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2NvZGU+XHJcbiAgICA8L3ByZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGlnaGxpZ2h0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoUGFnZUF1dGhSZXF1aXJlZCB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xyXG5cclxuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICcuLi9jb21wb25lbnRzL0hpZ2hsaWdodCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTU1JQYWdlKHsgdXNlciB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiIGRhdGEtdGVzdGlkPVwic3NyXCI+XHJcbiAgICAgICAgPGgxIGRhdGEtdGVzdGlkPVwic3NyLXRpdGxlXCI+U2VydmVyLXNpZGUgUmVuZGVyZWQgUGFnZTwvaDE+XHJcbiAgICAgICAgPGRpdiBkYXRhLXRlc3RpZD1cInNzci10ZXh0XCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgWW91IGNhbiBwcm90ZWN0IGEgc2VydmVyLXNpZGUgcmVuZGVyZWQgcGFnZSBieSB3cmFwcGluZyB0aGUgPGNvZGU+Z2V0U2VydmVyU2lkZVByb3BzPC9jb2RlPiBmdW5jdGlvbiB3aXRoeycgJ31cclxuICAgICAgICAgICAgPGNvZGU+d2l0aFBhZ2VBdXRoUmVxdWlyZWQ8L2NvZGU+LiBPbmx5IGxvZ2dlZCBpbiB1c2VycyB3aWxsIGJlIGFibGUgdG8gYWNjZXNzIGl0LiBJZiB0aGUgdXNlciBpcyBsb2dnZWRcclxuICAgICAgICAgICAgb3V0LCB0aGV5IHdpbGwgYmUgcmVkaXJlY3RlZCB0byB0aGUgbG9naW4gcGFnZSBpbnN0ZWFkLnsnICd9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgUHJvdGVjdGVkIHNlcnZlci1zaWRlIHJlbmRlcmVkIHBhZ2VzIGF1dG9tYXRpY2FsbHkgcmVjZWl2ZSBhIDxjb2RlPnVzZXI8L2NvZGU+IHByb3AgY29udGFpbmluZyB0aGUgdXNlclxyXG4gICAgICAgICAgICBwcm9maWxlLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtYmxvY2stY29udGFpbmVyXCIgZGF0YS10ZXN0aWQ9XCJzc3ItanNvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LWJsb2NrXCI+XHJcbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXV0ZWRcIj5Vc2VyIHByb3A8L2g2PlxyXG4gICAgICAgICAgPEhpZ2hsaWdodD57SlNPTi5zdHJpbmdpZnkodXNlciwgbnVsbCwgMil9PC9IaWdobGlnaHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhQYWdlQXV0aFJlcXVpcmVkKCk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhdXRoMC9uZXh0anMtYXV0aDBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpZ2hsaWdodC5qcy9saWIvY29yZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvanNvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==