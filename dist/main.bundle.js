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

  getTripsTaken() {
    const approved = this.trips.filter(trip => trip.status === 'approved')

    return approved.length
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
    tripsTaken.innerText = `${currentTraveler.getTripsTaken()}`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVzdGluYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyYXZlbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9UcmlwLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvaW5kZXguc2Nzcz83YWIxIiwid2VicGFjazovLy8uL3NyYy9kb21VcGRhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9mZXRjaEFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3BsYW5lLWJhbm5lci5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy91bmRyYXdfdHJhdmVsX21vZGVfN3NmNC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtR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O0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDNVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSwwREFBMEQsRUFBRTtBQUM1RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7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QSxFQUFFLG9EQUFRO0FBQ1Y7QUFDQSwwQkFBMEIsK0NBQUk7QUFDOUI7QUFDQTtBQUNBLE1BQU0sc0RBQVU7QUFDaEI7QUFDQTtBQUNBLE1BQU0sc0RBQVU7QUFDaEIsS0FBSztBQUNMIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtFQUNFLGlCQUFpQixFQUFFLE1BQU07RUFDekIsOEJBQThCLEVBQUUsTUFBTTtBQUN4Qzs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsdUJBQXVCLEVBQUUsTUFBTTtFQUMvQixTQUFTLEVBQUUsTUFBTTtFQUNqQixpQkFBaUIsRUFBRSxNQUFNO0FBQzNCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsaUNBQWlDLEVBQUUsTUFBTTtBQUMzQzs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFOztBQUVGOzs7RUFHRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGOzs7OztFQUtFLG9CQUFvQixFQUFFLE1BQU07RUFDNUIsZUFBZSxFQUFFLE1BQU07RUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtFQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7UUFDUSxNQUFNO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtTQUNTLE1BQU07RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOzs7OztFQUtFOztBQUVGO0VBQ0Usc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixjQUFjLEVBQUUsTUFBTTtFQUN0QixjQUFjLEVBQUUsTUFBTTtFQUN0QixlQUFlLEVBQUUsTUFBTTtFQUN2QixVQUFVLEVBQUUsTUFBTTtFQUNsQixtQkFBbUIsRUFBRSxNQUFNO0FBQzdCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixVQUFVLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQzlCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDdkI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vaW1hZ2VzL3BsYW5lLWJhbm5lci5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMCAwIDclIDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogYXV0byAxZnIgLyBhdXRvIDFmcjsgfVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMi4yZW07IH1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuOGVtOyB9XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAxLjVlbTsgfVxcblxcbnAge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBtYXJnaW46IDJweDsgfVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogOGZyIDFmcjsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xcbiAgYm9keSB7XFxuICAgIG1hcmdpbjogMCAwIDE1JSAwOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG4gIG1haW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNTBweCwgMzAlKSAxZnI7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XFxuICBoMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAzJTsgfVxcbiAgbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH0gfVxcblxcbmhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNCksIHJnYmEoMCwgMCwgMCwgMC40KSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIHBhZGRpbmc6IDAgMiU7IH1cXG4gIGhlYWRlciBoMSxcXG4gIGhlYWRlciBoMixcXG4gIGhlYWRlciAuZmEtcGxhbmUge1xcbiAgICBjb2xvcjogd2hpdGU7IH1cXG5cXG4uYnV0dG9uLCAjbm8tdHJpcC1maWx0ZXJzIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbjogOCUgMDtcXG4gIHBhZGRpbmc6IDAgMyU7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5idXR0b246aG92ZXIsICNuby10cmlwLWZpbHRlcnM6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBBOUNBO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7IH1cXG5cXG4uYnV0dG9uLWZpbHRlciB7XFxuICBtYXJnaW46IDIlIDAgNSUgMDsgfVxcblxcbiNuby10cmlwLWZpbHRlcnMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjBGRTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMiUgMCA1JSAwOyB9XFxuXFxuLnNpZ24taW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XFxuXFxuLnNpZ24taW4tZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxcbiAgLnNpZ24taW4tZm9ybSBpbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBtYXJnaW46IDElOyB9XFxuICAuc2lnbi1pbi1mb3JtIC5idXR0b24tc2lnbmluIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjNTg1QTg5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLnNpZ24taW4tZm9ybSAuYnV0dG9uLXNpZ25pbjpob3ZlciB7XFxuICAgICAgY29sb3I6ICMwMEIwRkU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXG4gIC5zaWduLWluLWZvcm0gLnNpZ24taW4tbGFiZWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBjbGlwOiByZWN0KDFweCAxcHggMXB4IDFweCk7XFxuICAgIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGNsaXAtcGF0aDogaW5zZXQoMXB4KTsgfVxcblxcbi5zaWRlYmFyLCAudHJpcC1zdGF0cyB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBwYWRkaW5nOiAwIDEwJTsgfVxcbiAgLnNpZGViYXIgLmljb24sIC50cmlwLXN0YXRzIC5pY29uIHtcXG4gICAgaGVpZ2h0OiAxMjVweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1JTsgfVxcblxcbi5hbGwtdHJpcHMge1xcbiAgcGFkZGluZzogMCA2JSAwIDMlOyB9XFxuICAuYWxsLXRyaXBzIGgyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5OyB9XFxuXFxuLnRyaXAtc3RhdHMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogOCUgNSU7XFxuICBtYXJnaW4tdG9wOiAxNSU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjOTBBOUNBOyB9XFxuICAudHJpcC1zdGF0cyBoMyB7XFxuICAgIG1hcmdpbi10b3A6IDA7IH1cXG4gIC50cmlwLXN0YXRzIC5zdGF0IHtcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IDEwJTsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuLmVycm9yLW1lc3NhZ2Uge1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbiNzaWduLWluLWVycm9yLW1lc3NhZ2Uge1xcbiAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLnN1Y2Nlc3Mge1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47IH1cXG5cXG4uZmFpbHVyZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcXG4gIC5hbGwtdHJpcHMge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA4JTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAuc2lnbi1pbi1mb3JtIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICAuc2lnbi1pbi1mb3JtIC5idXR0b24tc2lnbmluIHtcXG4gICAgICB3aWR0aDogNTAlOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBoZWlnaHQ6IDE3NXB4OyB9XFxuICAgIGhlYWRlciBoMiB7XFxuICAgICAgbWFyZ2luLXRvcDogMDsgfVxcbiAgLnNpZ24taW4tY29udGFpbmVyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLnNpZ24taW4tZm9ybSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAgIC5zaWduLWluLWZvcm0gLmJ1dHRvbi1zaWduaW4ge1xcbiAgICAgIGhlaWdodDogMzNweDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC50cmlwLXN0YXRzIC5zdGF0IHtcXG4gICAgZm9udC1zaXplOiAxLjJlbTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTcwcHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIGhlaWdodDogMjMwcHg7IH1cXG4gICAgaGVhZGVyIGgxIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDMwMHB4OyB9XFxuICAuc2lkZWJhciwgLnRyaXAtc3RhdHMge1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7IH1cXG4gIC5pY29uIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLmFsbC10cmlwcyB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMCA1JTsgfVxcbiAgLnNpZ24taW4tZm9ybSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDUlOyB9XFxuICAgIC5zaWduLWluLWZvcm0gLmJ1dHRvbi1zaWduaW4ge1xcbiAgICAgIGhlaWdodDogMzBweDsgfVxcbiAgLnRyaXAtc3RhdHMge1xcbiAgICBtYXJnaW46IDMlIDA7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XFxuICAuYnV0dG9uLWZpbHRlciB7XFxuICAgIG1hcmdpbjogMiUgMCAyJSAwOyB9IH1cXG5cXG4uY2FyZC1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA0JTtcXG4gIGdyaWQtcm93LWdhcDogNyU7IH1cXG4gIC5jYXJkLWdyaWQgaDMge1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBtYXJnaW46IDMlIDAgNSUgMDsgfVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNTg1QTg5O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgcGFkZGluZzogNSU7IH1cXG4gIC5jYXJkIGltZyB7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7IH1cXG4gIC5jYXJkIC5jYXJkLWRlc3RpbmF0aW9uIHtcXG4gICAgaGVpZ2h0OiAxMiU7IH1cXG4gIC5jYXJkIC5wZW5kaW5nIHtcXG4gICAgY29sb3I6IHJlZDsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NzBweCkge1xcbiAgLmNhcmQtZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdyaWQtY29sdW1uLWdhcDogNiU7XFxuICAgIGdyaWQtcm93LWdhcDogNSU7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgLmNhcmQtZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiA4JTtcXG4gICAgZ3JpZC1yb3ctZ2FwOiAzJTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XFxuICAuY2FyZC1ncmlkIHtcXG4gICAgZ3JpZC1yb3ctZ2FwOiA2JTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gIC5jYXJkLWdyaWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDMlIDAgNiU7IH0gfVxcblxcbi50cmlwLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG5sYWJlbCB7XFxuICBtYXJnaW46IDUlIDAgMiUgMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuaW5wdXQsXFxuI3RyaXAtZGVzdGluYXRpb24ge1xcbiAgaGVpZ2h0OiAzMHB4OyB9XFxuXFxuLmJ1dHRvbi1xdW90ZSwgLmJ1dHRvbi1maWx0ZXIsIC5idXR0b24tc3VibWl0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODVBODk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLmJ1dHRvbi1zdWJtaXQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjBGRTsgfVxcblxcbiN0cmlwLXJlcXVlc3QtbWVzc2FnZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMCU7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdHJpcC1jYXJkcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL190cmlwLWZvcm0uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9DQ0FvQztFRENwQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7RUFDYixrQ0FBa0MsRUFBQTs7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QlksRUFBQTs7QUcwQmQ7RUFDRSxrQkFBa0IsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xcbiAgbWFyZ2luOiAwIDAgNyUgMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciAvIGF1dG8gMWZyO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDIuMmVtO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG5wIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgbWFyZ2luOiAycHg7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogOGZyIDFmcjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgbWFyZ2luOiAwIDAgMTUlIDA7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xcbiAgbWFpbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE1MHB4LCAzMCUpIDFmcjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcXG4gIGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDMlO1xcbiAgfVxcblxcbiAgbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblwiLFwiLy8gRk9OVFNcXG4kcHJpbWFyeS1mb250OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG5cXG4vLyBDT0xPUlNcXG4kYmx1ZTogIzAwQjBGRTtcXG4kbGlnaHQtZ3JheTogIzkwQTlDQTtcXG4kZGFyay1ncmF5OiAjNTg1QTg5O1xcblxcbi8vIEJPUkRFUlNcXG4kc2VjdGlvbi1ib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuXFxuLy8gQkFTSUMgQU5JTUFUSU9OU1xcbiR0cmFuc2l0aW9uOiAuNXMgZWFzZTtcXG5cIixcImhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuNCksIHJnYmEoMCwwLDAsMC40KSksdXJsKFxcXCIuLi9pbWFnZXMvcGxhbmUtYmFubmVyLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBwYWRkaW5nOiAwIDIlO1xcblxcbiAgaDEsXFxuICBoMixcXG4gIC5mYS1wbGFuZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW46IDglIDA7XFxuICBwYWRkaW5nOiAwIDMlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmF5O1xcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcXG4gIH1cXG59XFxuXFxuLmJ1dHRvbi1maWx0ZXIge1xcbiAgQGV4dGVuZCAuYnV0dG9uLXF1b3RlO1xcbiAgbWFyZ2luOiAyJSAwIDUlIDA7XFxufVxcblxcbiNuby10cmlwLWZpbHRlcnMge1xcbiAgQGV4dGVuZCAuYnV0dG9uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDIlIDAgNSUgMDtcXG59XFxuXFxuLnNpZ24taW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uc2lnbi1pbi1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcbiAgaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgbWFyZ2luOiAxJTtcXG4gIH1cXG5cXG4gIC5idXR0b24tc2lnbmluIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAkZGFyay1ncmF5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAkYmx1ZTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnNpZ24taW4tbGFiZWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBjbGlwOiByZWN0KDFweCAxcHggMXB4IDFweCk7XFxuICAgIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGNsaXAtcGF0aDogaW5zZXQoMXB4KTtcXG4gIH1cXG59XFxuXFxuLnNpZGViYXIge1xcbiAgYm9yZGVyLXJpZ2h0OiAkc2VjdGlvbi1ib3JkZXI7XFxuICBwYWRkaW5nOiAwIDEwJTtcXG5cXG4gIC5pY29uIHtcXG4gICAgaGVpZ2h0OiAxMjVweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gIH1cXG59XFxuXFxuLmFsbC10cmlwcyB7XFxuICBwYWRkaW5nOiAwIDYlIDAgMyU7XFxuXFxuICBoMiB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogJHNlY3Rpb24tYm9yZGVyO1xcbiAgfVxcbn1cXG5cXG4udHJpcC1zdGF0cyB7XFxuICBAZXh0ZW5kIC5zaWRlYmFyO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogOCUgNSU7XFxuICBtYXJnaW4tdG9wOiAxNSU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kOiAkbGlnaHQtZ3JheTtcXG5cXG4gIGgzIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gIH1cXG5cXG4gIC5zdGF0IHtcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gIH1cXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbiNzaWduLWluLWVycm9yLW1lc3NhZ2Uge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3VjY2VzcyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLmZhaWx1cmUge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcXG4gIC5hbGwtdHJpcHMge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA4JTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAuc2lnbi1pbi1mb3JtIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgLmJ1dHRvbi1zaWduaW4ge1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgaGVpZ2h0OiAxNzVweDtcXG5cXG4gICAgaDIge1xcbiAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5zaWduLWluLWNvbnRhaW5lciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuc2lnbi1pbi1mb3JtIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIC5idXR0b24tc2lnbmluIHtcXG4gICAgICBoZWlnaHQ6IDMzcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC50cmlwLXN0YXRzIC5zdGF0IHtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTcwcHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuXFxuICAgIGgxIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICB9XFxuXFxuICAuc2lkZWJhciB7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIH1cXG5cXG4gIC5pY29uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5hbGwtdHJpcHMge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDAgNSU7XFxuICB9XFxuXFxuICAuc2lnbi1pbi1mb3JtIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxuXFxuICAgIC5idXR0b24tc2lnbmluIHtcXG4gICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50cmlwLXN0YXRzIHtcXG4gICAgbWFyZ2luOiAzJSAwO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xcbiAgLmJ1dHRvbi1maWx0ZXIge1xcbiAgICBtYXJnaW46IDIlIDAgMiUgMDtcXG4gIH1cXG59XFxuXCIsXCIuY2FyZC1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA0JTtcXG4gIGdyaWQtcm93LWdhcDogNyU7XFxuXFxuICBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIG1hcmdpbjogMyUgMCA1JSAwO1xcbiAgfVxcbn1cXG5cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgJGRhcmstZ3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIHBhZGRpbmc6IDUlO1xcblxcbiAgaW1nIHtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcXG4gIH1cXG5cXG4gIC5jYXJkLWRlc3RpbmF0aW9uIHtcXG4gICAgaGVpZ2h0OiAxMiU7XFxuICB9XFxuXFxuICAucGVuZGluZyB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NzBweCkge1xcbiAgLmNhcmQtZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdyaWQtY29sdW1uLWdhcDogNiU7XFxuICAgIGdyaWQtcm93LWdhcDogNSU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgLmNhcmQtZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiA4JTtcXG4gICAgZ3JpZC1yb3ctZ2FwOiAzJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XFxuICAuY2FyZC1ncmlkIHtcXG4gICAgZ3JpZC1yb3ctZ2FwOiA2JTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gIC5jYXJkLWdyaWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDMlIDAgNiU7XFxuICB9XFxufVxcblwiLFwiLnRyaXAtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxubGFiZWwge1xcbiAgbWFyZ2luOiA1JSAwIDIlIDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaW5wdXQsXFxuI3RyaXAtZGVzdGluYXRpb24ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uYnV0dG9uLXF1b3RlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYnV0dG9uLXN1Ym1pdCB7XFxuICBAZXh0ZW5kIC5idXR0b24tcXVvdGU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcXG59XFxuXFxuI3RyaXAtcmVxdWVzdC1tZXNzYWdlIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNsYXNzIERlc3RpbmF0aW9uIHtcbiAgY29uc3RydWN0b3IobG9jYXRpb24pIHtcbiAgICB0aGlzLmlkID0gbG9jYXRpb24uaWRcbiAgICB0aGlzLm5hbWUgPSBsb2NhdGlvbi5kZXN0aW5hdGlvblxuICAgIHRoaXMubG9kZ2luZyA9IGxvY2F0aW9uLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5XG4gICAgdGhpcy5mbGlnaHRzID0gbG9jYXRpb24uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvblxuICAgIHRoaXMuaW1hZ2UgPSBsb2NhdGlvbi5pbWFnZVxuICAgIHRoaXMuYWx0ID0gbG9jYXRpb24uYWx0IHx8ICdiZWF1dGlmdWwgdHJhdmVsIGRlc3RpbmF0aW9uJ1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVzdGluYXRpb25cbiIsImNsYXNzIFRyYXZlbGVyIHtcbiAgY29uc3RydWN0b3IodHJhdmVsZXIpIHtcbiAgICB0aGlzLmlkID0gdHJhdmVsZXIuaWRcbiAgICB0aGlzLm5hbWUgPSB0cmF2ZWxlci5uYW1lXG4gICAgdGhpcy50eXBlID0gdHJhdmVsZXIudHJhdmVsZXJUeXBlXG4gICAgdGhpcy50cmlwcyA9IFtdXG4gIH1cblxuICBhZGRNYXRjaGluZ1RyaXBzKG5ld1RyaXApIHtcbiAgICBpZiAoKG5ld1RyaXAudXNlcklkID09PSB0aGlzLmlkKSAmJiAoIXRoaXMudHJpcHMuaW5jbHVkZXMobmV3VHJpcC5pZCkpKSB7XG4gICAgICB0aGlzLnRyaXBzLnB1c2gobmV3VHJpcClcbiAgICB9XG4gIH1cblxuICBhZGRNYXRjaGluZ0Rlc3RpbmF0aW9ucyhuZXdEZXN0aW5hdGlvbikge1xuICAgIHRoaXMudHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICAgIGlmICh0cmlwLmRlc3RpbmF0aW9uSWQgPT09IG5ld0Rlc3RpbmF0aW9uLmlkKSB7XG4gICAgICAgIHRyaXAuZGVzdGluYXRpb25EZXRhaWxzID0gbmV3RGVzdGluYXRpb25cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZm9ybWF0Q29zdChudW1iZXIpIHtcbiAgICByZXR1cm4gbnVtYmVyLnRvRml4ZWQoMikudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpXG4gIH1cblxuICBnZXRDdXJyZW50WWVhckFwcHJvdmVkVHJpcHMoKSB7XG4gICAgY29uc3QgdG9kYXkgPSBEYXRlLm5vdygpXG4gICAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSh0b2RheSkuZ2V0RnVsbFllYXIoKVxuXG4gICAgcmV0dXJuIHRoaXMudHJpcHMuZmlsdGVyKHRyaXAgPT4ge1xuICAgICAgcmV0dXJuIHRyaXAuZGF0ZS5pbmNsdWRlcyhjdXJyZW50WWVhcikgJiYgKHRyaXAuc3RhdHVzID09PSAnYXBwcm92ZWQnKVxuICAgIH0pXG4gIH1cblxuICBnZXRDdXJyZW50WWVhclNwZW5kKCkge1xuICAgIGxldCB0cmlwU3BlbmQgPSAwXG4gICAgbGV0IHRvdGFsU3BlbnQgPSAwXG4gICAgY29uc3QgdHJpcHNUaGlzWWVhciA9IHRoaXMuZ2V0Q3VycmVudFllYXJBcHByb3ZlZFRyaXBzKClcblxuICAgIHRyaXBzVGhpc1llYXIuZm9yRWFjaCh0cmlwID0+IHtcbiAgICAgIHRyaXBTcGVuZCArPSB0cmlwLmR1cmF0aW9uICogdHJpcC5kZXN0aW5hdGlvbkRldGFpbHMubG9kZ2luZ1xuICAgICAgdHJpcFNwZW5kICs9IHRyaXAudHJhdmVsZXJzICogdHJpcC5kZXN0aW5hdGlvbkRldGFpbHMuZmxpZ2h0c1xuICAgIH0pXG5cbiAgICB0b3RhbFNwZW50ID0gdHJpcFNwZW5kICsgKHRyaXBTcGVuZCAqIC4xKVxuXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0Q29zdCh0b3RhbFNwZW50KVxuICB9XG5cbiAgZ2V0VHJpcHNUYWtlbigpIHtcbiAgICBjb25zdCBhcHByb3ZlZCA9IHRoaXMudHJpcHMuZmlsdGVyKHRyaXAgPT4gdHJpcC5zdGF0dXMgPT09ICdhcHByb3ZlZCcpXG5cbiAgICByZXR1cm4gYXBwcm92ZWQubGVuZ3RoXG4gIH1cblxuICBnZXREYXlzVHJhdmVsZWQoKSB7XG4gICAgY29uc3QgYXBwcm92ZWQgPSB0aGlzLnRyaXBzLmZpbHRlcih0cmlwID0+IHRyaXAuc3RhdHVzID09PSAnYXBwcm92ZWQnKVxuICAgIGNvbnN0IHRvdGFsRGF5cyA9IGFwcHJvdmVkLnJlZHVjZSgodG90YWwsIHRyaXApID0+IHtcbiAgICAgIHRvdGFsICs9IHRyaXAuZHVyYXRpb25cbiAgICAgIHJldHVybiB0b3RhbFxuICAgIH0sIDApXG5cbiAgICByZXR1cm4gdG90YWxEYXlzXG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYXZlbGVyXG4iLCJjbGFzcyBUcmlwIHtcbiAgY29uc3RydWN0b3IodHJpcCkge1xuICAgIHRoaXMuaWQgPSB0cmlwLmlkXG4gICAgdGhpcy51c2VySWQgPSB0cmlwLnVzZXJJRFxuICAgIHRoaXMuZGVzdGluYXRpb25JZCA9IHRyaXAuZGVzdGluYXRpb25JRFxuICAgIHRoaXMudHJhdmVsZXJzID0gdHJpcC50cmF2ZWxlcnNcbiAgICB0aGlzLmRhdGUgPSB0cmlwLmRhdGVcbiAgICB0aGlzLmR1cmF0aW9uID0gdHJpcC5kdXJhdGlvblxuICAgIHRoaXMuc3RhdHVzID0gdHJpcC5zdGF0dXNcbiAgICB0aGlzLnN1Z2dlc3RlZEFjdGl2aXRpZXMgPSB0cmlwLnN1Z2dlc3RlZEFjdGl2aXRpZXNcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyaXBcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJjb25zdCBzaWduSW5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZ24taW4tZm9ybScpXG5jb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJuYW1lLWZpZWxkJylcbmNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQtZmllbGQnKVxuY29uc3Qgc2lnbkluRXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZ24taW4tZXJyb3ItbWVzc2FnZScpXG5jb25zdCB3ZWxjb21lVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWxjb21lLXRleHQnKVxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJylcbmNvbnN0IGFsbFRyaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC10cmlwcycpXG5jb25zdCBjYXJkR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWdyaWQnKVxuY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlLWNhcmQnKVxuY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaXAtc3RhcnQnKVxuY29uc3QgZHVyYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlwLWR1cmF0aW9uJylcbmNvbnN0IHRyYXZlbGVyc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaXAtdHJhdmVsZXJzJylcbmNvbnN0IGRlc3RpbmF0aW9uRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpcC1kZXN0aW5hdGlvbicpXG5jb25zdCB0cmlwQ29zdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlwLWNvc3QnKVxuY29uc3QgYnV0dG9uU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbi1zdWJtaXQnKVxuY29uc3QgdG90YWxTcGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3RhbC1zcGVudCcpXG5jb25zdCB0b3RhbFNwZW50TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3RhbC1zcGVudC1tZXNzYWdlJylcbmNvbnN0IHRyaXBzVGFrZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpcHMtdGFrZW4nKVxuY29uc3QgZGF5c1RyYXZlbGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RheXMtdHJhdmVsZWQnKVxuY29uc3QgdHJpcEVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlwLWVycm9yLW1lc3NhZ2UnKVxuY29uc3QgcmVxdWVzdE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpcC1yZXF1ZXN0LW1lc3NhZ2UnKVxuXG5jb25zdCBkb21VcGRhdGVzID0ge1xuXG4gIHZhbGlkYXRlVXNlcm5hbWUobGV0dGVycywgbnVtYmVycykge1xuICAgIGlmICgobGV0dGVycyAhPT0gJ3RyYXZlbGVyJykgfHxcbiAgICAgIChudW1iZXJzID09PSB1bmRlZmluZWQpIHx8XG4gICAgICAobnVtYmVycyA9PT0gJzAnKSB8fFxuICAgICAgKG51bWJlcnMgPT09ICcwMCcpIHx8XG4gICAgICAocGFyc2VJbnQobnVtYmVycykgPiA1MCkpIHtcbiAgICAgIHVzZXJuYW1lSW5wdXQuY2xhc3NOYW1lID0gJ2ZhaWx1cmUnXG4gICAgICBzaWduSW5FcnJvck1lc3NhZ2UuaW5uZXJUZXh0ID0gYFVzZXJuYW1lIG9yIHBhc3N3b3JkIGRvZXMgbm90IG1hdGNoLmBcbiAgICB9IGVsc2Uge1xuICAgICAgdXNlcm5hbWVJbnB1dC5jbGFzc05hbWUgPSAnc3VjY2VzcydcbiAgICB9XG4gIH0sXG5cbiAgdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZFZhbHVlKSB7XG4gICAgaWYgKHBhc3N3b3JkVmFsdWUgIT09ICd0cmF2ZWwyMDIwJykge1xuICAgICAgcGFzc3dvcmRJbnB1dC5jbGFzc05hbWUgPSAnZmFpbHVyZSdcbiAgICAgIHNpZ25JbkVycm9yTWVzc2FnZS5pbm5lclRleHQgPSBgVXNlcm5hbWUgb3IgcGFzc3dvcmQgZG9lcyBub3QgbWF0Y2guYFxuICAgIH0gZWxzZSB7XG4gICAgICBwYXNzd29yZElucHV0LmNsYXNzTmFtZSA9ICdzdWNjZXNzJ1xuICAgIH1cbiAgfSxcblxuICBhZGRXZWxjb21lTWVzc2FnZShmaXJzdE5hbWUpIHtcbiAgICB3ZWxjb21lVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICBhbGxUcmlwcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIHNpZ25JbkZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICB3ZWxjb21lVGV4dC5pbm5lclRleHQgPSBgV2VsY29tZSwgJHtmaXJzdE5hbWV9IWBcbiAgfSxcblxuICBhZGREZXN0aW5hdGlvbnNUb0Ryb3Bkb3duKGRlc3RpbmF0aW9uKSB7XG4gICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICBuZXdPcHRpb24uaW5uZXJUZXh0ID0gZGVzdGluYXRpb24ubmFtZVxuICAgIG5ld09wdGlvbi52YWx1ZSA9IGRlc3RpbmF0aW9uLm5hbWVcbiAgICBkZXN0aW5hdGlvbkRyb3Bkb3duLmFwcGVuZENoaWxkKG5ld09wdGlvbilcbiAgfSxcblxuICBhZGRDYXJkVG9Eb20odHJpcCkge1xuICAgIGNvbnN0IG5ld1RyaXBDYXJkID0gY2FyZFRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgbmV3VHJpcENhcmQucXVlcnlTZWxlY3RvcignaDMuY2FyZC1kZXN0aW5hdGlvbicpLmlubmVyVGV4dCA9IHRyaXAuZGVzdGluYXRpb25EZXRhaWxzLm5hbWVcbiAgICBuZXdUcmlwQ2FyZC5xdWVyeVNlbGVjdG9yKCdpbWcuY2FyZC1pbWFnZScpLnNyYyA9IHRyaXAuZGVzdGluYXRpb25EZXRhaWxzLmltYWdlXG4gICAgbmV3VHJpcENhcmQucXVlcnlTZWxlY3RvcignaW1nLmNhcmQtaW1hZ2UnKS5hbHQgPSB0cmlwLmRlc3RpbmF0aW9uRGV0YWlscy5hbHRcbiAgICBuZXdUcmlwQ2FyZC5xdWVyeVNlbGVjdG9yKCdwLmNhcmQtdHJhdmVsZXJzJykuaW5uZXJIVE1MID0gYDxzdHJvbmc+VHJhdmVsZXJzOjwvc3Ryb25nPiAke3RyaXAudHJhdmVsZXJzfWBcbiAgICBuZXdUcmlwQ2FyZC5xdWVyeVNlbGVjdG9yKCdwLmNhcmQtZGF0ZScpLmlubmVySFRNTCA9IGA8c3Ryb25nPlN0YXJ0IERhdGU6PC9zdHJvbmc+ICR7dHJpcC5kYXRlfWBcbiAgICBuZXdUcmlwQ2FyZC5xdWVyeVNlbGVjdG9yKCdwLmNhcmQtZHVyYXRpb24nKS5pbm5lckhUTUwgPSBgPHN0cm9uZz5EdXJhdGlvbjo8L3N0cm9uZz4gJHt0cmlwLmR1cmF0aW9ufSBkYXlzYFxuICAgIG5ld1RyaXBDYXJkLnF1ZXJ5U2VsZWN0b3IoJ3AuY2FyZC1sb2RnaW5nJykuaW5uZXJIVE1MID0gYDxzdHJvbmc+TG9kZ2luZzo8L3N0cm9uZz4gJCR7dHJpcC5kZXN0aW5hdGlvbkRldGFpbHMubG9kZ2luZ30gcGVyIG5pZ2h0YFxuICAgIG5ld1RyaXBDYXJkLnF1ZXJ5U2VsZWN0b3IoJ3AuY2FyZC1mbGlnaHRzJykuaW5uZXJIVE1MID0gYDxzdHJvbmc+RmxpZ2h0czo8L3N0cm9uZz4gJCR7dHJpcC5kZXN0aW5hdGlvbkRldGFpbHMuZmxpZ2h0c30gcGVyIHBlcnNvbmBcbiAgICBuZXdUcmlwQ2FyZC5xdWVyeVNlbGVjdG9yKCdwLmNhcmQtc3RhdHVzJykuaW5uZXJIVE1MID0gYDxzdHJvbmc+U3RhdHVzOjwvc3Ryb25nPiAke3RyaXAuc3RhdHVzfWBcblxuICAgIGlmICh0cmlwLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKSB7XG4gICAgICBuZXdUcmlwQ2FyZC5xdWVyeVNlbGVjdG9yKCdhcnRpY2xlJykuY2xhc3NMaXN0LmFkZCgncGVuZGluZycpXG4gICAgfSBlbHNlIGlmICh0cmlwLnN0YXR1cyA9PT0gJ2FwcHJvdmVkJykge1xuICAgICAgbmV3VHJpcENhcmQucXVlcnlTZWxlY3RvcignYXJ0aWNsZScpLmNsYXNzTGlzdC5hZGQoJ2FwcHJvdmVkJylcbiAgICB9XG5cbiAgICBjYXJkR3JpZC5hcHBlbmRDaGlsZChuZXdUcmlwQ2FyZClcbiAgfSxcblxuICBmaWx0ZXJUcmlwc0luRG9tKGNsYXNzMSwgY2xhc3MyKSB7XG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpXG4gICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgIGlmIChjYXJkLmNsYXNzTGlzdC5jb250YWlucyhjbGFzczEpKSB7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgIH0gZWxzZSBpZiAoY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3MyKSkge1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICBzaG93QWxsVHJpcHMoKSB7XG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpXG4gICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgIGlmIChjYXJkLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgc2hvd1N0YXRzKGN1cnJlbnRUcmF2ZWxlcikge1xuICAgIHRyaXBzVGFrZW4uaW5uZXJUZXh0ID0gYCR7Y3VycmVudFRyYXZlbGVyLmdldFRyaXBzVGFrZW4oKX1gXG4gICAgZGF5c1RyYXZlbGVkLmlubmVyVGV4dCA9IGAke2N1cnJlbnRUcmF2ZWxlci5nZXREYXlzVHJhdmVsZWQoKX1gXG4gICAgdG90YWxTcGVudC5pbm5lclRleHQgPSBgJCR7Y3VycmVudFRyYXZlbGVyLmdldEN1cnJlbnRZZWFyU3BlbmQoKX1gXG5cbiAgICBpZiAoY3VycmVudFRyYXZlbGVyLmdldEN1cnJlbnRZZWFyU3BlbmQoKSA9PT0gJzAuMDAnKSB7XG4gICAgICB0b3RhbFNwZW50TWVzc2FnZS5pbm5lclRleHQgPSAnVG90YWwgc3BlbnQgb24gdHJpcHMgc28gZmFyIHRoaXMgeWVhci4gVGltZSB0byBib29rIGEgbmV3IHRyaXAhJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0b3RhbFNwZW50TWVzc2FnZS5pbm5lclRleHQgPSBgVG90YWwgc3BlbnQgb24gdHJpcHMgc28gZmFyIHRoaXMgeWVhci4gWW91J3JlIHF1aXRlIHRoZSB0cmF2ZWxlciFgXG4gICAgfVxuICB9LFxuXG4gIHZhbGlkYXRlVHJpcElucHV0cygpIHtcbiAgICBjb25zdCBkYXRlVmFsdWUgPSBkYXRlSW5wdXQudmFsdWUudHJpbSgpXG4gICAgY29uc3QgZHVyYXRpb25WYWx1ZSA9IGR1cmF0aW9uSW5wdXQudmFsdWUudHJpbSgpXG4gICAgY29uc3QgdHJhdmVsZXJzVmFsdWUgPSB0cmF2ZWxlcnNJbnB1dC52YWx1ZS50cmltKClcbiAgICBjb25zdCBkZXN0VmFsdWUgPSBkZXN0aW5hdGlvbkRyb3Bkb3duLnZhbHVlLnRyaW0oKVxuXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgaW5wdXREYXRlID0gbmV3IERhdGUoZGF0ZVZhbHVlKVxuXG4gICAgaWYgKChkYXRlVmFsdWUgPT09ICcnKSB8fCAoaW5wdXREYXRlIDwgY3VycmVudERhdGUpKSB7XG4gICAgICBkYXRlSW5wdXQuY2xhc3NOYW1lID0gJ2ZhaWx1cmUnXG4gICAgICB0aGlzLnNldFRyaXBFcnJvcnMoKVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlSW5wdXQuY2xhc3NOYW1lID0gJ3N1Y2Nlc3MnXG4gICAgfVxuXG4gICAgaWYgKChkdXJhdGlvblZhbHVlID09PSAnJykgfHwgKGR1cmF0aW9uVmFsdWUgPT09ICcwJykpIHtcbiAgICAgIGR1cmF0aW9uSW5wdXQuY2xhc3NOYW1lID0gJ2ZhaWx1cmUnXG4gICAgICB0aGlzLnNldFRyaXBFcnJvcnMoKVxuICAgIH0gZWxzZSB7XG4gICAgICBkdXJhdGlvbklucHV0LmNsYXNzTmFtZSA9ICdzdWNjZXNzJ1xuICAgIH1cblxuICAgIGlmICgodHJhdmVsZXJzVmFsdWUgPT09ICcnKSB8fCAodHJhdmVsZXJzVmFsdWUgPT09ICcwJykpIHtcbiAgICAgIHRyYXZlbGVyc0lucHV0LmNsYXNzTmFtZSA9ICdmYWlsdXJlJ1xuICAgICAgdGhpcy5zZXRUcmlwRXJyb3JzKClcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhdmVsZXJzSW5wdXQuY2xhc3NOYW1lID0gJ3N1Y2Nlc3MnXG4gICAgfVxuXG4gICAgaWYgKGRlc3RWYWx1ZSA9PT0gJycpIHtcbiAgICAgIGRlc3RpbmF0aW9uRHJvcGRvd24uY2xhc3NOYW1lID0gJ2ZhaWx1cmUnXG4gICAgICB0aGlzLnNldFRyaXBFcnJvcnMoKVxuICAgIH0gZWxzZSB7XG4gICAgICBkZXN0aW5hdGlvbkRyb3Bkb3duLmNsYXNzTmFtZSA9ICdzdWNjZXNzJ1xuICAgIH1cbiAgfSxcblxuICBzZXRUcmlwRXJyb3JzKCkge1xuICAgIHRyaXBFcnJvck1lc3NhZ2UuaW5uZXJUZXh0ID0gJ0JlIHN1cmUgdG8gZmlsbCBvdXQgYWxsIGZpZWxkcyBhYm92ZSBhbmQgY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSBkYXRlIGlzIGluIHRoZSBmdXR1cmUgYmVmb3JlIHN1Ym1pdHRpbmcuJ1xuICAgIHRyaXBDb3N0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgYnV0dG9uU3VibWl0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIH0sXG5cbiAgcmVtb3ZlVHJpcFZhbGlkYXRpb24oKSB7XG4gICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ3N1Y2Nlc3MnKVxuICAgIGR1cmF0aW9uSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnc3VjY2VzcycpXG4gICAgdHJhdmVsZXJzSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnc3VjY2VzcycpXG4gICAgZGVzdGluYXRpb25Ecm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJylcbiAgfSxcblxuICBhZGRUcmlwUXVvdGVUb0RvbShjb3N0RXN0aW1hdGUpIHtcbiAgICB0cmlwQ29zdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIHRyaXBDb3N0LmlubmVySFRNTCA9IGA8c3Ryb25nPkVzdGltYXRlZCBDb3N0Ojwvc3Ryb25nPiAkJHtjb3N0RXN0aW1hdGV9YFxuICAgIGJ1dHRvblN1Ym1pdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICB9LFxuXG4gIHJlc2V0Rm9ybSgpIHtcbiAgICB0cmlwQ29zdC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGJ1dHRvblN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGRhdGVJbnB1dC52YWx1ZSA9ICcnXG4gICAgZHVyYXRpb25JbnB1dC52YWx1ZSA9ICcnXG4gICAgdHJhdmVsZXJzSW5wdXQudmFsdWUgPSAnJ1xuICAgIGRlc3RpbmF0aW9uRHJvcGRvd24udmFsdWUgPSAnJ1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICByZXF1ZXN0TWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIH0sIDMwMDApXG4gIH0sXG5cbiAgY2xlYXJUcmlwQ2FyZHMoKSB7XG4gICAgY2FyZEdyaWQucXVlcnlTZWxlY3RvckFsbCgnYXJ0aWNsZScpLmZvckVhY2goYXJ0aWNsZSA9PiBhcnRpY2xlLnJlbW92ZSgpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVVwZGF0ZXNcbiIsImNvbnN0IHRyaXBFcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpcC1lcnJvci1tZXNzYWdlJylcblxuY29uc3QgZmV0Y2hBcGkgPSB7XG4gIGdldFRyYXZlbGVyRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJhdmVsZXJzJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfSxcblxuICBnZXRTaW5nbGVUcmF2ZWxlcih0cmF2ZWxlcklkKSB7XG4gICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyYXZlbGVycy8ke3RyYXZlbGVySWR9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfSxcblxuICBnZXRUcmlwRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHMnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICB9LFxuXG4gIGdldERlc3RpbmF0aW9uRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvZGVzdGluYXRpb25zJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfSxcblxuICBwb3N0VHJpcFJlcXVlc3QodHJpcFJlcXVlc3QpIHtcbiAgICBjb25zdCBwb3N0Rm9ybWF0ID0ge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0cmlwUmVxdWVzdClcbiAgICB9XG5cbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHMnLCBwb3N0Rm9ybWF0KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdHJpcEVycm9yTWVzc2FnZS5pbm5lclRleHQgPSAnVW5hYmxlIHRvIHJlcXVlc3QgdHJpcC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmZXRjaEFwaVxuIiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcGxhbmUtYmFubmVyLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3VuZHJhd190cmF2ZWxfbW9kZV83c2Y0LnN2Z1wiOyIsImltcG9ydCAnLi9jc3MvaW5kZXguc2NzcydcbmltcG9ydCAnLi9pbWFnZXMvcGxhbmUtYmFubmVyLmpwZydcbmltcG9ydCAnLi9pbWFnZXMvdW5kcmF3X3RyYXZlbF9tb2RlXzdzZjQuc3ZnJ1xuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb21VcGRhdGVzLmpzJ1xuaW1wb3J0IGZldGNoQXBpIGZyb20gJy4vZmV0Y2hBcGkuanMnXG5pbXBvcnQgVHJhdmVsZXIgZnJvbSAnLi9UcmF2ZWxlci5qcydcbmltcG9ydCBEZXN0aW5hdGlvbiBmcm9tICcuL0Rlc3RpbmF0aW9uLmpzJ1xuaW1wb3J0IFRyaXAgZnJvbSAnLi9UcmlwLmpzJ1xuXG5jb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJuYW1lLWZpZWxkJylcbmNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQtZmllbGQnKVxuY29uc3QgYnV0dG9uU2lnbkluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luLWZvcm0tc3VibWl0JylcbmNvbnN0IHNpZ25JbkVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWduLWluLWVycm9yLW1lc3NhZ2UnKVxuY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaXAtc3RhcnQnKVxuY29uc3QgZHVyYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlwLWR1cmF0aW9uJylcbmNvbnN0IHRyYXZlbGVyc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaXAtdHJhdmVsZXJzJylcbmNvbnN0IGRlc3RpbmF0aW9uRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpcC1kZXN0aW5hdGlvbicpXG5jb25zdCBidXR0b25RdW90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b24tcXVvdGUnKVxuY29uc3QgYnV0dG9uU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbi1zdWJtaXQnKVxuY29uc3QgdHJpcEVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlwLWVycm9yLW1lc3NhZ2UnKVxuY29uc3QgcmVxdWVzdE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpcC1yZXF1ZXN0LW1lc3NhZ2UnKVxuY29uc3Qgbm9UcmlwRmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuby10cmlwLWZpbHRlcnMnKVxuY29uc3QgYXBwcm92ZWRUcmlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHByb3ZlZC10cmlwcycpXG5jb25zdCBwZW5kaW5nVHJpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVuZGluZy10cmlwcycpXG5cbmJ1dHRvblNpZ25Jbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2YWx1YXRlU2lnbkluRm9ybSlcbmJ1dHRvblF1b3RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZhbHVhdGVUcmlwRm9ybSlcbmJ1dHRvblN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlcXVlc3RUcmlwKVxubm9UcmlwRmlsdGVycy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBkb21VcGRhdGVzLnNob3dBbGxUcmlwcygpXG59KVxuYXBwcm92ZWRUcmlwcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBkb21VcGRhdGVzLmZpbHRlclRyaXBzSW5Eb20oJ3BlbmRpbmcnLCAnYXBwcm92ZWQnKVxufSlcbnBlbmRpbmdUcmlwcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBkb21VcGRhdGVzLmZpbHRlclRyaXBzSW5Eb20oJ2FwcHJvdmVkJywgJ3BlbmRpbmcnKVxufSlcblxuY29uc3QgYWxsRGVzdGluYXRpb25zID0gW11cbmNvbnN0IGFsbFRyaXBzID0gW11cbmxldCBjdXJyZW50VHJhdmVsZXJcblxuY29uc3QgZmV0Y2hlZFRyaXBEYXRhID0gZmV0Y2hBcGkuZ2V0VHJpcERhdGEoKVxuY29uc3QgZmV0Y2hlZERlc3RpbmF0aW9uRGF0YSA9IGZldGNoQXBpLmdldERlc3RpbmF0aW9uRGF0YSgpXG5cbmZ1bmN0aW9uIGV2YWx1YXRlU2lnbkluRm9ybShldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHVzZXJuYW1lVmFsdWUgPSB1c2VybmFtZUlucHV0LnZhbHVlLnRyaW0oKVxuICBjb25zdCBwYXNzd29yZFZhbHVlID0gcGFzc3dvcmRJbnB1dC52YWx1ZS50cmltKClcbiAgY29uc3Qgc3BsaXROYW1lID0gdXNlcm5hbWVWYWx1ZS5zcGxpdCgnJylcbiAgY29uc3QgbGV0dGVycyA9IHNwbGl0TmFtZS5zbGljZSgwLCA4KS5qb2luKCcnKVxuICBjb25zdCBudW1iZXJzID0gc3BsaXROYW1lLnNsaWNlKDgsIDEwKS5qb2luKCcnKVxuICBjb25zdCBjdXJyZW50VXNlcklkID0gcGFyc2VJbnQobnVtYmVycylcblxuICBkb21VcGRhdGVzLnZhbGlkYXRlVXNlcm5hbWUobGV0dGVycywgbnVtYmVycylcbiAgZG9tVXBkYXRlcy52YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkVmFsdWUpXG5cbiAgaWYgKHVzZXJuYW1lSW5wdXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWNjZXNzJykgJiZcbiAgICBwYXNzd29yZElucHV0LmNsYXNzTGlzdC5jb250YWlucygnc3VjY2VzcycpKSB7XG4gICAgc2lnbkluRXJyb3JNZXNzYWdlLmlubmVyVGV4dCA9ICcnXG4gICAgbG9hZERhc2hib2FyZChjdXJyZW50VXNlcklkKVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWREYXNoYm9hcmQoY3VycmVudFVzZXJJZCkge1xuICBjb25zdCBmZXRjaGVkU2luZ2xlVHJhdmVsZXIgPSBmZXRjaEFwaS5nZXRTaW5nbGVUcmF2ZWxlcihjdXJyZW50VXNlcklkKVxuXG4gIFByb21pc2UuYWxsKFtmZXRjaGVkU2luZ2xlVHJhdmVsZXIsIGZldGNoZWRUcmlwRGF0YSwgZmV0Y2hlZERlc3RpbmF0aW9uRGF0YV0pXG4gICAgLnRoZW4odmFsdWVzID0+IHtcbiAgICAgIGdlbmVyYXRlVHJhdmVsZXIodmFsdWVzWzBdKVxuICAgICAgZmluZFRyYXZlbGVyVHJpcHModmFsdWVzWzFdKVxuICAgICAgZ2VuZXJhdGVUcmlwRGVzdGluYXRpb25zKHZhbHVlc1syXSlcbiAgICAgIGNyZWF0ZVRyaXBDYXJkcygpXG4gICAgfSlcbiAgICAuY2F0Y2goaGFuZGxlU2VydmVyTWVzc2FnZXMpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNlcnZlck1lc3NhZ2VzKGVycm9yKSB7XG4gIHNpZ25JbkVycm9yTWVzc2FnZS5pbm5lclRleHQgPSBgU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSByZWZyZXNoIHRoZSBwYWdlIG9yIHRyeSBhZ2FpbiBsYXRlci5gXG4gIGNvbnNvbGUubG9nKGVycm9yKVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRyYXZlbGVyKHRyYXZlbGVyRGF0YSkge1xuICBjdXJyZW50VHJhdmVsZXIgPSBuZXcgVHJhdmVsZXIodHJhdmVsZXJEYXRhKVxuICBsZXQgZmlyc3ROYW1lID0gY3VycmVudFRyYXZlbGVyLm5hbWUuc3BsaXQoJyAnKVswXVxuICBkb21VcGRhdGVzLmFkZFdlbGNvbWVNZXNzYWdlKGZpcnN0TmFtZSlcbn1cblxuZnVuY3Rpb24gZmluZFRyYXZlbGVyVHJpcHModHJpcERhdGEpIHtcbiAgdHJpcERhdGEudHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICBsZXQgbmV3VHJpcCA9IG5ldyBUcmlwKHRyaXApXG4gICAgYWxsVHJpcHMucHVzaCh0cmlwKVxuICAgIGN1cnJlbnRUcmF2ZWxlci5hZGRNYXRjaGluZ1RyaXBzKG5ld1RyaXApXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVHJpcERlc3RpbmF0aW9ucyhkZXN0aW5hdGlvbkRhdGEpIHtcbiAgYWxwaGFiZXRpemVEZXN0aW5hdGlvbnMoZGVzdGluYXRpb25EYXRhKVxuICBkZXN0aW5hdGlvbkRhdGEuZGVzdGluYXRpb25zLmZvckVhY2gobG9jYXRpb24gPT4ge1xuICAgIGxldCBuZXdEZXN0aW5hdGlvbiA9IG5ldyBEZXN0aW5hdGlvbihsb2NhdGlvbilcbiAgICBhbGxEZXN0aW5hdGlvbnMucHVzaChuZXdEZXN0aW5hdGlvbilcbiAgICBkb21VcGRhdGVzLmFkZERlc3RpbmF0aW9uc1RvRHJvcGRvd24obmV3RGVzdGluYXRpb24pXG4gICAgY3VycmVudFRyYXZlbGVyLmFkZE1hdGNoaW5nRGVzdGluYXRpb25zKG5ld0Rlc3RpbmF0aW9uKVxuICB9KVxuICBkb21VcGRhdGVzLnNob3dTdGF0cyhjdXJyZW50VHJhdmVsZXIpXG59XG5cbmZ1bmN0aW9uIGFscGhhYmV0aXplRGVzdGluYXRpb25zKGRlc3RpbmF0aW9uRGF0YSkge1xuICBkZXN0aW5hdGlvbkRhdGEuZGVzdGluYXRpb25zLnNvcnQoKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYS5kZXN0aW5hdGlvbi5sb2NhbGVDb21wYXJlKGIuZGVzdGluYXRpb24pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHNvcnRUcmlwc0J5RGF0ZSgpIHtcbiAgcmV0dXJuIGN1cnJlbnRUcmF2ZWxlci50cmlwcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGIuZGF0ZSkgLSBuZXcgRGF0ZShhLmRhdGUpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRyaXBDYXJkcygpIHtcbiAgc29ydFRyaXBzQnlEYXRlKClcbiAgY3VycmVudFRyYXZlbGVyLnRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgZG9tVXBkYXRlcy5hZGRDYXJkVG9Eb20odHJpcClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmluZERlc3RpbmF0aW9uKCkge1xuICByZXR1cm4gYWxsRGVzdGluYXRpb25zLmZpbmQobG9jYXRpb24gPT4ge1xuICAgIHJldHVybiBsb2NhdGlvbi5uYW1lID09PSBkZXN0aW5hdGlvbkRyb3Bkb3duLnZhbHVlXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGV2YWx1YXRlVHJpcEZvcm0oZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gIGRvbVVwZGF0ZXMudmFsaWRhdGVUcmlwSW5wdXRzKClcblxuICBpZiAoZGF0ZUlucHV0LmNsYXNzTGlzdC5jb250YWlucygnc3VjY2VzcycpICYmXG4gICAgZHVyYXRpb25JbnB1dC5jbGFzc0xpc3QuY29udGFpbnMoJ3N1Y2Nlc3MnKSAmJlxuICAgIHRyYXZlbGVyc0lucHV0LmNsYXNzTGlzdC5jb250YWlucygnc3VjY2VzcycpICYmXG4gICAgZGVzdGluYXRpb25Ecm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ3N1Y2Nlc3MnKSkge1xuICAgIHF1b3RlVHJpcCgpXG4gICAgdHJpcEVycm9yTWVzc2FnZS5pbm5lclRleHQgPSAnJ1xuICB9XG59XG5cbmZ1bmN0aW9uIHF1b3RlVHJpcCgpIHtcbiAgbGV0IHRyaXBFc3RpbWF0ZSA9IDBcbiAgbGV0IHRvdGFsRXN0aW1hdGUgPSAwXG4gIGNvbnN0IG1hdGNoaW5nRGVzdCA9IGZpbmREZXN0aW5hdGlvbigpXG5cbiAgdHJpcEVzdGltYXRlICs9IGR1cmF0aW9uSW5wdXQudmFsdWUgKiBtYXRjaGluZ0Rlc3QubG9kZ2luZ1xuICB0cmlwRXN0aW1hdGUgKz0gdHJhdmVsZXJzSW5wdXQudmFsdWUgKiBtYXRjaGluZ0Rlc3QuZmxpZ2h0c1xuXG4gIHRvdGFsRXN0aW1hdGUgPSBjdXJyZW50VHJhdmVsZXIuZm9ybWF0Q29zdCh0cmlwRXN0aW1hdGUgKyAodHJpcEVzdGltYXRlICogLjEpKVxuXG4gIGRvbVVwZGF0ZXMuYWRkVHJpcFF1b3RlVG9Eb20odG90YWxFc3RpbWF0ZSlcbiAgZG9tVXBkYXRlcy5yZW1vdmVUcmlwVmFsaWRhdGlvbigpXG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZVZhbHVlKSB7XG4gIHJldHVybiBkYXRlVmFsdWUucmVwbGFjZSgvLS9nLCAnLycpXG59XG5cbmZ1bmN0aW9uIHJlcXVlc3RUcmlwKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgbWF0Y2hpbmdEZXN0ID0gZmluZERlc3RpbmF0aW9uKClcblxuICBjb25zdCB0cmlwUmVxdWVzdCA9IHtcbiAgICBpZDogRGF0ZS5ub3coKSxcbiAgICB1c2VySUQ6IGN1cnJlbnRUcmF2ZWxlci5pZCxcbiAgICBkZXN0aW5hdGlvbklEOiBtYXRjaGluZ0Rlc3QuaWQsXG4gICAgdHJhdmVsZXJzOiBwYXJzZUludCh0cmF2ZWxlcnNJbnB1dC52YWx1ZSksXG4gICAgZGF0ZTogZm9ybWF0RGF0ZShkYXRlSW5wdXQudmFsdWUpLFxuICAgIGR1cmF0aW9uOiBwYXJzZUludChkdXJhdGlvbklucHV0LnZhbHVlKSxcbiAgICBzdGF0dXM6ICdwZW5kaW5nJyxcbiAgICBzdWdnZXN0ZWRBY3Rpdml0aWVzOiBbXVxuICB9XG5cbiAgZmV0Y2hBcGkucG9zdFRyaXBSZXF1ZXN0KHRyaXBSZXF1ZXN0KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IG5ld1RyaXAgPSBuZXcgVHJpcCh0cmlwUmVxdWVzdClcbiAgICAgIGN1cnJlbnRUcmF2ZWxlci50cmlwcy5wdXNoKG5ld1RyaXApXG4gICAgICBjdXJyZW50VHJhdmVsZXIuYWRkTWF0Y2hpbmdEZXN0aW5hdGlvbnMobWF0Y2hpbmdEZXN0KVxuICAgICAgZG9tVXBkYXRlcy5jbGVhclRyaXBDYXJkcygpXG4gICAgICBjcmVhdGVUcmlwQ2FyZHMoKVxuICAgICAgcmVxdWVzdE1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgIGRvbVVwZGF0ZXMucmVzZXRGb3JtKClcbiAgICB9KS5jYXRjaChoYW5kbGVTZXJ2ZXJNZXNzYWdlcylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=