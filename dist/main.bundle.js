/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../../node_modules/normalize.css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_plane_banner_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/plane-banner.jpg */ "./src/images/plane-banner.jpg");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_images_plane_banner_jpg__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  font-family: \"Open Sans\", sans-serif;\n  margin: 0 0 7% 0;\n  font-size: 16px;\n  display: grid;\n  grid-template: auto 1fr / auto 1fr; }\n\nh1 {\n  font-size: 2.2em; }\n\nh2 {\n  font-size: 1.8em; }\n\nh3 {\n  font-size: 1.5em; }\n\np {\n  font-size: 1em;\n  margin: 2px; }\n\nmain {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 8fr 1fr; }\n\n@media screen and (max-width: 1400px) {\n  body {\n    margin: 0 0 15% 0; } }\n\n@media screen and (max-width: 1100px) {\n  main {\n    grid-template-columns: minmax(150px, 30%) 1fr; } }\n\n@media screen and (max-width: 425px) {\n  h1 {\n    text-align: center;\n    padding: 0 3%; }\n  main {\n    display: flex;\n    flex-direction: column; } }\n\nheader {\n  grid-column: 1 / 4;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  height: 150px;\n  padding: 0 2%; }\n  header h1,\n  header h2,\n  header .fa-plane {\n    color: white; }\n\n.button, #no-trip-filters {\n  height: 40px;\n  margin: 8% 0;\n  padding: 0 3%;\n  cursor: pointer; }\n  .button:hover, #no-trip-filters:hover {\n    background-color: #90A9CA;\n    transition: 0.5s ease; }\n\n.button-filter {\n  margin: 2% 0 5% 0; }\n\n#no-trip-filters {\n  background-color: #00B0FE;\n  color: white;\n  margin: 2% 0 5% 0; }\n\n.sign-in-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-start; }\n\n.sign-in-form {\n  display: flex;\n  justify-content: flex-end; }\n  .sign-in-form input {\n    border: none;\n    border-radius: 2px;\n    box-shadow: none;\n    margin: 1%; }\n  .sign-in-form .button-signin {\n    font-weight: bold;\n    color: #585A89;\n    background-color: white;\n    height: 32px;\n    cursor: pointer; }\n    .sign-in-form .button-signin:hover {\n      color: #00B0FE;\n      background-color: white; }\n  .sign-in-form .sign-in-label {\n    position: absolute;\n    display: block;\n    overflow: hidden;\n    clip: rect(1px 1px 1px 1px);\n    clip: rect(1px, 1px, 1px, 1px);\n    width: 1px;\n    height: 1px;\n    white-space: nowrap;\n    clip-path: inset(1px); }\n\n.sidebar, .trip-stats {\n  border-right: 1px solid lightgray;\n  padding: 0 10%; }\n  .sidebar .icon, .trip-stats .icon {\n    height: 125px;\n    width: 150px;\n    margin-top: 5%; }\n\n.all-trips {\n  padding: 0 6% 0 3%; }\n  .all-trips h2 {\n    padding-bottom: 3%;\n    border-bottom: 1px solid lightgray; }\n\n.trip-stats {\n  color: black;\n  padding: 8% 5%;\n  margin-top: 15%;\n  border-radius: 2px;\n  background: #90A9CA; }\n  .trip-stats h3 {\n    margin-top: 0; }\n  .trip-stats .stat {\n    font-size: 1.8em;\n    font-weight: bold;\n    margin-top: 10%; }\n\n.hidden {\n  display: none !important; }\n\n.error-message {\n  color: red;\n  font-style: italic; }\n\n#sign-in-error-message {\n  color: white; }\n\n.success {\n  border: 2px solid green; }\n\n.failure {\n  border: 2px solid red; }\n\n@media screen and (max-width: 1400px) {\n  .all-trips {\n    padding-right: 8%; } }\n\n@media screen and (max-width: 1200px) {\n  .sign-in-form {\n    flex-direction: column; }\n    .sign-in-form .button-signin {\n      width: 50%; } }\n\n@media screen and (max-width: 900px) {\n  header {\n    flex-direction: column;\n    justify-content: flex-start;\n    height: 175px; }\n    header h2 {\n      margin-top: 0; }\n  .sign-in-container {\n    align-items: center; }\n  .sign-in-form {\n    flex-direction: row;\n    justify-content: center; }\n    .sign-in-form .button-signin {\n      height: 33px; } }\n\n@media screen and (max-width: 610px) {\n  .trip-stats .stat {\n    font-size: 1.2em; } }\n\n@media screen and (max-width: 570px) {\n  header {\n    height: 230px; }\n    header h1 {\n      text-align: center; } }\n\n@media screen and (max-width: 425px) {\n  header {\n    height: 300px; }\n  .sidebar, .trip-stats {\n    border-right: none; }\n  .icon {\n    display: none; }\n  .all-trips {\n    padding: 0;\n    margin: 0 5%; }\n  .sign-in-form {\n    flex-direction: column;\n    margin-bottom: 5%; }\n    .sign-in-form .button-signin {\n      height: 30px; }\n  .trip-stats {\n    margin: 3% 0; } }\n\n@media screen and (max-width: 375px) {\n  .button-filter {\n    margin: 2% 0 2% 0; } }\n\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-column-gap: 4%;\n  grid-row-gap: 7%; }\n  .card-grid h3 {\n    font-size: 1.2em;\n    margin: 3% 0 5% 0; }\n\n.card {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  height: 100%;\n  width: 100%;\n  border: 2px solid #585A89;\n  border-radius: 2px;\n  margin-bottom: 5px;\n  padding: 5%; }\n  .card img {\n    height: 150px;\n    width: 100%;\n    margin-bottom: 10%; }\n  .card .card-destination {\n    height: 12%; }\n  .card .pending {\n    color: red; }\n\n@media screen and (max-width: 1470px) {\n  .card-grid {\n    grid-template-columns: repeat(3, 1fr);\n    grid-column-gap: 6%;\n    grid-row-gap: 5%; } }\n\n@media screen and (max-width: 1200px) {\n  .card-grid {\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 8%;\n    grid-row-gap: 3%; } }\n\n@media screen and (max-width: 1100px) {\n  .card-grid {\n    grid-row-gap: 6%; } }\n\n@media screen and (max-width: 750px) {\n  .card-grid {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 0 3% 0 6%; } }\n\n.trip-form {\n  display: flex;\n  flex-direction: column; }\n\nlabel {\n  margin: 5% 0 2% 0;\n  font-weight: bold; }\n\ninput,\n#trip-destination {\n  height: 30px; }\n\n.button-quote, .button-filter, .button-submit {\n  border: none;\n  background-color: #585A89;\n  border-radius: 2px;\n  font-size: 1em;\n  font-weight: bold;\n  color: white; }\n\n.button-submit {\n  color: white;\n  background-color: #00B0FE; }\n\n#trip-request-message {\n  margin-bottom: 10%; }\n", "",{"version":3,"sources":["webpack://./src/css/_base.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_styles.scss","webpack://./src/css/_trip-cards.scss","webpack://./src/css/_trip-form.scss"],"names":[],"mappings":"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","sourcesContent":["body {\n  font-family: $primary-font;\n  margin: 0 0 7% 0;\n  font-size: 16px;\n  display: grid;\n  grid-template: auto 1fr / auto 1fr;\n}\n\nh1 {\n  font-size: 2.2em;\n}\n\nh2 {\n  font-size: 1.8em;\n}\n\nh3 {\n  font-size: 1.5em;\n}\n\np {\n  font-size: 1em;\n  margin: 2px;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 8fr 1fr;\n}\n\n@media screen and (max-width: 1400px) {\n  body {\n    margin: 0 0 15% 0;\n  }\n}\n\n@media screen and (max-width: 1100px) {\n  main {\n    grid-template-columns: minmax(150px, 30%) 1fr;\n  }\n}\n\n@media screen and (max-width: 425px) {\n  h1 {\n    text-align: center;\n    padding: 0 3%;\n  }\n\n  main {\n    display: flex;\n    flex-direction: column;\n  }\n}\n","// FONTS\n$primary-font: \"Open Sans\", sans-serif;\n\n// COLORS\n$blue: #00B0FE;\n$light-gray: #90A9CA;\n$dark-gray: #585A89;\n\n// BORDERS\n$section-border: 1px solid lightgray;\n\n// BASIC ANIMATIONS\n$transition: .5s ease;\n","header {\n  grid-column: 1 / 4;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(\"../images/plane-banner.jpg\");\n  background-size: cover;\n  background-position: center;\n  height: 150px;\n  padding: 0 2%;\n\n  h1,\n  h2,\n  .fa-plane {\n    color: white;\n  }\n}\n\n.button {\n  height: 40px;\n  margin: 8% 0;\n  padding: 0 3%;\n  cursor: pointer;\n\n  &:hover {\n    background-color: $light-gray;\n    transition: $transition;\n  }\n}\n\n.button-filter {\n  @extend .button-quote;\n  margin: 2% 0 5% 0;\n}\n\n#no-trip-filters {\n  @extend .button;\n  background-color: $blue;\n  color: white;\n  margin: 2% 0 5% 0;\n}\n\n.sign-in-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-start;\n}\n\n.sign-in-form {\n  display: flex;\n  justify-content: flex-end;\n\n  input {\n    border: none;\n    border-radius: 2px;\n    box-shadow: none;\n    margin: 1%;\n  }\n\n  .button-signin {\n    font-weight: bold;\n    color: $dark-gray;\n    background-color: white;\n    height: 32px;\n    cursor: pointer;\n\n    &:hover {\n      color: $blue;\n      background-color: white;\n    }\n  }\n\n  .sign-in-label {\n    position: absolute;\n    display: block;\n    overflow: hidden;\n    clip: rect(1px 1px 1px 1px);\n    clip: rect(1px, 1px, 1px, 1px);\n    width: 1px;\n    height: 1px;\n    white-space: nowrap;\n    clip-path: inset(1px);\n  }\n}\n\n.sidebar {\n  border-right: $section-border;\n  padding: 0 10%;\n\n  .icon {\n    height: 125px;\n    width: 150px;\n    margin-top: 5%;\n  }\n}\n\n.all-trips {\n  padding: 0 6% 0 3%;\n\n  h2 {\n    padding-bottom: 3%;\n    border-bottom: $section-border;\n  }\n}\n\n.trip-stats {\n  @extend .sidebar;\n  color: black;\n  padding: 8% 5%;\n  margin-top: 15%;\n  border-radius: 2px;\n  background: $light-gray;\n\n  h3 {\n    margin-top: 0;\n  }\n\n  .stat {\n    font-size: 1.8em;\n    font-weight: bold;\n    margin-top: 10%;\n  }\n}\n\n.hidden {\n  display: none !important;\n}\n\n.error-message {\n  color: red;\n  font-style: italic;\n}\n\n#sign-in-error-message {\n  color: white;\n}\n\n.success {\n  border: 2px solid green;\n}\n\n.failure {\n  border: 2px solid red;\n}\n\n@media screen and (max-width: 1400px) {\n  .all-trips {\n    padding-right: 8%;\n  }\n}\n\n@media screen and (max-width: 1200px) {\n  .sign-in-form {\n    flex-direction: column;\n\n    .button-signin {\n      width: 50%;\n    }\n  }\n}\n\n@media screen and (max-width: 900px) {\n  header {\n    flex-direction: column;\n    justify-content: flex-start;\n    height: 175px;\n\n    h2 {\n      margin-top: 0;\n    }\n  }\n\n  .sign-in-container {\n    align-items: center;\n  }\n\n  .sign-in-form {\n    flex-direction: row;\n    justify-content: center;\n\n    .button-signin {\n      height: 33px;\n    }\n  }\n}\n\n@media screen and (max-width: 610px) {\n  .trip-stats .stat {\n    font-size: 1.2em;\n  }\n}\n\n@media screen and (max-width: 570px) {\n  header {\n    height: 230px;\n\n    h1 {\n      text-align: center;\n    }\n  }\n}\n\n@media screen and (max-width: 425px) {\n  header {\n    height: 300px;\n  }\n\n  .sidebar {\n    border-right: none;\n  }\n\n  .icon {\n    display: none;\n  }\n\n  .all-trips {\n    padding: 0;\n    margin: 0 5%;\n  }\n\n  .sign-in-form {\n    flex-direction: column;\n    margin-bottom: 5%;\n\n    .button-signin {\n      height: 30px;\n    }\n  }\n\n  .trip-stats {\n    margin: 3% 0;\n  }\n}\n\n@media screen and (max-width: 375px) {\n  .button-filter {\n    margin: 2% 0 2% 0;\n  }\n}\n",".card-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-column-gap: 4%;\n  grid-row-gap: 7%;\n\n  h3 {\n    font-size: 1.2em;\n    margin: 3% 0 5% 0;\n  }\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  height: 100%;\n  width: 100%;\n  border: 2px solid $dark-gray;\n  border-radius: 2px;\n  margin-bottom: 5px;\n  padding: 5%;\n\n  img {\n    height: 150px;\n    width: 100%;\n    margin-bottom: 10%;\n  }\n\n  .card-destination {\n    height: 12%;\n  }\n\n  .pending {\n    color: red;\n  }\n}\n\n@media screen and (max-width: 1470px) {\n  .card-grid {\n    grid-template-columns: repeat(3, 1fr);\n    grid-column-gap: 6%;\n    grid-row-gap: 5%;\n  }\n}\n\n@media screen and (max-width: 1200px) {\n  .card-grid {\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 8%;\n    grid-row-gap: 3%;\n  }\n}\n\n@media screen and (max-width: 1100px) {\n  .card-grid {\n    grid-row-gap: 6%;\n  }\n}\n\n@media screen and (max-width: 750px) {\n  .card-grid {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 0 3% 0 6%;\n  }\n}\n",".trip-form {\n  display: flex;\n  flex-direction: column;\n}\n\nlabel {\n  margin: 5% 0 2% 0;\n  font-weight: bold;\n}\n\ninput,\n#trip-destination {\n  height: 30px;\n}\n\n.button-quote {\n  border: none;\n  background-color: $dark-gray;\n  border-radius: 2px;\n  font-size: 1em;\n  font-weight: bold;\n  color: white;\n}\n\n.button-submit {\n  @extend .button-quote;\n  color: white;\n  background-color: $blue;\n}\n\n#trip-request-message {\n  margin-bottom: 10%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Destination.js":
/*!****************************!*\
  !*** ./src/Destination.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Destination {
  constructor(location) {
    this.id = location.id
    this.name = location.destination
    this.lodging = location.estimatedLodgingCostPerDay
    this.flights = location.estimatedFlightCostPerPerson
    this.image = location.image
    this.alt = location.alt || 'beautiful travel destination'
  }
}

module.exports = Destination


/***/ }),

/***/ "./src/Traveler.js":
/*!*************************!*\
  !*** ./src/Traveler.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Traveler {
  constructor(traveler) {
    this.id = traveler.id
    this.name = traveler.name
    this.type = traveler.travelerType
    this.trips = []
  }

  addMatchingTrips(newTrip) {
    if ((newTrip.userId === this.id) && (!this.trips.includes(newTrip.id))) {
      this.trips.push(newTrip)
    }
  }

  addMatchingDestinations(newDestination) {
    this.trips.forEach(trip => {
      if (trip.destinationId === newDestination.id) {
        trip.destinationDetails = newDestination
      }
    })
  }

  formatCost(number) {
    return number.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  getCurrentYearApprovedTrips() {
    const today = Date.now()
    const currentYear = new Date(today).getFullYear()

    return this.trips.filter(trip => {
      return trip.date.includes(currentYear) && (trip.status === 'approved')
    })
  }

  getCurrentYearSpend() {
    let tripSpend = 0
    let totalSpent = 0
    const tripsThisYear = this.getCurrentYearApprovedTrips()

    tripsThisYear.forEach(trip => {
      tripSpend += trip.duration * trip.destinationDetails.lodging
      tripSpend += trip.travelers * trip.destinationDetails.flights
    })

    totalSpent = tripSpend + (tripSpend * .1)

    return this.formatCost(totalSpent)
  }

  getDaysTraveled() {
    const approved = this.trips.filter(trip => trip.status === 'approved')
    const totalDays = approved.reduce((total, trip) => {
      total += trip.duration
      return total
    }, 0)

    return totalDays
  }

}

module.exports = Traveler


/***/ }),

/***/ "./src/Trip.js":
/*!*********************!*\
  !*** ./src/Trip.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Trip {
  constructor(trip) {
    this.id = trip.id
    this.userId = trip.userID
    this.destinationId = trip.destinationID
    this.travelers = trip.travelers
    this.date = trip.date
    this.duration = trip.duration
    this.status = trip.status
    this.suggestedActivities = trip.suggestedActivities
  }
}

module.exports = Trip


/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const signInForm = document.querySelector('.sign-in-form')
const usernameInput = document.querySelector('#username-field')
const passwordInput = document.querySelector('#password-field')
const signInErrorMessage = document.querySelector('#sign-in-error-message')
const welcomeText = document.querySelector('#welcome-text')
const sidebar = document.querySelector('.sidebar')
const allTrips = document.querySelector('.all-trips')
const cardGrid = document.querySelector('.card-grid')
const cardTemplate = document.querySelector('.template-card')
const dateInput = document.querySelector('#trip-start')
const durationInput = document.querySelector('#trip-duration')
const travelersInput = document.querySelector('#trip-travelers')
const destinationDropdown = document.querySelector('#trip-destination')
const tripCost = document.querySelector('#trip-cost')
const buttonSubmit = document.querySelector('#button-submit')
const totalSpent = document.querySelector('#total-spent')
const totalSpentMessage = document.querySelector('#total-spent-message')
const tripsTaken = document.querySelector('#trips-taken')
const daysTraveled = document.querySelector('#days-traveled')
const tripErrorMessage = document.querySelector('#trip-error-message')
const requestMessage = document.querySelector('#trip-request-message')

const domUpdates = {

  validateUsername(letters, numbers) {
    if ((letters !== 'traveler') ||
      (numbers === undefined) ||
      (numbers === '0') ||
      (numbers === '00') ||
      (parseInt(numbers) > 50)) {
      usernameInput.className = 'failure'
      signInErrorMessage.innerText = `Username or password does not match.`
    } else {
      usernameInput.className = 'success'
    }
  },

  validatePassword(passwordValue) {
    if (passwordValue !== 'travel2020') {
      passwordInput.className = 'failure'
      signInErrorMessage.innerText = `Username or password does not match.`
    } else {
      passwordInput.className = 'success'
    }
  },

  addWelcomeMessage(firstName) {
    welcomeText.classList.remove('hidden')
    sidebar.classList.remove('hidden')
    allTrips.classList.remove('hidden')
    signInForm.classList.add('hidden')
    welcomeText.innerText = `Welcome, ${firstName}!`
  },

  addDestinationsToDropdown(destination) {
    const newOption = document.createElement('option')
    newOption.innerText = destination.name
    newOption.value = destination.name
    destinationDropdown.appendChild(newOption)
  },

  addCardToDom(trip) {
    const newTripCard = cardTemplate.content.cloneNode(true)
    newTripCard.querySelector('h3.card-destination').innerText = trip.destinationDetails.name
    newTripCard.querySelector('img.card-image').src = trip.destinationDetails.image
    newTripCard.querySelector('img.card-image').alt = trip.destinationDetails.alt
    newTripCard.querySelector('p.card-travelers').innerHTML = `<strong>Travelers:</strong> ${trip.travelers}`
    newTripCard.querySelector('p.card-date').innerHTML = `<strong>Start Date:</strong> ${trip.date}`
    newTripCard.querySelector('p.card-duration').innerHTML = `<strong>Duration:</strong> ${trip.duration} days`
    newTripCard.querySelector('p.card-lodging').innerHTML = `<strong>Lodging:</strong> $${trip.destinationDetails.lodging} per night`
    newTripCard.querySelector('p.card-flights').innerHTML = `<strong>Flights:</strong> $${trip.destinationDetails.flights} per person`
    newTripCard.querySelector('p.card-status').innerHTML = `<strong>Status:</strong> ${trip.status}`

    if (trip.status === 'pending') {
      newTripCard.querySelector('article').classList.add('pending')
    } else if (trip.status === 'approved') {
      newTripCard.querySelector('article').classList.add('approved')
    }

    cardGrid.appendChild(newTripCard)
  },

  filterTripsInDom(class1, class2) {
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
      if (card.classList.contains(class1)) {
        card.classList.add('hidden')
      } else if (card.classList.contains(class2)) {
        card.classList.remove('hidden')
      }
    })
  },

  showAllTrips() {
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
      if (card.classList.contains('hidden')) {
        card.classList.remove('hidden')
      }
    })
  },

  showStats(currentTraveler) {
    tripsTaken.innerText = `${currentTraveler.getCurrentYearApprovedTrips().length}`
    daysTraveled.innerText = `${currentTraveler.getDaysTraveled()}`
    totalSpent.innerText = `$${currentTraveler.getCurrentYearSpend()}`

    if (currentTraveler.getCurrentYearSpend() === '0.00') {
      totalSpentMessage.innerText = 'Total spent on trips so far this year. Time to book a new trip!'
    } else {
      totalSpentMessage.innerText = `Total spent on trips so far this year. You're quite the traveler!`
    }
  },

  validateTripInputs() {
    const dateValue = dateInput.value.trim()
    const durationValue = durationInput.value.trim()
    const travelersValue = travelersInput.value.trim()
    const destValue = destinationDropdown.value.trim()

    const currentDate = new Date()
    const inputDate = new Date(dateValue)

    if ((dateValue === '') || (inputDate < currentDate)) {
      dateInput.className = 'failure'
      this.setTripErrors()
    } else {
      dateInput.className = 'success'
    }

    if ((durationValue === '') || (durationValue === '0')) {
      durationInput.className = 'failure'
      this.setTripErrors()
    } else {
      durationInput.className = 'success'
    }

    if ((travelersValue === '') || (travelersValue === '0')) {
      travelersInput.className = 'failure'
      this.setTripErrors()
    } else {
      travelersInput.className = 'success'
    }

    if (destValue === '') {
      destinationDropdown.className = 'failure'
      this.setTripErrors()
    } else {
      destinationDropdown.className = 'success'
    }
  },

  setTripErrors() {
    tripErrorMessage.innerText = 'Be sure to fill out all fields above and check to make sure the date is in the future before submitting.'
    tripCost.classList.add('hidden')
    buttonSubmit.classList.add('hidden')
  },

  removeTripValidation() {
    dateInput.classList.remove('success')
    durationInput.classList.remove('success')
    travelersInput.classList.remove('success')
    destinationDropdown.classList.remove('success')
  },

  addTripQuoteToDom(costEstimate) {
    tripCost.classList.remove('hidden')
    tripCost.innerHTML = `<strong>Estimated Cost:</strong> $${costEstimate}`
    buttonSubmit.classList.remove('hidden')
  },

  resetForm() {
    tripCost.classList.add('hidden')
    buttonSubmit.classList.add('hidden')
    dateInput.value = ''
    durationInput.value = ''
    travelersInput.value = ''
    destinationDropdown.value = ''
    setTimeout(function() {
      requestMessage.classList.add('hidden')
    }, 3000)
  },

  clearTripCards() {
    cardGrid.querySelectorAll('article').forEach(article => article.remove())
  }
}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);


/***/ }),

/***/ "./src/fetchApi.js":
/*!*************************!*\
  !*** ./src/fetchApi.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const tripErrorMessage = document.querySelector('#trip-error-message')

const fetchApi = {
  getTravelerData() {
    return fetch('http://localhost:3001/api/v1/travelers')
      .then(response => response.json())
  },

  getSingleTraveler(travelerId) {
    return fetch(`http://localhost:3001/api/v1/travelers/${travelerId}`)
      .then(response => response.json())
  },

  getTripData() {
    return fetch('http://localhost:3001/api/v1/trips')
      .then(response => response.json())
  },

  getDestinationData() {
    return fetch('http://localhost:3001/api/v1/destinations')
      .then(response => response.json())
  },

  postTripRequest(tripRequest) {
    const postFormat = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tripRequest)
    }

    return fetch('http://localhost:3001/api/v1/trips', postFormat)
      .then(response => {
        if (!response.ok) {
          tripErrorMessage.innerText = 'Unable to request trip. Please try again later.'
        }
        return response.json()
      })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (fetchApi);


/***/ }),

/***/ "./src/images/plane-banner.jpg":
/*!*************************************!*\
  !*** ./src/images/plane-banner.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/plane-banner.jpg");

/***/ }),

/***/ "./src/images/undraw_travel_mode_7sf4.svg":
/*!************************************************!*\
  !*** ./src/images/undraw_travel_mode_7sf4.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/undraw_travel_mode_7sf4.svg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ "./src/css/index.scss");
/* harmony import */ var _images_plane_banner_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/plane-banner.jpg */ "./src/images/plane-banner.jpg");
/* harmony import */ var _images_undraw_travel_mode_7sf4_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/undraw_travel_mode_7sf4.svg */ "./src/images/undraw_travel_mode_7sf4.svg");
/* harmony import */ var _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domUpdates.js */ "./src/domUpdates.js");
/* harmony import */ var _fetchApi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetchApi.js */ "./src/fetchApi.js");
/* harmony import */ var _Traveler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Traveler.js */ "./src/Traveler.js");
/* harmony import */ var _Traveler_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Traveler_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Destination_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Destination.js */ "./src/Destination.js");
/* harmony import */ var _Destination_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Destination_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Trip_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Trip.js */ "./src/Trip.js");
/* harmony import */ var _Trip_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Trip_js__WEBPACK_IMPORTED_MODULE_7__);









const usernameInput = document.querySelector('#username-field')
const passwordInput = document.querySelector('#password-field')
const buttonSignIn = document.querySelector('#login-form-submit')
const signInErrorMessage = document.querySelector('#sign-in-error-message')
const dateInput = document.querySelector('#trip-start')
const durationInput = document.querySelector('#trip-duration')
const travelersInput = document.querySelector('#trip-travelers')
const destinationDropdown = document.querySelector('#trip-destination')
const buttonQuote = document.querySelector('#button-quote')
const buttonSubmit = document.querySelector('#button-submit')
const tripErrorMessage = document.querySelector('#trip-error-message')
const requestMessage = document.querySelector('#trip-request-message')
const noTripFilters = document.querySelector('#no-trip-filters')
const approvedTrips = document.querySelector('#approved-trips')
const pendingTrips = document.querySelector('#pending-trips')

buttonSignIn.addEventListener('click', evaluateSignInForm)
buttonQuote.addEventListener('click', evaluateTripForm)
buttonSubmit.addEventListener('click', requestTrip)
noTripFilters.addEventListener('click', function() {
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].showAllTrips()
})
approvedTrips.addEventListener('click', function() {
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].filterTripsInDom('pending', 'approved')
})
pendingTrips.addEventListener('click', function() {
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].filterTripsInDom('approved', 'pending')
})

const allDestinations = []
const allTrips = []
let currentTraveler

const fetchedTripData = _fetchApi_js__WEBPACK_IMPORTED_MODULE_4__["default"].getTripData()
const fetchedDestinationData = _fetchApi_js__WEBPACK_IMPORTED_MODULE_4__["default"].getDestinationData()

function evaluateSignInForm(event) {
  event.preventDefault()
  const usernameValue = usernameInput.value.trim()
  const passwordValue = passwordInput.value.trim()
  const splitName = usernameValue.split('')
  const letters = splitName.slice(0, 8).join('')
  const numbers = splitName.slice(8, 10).join('')
  const currentUserId = parseInt(numbers)

  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].validateUsername(letters, numbers)
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].validatePassword(passwordValue)

  if (usernameInput.classList.contains('success') &&
    passwordInput.classList.contains('success')) {
    signInErrorMessage.innerText = ''
    loadDashboard(currentUserId)
  }
}

function loadDashboard(currentUserId) {
  const fetchedSingleTraveler = _fetchApi_js__WEBPACK_IMPORTED_MODULE_4__["default"].getSingleTraveler(currentUserId)

  Promise.all([fetchedSingleTraveler, fetchedTripData, fetchedDestinationData])
    .then(values => {
      generateTraveler(values[0])
      findTravelerTrips(values[1])
      generateTripDestinations(values[2])
      createTripCards()
    })
    .catch(handleServerMessages)
}

function handleServerMessages(error) {
  signInErrorMessage.innerText = `Something went wrong. Please refresh the page or try again later.`
  console.log(error)
}

function generateTraveler(travelerData) {
  currentTraveler = new _Traveler_js__WEBPACK_IMPORTED_MODULE_5___default.a(travelerData)
  let firstName = currentTraveler.name.split(' ')[0]
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].addWelcomeMessage(firstName)
}

function findTravelerTrips(tripData) {
  tripData.trips.forEach(trip => {
    let newTrip = new _Trip_js__WEBPACK_IMPORTED_MODULE_7___default.a(trip)
    allTrips.push(trip)
    currentTraveler.addMatchingTrips(newTrip)
  })
}

function generateTripDestinations(destinationData) {
  alphabetizeDestinations(destinationData)
  destinationData.destinations.forEach(location => {
    let newDestination = new _Destination_js__WEBPACK_IMPORTED_MODULE_6___default.a(location)
    allDestinations.push(newDestination)
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].addDestinationsToDropdown(newDestination)
    currentTraveler.addMatchingDestinations(newDestination)
  })
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].showStats(currentTraveler)
}

function alphabetizeDestinations(destinationData) {
  destinationData.destinations.sort((a, b) => {
    return a.destination.localeCompare(b.destination)
  })
}

function sortTripsByDate() {
  return currentTraveler.trips.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })
}

function createTripCards() {
  sortTripsByDate()
  currentTraveler.trips.forEach(trip => {
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].addCardToDom(trip)
  })
}

function findDestination() {
  return allDestinations.find(location => {
    return location.name === destinationDropdown.value
  })
}

function evaluateTripForm(event) {
  event.preventDefault()

  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].validateTripInputs()

  if (dateInput.classList.contains('success') &&
    durationInput.classList.contains('success') &&
    travelersInput.classList.contains('success') &&
    destinationDropdown.classList.contains('success')) {
    quoteTrip()
    tripErrorMessage.innerText = ''
  }
}

function quoteTrip() {
  let tripEstimate = 0
  let totalEstimate = 0
  const matchingDest = findDestination()

  tripEstimate += durationInput.value * matchingDest.lodging
  tripEstimate += travelersInput.value * matchingDest.flights

  totalEstimate = currentTraveler.formatCost(tripEstimate + (tripEstimate * .1))

  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].addTripQuoteToDom(totalEstimate)
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeTripValidation()
}

function formatDate(dateValue) {
  return dateValue.replace(/-/g, '/')
}

function requestTrip(event) {
  event.preventDefault()
  const matchingDest = findDestination()

  const tripRequest = {
    id: Date.now(),
    userID: currentTraveler.id,
    destinationID: matchingDest.id,
    travelers: parseInt(travelersInput.value),
    date: formatDate(dateInput.value),
    duration: parseInt(durationInput.value),
    status: 'pending',
    suggestedActivities: []
  }

  _fetchApi_js__WEBPACK_IMPORTED_MODULE_4__["default"].postTripRequest(tripRequest)
    .then(() => {
      const newTrip = new _Trip_js__WEBPACK_IMPORTED_MODULE_7___default.a(tripRequest)
      currentTraveler.trips.push(newTrip)
      currentTraveler.addMatchingDestinations(matchingDest)
      _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearTripCards()
      createTripCards()
      requestMessage.classList.remove('hidden')
      _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__["default"].resetForm()
    }).catch(handleServerMessages)
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVzdGluYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyYXZlbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9UcmlwLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvaW5kZXguc2Nzcz83YWIxIiwid2VicGFjazovLy8uL3NyYy9kb21VcGRhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9mZXRjaEFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3BsYW5lLWJhbm5lci5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy91bmRyYXdfdHJhdmVsX21vZGVfN3NmNC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtR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O0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDNVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSwwREFBMEQsRUFBRTtBQUM1RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FB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LDBCQUEwQiwrQ0FBSTtBQUM5QjtBQUNBO0FBQ0EsTUFBTSxzREFBVTtBQUNoQjtBQUNBO0FBQ0EsTUFBTSxzREFBVTtBQUNoQixLQUFLO0FBQ0wiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzNDOztBQUVBOztFQUVFOztBQUVGOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0U7O0FBRUY7OztFQUdFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtRQUNRLE1BQU07RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1NBQ1MsTUFBTTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O0VBS0U7O0FBRUY7RUFDRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLFVBQVUsRUFBRSxNQUFNO0VBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDN0I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9pbWFnZXMvcGxhbmUtYmFubmVyLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwIDAgNyUgMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciAvIGF1dG8gMWZyOyB9XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyLjJlbTsgfVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS44ZW07IH1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDEuNWVtOyB9XFxuXFxucCB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIG1hcmdpbjogMnB4OyB9XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4ZnIgMWZyOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgbWFyZ2luOiAwIDAgMTUlIDA7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xcbiAgbWFpbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE1MHB4LCAzMCUpIDFmcjsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcXG4gIGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDMlOyB9XFxuICBtYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfSB9XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC40KSwgcmdiYSgwLCAwLCAwLCAwLjQpKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgcGFkZGluZzogMCAyJTsgfVxcbiAgaGVhZGVyIGgxLFxcbiAgaGVhZGVyIGgyLFxcbiAgaGVhZGVyIC5mYS1wbGFuZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcblxcbi5idXR0b24sICNuby10cmlwLWZpbHRlcnMge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luOiA4JSAwO1xcbiAgcGFkZGluZzogMCAzJTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLmJ1dHRvbjpob3ZlciwgI25vLXRyaXAtZmlsdGVyczpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MEE5Q0E7XFxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTsgfVxcblxcbi5idXR0b24tZmlsdGVyIHtcXG4gIG1hcmdpbjogMiUgMCA1JSAwOyB9XFxuXFxuI25vLXRyaXAtZmlsdGVycyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCMEZFO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAyJSAwIDUlIDA7IH1cXG5cXG4uc2lnbi1pbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cXG5cXG4uc2lnbi1pbi1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XFxuICAuc2lnbi1pbi1mb3JtIGlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIG1hcmdpbjogMSU7IH1cXG4gIC5zaWduLWluLWZvcm0gLmJ1dHRvbi1zaWduaW4ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICM1ODVBODk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAuc2lnbi1pbi1mb3JtIC5idXR0b24tc2lnbmluOmhvdmVyIHtcXG4gICAgICBjb2xvcjogIzAwQjBGRTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcbiAgLnNpZ24taW4tZm9ybSAuc2lnbi1pbi1sYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGNsaXA6IHJlY3QoMXB4IDFweCAxcHggMXB4KTtcXG4gICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgY2xpcC1wYXRoOiBpbnNldCgxcHgpOyB9XFxuXFxuLnNpZGViYXIsIC50cmlwLXN0YXRzIHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIHBhZGRpbmc6IDAgMTAlOyB9XFxuICAuc2lkZWJhciAuaWNvbiwgLnRyaXAtc3RhdHMgLmljb24ge1xcbiAgICBoZWlnaHQ6IDEyNXB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDUlOyB9XFxuXFxuLmFsbC10cmlwcyB7XFxuICBwYWRkaW5nOiAwIDYlIDAgMyU7IH1cXG4gIC5hbGwtdHJpcHMgaDIge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMyU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7IH1cXG5cXG4udHJpcC1zdGF0cyB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiA4JSA1JTtcXG4gIG1hcmdpbi10b3A6IDE1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQ6ICM5MEE5Q0E7IH1cXG4gIC50cmlwLXN0YXRzIGgzIHtcXG4gICAgbWFyZ2luLXRvcDogMDsgfVxcbiAgLnRyaXAtc3RhdHMgLnN0YXQge1xcbiAgICBmb250LXNpemU6IDEuOGVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogMTAlOyB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG5cXG4uZXJyb3ItbWVzc2FnZSB7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuXFxuI3NpZ24taW4tZXJyb3ItbWVzc2FnZSB7XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cXG4uc3VjY2VzcyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjsgfVxcblxcbi5mYWlsdXJlIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xcbiAgLmFsbC10cmlwcyB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDglOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5zaWduLWluLWZvcm0ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAgIC5zaWduLWluLWZvcm0gLmJ1dHRvbi1zaWduaW4ge1xcbiAgICAgIHdpZHRoOiA1MCU7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGhlaWdodDogMTc1cHg7IH1cXG4gICAgaGVhZGVyIGgyIHtcXG4gICAgICBtYXJnaW4tdG9wOiAwOyB9XFxuICAuc2lnbi1pbi1jb250YWluZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAuc2lnbi1pbi1mb3JtIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gICAgLnNpZ24taW4tZm9ybSAuYnV0dG9uLXNpZ25pbiB7XFxuICAgICAgaGVpZ2h0OiAzM3B4OyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLnRyaXAtc3RhdHMgLnN0YXQge1xcbiAgICBmb250LXNpemU6IDEuMmVtOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzBweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAyMzBweDsgfVxcbiAgICBoZWFkZXIgaDEge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIGhlaWdodDogMzAwcHg7IH1cXG4gIC5zaWRlYmFyLCAudHJpcC1zdGF0cyB7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTsgfVxcbiAgLmljb24ge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAuYWxsLXRyaXBzIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwIDUlOyB9XFxuICAuc2lnbi1pbi1mb3JtIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7IH1cXG4gICAgLnNpZ24taW4tZm9ybSAuYnV0dG9uLXNpZ25pbiB7XFxuICAgICAgaGVpZ2h0OiAzMHB4OyB9XFxuICAudHJpcC1zdGF0cyB7XFxuICAgIG1hcmdpbjogMyUgMDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcXG4gIC5idXR0b24tZmlsdGVyIHtcXG4gICAgbWFyZ2luOiAyJSAwIDIlIDA7IH0gfVxcblxcbi5jYXJkLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBncmlkLWNvbHVtbi1nYXA6IDQlO1xcbiAgZ3JpZC1yb3ctZ2FwOiA3JTsgfVxcbiAgLmNhcmQtZ3JpZCBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIG1hcmdpbjogMyUgMCA1JSAwOyB9XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1ODVBODk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBwYWRkaW5nOiA1JTsgfVxcbiAgLmNhcmQgaW1nIHtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwJTsgfVxcbiAgLmNhcmQgLmNhcmQtZGVzdGluYXRpb24ge1xcbiAgICBoZWlnaHQ6IDEyJTsgfVxcbiAgLmNhcmQgLnBlbmRpbmcge1xcbiAgICBjb2xvcjogcmVkOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ3MHB4KSB7XFxuICAuY2FyZC1ncmlkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiA2JTtcXG4gICAgZ3JpZC1yb3ctZ2FwOiA1JTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAuY2FyZC1ncmlkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLWNvbHVtbi1nYXA6IDglO1xcbiAgICBncmlkLXJvdy1nYXA6IDMlOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG4gIC5jYXJkLWdyaWQge1xcbiAgICBncmlkLXJvdy1nYXA6IDYlOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgLmNhcmQtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMyUgMCA2JTsgfSB9XFxuXFxuLnRyaXAtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbmxhYmVsIHtcXG4gIG1hcmdpbjogNSUgMCAyJSAwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG5pbnB1dCxcXG4jdHJpcC1kZXN0aW5hdGlvbiB7XFxuICBoZWlnaHQ6IDMwcHg7IH1cXG5cXG4uYnV0dG9uLXF1b3RlLCAuYnV0dG9uLWZpbHRlciwgLmJ1dHRvbi1zdWJtaXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4NUE4OTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cXG4uYnV0dG9uLXN1Ym1pdCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCMEZFOyB9XFxuXFxuI3RyaXAtcmVxdWVzdC1tZXNzYWdlIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwJTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL190cmlwLWNhcmRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3RyaXAtZm9ybS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0NDQW9DO0VEQ3BDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLGdCQUFnQixFQUFB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QUFrQixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XFxuICBtYXJnaW46IDAgMCA3JSAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IGF1dG8gMWZyIC8gYXV0byAxZnI7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMi4yZW07XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbnAge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBtYXJnaW46IDJweDtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4ZnIgMWZyO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBtYXJnaW46IDAgMCAxNSUgMDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XFxuICBtYWluIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTUwcHgsIDMwJSkgMWZyO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xcbiAgaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMyU7XFxuICB9XFxuXFxuICBtYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXCIsXCIvLyBGT05UU1xcbiRwcmltYXJ5LWZvbnQ6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcblxcbi8vIENPTE9SU1xcbiRibHVlOiAjMDBCMEZFO1xcbiRsaWdodC1ncmF5OiAjOTBBOUNBO1xcbiRkYXJrLWdyYXk6ICM1ODVBODk7XFxuXFxuLy8gQk9SREVSU1xcbiRzZWN0aW9uLWJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG5cXG4vLyBCQVNJQyBBTklNQVRJT05TXFxuJHRyYW5zaXRpb246IC41cyBlYXNlO1xcblwiLFwiaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC40KSwgcmdiYSgwLDAsMCwwLjQpKSx1cmwoXFxcIi4uL2ltYWdlcy9wbGFuZS1iYW5uZXIuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIHBhZGRpbmc6IDAgMiU7XFxuXFxuICBoMSxcXG4gIGgyLFxcbiAgLmZhLXBsYW5lIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbjogOCUgMDtcXG4gIHBhZGRpbmc6IDAgMyU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXk7XFxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgfVxcbn1cXG5cXG4uYnV0dG9uLWZpbHRlciB7XFxuICBAZXh0ZW5kIC5idXR0b24tcXVvdGU7XFxuICBtYXJnaW46IDIlIDAgNSUgMDtcXG59XFxuXFxuI25vLXRyaXAtZmlsdGVycyB7XFxuICBAZXh0ZW5kIC5idXR0b247XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMiUgMCA1JSAwO1xcbn1cXG5cXG4uc2lnbi1pbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5zaWduLWluLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFxuICBpbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBtYXJnaW46IDElO1xcbiAgfVxcblxcbiAgLmJ1dHRvbi1zaWduaW4ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICRkYXJrLWdyYXk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgY29sb3I6ICRibHVlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuICB9XFxuXFxuICAuc2lnbi1pbi1sYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGNsaXA6IHJlY3QoMXB4IDFweCAxcHggMXB4KTtcXG4gICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgY2xpcC1wYXRoOiBpbnNldCgxcHgpO1xcbiAgfVxcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBib3JkZXItcmlnaHQ6ICRzZWN0aW9uLWJvcmRlcjtcXG4gIHBhZGRpbmc6IDAgMTAlO1xcblxcbiAgLmljb24ge1xcbiAgICBoZWlnaHQ6IDEyNXB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgfVxcbn1cXG5cXG4uYWxsLXRyaXBzIHtcXG4gIHBhZGRpbmc6IDAgNiUgMCAzJTtcXG5cXG4gIGgyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xcbiAgICBib3JkZXItYm90dG9tOiAkc2VjdGlvbi1ib3JkZXI7XFxuICB9XFxufVxcblxcbi50cmlwLXN0YXRzIHtcXG4gIEBleHRlbmQgLnNpZGViYXI7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiA4JSA1JTtcXG4gIG1hcmdpbi10b3A6IDE1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQ6ICRsaWdodC1ncmF5O1xcblxcbiAgaDMge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcblxcbiAgLnN0YXQge1xcbiAgICBmb250LXNpemU6IDEuOGVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgfVxcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmVycm9yLW1lc3NhZ2Uge1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuI3NpZ24taW4tZXJyb3ItbWVzc2FnZSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zdWNjZXNzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4uZmFpbHVyZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xcbiAgLmFsbC10cmlwcyB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDglO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5zaWduLWluLWZvcm0ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAuYnV0dG9uLXNpZ25pbiB7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBoZWlnaHQ6IDE3NXB4O1xcblxcbiAgICBoMiB7XFxuICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnNpZ24taW4tY29udGFpbmVyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5zaWduLWluLWZvcm0ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgLmJ1dHRvbi1zaWduaW4ge1xcbiAgICAgIGhlaWdodDogMzNweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLnRyaXAtc3RhdHMgLnN0YXQge1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzBweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG5cXG4gICAgaDEge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgfVxcblxcbiAgLmljb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmFsbC10cmlwcyB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMCA1JTtcXG4gIH1cXG5cXG4gIC5zaWduLWluLWZvcm0ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG5cXG4gICAgLmJ1dHRvbi1zaWduaW4ge1xcbiAgICAgIGhlaWdodDogMzBweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnRyaXAtc3RhdHMge1xcbiAgICBtYXJnaW46IDMlIDA7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XFxuICAuYnV0dG9uLWZpbHRlciB7XFxuICAgIG1hcmdpbjogMiUgMCAyJSAwO1xcbiAgfVxcbn1cXG5cIixcIi5jYXJkLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBncmlkLWNvbHVtbi1nYXA6IDQlO1xcbiAgZ3JpZC1yb3ctZ2FwOiA3JTtcXG5cXG4gIGgzIHtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgbWFyZ2luOiAzJSAwIDUlIDA7XFxuICB9XFxufVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAkZGFyay1ncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgcGFkZGluZzogNSU7XFxuXFxuICBpbWcge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xcbiAgfVxcblxcbiAgLmNhcmQtZGVzdGluYXRpb24ge1xcbiAgICBoZWlnaHQ6IDEyJTtcXG4gIH1cXG5cXG4gIC5wZW5kaW5nIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ3MHB4KSB7XFxuICAuY2FyZC1ncmlkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiA2JTtcXG4gICAgZ3JpZC1yb3ctZ2FwOiA1JTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAuY2FyZC1ncmlkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLWNvbHVtbi1nYXA6IDglO1xcbiAgICBncmlkLXJvdy1nYXA6IDMlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG4gIC5jYXJkLWdyaWQge1xcbiAgICBncmlkLXJvdy1nYXA6IDYlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgLmNhcmQtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMyUgMCA2JTtcXG4gIH1cXG59XFxuXCIsXCIudHJpcC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBtYXJnaW46IDUlIDAgMiUgMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5pbnB1dCxcXG4jdHJpcC1kZXN0aW5hdGlvbiB7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5idXR0b24tcXVvdGUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstZ3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5idXR0b24tc3VibWl0IHtcXG4gIEBleHRlbmQgLmJ1dHRvbi1xdW90ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xcbn1cXG5cXG4jdHJpcC1yZXF1ZXN0LW1lc3NhZ2Uge1xcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY2xhc3MgRGVzdGluYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihsb2NhdGlvbikge1xuICAgIHRoaXMuaWQgPSBsb2NhdGlvbi5pZFxuICAgIHRoaXMubmFtZSA9IGxvY2F0aW9uLmRlc3RpbmF0aW9uXG4gICAgdGhpcy5sb2RnaW5nID0gbG9jYXRpb24uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXlcbiAgICB0aGlzLmZsaWdodHMgPSBsb2NhdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uXG4gICAgdGhpcy5pbWFnZSA9IGxvY2F0aW9uLmltYWdlXG4gICAgdGhpcy5hbHQgPSBsb2NhdGlvbi5hbHQgfHwgJ2JlYXV0aWZ1bCB0cmF2ZWwgZGVzdGluYXRpb24nXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZXN0aW5hdGlvblxuIiwiY2xhc3MgVHJhdmVsZXIge1xuICBjb25zdHJ1Y3Rvcih0cmF2ZWxlcikge1xuICAgIHRoaXMuaWQgPSB0cmF2ZWxlci5pZFxuICAgIHRoaXMubmFtZSA9IHRyYXZlbGVyLm5hbWVcbiAgICB0aGlzLnR5cGUgPSB0cmF2ZWxlci50cmF2ZWxlclR5cGVcbiAgICB0aGlzLnRyaXBzID0gW11cbiAgfVxuXG4gIGFkZE1hdGNoaW5nVHJpcHMobmV3VHJpcCkge1xuICAgIGlmICgobmV3VHJpcC51c2VySWQgPT09IHRoaXMuaWQpICYmICghdGhpcy50cmlwcy5pbmNsdWRlcyhuZXdUcmlwLmlkKSkpIHtcbiAgICAgIHRoaXMudHJpcHMucHVzaChuZXdUcmlwKVxuICAgIH1cbiAgfVxuXG4gIGFkZE1hdGNoaW5nRGVzdGluYXRpb25zKG5ld0Rlc3RpbmF0aW9uKSB7XG4gICAgdGhpcy50cmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgaWYgKHRyaXAuZGVzdGluYXRpb25JZCA9PT0gbmV3RGVzdGluYXRpb24uaWQpIHtcbiAgICAgICAgdHJpcC5kZXN0aW5hdGlvbkRldGFpbHMgPSBuZXdEZXN0aW5hdGlvblxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmb3JtYXRDb3N0KG51bWJlcikge1xuICAgIHJldHVybiBudW1iZXIudG9GaXhlZCgyKS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJylcbiAgfVxuXG4gIGdldEN1cnJlbnRZZWFyQXBwcm92ZWRUcmlwcygpIHtcbiAgICBjb25zdCB0b2RheSA9IERhdGUubm93KClcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKHRvZGF5KS5nZXRGdWxsWWVhcigpXG5cbiAgICByZXR1cm4gdGhpcy50cmlwcy5maWx0ZXIodHJpcCA9PiB7XG4gICAgICByZXR1cm4gdHJpcC5kYXRlLmluY2x1ZGVzKGN1cnJlbnRZZWFyKSAmJiAodHJpcC5zdGF0dXMgPT09ICdhcHByb3ZlZCcpXG4gICAgfSlcbiAgfVxuXG4gIGdldEN1cnJlbnRZZWFyU3BlbmQoKSB7XG4gICAgbGV0IHRyaXBTcGVuZCA9IDBcbiAgICBsZXQgdG90YWxTcGVudCA9IDBcbiAgICBjb25zdCB0cmlwc1RoaXNZZWFyID0gdGhpcy5nZXRDdXJyZW50WWVhckFwcHJvdmVkVHJpcHMoKVxuXG4gICAgdHJpcHNUaGlzWWVhci5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgdHJpcFNwZW5kICs9IHRyaXAuZHVyYXRpb24gKiB0cmlwLmRlc3RpbmF0aW9uRGV0YWlscy5sb2RnaW5nXG4gICAgICB0cmlwU3BlbmQgKz0gdHJpcC50cmF2ZWxlcnMgKiB0cmlwLmRlc3RpbmF0aW9uRGV0YWlscy5mbGlnaHRzXG4gICAgfSlcblxuICAgIHRvdGFsU3BlbnQgPSB0cmlwU3BlbmQgKyAodHJpcFNwZW5kICogLjEpXG5cbiAgICByZXR1cm4gdGhpcy5mb3JtYXRDb3N0KHRvdGFsU3BlbnQpXG4gIH1cblxuICBnZXREYXlzVHJhdmVsZWQoKSB7XG4gICAgY29uc3QgYXBwcm92ZWQgPSB0aGlzLnRyaXBzLmZpbHRlcih0cmlwID0+IHRyaXAuc3RhdHVzID09PSAnYXBwcm92ZWQnKVxuICAgIGNvbnN0IHRvdGFsRGF5cyA9IGFwcHJvdmVkLnJlZHVjZSgodG90YWwsIHRyaXApID0+IHtcbiAgICAgIHRvdGFsICs9IHRyaXAuZHVyYXRpb25cbiAgICAgIHJldHVybiB0b3RhbFxuICAgIH0sIDApXG5cbiAgICByZXR1cm4gdG90YWxEYXlzXG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYXZlbGVyXG4iLCJjbGFzcyBUcmlwIHtcbiAgY29uc3RydWN0b3IodHJpcCkge1xuICAgIHRoaXMuaWQgPSB0cmlwLmlkXG4gICAgdGhpcy51c2VySWQgPSB0cmlwLnVzZXJJRFxuICAgIHRoaXMuZGVzdGluYXRpb25JZCA9IHRyaXAuZGVzdGluYXRpb25JRFxuICAgIHRoaXMudHJhdmVsZXJzID0gdHJpcC50cmF2ZWxlcnNcbiAgICB0aGlzLmRhdGUgPSB0cmlwLmRhdGVcbiAgICB0aGlzLmR1cmF0aW9uID0gdHJpcC5kdXJhdGlvblxuICAgIHRoaXMuc3RhdHVzID0gdHJpcC5zdGF0dXNcbiAgICB0aGlzLnN1Z2dlc3RlZEFjdGl2aXRpZXMgPSB0cmlwLnN1Z2dlc3RlZEFjdGl2aXRpZXNcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyaXBcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJjb25zdCBzaWduSW5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZ24taW4tZm9ybScpXG5jb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJuYW1lLWZpZWxkJylcbmNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQtZmllbGQnKVxuY29uc3Qgc2lnbkluRXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZ24taW4tZXJyb3ItbWVzc2FnZScpXG5jb25zdCB3ZWxjb21lVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWxjb21lLXRleHQnKVxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJylcbmNvbnN0IGFsbFRyaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC10cmlwcycpXG5jb25zdCBjYXJkR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWdyaWQnKVxuY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlLWNhcmQnKVxuY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaXAtc3RhcnQnKVxuY29uc3QgZHVyYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlwLWR1cmF0aW9uJylcbmNvbnN0IHRyYXZlbGVyc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaXAtdHJhdmVsZXJzJylcbmNvbnN0IGRlc3RpbmF0aW9uRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpcC1kZXN0aW5hdGlvbicpXG5jb25zdCB0cmlwQ29zdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlwLWNvc3QnKVxuY29uc3QgYnV0dG9uU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbi1zdWJtaXQnKVxuY29uc3QgdG90YWxTcGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3RhbC1zcGVudCcpXG5jb25zdCB0b3RhbFNwZW50TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3RhbC1zcGVudC1tZXNzYWdlJylcbmNvbnN0IHRyaXBzVGFrZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpcHMtdGFrZW4nKVxuY29uc3QgZGF5c1RyYXZlbGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RheXMtdHJhdmVsZWQnKVxuY29uc3QgdHJpcEVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlwLWVycm9yLW1lc3NhZ2UnKVxuY29uc3QgcmVxdWVzdE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpcC1yZXF1ZXN0LW1lc3NhZ2UnKVxuXG5jb25zdCBkb21VcGRhdGVzID0ge1xuXG4gIHZhbGlkYXRlVXNlcm5hbWUobGV0dGVycywgbnVtYmVycykge1xuICAgIGlmICgobGV0dGVycyAhPT0gJ3RyYXZlbGVyJykgfHxcbiAgICAgIChudW1iZXJzID09PSB1bmRlZmluZWQpIHx8XG4gICAgICAobnVtYmVycyA9PT0gJzAnKSB8fFxuICAgICAgKG51bWJlcnMgPT09ICcwMCcpIHx8XG4gICAgICAocGFyc2VJbnQobnVtYmVycykgPiA1MCkpIHtcbiAgICAgIHVzZXJuYW1lSW5wdXQuY2xhc3NOYW1lID0gJ2ZhaWx1cmUnXG4gICAgICBzaWduSW5FcnJvck1lc3NhZ2UuaW5uZXJUZXh0ID0gYFVzZXJuYW1lIG9yIHBhc3N3b3JkIGRvZXMgbm90IG1hdGNoLmBcbiAgICB9IGVsc2Uge1xuICAgICAgdXNlcm5hbWVJbnB1dC5jbGFzc05hbWUgPSAnc3VjY2VzcydcbiAgICB9XG4gIH0sXG5cbiAgdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZFZhbHVlKSB7XG4gICAgaWYgKHBhc3N3b3JkVmFsdWUgIT09ICd0cmF2ZWwyMDIwJykge1xuICAgICAgcGFzc3dvcmRJbnB1dC5jbGFzc05hbWUgPSAnZmFpbHVyZSdcbiAgICAgIHNpZ25JbkVycm9yTWVzc2FnZS5pbm5lclRleHQgPSBgVXNlcm5hbWUgb3IgcGFzc3dvcmQgZG9lcyBub3QgbWF0Y2guYFxuICAgIH0gZWxzZSB7XG4gICAgICBwYXNzd29yZElucHV0LmNsYXNzTmFtZSA9ICdzdWNjZXNzJ1xuICAgIH1cbiAgfSxcblxuICBhZGRXZWxjb21lTWVzc2FnZShmaXJzdE5hbWUpIHtcbiAgICB3ZWxjb21lVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICBhbGxUcmlwcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIHNpZ25JbkZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICB3ZWxjb21lVGV4dC5pbm5lclRleHQgPSBgV2VsY29tZSwgJHtmaXJzdE5hbWV9IWBcbiAgfSxcblxuICBhZGREZXN0aW5hdGlvbnNUb0Ryb3Bkb3duKGRlc3RpbmF0aW9uKSB7XG4gICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICBuZXdPcHRpb24uaW5uZXJUZXh0ID0gZGVzdGluYXRpb24ubmFtZVxuICAgIG5ld09wdGlvbi52YWx1ZSA9IGRlc3RpbmF0aW9uLm5hbWVcbiAgICBkZXN0aW5hdGlvbkRyb3Bkb3duLmFwcGVuZENoaWxkKG5ld09wdGlvbilcbiAgfSxcblxuICBhZGRDYXJkVG9Eb20odHJpcCkge1xuICAgIGNvbnN0IG5ld1RyaXBDYXJkID0gY2FyZFRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgbmV3VHJpcENhcmQucXVlcnlTZWxlY3RvcignaDMuY2FyZC1kZXN0aW5hdGlvbicpLmlubmVyVGV4dCA9IHRyaXAuZGVzdGluYXRpb25EZXRhaWxzLm5hbWVcbiAgICBuZXdUcmlwQ2FyZC5xdWVyeVNlbGVjdG9yKCdpbWcuY2FyZC1pbWFnZScpLnNyYyA9IHRyaXAuZGVzdGluYXRpb25EZXRhaWxzLmltYWdlXG4gICAgbmV3VHJpcENhcmQucXVlcnlTZWxlY3RvcignaW1nLmNhcmQtaW1hZ2UnKS5hbHQgPSB0cmlwLmRlc3RpbmF0aW9uRGV0YWlscy5hbHRcbiAgICBuZXdUcmlwQ2FyZC5xdWVyeVNlbGVjdG9yKCdwLmNhcmQtdHJhdmVsZXJzJykuaW5uZXJIVE1MID0gYDxzdHJvbmc+VHJhdmVsZXJzOjwvc3Ryb25nPiAke3RyaXAudHJhdmVsZXJzfWBcbiAgICBuZXdUcmlwQ2FyZC5xdWVyeVNlbGVjdG9yKCdwLmNhcmQtZGF0ZScpLmlubmVySFRNTCA9IGA8c3Ryb25nPlN0YXJ0IERhdGU6PC9zdHJvbmc+ICR7dHJpcC5kYXRlfWBcbiAgICBuZXdUcmlwQ2FyZC5xdWVyeVNlbGVjdG9yKCdwLmNhcmQtZHVyYXRpb24nKS5pbm5lckhUTUwgPSBgPHN0cm9uZz5EdXJhdGlvbjo8L3N0cm9uZz4gJHt0cmlwLmR1cmF0aW9ufSBkYXlzYFxuICAgIG5ld1RyaXBDYXJkLnF1ZXJ5U2VsZWN0b3IoJ3AuY2FyZC1sb2RnaW5nJykuaW5uZXJIVE1MID0gYDxzdHJvbmc+TG9kZ2luZzo8L3N0cm9uZz4gJCR7dHJpcC5kZXN0aW5hdGlvbkRldGFpbHMubG9kZ2luZ30gcGVyIG5pZ2h0YFxuICAgIG5ld1RyaXBDYXJkLnF1ZXJ5U2VsZWN0b3IoJ3AuY2FyZC1mbGlnaHRzJykuaW5uZXJIVE1MID0gYDxzdHJvbmc+RmxpZ2h0czo8L3N0cm9uZz4gJCR7dHJpcC5kZXN0aW5hdGlvbkRldGFpbHMuZmxpZ2h0c30gcGVyIHBlcnNvbmBcbiAgICBuZXdUcmlwQ2FyZC5xdWVyeVNlbGVjdG9yKCdwLmNhcmQtc3RhdHVzJykuaW5uZXJIVE1MID0gYDxzdHJvbmc+U3RhdHVzOjwvc3Ryb25nPiAke3RyaXAuc3RhdHVzfWBcblxuICAgIGlmICh0cmlwLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKSB7XG4gICAgICBuZXdUcmlwQ2FyZC5xdWVyeVNlbGVjdG9yKCdhcnRpY2xlJykuY2xhc3NMaXN0LmFkZCgncGVuZGluZycpXG4gICAgfSBlbHNlIGlmICh0cmlwLnN0YXR1cyA9PT0gJ2FwcHJvdmVkJykge1xuICAgICAgbmV3VHJpcENhcmQucXVlcnlTZWxlY3RvcignYXJ0aWNsZScpLmNsYXNzTGlzdC5hZGQoJ2FwcHJvdmVkJylcbiAgICB9XG5cbiAgICBjYXJkR3JpZC5hcHBlbmRDaGlsZChuZXdUcmlwQ2FyZClcbiAgfSxcblxuICBmaWx0ZXJUcmlwc0luRG9tKGNsYXNzMSwgY2xhc3MyKSB7XG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpXG4gICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgIGlmIChjYXJkLmNsYXNzTGlzdC5jb250YWlucyhjbGFzczEpKSB7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgIH0gZWxzZSBpZiAoY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3MyKSkge1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICBzaG93QWxsVHJpcHMoKSB7XG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpXG4gICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgIGlmIChjYXJkLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgc2hvd1N0YXRzKGN1cnJlbnRUcmF2ZWxlcikge1xuICAgIHRyaXBzVGFrZW4uaW5uZXJUZXh0ID0gYCR7Y3VycmVudFRyYXZlbGVyLmdldEN1cnJlbnRZZWFyQXBwcm92ZWRUcmlwcygpLmxlbmd0aH1gXG4gICAgZGF5c1RyYXZlbGVkLmlubmVyVGV4dCA9IGAke2N1cnJlbnRUcmF2ZWxlci5nZXREYXlzVHJhdmVsZWQoKX1gXG4gICAgdG90YWxTcGVudC5pbm5lclRleHQgPSBgJCR7Y3VycmVudFRyYXZlbGVyLmdldEN1cnJlbnRZZWFyU3BlbmQoKX1gXG5cbiAgICBpZiAoY3VycmVudFRyYXZlbGVyLmdldEN1cnJlbnRZZWFyU3BlbmQoKSA9PT0gJzAuMDAnKSB7XG4gICAgICB0b3RhbFNwZW50TWVzc2FnZS5pbm5lclRleHQgPSAnVG90YWwgc3BlbnQgb24gdHJpcHMgc28gZmFyIHRoaXMgeWVhci4gVGltZSB0byBib29rIGEgbmV3IHRyaXAhJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0b3RhbFNwZW50TWVzc2FnZS5pbm5lclRleHQgPSBgVG90YWwgc3BlbnQgb24gdHJpcHMgc28gZmFyIHRoaXMgeWVhci4gWW91J3JlIHF1aXRlIHRoZSB0cmF2ZWxlciFgXG4gICAgfVxuICB9LFxuXG4gIHZhbGlkYXRlVHJpcElucHV0cygpIHtcbiAgICBjb25zdCBkYXRlVmFsdWUgPSBkYXRlSW5wdXQudmFsdWUudHJpbSgpXG4gICAgY29uc3QgZHVyYXRpb25WYWx1ZSA9IGR1cmF0aW9uSW5wdXQudmFsdWUudHJpbSgpXG4gICAgY29uc3QgdHJhdmVsZXJzVmFsdWUgPSB0cmF2ZWxlcnNJbnB1dC52YWx1ZS50cmltKClcbiAgICBjb25zdCBkZXN0VmFsdWUgPSBkZXN0aW5hdGlvbkRyb3Bkb3duLnZhbHVlLnRyaW0oKVxuXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgaW5wdXREYXRlID0gbmV3IERhdGUoZGF0ZVZhbHVlKVxuXG4gICAgaWYgKChkYXRlVmFsdWUgPT09ICcnKSB8fCAoaW5wdXREYXRlIDwgY3VycmVudERhdGUpKSB7XG4gICAgICBkYXRlSW5wdXQuY2xhc3NOYW1lID0gJ2ZhaWx1cmUnXG4gICAgICB0aGlzLnNldFRyaXBFcnJvcnMoKVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlSW5wdXQuY2xhc3NOYW1lID0gJ3N1Y2Nlc3MnXG4gICAgfVxuXG4gICAgaWYgKChkdXJhdGlvblZhbHVlID09PSAnJykgfHwgKGR1cmF0aW9uVmFsdWUgPT09ICcwJykpIHtcbiAgICAgIGR1cmF0aW9uSW5wdXQuY2xhc3NOYW1lID0gJ2ZhaWx1cmUnXG4gICAgICB0aGlzLnNldFRyaXBFcnJvcnMoKVxuICAgIH0gZWxzZSB7XG4gICAgICBkdXJhdGlvbklucHV0LmNsYXNzTmFtZSA9ICdzdWNjZXNzJ1xuICAgIH1cblxuICAgIGlmICgodHJhdmVsZXJzVmFsdWUgPT09ICcnKSB8fCAodHJhdmVsZXJzVmFsdWUgPT09ICcwJykpIHtcbiAgICAgIHRyYXZlbGVyc0lucHV0LmNsYXNzTmFtZSA9ICdmYWlsdXJlJ1xuICAgICAgdGhpcy5zZXRUcmlwRXJyb3JzKClcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhdmVsZXJzSW5wdXQuY2xhc3NOYW1lID0gJ3N1Y2Nlc3MnXG4gICAgfVxuXG4gICAgaWYgKGRlc3RWYWx1ZSA9PT0gJycpIHtcbiAgICAgIGRlc3RpbmF0aW9uRHJvcGRvd24uY2xhc3NOYW1lID0gJ2ZhaWx1cmUnXG4gICAgICB0aGlzLnNldFRyaXBFcnJvcnMoKVxuICAgIH0gZWxzZSB7XG4gICAgICBkZXN0aW5hdGlvbkRyb3Bkb3duLmNsYXNzTmFtZSA9ICdzdWNjZXNzJ1xuICAgIH1cbiAgfSxcblxuICBzZXRUcmlwRXJyb3JzKCkge1xuICAgIHRyaXBFcnJvck1lc3NhZ2UuaW5uZXJUZXh0ID0gJ0JlIHN1cmUgdG8gZmlsbCBvdXQgYWxsIGZpZWxkcyBhYm92ZSBhbmQgY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSBkYXRlIGlzIGluIHRoZSBmdXR1cmUgYmVmb3JlIHN1Ym1pdHRpbmcuJ1xuICAgIHRyaXBDb3N0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgYnV0dG9uU3VibWl0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIH0sXG5cbiAgcmVtb3ZlVHJpcFZhbGlkYXRpb24oKSB7XG4gICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ3N1Y2Nlc3MnKVxuICAgIGR1cmF0aW9uSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnc3VjY2VzcycpXG4gICAgdHJhdmVsZXJzSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnc3VjY2VzcycpXG4gICAgZGVzdGluYXRpb25Ecm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJylcbiAgfSxcblxuICBhZGRUcmlwUXVvdGVUb0RvbShjb3N0RXN0aW1hdGUpIHtcbiAgICB0cmlwQ29zdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIHRyaXBDb3N0LmlubmVySFRNTCA9IGA8c3Ryb25nPkVzdGltYXRlZCBDb3N0Ojwvc3Ryb25nPiAkJHtjb3N0RXN0aW1hdGV9YFxuICAgIGJ1dHRvblN1Ym1pdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICB9LFxuXG4gIHJlc2V0Rm9ybSgpIHtcbiAgICB0cmlwQ29zdC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGJ1dHRvblN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGRhdGVJbnB1dC52YWx1ZSA9ICcnXG4gICAgZHVyYXRpb25JbnB1dC52YWx1ZSA9ICcnXG4gICAgdHJhdmVsZXJzSW5wdXQudmFsdWUgPSAnJ1xuICAgIGRlc3RpbmF0aW9uRHJvcGRvd24udmFsdWUgPSAnJ1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICByZXF1ZXN0TWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIH0sIDMwMDApXG4gIH0sXG5cbiAgY2xlYXJUcmlwQ2FyZHMoKSB7XG4gICAgY2FyZEdyaWQucXVlcnlTZWxlY3RvckFsbCgnYXJ0aWNsZScpLmZvckVhY2goYXJ0aWNsZSA9PiBhcnRpY2xlLnJlbW92ZSgpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVVwZGF0ZXNcbiIsImNvbnN0IHRyaXBFcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpcC1lcnJvci1tZXNzYWdlJylcblxuY29uc3QgZmV0Y2hBcGkgPSB7XG4gIGdldFRyYXZlbGVyRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJhdmVsZXJzJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfSxcblxuICBnZXRTaW5nbGVUcmF2ZWxlcih0cmF2ZWxlcklkKSB7XG4gICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyYXZlbGVycy8ke3RyYXZlbGVySWR9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfSxcblxuICBnZXRUcmlwRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHMnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICB9LFxuXG4gIGdldERlc3RpbmF0aW9uRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvZGVzdGluYXRpb25zJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfSxcblxuICBwb3N0VHJpcFJlcXVlc3QodHJpcFJlcXVlc3QpIHtcbiAgICBjb25zdCBwb3N0Rm9ybWF0ID0ge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0cmlwUmVxdWVzdClcbiAgICB9XG5cbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHMnLCBwb3N0Rm9ybWF0KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdHJpcEVycm9yTWVzc2FnZS5pbm5lclRleHQgPSAnVW5hYmxlIHRvIHJlcXVlc3QgdHJpcC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmZXRjaEFwaVxuIiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcGxhbmUtYmFubmVyLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3VuZHJhd190cmF2ZWxfbW9kZV83c2Y0LnN2Z1wiOyIsImltcG9ydCAnLi9jc3MvaW5kZXguc2NzcydcbmltcG9ydCAnLi9pbWFnZXMvcGxhbmUtYmFubmVyLmpwZydcbmltcG9ydCAnLi9pbWFnZXMvdW5kcmF3X3RyYXZlbF9tb2RlXzdzZjQuc3ZnJ1xuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb21VcGRhdGVzLmpzJ1xuaW1wb3J0IGZldGNoQXBpIGZyb20gJy4vZmV0Y2hBcGkuanMnXG5pbXBvcnQgVHJhdmVsZXIgZnJvbSAnLi9UcmF2ZWxlci5qcydcbmltcG9ydCBEZXN0aW5hdGlvbiBmcm9tICcuL0Rlc3RpbmF0aW9uLmpzJ1xuaW1wb3J0IFRyaXAgZnJvbSAnLi9UcmlwLmpzJ1xuXG5jb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJuYW1lLWZpZWxkJylcbmNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQtZmllbGQnKVxuY29uc3QgYnV0dG9uU2lnbkluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luLWZvcm0tc3VibWl0JylcbmNvbnN0IHNpZ25JbkVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWduLWluLWVycm9yLW1lc3NhZ2UnKVxuY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaXAtc3RhcnQnKVxuY29uc3QgZHVyYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlwLWR1cmF0aW9uJylcbmNvbnN0IHRyYXZlbGVyc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaXAtdHJhdmVsZXJzJylcbmNvbnN0IGRlc3RpbmF0aW9uRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpcC1kZXN0aW5hdGlvbicpXG5jb25zdCBidXR0b25RdW90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b24tcXVvdGUnKVxuY29uc3QgYnV0dG9uU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbi1zdWJtaXQnKVxuY29uc3QgdHJpcEVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlwLWVycm9yLW1lc3NhZ2UnKVxuY29uc3QgcmVxdWVzdE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpcC1yZXF1ZXN0LW1lc3NhZ2UnKVxuY29uc3Qgbm9UcmlwRmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuby10cmlwLWZpbHRlcnMnKVxuY29uc3QgYXBwcm92ZWRUcmlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHByb3ZlZC10cmlwcycpXG5jb25zdCBwZW5kaW5nVHJpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVuZGluZy10cmlwcycpXG5cbmJ1dHRvblNpZ25Jbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2YWx1YXRlU2lnbkluRm9ybSlcbmJ1dHRvblF1b3RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZhbHVhdGVUcmlwRm9ybSlcbmJ1dHRvblN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlcXVlc3RUcmlwKVxubm9UcmlwRmlsdGVycy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBkb21VcGRhdGVzLnNob3dBbGxUcmlwcygpXG59KVxuYXBwcm92ZWRUcmlwcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBkb21VcGRhdGVzLmZpbHRlclRyaXBzSW5Eb20oJ3BlbmRpbmcnLCAnYXBwcm92ZWQnKVxufSlcbnBlbmRpbmdUcmlwcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBkb21VcGRhdGVzLmZpbHRlclRyaXBzSW5Eb20oJ2FwcHJvdmVkJywgJ3BlbmRpbmcnKVxufSlcblxuY29uc3QgYWxsRGVzdGluYXRpb25zID0gW11cbmNvbnN0IGFsbFRyaXBzID0gW11cbmxldCBjdXJyZW50VHJhdmVsZXJcblxuY29uc3QgZmV0Y2hlZFRyaXBEYXRhID0gZmV0Y2hBcGkuZ2V0VHJpcERhdGEoKVxuY29uc3QgZmV0Y2hlZERlc3RpbmF0aW9uRGF0YSA9IGZldGNoQXBpLmdldERlc3RpbmF0aW9uRGF0YSgpXG5cbmZ1bmN0aW9uIGV2YWx1YXRlU2lnbkluRm9ybShldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHVzZXJuYW1lVmFsdWUgPSB1c2VybmFtZUlucHV0LnZhbHVlLnRyaW0oKVxuICBjb25zdCBwYXNzd29yZFZhbHVlID0gcGFzc3dvcmRJbnB1dC52YWx1ZS50cmltKClcbiAgY29uc3Qgc3BsaXROYW1lID0gdXNlcm5hbWVWYWx1ZS5zcGxpdCgnJylcbiAgY29uc3QgbGV0dGVycyA9IHNwbGl0TmFtZS5zbGljZSgwLCA4KS5qb2luKCcnKVxuICBjb25zdCBudW1iZXJzID0gc3BsaXROYW1lLnNsaWNlKDgsIDEwKS5qb2luKCcnKVxuICBjb25zdCBjdXJyZW50VXNlcklkID0gcGFyc2VJbnQobnVtYmVycylcblxuICBkb21VcGRhdGVzLnZhbGlkYXRlVXNlcm5hbWUobGV0dGVycywgbnVtYmVycylcbiAgZG9tVXBkYXRlcy52YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkVmFsdWUpXG5cbiAgaWYgKHVzZXJuYW1lSW5wdXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWNjZXNzJykgJiZcbiAgICBwYXNzd29yZElucHV0LmNsYXNzTGlzdC5jb250YWlucygnc3VjY2VzcycpKSB7XG4gICAgc2lnbkluRXJyb3JNZXNzYWdlLmlubmVyVGV4dCA9ICcnXG4gICAgbG9hZERhc2hib2FyZChjdXJyZW50VXNlcklkKVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWREYXNoYm9hcmQoY3VycmVudFVzZXJJZCkge1xuICBjb25zdCBmZXRjaGVkU2luZ2xlVHJhdmVsZXIgPSBmZXRjaEFwaS5nZXRTaW5nbGVUcmF2ZWxlcihjdXJyZW50VXNlcklkKVxuXG4gIFByb21pc2UuYWxsKFtmZXRjaGVkU2luZ2xlVHJhdmVsZXIsIGZldGNoZWRUcmlwRGF0YSwgZmV0Y2hlZERlc3RpbmF0aW9uRGF0YV0pXG4gICAgLnRoZW4odmFsdWVzID0+IHtcbiAgICAgIGdlbmVyYXRlVHJhdmVsZXIodmFsdWVzWzBdKVxuICAgICAgZmluZFRyYXZlbGVyVHJpcHModmFsdWVzWzFdKVxuICAgICAgZ2VuZXJhdGVUcmlwRGVzdGluYXRpb25zKHZhbHVlc1syXSlcbiAgICAgIGNyZWF0ZVRyaXBDYXJkcygpXG4gICAgfSlcbiAgICAuY2F0Y2goaGFuZGxlU2VydmVyTWVzc2FnZXMpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNlcnZlck1lc3NhZ2VzKGVycm9yKSB7XG4gIHNpZ25JbkVycm9yTWVzc2FnZS5pbm5lclRleHQgPSBgU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSByZWZyZXNoIHRoZSBwYWdlIG9yIHRyeSBhZ2FpbiBsYXRlci5gXG4gIGNvbnNvbGUubG9nKGVycm9yKVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRyYXZlbGVyKHRyYXZlbGVyRGF0YSkge1xuICBjdXJyZW50VHJhdmVsZXIgPSBuZXcgVHJhdmVsZXIodHJhdmVsZXJEYXRhKVxuICBsZXQgZmlyc3ROYW1lID0gY3VycmVudFRyYXZlbGVyLm5hbWUuc3BsaXQoJyAnKVswXVxuICBkb21VcGRhdGVzLmFkZFdlbGNvbWVNZXNzYWdlKGZpcnN0TmFtZSlcbn1cblxuZnVuY3Rpb24gZmluZFRyYXZlbGVyVHJpcHModHJpcERhdGEpIHtcbiAgdHJpcERhdGEudHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICBsZXQgbmV3VHJpcCA9IG5ldyBUcmlwKHRyaXApXG4gICAgYWxsVHJpcHMucHVzaCh0cmlwKVxuICAgIGN1cnJlbnRUcmF2ZWxlci5hZGRNYXRjaGluZ1RyaXBzKG5ld1RyaXApXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVHJpcERlc3RpbmF0aW9ucyhkZXN0aW5hdGlvbkRhdGEpIHtcbiAgYWxwaGFiZXRpemVEZXN0aW5hdGlvbnMoZGVzdGluYXRpb25EYXRhKVxuICBkZXN0aW5hdGlvbkRhdGEuZGVzdGluYXRpb25zLmZvckVhY2gobG9jYXRpb24gPT4ge1xuICAgIGxldCBuZXdEZXN0aW5hdGlvbiA9IG5ldyBEZXN0aW5hdGlvbihsb2NhdGlvbilcbiAgICBhbGxEZXN0aW5hdGlvbnMucHVzaChuZXdEZXN0aW5hdGlvbilcbiAgICBkb21VcGRhdGVzLmFkZERlc3RpbmF0aW9uc1RvRHJvcGRvd24obmV3RGVzdGluYXRpb24pXG4gICAgY3VycmVudFRyYXZlbGVyLmFkZE1hdGNoaW5nRGVzdGluYXRpb25zKG5ld0Rlc3RpbmF0aW9uKVxuICB9KVxuICBkb21VcGRhdGVzLnNob3dTdGF0cyhjdXJyZW50VHJhdmVsZXIpXG59XG5cbmZ1bmN0aW9uIGFscGhhYmV0aXplRGVzdGluYXRpb25zKGRlc3RpbmF0aW9uRGF0YSkge1xuICBkZXN0aW5hdGlvbkRhdGEuZGVzdGluYXRpb25zLnNvcnQoKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYS5kZXN0aW5hdGlvbi5sb2NhbGVDb21wYXJlKGIuZGVzdGluYXRpb24pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHNvcnRUcmlwc0J5RGF0ZSgpIHtcbiAgcmV0dXJuIGN1cnJlbnRUcmF2ZWxlci50cmlwcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGIuZGF0ZSkgLSBuZXcgRGF0ZShhLmRhdGUpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRyaXBDYXJkcygpIHtcbiAgc29ydFRyaXBzQnlEYXRlKClcbiAgY3VycmVudFRyYXZlbGVyLnRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgZG9tVXBkYXRlcy5hZGRDYXJkVG9Eb20odHJpcClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmluZERlc3RpbmF0aW9uKCkge1xuICByZXR1cm4gYWxsRGVzdGluYXRpb25zLmZpbmQobG9jYXRpb24gPT4ge1xuICAgIHJldHVybiBsb2NhdGlvbi5uYW1lID09PSBkZXN0aW5hdGlvbkRyb3Bkb3duLnZhbHVlXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGV2YWx1YXRlVHJpcEZvcm0oZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gIGRvbVVwZGF0ZXMudmFsaWRhdGVUcmlwSW5wdXRzKClcblxuICBpZiAoZGF0ZUlucHV0LmNsYXNzTGlzdC5jb250YWlucygnc3VjY2VzcycpICYmXG4gICAgZHVyYXRpb25JbnB1dC5jbGFzc0xpc3QuY29udGFpbnMoJ3N1Y2Nlc3MnKSAmJlxuICAgIHRyYXZlbGVyc0lucHV0LmNsYXNzTGlzdC5jb250YWlucygnc3VjY2VzcycpICYmXG4gICAgZGVzdGluYXRpb25Ecm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ3N1Y2Nlc3MnKSkge1xuICAgIHF1b3RlVHJpcCgpXG4gICAgdHJpcEVycm9yTWVzc2FnZS5pbm5lclRleHQgPSAnJ1xuICB9XG59XG5cbmZ1bmN0aW9uIHF1b3RlVHJpcCgpIHtcbiAgbGV0IHRyaXBFc3RpbWF0ZSA9IDBcbiAgbGV0IHRvdGFsRXN0aW1hdGUgPSAwXG4gIGNvbnN0IG1hdGNoaW5nRGVzdCA9IGZpbmREZXN0aW5hdGlvbigpXG5cbiAgdHJpcEVzdGltYXRlICs9IGR1cmF0aW9uSW5wdXQudmFsdWUgKiBtYXRjaGluZ0Rlc3QubG9kZ2luZ1xuICB0cmlwRXN0aW1hdGUgKz0gdHJhdmVsZXJzSW5wdXQudmFsdWUgKiBtYXRjaGluZ0Rlc3QuZmxpZ2h0c1xuXG4gIHRvdGFsRXN0aW1hdGUgPSBjdXJyZW50VHJhdmVsZXIuZm9ybWF0Q29zdCh0cmlwRXN0aW1hdGUgKyAodHJpcEVzdGltYXRlICogLjEpKVxuXG4gIGRvbVVwZGF0ZXMuYWRkVHJpcFF1b3RlVG9Eb20odG90YWxFc3RpbWF0ZSlcbiAgZG9tVXBkYXRlcy5yZW1vdmVUcmlwVmFsaWRhdGlvbigpXG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZVZhbHVlKSB7XG4gIHJldHVybiBkYXRlVmFsdWUucmVwbGFjZSgvLS9nLCAnLycpXG59XG5cbmZ1bmN0aW9uIHJlcXVlc3RUcmlwKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgbWF0Y2hpbmdEZXN0ID0gZmluZERlc3RpbmF0aW9uKClcblxuICBjb25zdCB0cmlwUmVxdWVzdCA9IHtcbiAgICBpZDogRGF0ZS5ub3coKSxcbiAgICB1c2VySUQ6IGN1cnJlbnRUcmF2ZWxlci5pZCxcbiAgICBkZXN0aW5hdGlvbklEOiBtYXRjaGluZ0Rlc3QuaWQsXG4gICAgdHJhdmVsZXJzOiBwYXJzZUludCh0cmF2ZWxlcnNJbnB1dC52YWx1ZSksXG4gICAgZGF0ZTogZm9ybWF0RGF0ZShkYXRlSW5wdXQudmFsdWUpLFxuICAgIGR1cmF0aW9uOiBwYXJzZUludChkdXJhdGlvbklucHV0LnZhbHVlKSxcbiAgICBzdGF0dXM6ICdwZW5kaW5nJyxcbiAgICBzdWdnZXN0ZWRBY3Rpdml0aWVzOiBbXVxuICB9XG5cbiAgZmV0Y2hBcGkucG9zdFRyaXBSZXF1ZXN0KHRyaXBSZXF1ZXN0KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IG5ld1RyaXAgPSBuZXcgVHJpcCh0cmlwUmVxdWVzdClcbiAgICAgIGN1cnJlbnRUcmF2ZWxlci50cmlwcy5wdXNoKG5ld1RyaXApXG4gICAgICBjdXJyZW50VHJhdmVsZXIuYWRkTWF0Y2hpbmdEZXN0aW5hdGlvbnMobWF0Y2hpbmdEZXN0KVxuICAgICAgZG9tVXBkYXRlcy5jbGVhclRyaXBDYXJkcygpXG4gICAgICBjcmVhdGVUcmlwQ2FyZHMoKVxuICAgICAgcmVxdWVzdE1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgIGRvbVVwZGF0ZXMucmVzZXRGb3JtKClcbiAgICB9KS5jYXRjaChoYW5kbGVTZXJ2ZXJNZXNzYWdlcylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=