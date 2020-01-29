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
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ "./src/main.ts");



var movieService = new _movie_movie_service__WEBPACK_IMPORTED_MODULE_0__["MovieService"]();
var templateService = new _template_templete_service__WEBPACK_IMPORTED_MODULE_1__["TemplateService"]();
var main = new _main__WEBPACK_IMPORTED_MODULE_2__["Main"](movieService, templateService);
function component() {
    var element = document.createElement('div');
    element.innerHTML = 'Oi Raquel';
    return element;
}
document.body.appendChild(component());
main.init();


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
    function Main(movieService, templateService) {
        this.movieService = movieService;
        this.templateService = templateService;
    }
    Main.prototype.init = function () {
        this.getMovie();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYXBpL2FwaS1jb25maWcuY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2FwcC1jb25maWcuY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW92aWUvbW92aWUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGUvdGVtcGxldGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQUE7QUFBTyxJQUFNLFNBQVMsR0FBa0I7SUFDdkMsSUFBSSxFQUFtQixFQUFFO0lBQ3RCLEtBQUssRUFBbUI7UUFDcEIsR0FBRyxFQUFF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SUFFTyxnQ0FBUyxHQUFqQixVQUFrQixPQUFlO1FBQ2hDLE9BQU8sd0NBQXNDLE9BQU8saUJBQVksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFTLENBQUM7SUFDM0YsQ0FBQztJQUNGLG1CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7QUFBQTtBQUFBO0lBQ0M7SUFBZSxDQUFDO0lBRVQsNENBQWtCLEdBQXpCLFVBQTBCLEtBQVU7UUFDbkMsT0FBTyxpQkFDQSxLQUFLLENBQUMsS0FBSyx1Q0FFVixLQUFLLENBQUMsUUFBUSw0REFHUixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyx5REFHeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMseUJBRWxDO0lBQ0YsQ0FBQztJQUVNLHFDQUFXLEdBQWxCLFVBQW1CLEtBQVU7UUFDNUIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBVTtZQUMvQixNQUFNLElBQUksTUFBSSxLQUFLLENBQUMsSUFBSSxNQUFHLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFFTSxvQ0FBVSxHQUFqQixVQUFrQixLQUFVO1FBQzNCLElBQU0sWUFBWSxHQUFHLGlDQUFpQyxDQUFDO1FBQ3ZELE9BQU8sS0FBRyxZQUFZLEdBQUcsS0FBSyxDQUFDLFdBQWEsQ0FBQztJQUM5QyxDQUFDO0lBQ0Ysc0JBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgQXBwQVBJQ29uZmlnIH0gZnJvbSAnLi9hcHAtYXBpLXBhcmFtcy5tb2RlbCc7XG5pbXBvcnQgeyBBcHBBUElSZXNvdXJjZSB9IGZyb20gJy4vYXBwLWFwaS1yZXNvdXJjZS5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBhcGlDb25maWc6IEFwcEFQSUNvbmZpZyAgPSB7XG5cdExJU1Q6IDxBcHBBUElSZXNvdXJjZT4ge30sXG4gICAgTU9WSUU6IDxBcHBBUElSZXNvdXJjZT4ge1xuICAgICAgICBHRVQ6IChwYXJhbXM6IGFueSkgPT4gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvJHtwYXJhbXMubW92aWVJZH0/YXBpX2tleT0ke3BhcmFtcy5hcGlLZXl9Jmxhbmd1YWdlPWVuLVVTYCxcbiAgICAgICAgR0VUX0FMTDogKHBhcmFtczogYW55KSA9PiBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9saXN0LyR7cGFyYW1zLmxpc3RJZH0/YXBpX2tleT0ke3BhcmFtcy5hcGlLZXl9Jmxhbmd1YWdlPWVuLVVTYCxcbiAgICB9LFxuICAgIFNFUklFOiA8QXBwQVBJUmVzb3VyY2U+IHtcbiAgICAgICAgR0VUOiAocGFyYW1zOiBhbnkpID0+IGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3R2LyR7cGFyYW1zLnNlcmllSWR9P2FwaV9rZXk9JHtwYXJhbXMuYXBpS2V5fSZsYW5ndWFnZT1lbi1VU2AsXG4gICAgICAgIEdFVF9BTEw6IChwYXJhbXM6IGFueSkgPT4gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbGlzdC8ke3BhcmFtcy5saXN0SWR9P2FwaV9rZXk9JHtwYXJhbXMuYXBpS2V5fSZsYW5ndWFnZT1lbi1VU2AsXG4gICAgfVxufTsiLCJpbXBvcnQgeyBBcHBDb25maWcgfSBmcm9tICcuL2FwcC1jb25maWcuaW50ZXJmYWNlJztcbmltcG9ydCB7IGFwaUNvbmZpZyB9IGZyb20gJy4vYXBpL2FwaS1jb25maWcuY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IEFQUF9DT05GSUc6IEFwcENvbmZpZyA9IHtcbiAgICBBUElfS0VZOiAnNWQ4YmYyOTkwYTQwZWU1OTJlZWUwYmQ2NzI2NzZkNjEnLFxuICAgIE1PVklFX0xJU1RfSUQ6ICcxMTE4NjInLFxuICAgIFNFUklFX0xJU1RfSUQ6ICcxMTE4NjYnLFxuICAgIEFQSTogYXBpQ29uZmlnXG59O1xuIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgTW92aWVTZXJ2aWNlIH0gZnJvbSAnLi9tb3ZpZS9tb3ZpZS5zZXJ2aWNlJztcbmltcG9ydCB7IFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4vdGVtcGxhdGUvdGVtcGxldGUuc2VydmljZSc7XG5pbXBvcnQgeyBNYWluIH0gZnJvbSAnLi9tYWluJztcblxuY29uc3QgbW92aWVTZXJ2aWNlOiBNb3ZpZVNlcnZpY2UgPSBuZXcgTW92aWVTZXJ2aWNlKCk7XG5jb25zdCB0ZW1wbGF0ZVNlcnZpY2U6IFRlbXBsYXRlU2VydmljZSA9IG5ldyBUZW1wbGF0ZVNlcnZpY2UoKTtcbmNvbnN0IG1haW4gPSBuZXcgTWFpbihtb3ZpZVNlcnZpY2UsIHRlbXBsYXRlU2VydmljZSk7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRlbGVtZW50LmlubmVySFRNTCA9ICdPaSBSYXF1ZWwnXG5cdHJldHVybiBlbGVtZW50O1xufVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG5cbm1haW4uaW5pdCgpO1xuIiwiaW1wb3J0IHsgTW92aWVTZXJ2aWNlIH0gZnJvbSAnLi9tb3ZpZS9tb3ZpZS5zZXJ2aWNlJztcbmltcG9ydCB7IFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4vdGVtcGxhdGUvdGVtcGxldGUuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBNYWluIHtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBtb3ZpZVNlcnZpY2U6IE1vdmllU2VydmljZSxcblx0XHRwcml2YXRlIHRlbXBsYXRlU2VydmljZTogVGVtcGxhdGVTZXJ2aWNlXG5cdCkge31cblxuXHRwdWJsaWMgaW5pdCgpIHtcblx0XHR0aGlzLmdldE1vdmllKCk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0TW92aWUoKSB7XG5cdFx0dGhpcy5tb3ZpZVNlcnZpY2UuZ2V0TW92aWUoMTgxODEyKVxuXHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdHJlc3BvbnNlLmpzb24oKS50aGVuKChtb3ZpZTogYW55KSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKG1vdmllKTtcblx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRlbGVtZW50LmlubmVySFRNTCA9IHRoaXMudGVtcGxhdGVTZXJ2aWNlLmJ1aWxkTW92aWVUZW1wbGF0ZShtb3ZpZSk7XG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdFx0XHR9KVxuXHRcdH0pO1xuXHR9XG59IiwiaW1wb3J0IHsgQVBQX0NPTkZJRyB9IGZyb20gJy4vLi4vY29yZS9hcHAtY29uZmlnLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBBcHBDb25maWcgfSBmcm9tICcuLi9jb3JlL2FwcC1jb25maWcuaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIE1vdmllU2VydmljZSB7XG5cblx0cHJpdmF0ZSBfYXBwQ29uZmlnOiBBcHBDb25maWc7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5fYXBwQ29uZmlnID0gQVBQX0NPTkZJRztcblx0fVxuXG5cdHB1YmxpYyBnZXRNb3ZpZShpZDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcblx0XHRyZXR1cm4gZmV0Y2godGhpcy5fYnVpbGRVcmwoaWQpLCB7IG1ldGhvZDogXCJHRVRcIiB9KTtcblx0fVxuXG5cdHByaXZhdGUgX2J1aWxkVXJsKG1vdmllSWQ6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllLyR7bW92aWVJZH0/YXBpX2tleT0ke3RoaXMuX2FwcENvbmZpZy5BUElfS0VZfWA7XG5cdH1cbn0iLCJleHBvcnQgY2xhc3MgVGVtcGxhdGVTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdHB1YmxpYyBidWlsZE1vdmllVGVtcGxhdGUobW92aWU6IGFueSk6IGFueSB7XG5cdFx0cmV0dXJuIGBcblx0XHRcdDxoMT4ke21vdmllLnRpdGxlfTwvaDE+XG5cdFx0XHQ8dWw+XG5cdFx0XHRcdDxsaT4ke21vdmllLm92ZXJ2aWV3fTwvbGk+XG5cdFx0XHQ8L3VsPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGltZyBzcmM9XCIke3RoaXMuYnVpbGRJbWFnZShtb3ZpZSl9XCIvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHRHZW5yZXM6ICR7dGhpcy5idWlsZEdlbnJlcyhtb3ZpZSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHRgXG5cdH1cblxuXHRwdWJsaWMgYnVpbGRHZW5yZXMobW92aWU6IGFueSk6IGFueSB7XG5cdFx0bGV0IGdlbnJlcyA9ICcnO1xuXHRcdG1vdmllLmdlbnJlcy5mb3JFYWNoKChnZW5yZTogYW55KSA9PiB7XG5cdFx0XHRnZW5yZXMgKz0gYCAke2dlbnJlLm5hbWV9IGA7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGdlbnJlcztcblx0fVxuXG5cdHB1YmxpYyBidWlsZEltYWdlKG1vdmllOiBhbnkpOiBhbnkge1xuXHRcdGNvbnN0IG1vdmllQmFzZVVybCA9ICdodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwJztcblx0XHRyZXR1cm4gYCR7bW92aWVCYXNlVXJsfSR7bW92aWUucG9zdGVyX3BhdGh9YDtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiIn0=