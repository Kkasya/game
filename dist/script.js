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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  for (var _len = arguments.length, dataAttr = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    dataAttr[_key - 4] = arguments[_key];
  }

  if (dataAttr.length) {
    dataAttr.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          attrName = _ref2[0],
          attrValue = _ref2[1];

      return element.setAttribute(attrName, attrValue);
    });
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

  initArray[initArray.length - 1] = ' ';
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
        randArray[randIndex] = ' ';
        emptyIndex = randIndex;
      }
    }
  }

  return randArray;
}

/***/ }),

/***/ "./src/js/game/timeStep.js":
/*!*********************************!*\
  !*** ./src/js/game/timeStep.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getTime
/* harmony export */ });
var hour = 0;
var min = 0;
var sec = 0;
function getTime(stopwatchNew) {
  if (stopwatchNew) {
    hour = 0;
    min = 0;
    sec = 0;
  }

  var h,
      m,
      s = '';
  sec++;

  if (sec >= 60) {
    min++;
    sec -= 60;
  }

  if (min >= 60) {
    hour++;
    min -= 60;
  }

  if (sec < 10) {
    s = ':0' + sec;
  } else s = ':' + sec;

  if (min < 10) {
    m = ':0' + min;
  } else m = ':' + min;

  if (hour < 10) {
    h = "0" + hour;
  } else h = hour;

  return h + m + s;
}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export steps [provided] [no usage info] [missing usage info prevents renaming] */
/*! export times [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "times": () => /* binding */ times,
/* harmony export */   "steps": () => /* binding */ steps,
/* harmony export */   "default": () => /* binding */ Puzzle
/* harmony export */ });
/* harmony import */ var _base_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/create */ "./src/js/base/create.js");
/* harmony import */ var _game_timeStep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/timeStep */ "./src/js/game/timeStep.js");
/* harmony import */ var _game_arrays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/arrays */ "./src/js/game/arrays.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var audio = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('audio', '');
var times = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'times', ' 00:00:00');
var timeBlock = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'time', [(0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('span', null, 'Time: '), times]);
var steps = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'steps', '0');
var stepBlock = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'step', [(0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('span', null, 'Steps: '), steps]);
var header = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'header', [audio, (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('h1', '', 'Gem Puzzle'), (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'time-step', [timeBlock, stepBlock])]);
var menuBtn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('button', 'menuBtn', 'Menu');
var footer = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'footer', menuBtn);
var continueBtn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'hide', 'Continue');
var gameBtn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'start', 'New game');
var solutionBtn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'solution', 'Solution');
var saveBtn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'save', 'Save game');
var soundBtn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'sound', 'Sound');
var menu = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'menu', [continueBtn, gameBtn, saveBtn, solutionBtn, soundBtn]);
var main = '';
var stopwatchNew = false;

var Puzzle = /*#__PURE__*/function () {
  function Puzzle(numberRows) {
    _classCallCheck(this, Puzzle);

    this.numberRows = numberRows;
    this.itemEmpty;
    this.stopwatch;
    this.move = 0;
  }

  _createClass(Puzzle, [{
    key: "stopwatchF",
    value: function stopwatchF() {
      clearInterval(this.stopwatch);
      this.stopwatch = setInterval(function () {
        times.innerHTML = (0,_game_timeStep__WEBPACK_IMPORTED_MODULE_1__.default)(stopwatchNew);
      }, 1000);
      setTimeout(function () {
        stopwatchNew = false;
      }, 1500);
    }
  }, {
    key: "init",
    value: function init(array) {
      var _this = this;

      var childMain = [];

      var childs = function childs() {
        array.forEach(function (i, index) {
          var item = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'item', "".concat(i));
          item.style.order = index;
          childMain.push(item);
          item.addEventListener('click', function () {
            return _this.replace(item);
          });
        });
        _this.itemEmpty = childMain.find(function (child) {
          return child.innerHTML == " ";
        });

        _this.itemEmpty.classList.add('hide');

        childMain.push(menu);
        return childMain;
      };

      main = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('main', 'container', childs());
      document.body.prepend((0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'wrapper_body', [header, main, footer]));
      gameBtn.addEventListener('click', function () {
        times.innerHTML = '00:00:00';
        _this.move = 0;
        stopwatchNew = true;

        _this.showGame();
      });
      menuBtn.addEventListener('click', function () {
        if (menu.classList.contains('hide')) {
          menu.classList.remove('hide');
          clearInterval(_this.stopwatch);
          continueBtn.classList.remove('hide');
        }
      });
      continueBtn.addEventListener('click', function () {
        menu.classList.add('hide');

        _this.stopwatchF();
      });
    }
  }, {
    key: "showGame",
    value: function showGame() {
      menu.classList.add('hide');
      document.body.innerHTML = '';
      this.init(_game_arrays__WEBPACK_IMPORTED_MODULE_2__.randomArray(this.numberRows));
      steps.innerHTML = this.move;
      this.stopwatchF();
    }
  }, {
    key: "replace",
    value: function replace(item) {
      var empty = this.itemEmpty.style.order;
      var itemOrder = item.style.order;

      if (item.style.order != empty) {
        if (Math.abs(empty - itemOrder) == 4 || Math.abs(empty - itemOrder) == 1) {
          this.itemEmpty.style.setProperty('order', itemOrder);
          item.style.setProperty('order', empty);
          this.move++;
          steps.innerHTML = this.move;
        }
      }
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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=script.js.map