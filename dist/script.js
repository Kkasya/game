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

    (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classes.split(' ')));
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
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initialArray [provided] [no usage info] [missing usage info prevents renaming] */
/*! export randomArray [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialArray": () => /* binding */ initialArray,
/* harmony export */   "randomArray": () => /* binding */ randomArray,
/* harmony export */   "default": () => /* binding */ chooseClass
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
  var moveArray = [];

  for (var i = 0; i < numberRows * numberRows * 30; i++) {
    var randIndex = Math.floor(Math.random() * Math.floor(initArray.length));

    if (randIndex != emptyIndex) {
      if (Math.abs(emptyIndex - randIndex) == numberRows || Math.abs(emptyIndex - randIndex) == 1) {
        if (!(((emptyIndex + 1) % numberRows === 0 || (randIndex + 1) % numberRows === 0) && (emptyIndex % numberRows === 0 || randIndex % numberRows === 0))) {
          if (!moveArray[moveArray.length - 1] || !(moveArray[moveArray.length - 1].indexOf(randIndex) !== -1 && moveArray[moveArray.length - 1].indexOf(emptyIndex) !== -1)) {
            moveArray.push([emptyIndex, randIndex]);
            randArray[emptyIndex] = randArray[randIndex];
            randArray[randIndex] = ' ';
            emptyIndex = randIndex;
          }
        }
      }
    }
  }

  return {
    randArray: randArray,
    moveArray: moveArray
  };
}
function chooseClass(difference, numberRows) {
  var classSlide;
  if (difference === 1) classSlide = 'slide-right';
  if (difference === -1) classSlide = 'slide-left';
  if (difference === numberRows) classSlide = 'slide-top';
  if (difference === -numberRows) classSlide = 'slide-bottom';
  return classSlide;
}

/***/ }),

/***/ "./src/js/game/scores.js":
/*!*******************************!*\
  !*** ./src/js/game/scores.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getScores
/* harmony export */ });
function getScores() {
  var scoreArray = [];

  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var score = void 0;

    if (+key) {
      score = JSON.parse(localStorage.getItem(key));
      if (score.moves) scoreArray.push(score);
    }
  }

  return scoreArray.sort(function (a, b) {
    return a.moves > b.moves ? 1 : -1;
  });
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
function getTime(stopwatchNew, stopwatchSave) {
  if (stopwatchNew) {
    hour = 0;
    min = 0;
    sec = 0;
  }

  if (stopwatchSave) {
    if (localStorage.getItem('sec')) {
      sec = +localStorage.getItem('sec');
    }

    if (localStorage.getItem('min')) {
      min = +localStorage.getItem('min');
    }

    if (localStorage.getItem('hour')) {
      hour = +localStorage.getItem('hour');
    }
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
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Puzzle
/* harmony export */ });
/* harmony import */ var _base_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/create */ "./src/js/base/create.js");
/* harmony import */ var _game_timeStep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/timeStep */ "./src/js/game/timeStep.js");
/* harmony import */ var _game_arrays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/arrays */ "./src/js/game/arrays.js");
/* harmony import */ var _game_scores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/scores */ "./src/js/game/scores.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var times = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'times', ' 00:00:00');
var timeBlock = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'time', [(0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('span', null, 'Time: '), times]);
var steps = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'steps', '0');
var stepBlock = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'step', [(0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('span', null, 'Steps: '), steps]);
var header = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'header', [(0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('h1', '', 'Gem Puzzle'), (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'time-step', [timeBlock, stepBlock])]);
var menuBtn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('button', 'menuBtn', 'Menu');
var footer = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'footer', menuBtn);
var continueBtn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'hide', 'Continue');
var pictureBtn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', '', 'Use picture');
var numberBtn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'none', 'Use numbers');
var gameBtn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'start', 'New game');
var game3Btn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'start', '3х3');
var game4Btn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'start', '4х4');
var game5Btn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'start', '5х5');
var game6Btn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'start', '6х6');
var game7Btn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'start', '7х7');
var game8Btn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'start', '8х8');
var gameSize = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'gameSize none', [game3Btn, game4Btn, game5Btn, game6Btn, game7Btn, game8Btn]);
var solutionBtn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'solution', 'Solution');
var saveBtn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'save', 'Save game');
var scoreBtn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', '', 'Best scores');
var audioIcon = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'none-audio');
var audioBtn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', '', 'Sound');
var soundBtn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'sound', [audioIcon, audioBtn]);
var menu = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'menu', [continueBtn, pictureBtn, numberBtn, gameBtn, gameSize, saveBtn, solutionBtn, scoreBtn, soundBtn]);
var message1 = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', '', "Yippee!");
var message2 = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'message', "You solved the puzzle in ");
var messageResult = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div');
var question = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('p', '', 'What is your name?');
var nameInput = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'name', '', null, ['contenteditable', true]);
var askName = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'ask-name', [question, nameInput]);
var messageWin = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'messageWin hide', [message1, message2, messageResult, askName]);
var messageSave = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'message-save hide', 'Your game is saved');
var nameTable = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'name-table', 'Best scores');
var trHeader = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('tr', 'table-header', [(0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('td', '', "№"), (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('td', '', 'Name'), (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('td', '', 'Size'), (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('td', '', 'Moves')]);
var backBtn = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'back', 'Back');
var table;
var stopwatchNew = false;
var stopwatchSave = false;
var audioItem = new Audio('./src/sounds/move.mp3');
var audioField = new Audio('./src/sounds/field.mp3');
var numberPictures = 150;

var Puzzle = /*#__PURE__*/function () {
  function Puzzle(numberRows) {
    _classCallCheck(this, Puzzle);

    this.numberRows = numberRows;
    this.move = 0;
    this.isSound = false;
    this.game = false;
    this.usePicture = false;
    this.src = '';
  }

  _createClass(Puzzle, [{
    key: "stopwatchF",
    value: function stopwatchF() {
      clearInterval(this.stopwatch);
      this.stopwatch = setInterval(function () {
        times.innerHTML = (0,_game_timeStep__WEBPACK_IMPORTED_MODULE_1__.default)(stopwatchNew, stopwatchSave);
      }, 1000);
      setTimeout(function () {
        stopwatchNew = false;
        stopwatchSave = false;
      }, 1500);
    }
  }, {
    key: "init",
    value: function init(array) {
      this.initArray = _game_arrays__WEBPACK_IMPORTED_MODULE_2__.initialArray(this.numberRows);
      if (localStorage.getItem('array')) array = this.getSaveGame();
      this.main = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('main', 'container', this.getItems(array));
      this.main.classList.add("size".concat(this.numberRows));
      if (localStorage.getItem('array')) menu.classList.add('hide');
      document.body.prepend((0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'wrapper_body', [header, this.main, footer]));
      this.handler();
    }
  }, {
    key: "handler",
    value: function handler() {
      var _this = this;

      gameBtn.addEventListener('click', function () {
        return _this.chooseGame();
      });
      menuBtn.addEventListener('click', function () {
        return _this.startMenu();
      });
      continueBtn.addEventListener('click', function () {
        return _this.continueGame();
      });
      saveBtn.addEventListener('click', function () {
        return _this.saveGame();
      });
      scoreBtn.addEventListener('click', function () {
        return _this.showScores();
      });
      backBtn.addEventListener('click', function () {
        return _this.startMenu();
      });
      soundBtn.addEventListener('click', function () {
        !_this.isSound ? _this.playSound() : _this.stopSound();
      });
      nameInput.addEventListener('keypress', function (e) {
        return _this.setName(e);
      });
      pictureBtn.addEventListener('click', function () {
        return _this.addPicture();
      });
      numberBtn.addEventListener('click', function () {
        return _this.removePicture();
      });
      solutionBtn.addEventListener('click', function () {
        return _this.solvePuzzle();
      });
    }
  }, {
    key: "getSaveGame",
    value: function getSaveGame() {
      var array = JSON.parse(localStorage.getItem('array'));

      if (localStorage.getItem('src')) {
        this.src = localStorage.getItem('src');
        this.usePicture = true;
      }

      this.move = localStorage.getItem('move');
      this.numberRows = +localStorage.getItem('numberRows');
      times.innerHTML = "".concat(localStorage.getItem('hour'), ":").concat(localStorage.getItem('min'), ":").concat(localStorage.getItem('sec'));
      steps.innerHTML = this.move;
      stopwatchSave = true;
      this.stopwatchF();
      return array;
    }
  }, {
    key: "getItems",
    value: function getItems(array) {
      var _this2 = this;

      var childMain = [];
      var sizeBackground = 100 / (this.numberRows - 1);
      var randIndex = Math.floor(Math.random() * Math.floor(numberPictures));
      if (!this.src) this.src = "./src/images/box/".concat(randIndex, ".jpg");
      array.forEach(function (i, index) {
        var item = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'item', "".concat(i));
        item.style.order = index;

        if (_this2.usePicture) {
          item.style.fontSize = 0;
          item.style.backgroundImage = "url(".concat(_this2.src, ")");
          item.style.backgroundSize = "".concat(_this2.numberRows * 100, "% auto");
          item.style.backgroundPositionY = "".concat(Math.trunc((i - 1) / _this2.numberRows) * sizeBackground, "%");

          while (i > _this2.numberRows) {
            i -= _this2.numberRows;
          }

          item.style.backgroundPositionX = "".concat((i - 1) * sizeBackground, "%");
        }

        childMain.push(item);
        item.addEventListener('mousedown', function (e) {
          return _this2.dragDrop(e, item, _this2.main);
        });
      });
      this.itemEmpty = childMain.find(function (child) {
        return child.innerHTML === " ";
      });
      this.itemEmpty.classList.add('opacity');
      childMain.push(menu, messageWin, messageSave);
      return childMain;
    }
  }, {
    key: "showGame",
    value: function showGame() {
      menu.classList.add('hide');
      document.body.innerHTML = '';
      this.arr = _game_arrays__WEBPACK_IMPORTED_MODULE_2__.randomArray(this.numberRows);
      this.init(this.arr.randArray);
      steps.innerHTML = this.move;
      this.moveArray = [];
      this.stopwatchF();
      this.game = true;
    }
  }, {
    key: "dragDrop",
    value: function dragDrop(e, item, main) {
      var _this3 = this;

      var itemClone = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'item');
      itemClone.classList.add('opacity');
      itemClone.style.order = item.style.order;
      var moveMouse = false;
      var currentDropable = null;
      var shiftX = e.clientX - item.getBoundingClientRect().left;
      var shiftY = e.clientY - item.getBoundingClientRect().top;
      moveAt(e.pageX, e.pageY);

      function moveAt(pageX, pageY) {
        item.style.left = pageX - shiftX - 560 + 'px';
        item.style.top = pageY - shiftY - 165 + 'px';
      }

      function onMouseMove(e) {
        main.appendChild(itemClone);
        item.style.position = 'absolute';
        item.style.zIndex = 1000;
        moveAt(e.pageX, e.pageY);
        moveMouse = true;
        item.hidden = true;
        var elem = document.elementFromPoint(e.clientX, e.clientY);
        item.hidden = false;
        if (!elem) return;
        var dropElem = elem.closest('.opacity');
        currentDropable = dropElem;
      }

      var listen = function listen() {
        item.removeEventListener('mousemove', onMouseMove);
        item.removeEventListener('mouseup', listen);
        item.style.position = item.style.zIndex = item.style.left = item.style.top = null;
        if (main.contains(itemClone)) main.removeChild(itemClone);

        if (moveMouse) {
          if (currentDropable === _this3.itemEmpty) {
            _this3.replace(item, false);
          }
        } else _this3.replace(item, true);
      };

      item.addEventListener('mousemove', onMouseMove);
      item.addEventListener('mouseup', listen);
    }
  }, {
    key: "replace",
    value: function replace(item, doAnimation) {
      var _this4 = this;

      var empty = this.itemEmpty.style.order;
      var itemOrder = item.style.order;
      this.moveArray = this.arr.moveArray;

      if (item.style.order !== empty) {
        if (Math.abs(empty - itemOrder) === this.numberRows || Math.abs(empty - itemOrder) === 1) {
          if (!(((empty + 1) % this.numberRows === 0 || (itemOrder + 1) % this.numberRows === 0) && (empty % this.numberRows === 0 || itemOrder % this.numberRows === 0))) {
            var classSlide;
            this.moveArray.push([+empty, +itemOrder]);

            if (this.isSound) {
              audioItem.currentTime = 0;
              audioItem.play();
            }

            if (!doAnimation) {
              if (item.classList.contains(classSlide)) item.classList.remove(classSlide);
              this.itemEmpty.style.setProperty('order', itemOrder);
              item.style.setProperty('order', empty);
            } else {
              var _classSlide = (0,_game_arrays__WEBPACK_IMPORTED_MODULE_2__.default)(itemOrder - empty, this.numberRows);

              item.classList.add(_classSlide);
              setTimeout(function () {
                _this4.itemEmpty.style.setProperty('order', itemOrder);

                item.style.setProperty('order', empty);
                if (item.classList.contains(_classSlide)) item.classList.remove(_classSlide);
              }, 510);
            }

            this.move++;
            steps.innerHTML = this.move;
          }
        }
      }

      setTimeout(function () {
        _this4.checkArray(item);
      }, 510);
    }
  }, {
    key: "checkArray",
    value: function checkArray(item) {
      var gameSaved = [];
      this.main.childNodes.forEach(function (item) {
        if (item.style.order) gameSaved[item.style.order] = item.innerHTML;
      });

      if (gameSaved.toString() == this.initArray.toString()) {
        this.showMessage();
        this.game = false;
      }

      ;
    }
  }, {
    key: "chooseGame",
    value: function chooseGame() {
      var _this5 = this;

      gameBtn.classList.add('none');
      gameSize.classList.remove('none');
      game3Btn.addEventListener('click', function () {
        _this5.numberRows = 3;

        _this5.startGame();
      });
      game4Btn.addEventListener('click', function () {
        _this5.numberRows = 4;

        _this5.startGame();
      });
      game5Btn.addEventListener('click', function () {
        _this5.numberRows = 5;

        _this5.startGame();
      });
      game6Btn.addEventListener('click', function () {
        _this5.numberRows = 6;

        _this5.startGame();
      });
      game7Btn.addEventListener('click', function () {
        _this5.numberRows = 7;

        _this5.startGame();
      });
      game8Btn.addEventListener('click', function () {
        _this5.numberRows = 8;

        _this5.startGame();
      });
    }
  }, {
    key: "startGame",
    value: function startGame() {
      times.innerHTML = '00:00:00';
      this.move = 0;
      this.src = 0;
      localStorage.removeItem('array');
      localStorage.removeItem('move');
      localStorage.removeItem('hour');
      localStorage.removeItem('min');
      localStorage.removeItem('sec');
      localStorage.removeItem('numberRows');
      localStorage.removeItem('src');
      gameBtn.classList.remove('none');
      gameSize.classList.add('none');
      stopwatchNew = true;
      this.showGame();
    }
  }, {
    key: "startMenu",
    value: function startMenu() {
      var _this6 = this;

      clearInterval(this.stopwatch);

      if (!menu.classList.contains('hide') && !continueBtn.classList.contains('hide')) {
        setTimeout(function () {
          return _this6.continueGame();
        }, 150);
      } else {
        setTimeout(function () {
          if (menu.classList.contains('hide')) {
            if (table && !table.classList.contains('none')) table.classList.add('none');

            if (!messageWin.classList.contains('hide')) {
              messageWin.classList.add('hide');
            } else if (localStorage.getItem('array') || _this6.game) continueBtn.classList.remove('hide');

            menu.classList.remove('hide');
          }
        }, 100);
      }
    }
  }, {
    key: "continueGame",
    value: function continueGame() {
      menu.classList.add('hide');
      this.stopwatchF();
    }
  }, {
    key: "saveGame",
    value: function saveGame() {
      var gameSaved = [];
      this.main.childNodes.forEach(function (item) {
        if (item.style.order) gameSaved[item.style.order] = item.innerHTML;
      });
      localStorage.setItem('array', JSON.stringify(gameSaved));
      localStorage.setItem('move', this.move);
      localStorage.setItem('hour', times.innerHTML.slice(0, 2));
      localStorage.setItem('min', times.innerHTML.slice(3, 5));
      localStorage.setItem('sec', times.innerHTML.slice(6));
      localStorage.setItem('numberRows', this.numberRows);
      if (this.usePicture) localStorage.setItem('src', this.src);
      messageSave.classList.remove('hide');
      messageSave.classList.add('animation');
      setTimeout(function () {
        messageSave.classList.add('hide');
        messageSave.classList.remove('animation');
      }, 2000);
    }
  }, {
    key: "showScores",
    value: function showScores() {
      var _this7 = this;

      if (table) {
        this.main.childNodes.forEach(function (node) {
          if (node.classList.contains('table')) _this7.main.removeChild(node);
        });
      }

      var scoreArray = (0,_game_scores__WEBPACK_IMPORTED_MODULE_3__.default)();
      var childTr = [];

      for (var i = 0; i < 10; i++) {
        var tr = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('tr', 'tr-table', (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('td', 'number-table', "".concat(i + 1, " ")));

        if (scoreArray[i]) {
          if (scoreArray[i].name) tr.appendChild((0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('td', 'name-score', "".concat(scoreArray[i].name)));else tr.appendChild((0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('td', 'name-score', 'Anonymous'));
          tr.appendChild((0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('td', null, "".concat(scoreArray[i].size)));
          tr.appendChild((0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('td', null, "".concat(scoreArray[i].moves)));
        } else {
          for (var j = 0; j < 3; j++) {
            tr.appendChild((0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('td'));
          }
        }

        childTr.push(tr);
      }

      table = (0,_base_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'table', childTr);
      table.prepend(nameTable, trHeader);
      table.appendChild(backBtn);
      this.main.appendChild(table);
      menu.classList.add('hide');
    }
  }, {
    key: "playSound",
    value: function playSound() {
      var _this8 = this;

      setTimeout(function () {
        _this8.isSound = true;
        audioIcon.classList.remove('none-audio');
        audioIcon.classList.add('audio');
        audioField.currentTime = 0;
        setInterval(function () {
          if (_this8.isSound) audioField.play();
        }, 1);
      }, 100);
    }
  }, {
    key: "stopSound",
    value: function stopSound() {
      var _this9 = this;

      setTimeout(function () {
        _this9.isSound = false;
        audioIcon.classList.add('none-audio');
        audioIcon.classList.remove('audio');
        audioField.pause();
        audioField.currentTime = 0;
      }, 200);
    }
  }, {
    key: "showMessage",
    value: function showMessage() {
      messageResult.innerHTML = '';
      nameInput.innerHTML = '';
      clearInterval(this.stopwatch);
      var hour = +times.innerHTML.slice(0, 2);
      var min = times.innerHTML.slice(3, 5);
      var sec = times.innerHTML.slice(6);
      if (hour) messageResult.innerHTML = "".concat(hour, ":");
      messageResult.innerHTML += "".concat(min, ":");
      if (sec) messageResult.innerHTML += "".concat(sec, " ");
      messageResult.innerHTML += "and ".concat(this.move, " moves");
      messageWin.classList.remove('hide');
    }
  }, {
    key: "addScore",
    value: function addScore(name) {
      var score = {
        name: name,
        size: "".concat(this.numberRows, "x").concat(this.numberRows),
        moves: this.move
      };

      if (!(localStorage.getItem("".concat(localStorage.length - 1)) == JSON.stringify(score))) {
        localStorage.setItem("".concat(localStorage.length), JSON.stringify(score));
      }
    }
  }, {
    key: "setName",
    value: function setName(e) {
      if (e.code === 'Enter') {
        e.preventDefault();
        var name = nameInput.innerHTML;
        this.startMenu();
        this.addScore(name);
      }
    }
  }, {
    key: "addPicture",
    value: function addPicture() {
      pictureBtn.classList.add('none');
      numberBtn.classList.remove('none');
      this.usePicture = true;
      document.body.innerHTML = '';
      this.init(_game_arrays__WEBPACK_IMPORTED_MODULE_2__.initialArray(this.numberRows));
      continueBtn.classList.add('hide');
    }
  }, {
    key: "removePicture",
    value: function removePicture() {
      pictureBtn.classList.remove('none');
      numberBtn.classList.add('none');
      this.usePicture = false;
      document.body.innerHTML = '';
      this.init(_game_arrays__WEBPACK_IMPORTED_MODULE_2__.initialArray(this.numberRows));
      continueBtn.classList.add('hide');
    }
  }, {
    key: "solvePuzzle",
    value: function solvePuzzle() {
      this.stopwatchF();
      menu.classList.add('hide');
      var moveArray = !this.moveArray.length ? this.arr.moveArray : this.moveArray;
      var main = this.main;
      var numberRows = this.numberRows;
      var itemEmpty = this.itemEmpty;
      var stopwatch = this.stopwatch;
      var isSound = this.isSound;
      var move = this.move;
      var game = this.game;
      var i = 1;

      function iteration() {
        var empty = moveArray[moveArray.length - i][1];
        var itemOrder = moveArray[moveArray.length - i][0];
        var item;

        if (isSound) {
          audioItem.currentTime = 0;
          audioItem.play();
        }

        for (var _i = 0; _i < main.childNodes.length - 3; _i++) {
          if (+main.childNodes[_i].style.order === itemOrder) {
            item = main.childNodes[_i];
          }
        }

        var classSlide = (0,_game_arrays__WEBPACK_IMPORTED_MODULE_2__.default)(itemOrder - empty, numberRows);
        item.classList.add = classSlide;
        setTimeout(function () {
          itemEmpty.style.setProperty('order', itemOrder);
          item.style.setProperty('order', empty);
          if (item.classList.contains(classSlide)) item.classList.remove(classSlide);
        }, 510);
        if (i === moveArray.length) clearInterval(stopwatch);else setTimeout(function () {
          return iteration();
        }, 520);
        move++;
        steps.innerHTML = move;
        i++;
      }

      iteration();
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