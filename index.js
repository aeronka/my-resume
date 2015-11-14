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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(3);

	__webpack_require__(4);

	var _timeLineJs = __webpack_require__(5);

	var _timeLineJs2 = _interopRequireDefault(_timeLineJs);

	document.addEventListener('DOMContentLoaded', function () {
	    var timeLine = new _timeLineJs2['default']({
	        timeLineElem: document.querySelector('.experience')
	    });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html"

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/ja.jpg"

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/favicon.ico"

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var TimeLine = (function () {
	    function TimeLine(options) {
	        var _this = this;

	        _classCallCheck(this, TimeLine);

	        this.timeLineElem = options.timeLineElem;
	        this.scale = this.timeLineElem.querySelector('.experience-scale');

	        //коллекция всех должностей на шкале
	        this.positions = this.scale.querySelectorAll('.item-position-name');

	        //коллекция всех описаний должностей
	        this.descriptions = this.timeLineElem.querySelectorAll('.experience-description');

	        //текущие выбранные элементы
	        this.currentPosition = this.scale.querySelector('.current-position');
	        this.currentDescription = this.timeLineElem.querySelector('.current-description');

	        this.scale.addEventListener('click', function (event) {
	            return _this.onScaleClick(event);
	        });
	    }

	    _createClass(TimeLine, [{
	        key: 'onScaleClick',
	        value: function onScaleClick(event) {
	            event.preventDefault();
	            var target = event.target;
	            if (target.matches('.item-position-name')) {
	                this.selectScalePosition(target);
	            }
	        }
	    }, {
	        key: 'selectScalePosition',
	        value: function selectScalePosition(position) {
	            //проверяем наличие класса текущего элемента, если есть, то ничего не делаем
	            if (position.matches('.current-position')) return;

	            //если нет, добавим
	            position.classList.add('current-position');
	            //удалим текущий класс у предыдущего элемента
	            this.currentPosition.classList.remove('current-position');
	            //запомним новый текущий
	            this.currentPosition = position;

	            //изменим текст описания
	            this.changePositionDescription();
	        }
	    }, {
	        key: 'changePositionDescription',
	        value: function changePositionDescription() {
	            var index = 0;
	            //ищем индекс текущей выбранной должности в массиве должностей
	            for (var i = 0; i < this.positions.length; i++) {
	                if (this.positions[i].matches('.current-position')) {
	                    index = i;
	                    break;
	                }
	            }
	            //у предыдущего текущего элемента удаляем класс текущего элемента
	            this.currentDescription.classList.remove('current-description');

	            //выбираем новое описание, соответствующее выбранной позиции
	            this.currentDescription = this.descriptions[index];

	            //отображаем новое описание
	            this.currentDescription.classList.add('current-description');
	        }
	    }]);

	    return TimeLine;
	})();

	exports['default'] = TimeLine;
	module.exports = exports['default'];

/***/ }
/******/ ]);