/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! export numberRows [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "numberRows": () => /* binding */ numberRows
/* harmony export */ });
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main */ "./src/js/main.js");
/* harmony import */ var _js_game_arrays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/game/arrays */ "./src/js/game/arrays.js");
;


var numberRows = 4;
var initArray = _js_game_arrays__WEBPACK_IMPORTED_MODULE_2__.initialArray(numberRows);
new _js_main__WEBPACK_IMPORTED_MODULE_1__.default(numberRows).init(initArray);

/***/ }),

/***/ "./src/js/base/create.js":
/*!*******************************!*\
  !*** ./src/js/base/create.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ create
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function create(elem, classes, childs, parent) {
  var element = null;

  try {
    element = document.createElement(elem);
  } catch (error) {
    throw new Error('Unable to create HTMLElement');
  }

  if (classes) {
    var _element$classList;

    (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classes.split()));
  }

  if (childs && Array.isArray(childs)) {
    childs.forEach(function (child) {
      child && element.appendChild(child);
    });
  } else if (childs && _typeof(childs) === 'object') {
    element.appendChild(childs);
  } else if (childs && typeof childs === 'string') {
    element.innerHTML = childs;
  }

  if (parent) {
    parent.appendChild(element);
  }

  return element;
}

/***/ }),

/***/ "./src/js/game/arrays.js":
/*!*******************************!*\
  !*** ./src/js/game/arrays.js ***!
  \*******************************/
/*! namespace exports */
/*! export initialArray [provided] [no usage info] [missing usage info prevents renaming] */
/*! export randomArray [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialArray": () => /* binding */ initialArray,
/* harmony export */   "randomArray": () => /* binding */ randomArray
/* harmony export */ });
function initialArray(numberRows) {
  var initArray = [];

  for (var i = 0; i < numberRows * numberRows; i++) {
    initArray.push(i + 1);
  }

  return initArray;
}
function randomArray(numberRows) {
  var initArray = initialArray(numberRows);
  var emptyIndex = initArray.length - 1;
  var randArray = initArray;

  for (var i = 0; i < 2000; i++) {
    var randIndex = Math.floor(Math.random() * Math.floor(initArray.length));

    if (randIndex != emptyIndex) {
      if (Math.abs(emptyIndex - randIndex) == 4 || Math.abs(emptyIndex - randIndex) == 1) {
        randArray[emptyIndex] = randArray[randIndex];
        randArray[randIndex] = '';
        emptyIndex = randIndex;
      }
    }
  }

  return randArray;
}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Puzzle
/* harmony export */ });
/* harmony import */ var _base_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/create */ "./src/js/base/create.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _game_arrays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/arrays */ "./src/js/game/arrays.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var audio = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('audio', '');
var header = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'header', [audio, (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('h1', '', 'Gem Puzzle'), (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'time-step', [(0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'time', 'time'), (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'step', 'step')])]);
var footer = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'footer', [(0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('button', 'solution', 'Solution')]);
var gameBtn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('button', 'start', 'New game');
var soundBtn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('button', 'sound', 'Sound');
var menu = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'menu', [gameBtn, soundBtn]);

var Puzzle = /*#__PURE__*/function () {
  function Puzzle(numberRows) {
    _classCallCheck(this, Puzzle);

    this.numberRows = numberRows;
    this.initial = true;
  }

  _createClass(Puzzle, [{
    key: "init",
    value: function init(array) {
      var _this = this;

      var childMain = [];

      var childs = function childs() {
        array.forEach(function (i) {
          childMain.push((0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'item', "".concat(i)));
        });
        childMain.push(menu);
        return childMain;
      };

      var main = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('main', 'container', childs());
      document.body.prepend((0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'wrapper_body', [header, main, footer]));
      if (this.initial) gameBtn.addEventListener('click', function () {
        return _this.showGame();
      });
      return this;
    }
  }, {
    key: "showGame",
    value: function showGame() {
      menu.classList.add('hide');
      this.initial = false;
      document.body.innerHTML = '';
      this.init(_game_arrays__WEBPACK_IMPORTED_MODULE_2__.randomArray(this.numberRows));
    }
  }]);

  return Puzzle;
}();


;

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;
//# sourceMappingURL=script.js.map