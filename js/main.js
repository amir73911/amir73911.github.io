/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app/datetimepicker.js":
/*!**************************************!*\
  !*** ./src/js/app/datetimepicker.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

new Vue({
  el: '#datetimepicker',
  name: 'DateTimePicker',
  data: {
    updateCounter: 0,
    times: [],
    selectedDate: null,
    selectedTime: null,
    showSelectTimeBlock: false
  },
  methods: {
    setTime: function setTime(time) {
      this.selectedTime = time;
    },
    datepickerInit: function datepickerInit() {
      var _this = this;

      var self = this;
      new Pikaday({
        field: document.getElementById('datepicker'),
        container: document.querySelector('.datepicker-container'),
        bound: false,
        disableDayFn: self.isDayDisabled,
        onSelect: self.onDatepickerSelect,
        firstDay: 1,
        i18n: {
          months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
          weekdays: ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
          weekdaysShort: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
        }
      }); // Hack

      this.$nextTick(function () {
        _this.updateCounter++;
      });
    },
    isDayDisabled: function isDayDisabled(day) {// Check every day of month availability
      // return true - disabled, false - available
    },
    onDatepickerSelect: function onDatepickerSelect(day) {
      this.selectedDate = dayjs(day).format('DD.MM.YYYY');

      if (this.selectedTime) {
        this.selectedTime = null;
      }

      this.showSelectTimeBlock = true;
    },
    getTimes: function getTimes() {
      this.times = ['10:40', '11:40', '15:20', '16:50', '18:00'];
    }
  },
  computed: {
    resultDateTime: function resultDateTime() {
      if (this.selectedDate && this.selectedTime) {
        return "".concat(this.selectedDate, " ").concat(this.selectedTime, " (\u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0435 \u0432\u0440\u0435\u043C\u044F)");
      } else {
        return null;
      }
    }
  },
  mounted: function mounted() {
    this.getTimes();
    this.datepickerInit();
  }
});

/***/ }),

/***/ "./src/js/app/form.js":
/*!****************************!*\
  !*** ./src/js/app/form.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var sendFormBtn = document.querySelector('.js-send-form-btn');

function sendForm(e) {
  console.log(e);
  var $form = document.querySelector('#form');
  window.closePopup();
  window.showResultPopup();
  e.preventDefault();
}

sendFormBtn.addEventListener('click', sendForm);

/***/ }),

/***/ "./src/js/app/header.js":
/*!******************************!*\
  !*** ./src/js/app/header.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var goToLinks = document.querySelectorAll('.js-go-to');

function goTo(elQuery) {
  var targetEl = document.querySelector(elQuery);

  if (targetEl) {
    document.querySelector(elQuery).scrollIntoView({
      behavior: 'smooth'
    });
  }
}

goToLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var targetId = link.getAttribute('href');
    goTo(targetId);
  });
});

/***/ }),

/***/ "./src/js/app/map.js":
/*!***************************!*\
  !*** ./src/js/app/map.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

initMap = function initMap() {
  var coords = [37.5404734, 55.748158];
  var marker = document.createElement('div');
  mapboxgl.accessToken = 'pk.eyJ1IjoiYW1pcmFyZGxlciIsImEiOiJjazA2cGp1ajYxNmlvM25wbjh3ZDQ1czRsIn0.EldglvAyhVH0Zjsohoe0Gw';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/amirardler/ck06pv5lp060c1ctfekvxjs12',
    center: coords,
    zoom: 15
  });
  new mapboxgl.Marker(marker).setLngLat(coords).addTo(map);
  map.addControl(new mapboxgl.NavigationControl(), 'bottom-left');
  map.scrollZoom.disable();
};

initMap();

/***/ }),

/***/ "./src/js/app/popup.js":
/*!*****************************!*\
  !*** ./src/js/app/popup.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $popupButtons = document.querySelectorAll('.js-popup-btn');
var $popupOuter = document.querySelector('.popup-outer');
var $popup = document.querySelector('.popup--form');
var $popupResult = document.querySelector('.popup--result');
var $popupCloseButtons = document.querySelectorAll('.popup .close-button');
var $firstFocusInput = document.querySelector('input[autofocus]');

function disableTabs() {
  var $pikaButtons = document.querySelectorAll('.pika-lendar button');
  $pikaButtons.forEach(function (item) {
    item.setAttribute('tabindex', '-1');
  });
}

window.showPopup = function () {
  $popupOuter.classList.add('showed');
  $popup.classList.add('showed');
  setTimeout(function () {
    $firstFocusInput.focus();
    disableTabs();
  }, 100);
};

window.showResultPopup = function () {
  $popupResult.classList.add('showed');
};

window.closeAllPopups = function () {
  $popupOuter.classList.remove('showed');
  $popup.classList.remove('showed');
  $popupResult.classList.remove('showed');
};

window.closePopup = function () {
  $popup.classList.remove('showed');
};

$popupButtons.forEach(function (popupButton) {
  popupButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.showPopup();
  });
});
$popupOuter.addEventListener('click', function (e) {
  e.stopPropagation();

  if (e.target.classList.contains('popup-outer')) {
    window.closeAllPopups();
  }
});
$popupCloseButtons.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    window.closeAllPopups();
  });
});

/***/ }),

/***/ "./src/js/app/slider.js":
/*!******************************!*\
  !*** ./src/js/app/slider.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var heroSliderData = [{
  titleNormal: 'Лучшие доверяют нам самое ценное&nbsp;&mdash; Здоровье!',
  by: 'С уважением, Злата Рубин',
  mainImage: '/images/hero-slider-1.png',
  thumbImage: '/images/hero-slider-preview-1.png'
}, {
  titleNormal: 'Красота и&nbsp;молодость в&nbsp;гармонии с&nbsp;природой',
  by: 'The Rubin Group',
  mainImage: '/images/hero-slider-2.png',
  thumbImage: '/images/hero-slider-preview-2.png'
}, {
  titleNormal: 'Премиум сервис <br> 24/7',
  by: 'The Rubin Group',
  mainImage: '/images/hero-slider-3.png',
  thumbImage: '/images/hero-slider-preview-3.png'
}];
var contentSliderData = [{
  mainImage: '/images/gallery/3.jpg'
}, {
  mainImage: '/images/gallery/1.jpg'
}, {
  mainImage: '/images/gallery/2.jpg'
}, {
  mainImage: '/images/gallery/5.jpg'
}, {
  mainImage: '/images/gallery/7.jpg'
}, {
  mainImage: '/images/gallery/6.jpg'
}, {
  mainImage: '/images/gallery/8.jpg'
}, {
  mainImage: '/images/gallery/9.jpg'
}];

function sliderCreate(elId) {
  new Vue({
    el: "#".concat(elId),
    name: elId,
    data: {
      activeSlideNum: 0,
      autoPlayTime: 0,
      autoPlayProgress: 0,
      animation: false,
      autoplayInterval: null,
      autoplay: true
    },
    beforeCreate: function beforeCreate() {
      this.autoplayMaxTime = 5000;
      this.slides = elId === 'heroSlider' ? heroSliderData : contentSliderData;
    },
    methods: {
      selectSlide: function selectSlide(slideIndex) {
        var _this = this;

        if (slideIndex === this.activeSlideNum) return;
        var animationTime = 1400;

        if (this.animation) {
          this.$refs.slide.classList.remove('slider-item--changing-slide');
          this.activeSlideNum = slideIndex;
          this.animation = false;
        } else {
          this.animation = true;
          this.$refs.slide.classList.add('slider-item--changing-slide');
          setTimeout(function () {
            _this.activeSlideNum = slideIndex;

            if (_this.autoplay) {
              _this.autoplayStart();
            }

            _this.$nextTick(function () {
              _this.paginationScroll();
            });
          }, animationTime / 2);
          setTimeout(function () {
            _this.$refs.slide.classList.remove('slider-item--changing-slide');

            _this.animation = false;
          }, animationTime);
        }
      },
      paginationScroll: function paginationScroll() {
        var paginationItemActive = this.$refs.pagination.querySelector('.slider-pagination-item--active');
        var paginationItemActiveHalfWidth = paginationItemActive.offsetWidth / 2;
        var paginationItemActiveScrollLeft = paginationItemActive.offsetLeft + paginationItemActiveHalfWidth;
        var paginationHalfWidth = this.$refs.pagination.offsetWidth / 2;
        var toScroll = (paginationHalfWidth - paginationItemActiveScrollLeft) * -1;
        this.$refs.pagination.scrollLeft = toScroll;
      },
      autoplayStart: function autoplayStart() {
        var _this2 = this;

        var intervalSize = 300;
        this.autoPlayProgress = 0;
        this.autoPlayTime = 0;

        if (this.autoplayInterval) {
          clearInterval(this.autoplayInterval);
        }

        this.autoplayInterval = setInterval(function () {
          _this2.autoPlayTime += intervalSize;
          _this2.autoPlayProgress = Math.floor(_this2.autoPlayTime / _this2.autoplayMaxTime * 100); // console.log(this.autoPlayProgress);

          if (_this2.autoPlayProgress >= 100) {
            _this2.autoPlayProgress = 0;
            clearInterval(_this2.autoplayInterval);

            _this2.toNextSlide();
          }
        }, intervalSize);
      },
      toNextSlide: function toNextSlide() {
        var nextSlideIndex = this.slides[this.activeSlideNum + 1] ? this.activeSlideNum + 1 : 0;
        this.selectSlide(nextSlideIndex);
      },
      getSlidePreNumber: function getSlidePreNumber(index) {
        var newIndex = index + 1;
        return newIndex.toString().length < 2 ? "0".concat(newIndex) : newIndex;
      }
    },
    computed: {
      activeSlide: function activeSlide() {
        return this.slides[this.activeSlideNum];
      }
    },
    mounted: function mounted() {
      if (this.autoplay) {
        this.autoplayStart();
      }
    }
  });
}

var sliders = document.querySelectorAll('.slider');
sliders.forEach(function (slider) {
  sliderCreate(slider.id);
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _app_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/slider */ "./src/js/app/slider.js");
/* harmony import */ var _app_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/map */ "./src/js/app/map.js");
/* harmony import */ var _app_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/header */ "./src/js/app/header.js");
/* harmony import */ var _app_header__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_header__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/popup */ "./src/js/app/popup.js");
/* harmony import */ var _app_popup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_popup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_datetimepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/datetimepicker */ "./src/js/app/datetimepicker.js");
/* harmony import */ var _app_datetimepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_datetimepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/form */ "./src/js/app/form.js");
/* harmony import */ var _app_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_app_form__WEBPACK_IMPORTED_MODULE_6__);








(function ($) {
  $(function () {
    $('select.form__select').styler();
  });
})(jQuery);

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js");
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(autosize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);





svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()();
window.$ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.dayjs = dayjs__WEBPACK_IMPORTED_MODULE_4___default.a;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

autosize__WEBPACK_IMPORTED_MODULE_3___default()(document.querySelectorAll('textarea'));

/***/ })

/******/ });
//# sourceMappingURL=main.js.map