/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _templateObject = _taggedTemplateLiteral(['just some other random tag'], ['just some other random tag']);

	var _module = __webpack_require__(1);

	var _module2 = _interopRequireDefault(_module);

	var _plurals = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function test() {
	    console.log('test message');
	    (0, _plurals.plural)();
	}

	function test2() {
	    var a = 5;
	    console.log('test message with formatting ' + a);
	    (0, _module2.default)();
	}

	function test3() {
	    var a = 5;
	    console.log(other(_templateObject));
	    (0, _module2.default)();
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _templateObject = _taggedTemplateLiteral(["literal from module"], ["literal from module"]);

	exports.moduleFunc = moduleFunc;
	exports.moduleFunc2 = moduleFunc2;

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function moduleFunc() {
	    console.log("literal from module");
	}

	function moduleFunc2() {
	    console.log(other(_templateObject));
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.plural = plural;
	function plural(n) {
		return "this one returns " + n + " bananas";
	}

	function plural2() {
		return "this one returns " + n + " bananas";
	}

/***/ }
/******/ ]);