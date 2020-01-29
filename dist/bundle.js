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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/api/api-config.constants.ts":
/*!**********************************************!*\
  !*** ./src/core/api/api-config.constants.ts ***!
  \**********************************************/
/*! exports provided: apiConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiConfig", function() { return apiConfig; });
var apiConfig = {
    LIST: {},
    MOVIE: {
        GET: function (params) { return "https://api.themoviedb.org/3/movie/" + params.movieId + "?api_key=" + params.apiKey + "&language=en-US"; },
        GET_ALL: function (params) { return "https://api.themoviedb.org/3/list/" + params.listId + "?api_key=" + params.apiKey + "&language=en-US"; },
    },
    SERIE: {
        GET: function (params) { return "https://api.themoviedb.org/3/tv/" + params.serieId + "?api_key=" + params.apiKey + "&language=en-US"; },
        GET_ALL: function (params) { return "https://api.themoviedb.org/3/list/" + params.listId + "?api_key=" + params.apiKey + "&language=en-US"; },
    }
};


/***/ }),

/***/ "./src/core/app-config.constants.ts":
/*!******************************************!*\
  !*** ./src/core/app-config.constants.ts ***!
  \******************************************/
/*! exports provided: APP_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function() { return APP_CONFIG; });
/* harmony import */ var _api_api_config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api-config.constants */ "./src/core/api/api-config.constants.ts");

var APP_CONFIG = {
    API_KEY: '5d8bf2990a40ee592eee0bd672676d61',
    MOVIE_LIST_ID: '111862',
    SERIE_LIST_ID: '111866',
    API: _api_api_config_constants__WEBPACK_IMPORTED_MODULE_0__["apiConfig"]
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _movie_movie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie/movie.service */ "./src/movie/movie.service.ts");
/* harmony import */ var _template_templete_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template/templete.service */ "./src/template/templete.service.ts");
/* harmony import */ var _list_list_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.Service */ "./src/list/list.Service.ts");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main */ "./src/main.ts");




var movieService = new _movie_movie_service__WEBPACK_IMPORTED_MODULE_0__["MovieService"]();
var templateService = new _template_templete_service__WEBPACK_IMPORTED_MODULE_1__["TemplateService"]();
var listService = new _list_list_Service__WEBPACK_IMPORTED_MODULE_2__["ListService"]();
var main = new _main__WEBPACK_IMPORTED_MODULE_3__["Main"](movieService, templateService, listService);
main.init();


/***/ }),

/***/ "./src/list/list.Service.ts":
/*!**********************************!*\
  !*** ./src/list/list.Service.ts ***!
  \**********************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var _core_app_config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../core/app-config.constants */ "./src/core/app-config.constants.ts");

var ListService = /** @class */ (function () {
    function ListService() {
        this._appConfig = _core_app_config_constants__WEBPACK_IMPORTED_MODULE_0__["APP_CONFIG"];
    }
    ListService.prototype.getLatest = function () {
        return fetch(this._buildUrl(), { method: 'GET' });
    };
    ListService.prototype._buildUrl = function () {
        return "https://api.themoviedb.org/3/movie/now_playing?api_key=" + this._appConfig.API_KEY;
    };
    return ListService;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
var Main = /** @class */ (function () {
    function Main(movieService, templateService, listService) {
        this.movieService = movieService;
        this.templateService = templateService;
        this.listService = listService;
    }
    Main.prototype.init = function () {
        this.getMoviesNowPlaying();
    };
    Main.prototype.getMoviesNowPlaying = function () {
        this.listService.getLatest().then(function (nowPlaying) {
            nowPlaying.json().then(function (nowPlaying) {
                console.log(nowPlaying);
            });
        });
    };
    Main.prototype.getMovie = function () {
        var _this = this;
        this.movieService.getMovie(181812)
            .then(function (response) {
            response.json().then(function (movie) {
                console.log(movie);
                var element = document.createElement('div');
                element.innerHTML = _this.templateService.buildMovieTemplate(movie);
                document.body.appendChild(element);
            });
        });
    };
    return Main;
}());



/***/ }),

/***/ "./src/movie/movie.service.ts":
/*!************************************!*\
  !*** ./src/movie/movie.service.ts ***!
  \************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _core_app_config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../core/app-config.constants */ "./src/core/app-config.constants.ts");

var MovieService = /** @class */ (function () {
    function MovieService() {
        this._appConfig = _core_app_config_constants__WEBPACK_IMPORTED_MODULE_0__["APP_CONFIG"];
    }
    MovieService.prototype.getMovie = function (id) {
        return fetch(this._buildUrl(id), { method: "GET" });
    };
    MovieService.prototype._buildUrl = function (movieId) {
        return "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + this._appConfig.API_KEY;
    };
    return MovieService;
}());



/***/ }),

/***/ "./src/template/templete.service.ts":
/*!******************************************!*\
  !*** ./src/template/templete.service.ts ***!
  \******************************************/
/*! exports provided: TemplateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateService", function() { return TemplateService; });
var TemplateService = /** @class */ (function () {
    function TemplateService() {
    }
    TemplateService.prototype.buildMovieTemplate = function (movie) {
        return "\n\t\t\t<h1>" + movie.title + "</h1>\n\t\t\t<ul>\n\t\t\t\t<li>" + movie.overview + "</li>\n\t\t\t</ul>\n\t\t\t<div>\n\t\t\t\t<img src=\"" + this.buildImage(movie) + "\"/>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\tGenres: " + this.buildGenres(movie) + "\n\t\t\t</div>\n\t\t";
    };
    TemplateService.prototype.buildGenres = function (movie) {
        var genres = '';
        movie.genres.forEach(function (genre) {
            genres += " " + genre.name + " ";
        });
        return genres;
    };
    TemplateService.prototype.buildImage = function (movie) {
        var movieBaseUrl = 'https://image.tmdb.org/t/p/w500';
        return "" + movieBaseUrl + movie.poster_path;
    };
    return TemplateService;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYXBpL2FwaS1jb25maWcuY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2FwcC1jb25maWcuY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzdC9saXN0LlNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vdmllL21vdmllLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlL3RlbXBsZXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUFBO0FBQU8sSUFBTSxTQUFTLEdBQWtCO0lBQ3ZDLElBQUksRUFB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QyxVQUFDLEtBQVU7WUFDL0IsTUFBTSxJQUFJLE1BQUksS0FBSyxDQUFDLElBQUksTUFBRyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDO0lBRU0sb0NBQVUsR0FBakIsVUFBa0IsS0FBVTtRQUMzQixJQUFNLFlBQVksR0FBRyxpQ0FBaUMsQ0FBQztRQUN2RCxPQUFPLEtBQUcsWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFhLENBQUM7SUFDOUMsQ0FBQztJQUNGLHNCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IEFwcEFQSUNvbmZpZyB9IGZyb20gJy4vYXBwLWFwaS1wYXJhbXMubW9kZWwnO1xyXG5pbXBvcnQgeyBBcHBBUElSZXNvdXJjZSB9IGZyb20gJy4vYXBwLWFwaS1yZXNvdXJjZS5tb2RlbCc7XHJcblxyXG5leHBvcnQgY29uc3QgYXBpQ29uZmlnOiBBcHBBUElDb25maWcgID0ge1xyXG5cdExJU1Q6IDxBcHBBUElSZXNvdXJjZT4ge30sXHJcbiAgICBNT1ZJRTogPEFwcEFQSVJlc291cmNlPiB7XHJcbiAgICAgICAgR0VUOiAocGFyYW1zOiBhbnkpID0+IGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllLyR7cGFyYW1zLm1vdmllSWR9P2FwaV9rZXk9JHtwYXJhbXMuYXBpS2V5fSZsYW5ndWFnZT1lbi1VU2AsXHJcbiAgICAgICAgR0VUX0FMTDogKHBhcmFtczogYW55KSA9PiBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9saXN0LyR7cGFyYW1zLmxpc3RJZH0/YXBpX2tleT0ke3BhcmFtcy5hcGlLZXl9Jmxhbmd1YWdlPWVuLVVTYCxcclxuICAgIH0sXHJcbiAgICBTRVJJRTogPEFwcEFQSVJlc291cmNlPiB7XHJcbiAgICAgICAgR0VUOiAocGFyYW1zOiBhbnkpID0+IGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3R2LyR7cGFyYW1zLnNlcmllSWR9P2FwaV9rZXk9JHtwYXJhbXMuYXBpS2V5fSZsYW5ndWFnZT1lbi1VU2AsXHJcbiAgICAgICAgR0VUX0FMTDogKHBhcmFtczogYW55KSA9PiBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9saXN0LyR7cGFyYW1zLmxpc3RJZH0/YXBpX2tleT0ke3BhcmFtcy5hcGlLZXl9Jmxhbmd1YWdlPWVuLVVTYCxcclxuICAgIH1cclxufTsiLCJpbXBvcnQgeyBBcHBDb25maWcgfSBmcm9tICcuL2FwcC1jb25maWcuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgYXBpQ29uZmlnIH0gZnJvbSAnLi9hcGkvYXBpLWNvbmZpZy5jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQUF9DT05GSUc6IEFwcENvbmZpZyA9IHtcclxuICAgIEFQSV9LRVk6ICc1ZDhiZjI5OTBhNDBlZTU5MmVlZTBiZDY3MjY3NmQ2MScsXHJcbiAgICBNT1ZJRV9MSVNUX0lEOiAnMTExODYyJyxcclxuICAgIFNFUklFX0xJU1RfSUQ6ICcxMTE4NjYnLFxyXG4gICAgQVBJOiBhcGlDb25maWdcclxufTtcclxuIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBNb3ZpZVNlcnZpY2UgfSBmcm9tICcuL21vdmllL21vdmllLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RlbXBsYXRlL3RlbXBsZXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMaXN0U2VydmljZSB9IGZyb20gJy4vbGlzdC9saXN0LlNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYWluIH0gZnJvbSAnLi9tYWluJztcclxuXHJcbmNvbnN0IG1vdmllU2VydmljZTogTW92aWVTZXJ2aWNlID0gbmV3IE1vdmllU2VydmljZSgpO1xyXG5jb25zdCB0ZW1wbGF0ZVNlcnZpY2U6IFRlbXBsYXRlU2VydmljZSA9IG5ldyBUZW1wbGF0ZVNlcnZpY2UoKTtcclxuY29uc3QgbGlzdFNlcnZpY2U6IExpc3RTZXJ2aWNlID0gbmV3IExpc3RTZXJ2aWNlKCk7XHJcbmNvbnN0IG1haW4gPSBuZXcgTWFpbihtb3ZpZVNlcnZpY2UsIHRlbXBsYXRlU2VydmljZSwgbGlzdFNlcnZpY2UpO1xyXG5cclxubWFpbi5pbml0KCk7XHJcbiIsImltcG9ydCB7QVBQX0NPTkZJR30gZnJvbSAnLi8uLi9jb3JlL2FwcC1jb25maWcuY29uc3RhbnRzJ1xyXG5pbXBvcnQge0FwcENvbmZpZ30gZnJvbSAnLi8uLi9jb3JlL2FwcC1jb25maWcuaW50ZXJmYWNlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RTZXJ2aWNle1xyXG5cclxuICAgIHByaXZhdGUgX2FwcENvbmZpZyA6IEFwcENvbmZpZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuX2FwcENvbmZpZyA9IEFQUF9DT05GSUc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExhdGVzdCgpOiBQcm9taXNlPGFueT57XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX2J1aWxkVXJsKCksIHttZXRob2Q6J0dFVCd9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBfYnVpbGRVcmwoKSA6IHN0cmluZ3tcclxuICAgICAgICByZXR1cm4gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvbm93X3BsYXlpbmc/YXBpX2tleT0ke3RoaXMuX2FwcENvbmZpZy5BUElfS0VZfWA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBNb3ZpZVNlcnZpY2UgfSBmcm9tICcuL21vdmllL21vdmllLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RlbXBsYXRlL3RlbXBsZXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMaXN0U2VydmljZSB9IGZyb20gJy4vbGlzdC9saXN0LlNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1haW4ge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBtb3ZpZVNlcnZpY2U6IE1vdmllU2VydmljZSxcclxuXHRcdHByaXZhdGUgdGVtcGxhdGVTZXJ2aWNlOiBUZW1wbGF0ZVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGxpc3RTZXJ2aWNlIDogTGlzdFNlcnZpY2VcclxuXHQpIHt9XHJcblxyXG5cdHB1YmxpYyBpbml0KCkge1xyXG5cdFx0dGhpcy5nZXRNb3ZpZXNOb3dQbGF5aW5nKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0TW92aWVzTm93UGxheWluZygpe1xyXG5cdFx0dGhpcy5saXN0U2VydmljZS5nZXRMYXRlc3QoKS50aGVuKChub3dQbGF5aW5nKSA9PiB7XHJcblx0XHRcdG5vd1BsYXlpbmcuanNvbigpLnRoZW4oKG5vd1BsYXlpbmc6YW55KSA9PntcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhub3dQbGF5aW5nKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRNb3ZpZSgpIHtcclxuXHRcdHRoaXMubW92aWVTZXJ2aWNlLmdldE1vdmllKDE4MTgxMilcclxuXHRcdC50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0cmVzcG9uc2UuanNvbigpLnRoZW4oKG1vdmllOiBhbnkpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhtb3ZpZSk7XHJcblx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuYnVpbGRNb3ZpZVRlbXBsYXRlKG1vdmllKTtcclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cdFx0XHR9KVxyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgQVBQX0NPTkZJRyB9IGZyb20gJy4vLi4vY29yZS9hcHAtY29uZmlnLmNvbnN0YW50cyc7XHJcbmltcG9ydCB7IEFwcENvbmZpZyB9IGZyb20gJy4uL2NvcmUvYXBwLWNvbmZpZy5pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmllU2VydmljZSB7XHJcblxyXG5cdHByaXZhdGUgX2FwcENvbmZpZzogQXBwQ29uZmlnO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX2FwcENvbmZpZyA9IEFQUF9DT05GSUc7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0TW92aWUoaWQ6IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcblx0XHRyZXR1cm4gZmV0Y2godGhpcy5fYnVpbGRVcmwoaWQpLCB7IG1ldGhvZDogXCJHRVRcIiB9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2J1aWxkVXJsKG1vdmllSWQ6IG51bWJlcik6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvJHttb3ZpZUlkfT9hcGlfa2V5PSR7dGhpcy5fYXBwQ29uZmlnLkFQSV9LRVl9YDtcclxuXHR9XHJcbn0iLCJleHBvcnQgY2xhc3MgVGVtcGxhdGVTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdHB1YmxpYyBidWlsZE1vdmllVGVtcGxhdGUobW92aWU6IGFueSk6IGFueSB7XHJcblx0XHRyZXR1cm4gYFxyXG5cdFx0XHQ8aDE+JHttb3ZpZS50aXRsZX08L2gxPlxyXG5cdFx0XHQ8dWw+XHJcblx0XHRcdFx0PGxpPiR7bW92aWUub3ZlcnZpZXd9PC9saT5cclxuXHRcdFx0PC91bD5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8aW1nIHNyYz1cIiR7dGhpcy5idWlsZEltYWdlKG1vdmllKX1cIi8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdEdlbnJlczogJHt0aGlzLmJ1aWxkR2VucmVzKG1vdmllKX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRgXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYnVpbGRHZW5yZXMobW92aWU6IGFueSk6IGFueSB7XHJcblx0XHRsZXQgZ2VucmVzID0gJyc7XHJcblx0XHRtb3ZpZS5nZW5yZXMuZm9yRWFjaCgoZ2VucmU6IGFueSkgPT4ge1xyXG5cdFx0XHRnZW5yZXMgKz0gYCAke2dlbnJlLm5hbWV9IGA7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBnZW5yZXM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYnVpbGRJbWFnZShtb3ZpZTogYW55KTogYW55IHtcclxuXHRcdGNvbnN0IG1vdmllQmFzZVVybCA9ICdodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwJztcclxuXHRcdHJldHVybiBgJHttb3ZpZUJhc2VVcmx9JHttb3ZpZS5wb3N0ZXJfcGF0aH1gO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=