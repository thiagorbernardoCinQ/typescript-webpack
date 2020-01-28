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


var movieService = new _movie_movie_service__WEBPACK_IMPORTED_MODULE_0__["MovieService"]();
var templateService = new _template_templete_service__WEBPACK_IMPORTED_MODULE_1__["TemplateService"]();
function component() {
    var element = document.createElement('div');
    element.innerHTML = 'Oi Raquel';
    return element;
}
function getMovie() {
    movieService.getMovie(181812)
        .then(function (response) {
        response.json().then(function (movie) {
            console.log(movie);
            var element = document.createElement('div');
            element.innerHTML = templateService.buildMovieTemplate(movie);
            document.body.appendChild(element);
        });
    });
}
getMovie();
document.body.appendChild(component());


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYXBpL2FwaS1jb25maWcuY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2FwcC1jb25maWcuY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW92aWUvbW92aWUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGUvdGVtcGxldGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQUE7QUFBTyxJQUFNLFNBQVMsR0FBa0I7SUFDdkMsSUFBSSxFQUFtQixFQUFFO0lBQ3RCLEtBQUssRUFBbUI7UUFDcEIsR0FBRyxFQUFFLFVBQUMsTUFBVyxJQUFLLCtDQUFzQyxNQUFN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VyxHQUFsQixVQUFtQixLQUFVO1FBQzVCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQVU7WUFDL0IsTUFBTSxJQUFJLE1BQUksS0FBSyxDQUFDLElBQUksTUFBRyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDO0lBRU0sb0NBQVUsR0FBakIsVUFBa0IsS0FBVTtRQUMzQixJQUFNLFlBQVksR0FBRyxpQ0FBaUMsQ0FBQztRQUN2RCxPQUFPLEtBQUcsWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFhLENBQUM7SUFDOUMsQ0FBQztJQUNGLHNCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IEFwcEFQSUNvbmZpZyB9IGZyb20gJy4vYXBwLWFwaS1wYXJhbXMubW9kZWwnO1xuaW1wb3J0IHsgQXBwQVBJUmVzb3VyY2UgfSBmcm9tICcuL2FwcC1hcGktcmVzb3VyY2UubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgYXBpQ29uZmlnOiBBcHBBUElDb25maWcgID0ge1xuXHRMSVNUOiA8QXBwQVBJUmVzb3VyY2U+IHt9LFxuICAgIE1PVklFOiA8QXBwQVBJUmVzb3VyY2U+IHtcbiAgICAgICAgR0VUOiAocGFyYW1zOiBhbnkpID0+IGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllLyR7cGFyYW1zLm1vdmllSWR9P2FwaV9rZXk9JHtwYXJhbXMuYXBpS2V5fSZsYW5ndWFnZT1lbi1VU2AsXG4gICAgICAgIEdFVF9BTEw6IChwYXJhbXM6IGFueSkgPT4gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbGlzdC8ke3BhcmFtcy5saXN0SWR9P2FwaV9rZXk9JHtwYXJhbXMuYXBpS2V5fSZsYW5ndWFnZT1lbi1VU2AsXG4gICAgfSxcbiAgICBTRVJJRTogPEFwcEFQSVJlc291cmNlPiB7XG4gICAgICAgIEdFVDogKHBhcmFtczogYW55KSA9PiBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy90di8ke3BhcmFtcy5zZXJpZUlkfT9hcGlfa2V5PSR7cGFyYW1zLmFwaUtleX0mbGFuZ3VhZ2U9ZW4tVVNgLFxuICAgICAgICBHRVRfQUxMOiAocGFyYW1zOiBhbnkpID0+IGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL2xpc3QvJHtwYXJhbXMubGlzdElkfT9hcGlfa2V5PSR7cGFyYW1zLmFwaUtleX0mbGFuZ3VhZ2U9ZW4tVVNgLFxuICAgIH1cbn07IiwiaW1wb3J0IHsgQXBwQ29uZmlnIH0gZnJvbSAnLi9hcHAtY29uZmlnLmludGVyZmFjZSc7XG5pbXBvcnQgeyBhcGlDb25maWcgfSBmcm9tICcuL2FwaS9hcGktY29uZmlnLmNvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBBUFBfQ09ORklHOiBBcHBDb25maWcgPSB7XG4gICAgQVBJX0tFWTogJzVkOGJmMjk5MGE0MGVlNTkyZWVlMGJkNjcyNjc2ZDYxJyxcbiAgICBNT1ZJRV9MSVNUX0lEOiAnMTExODYyJyxcbiAgICBTRVJJRV9MSVNUX0lEOiAnMTExODY2JyxcbiAgICBBUEk6IGFwaUNvbmZpZ1xufTtcbiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IE1vdmllU2VydmljZSB9IGZyb20gJy4vbW92aWUvbW92aWUuc2VydmljZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RlbXBsYXRlL3RlbXBsZXRlLnNlcnZpY2UnO1xuXG5jb25zdCBtb3ZpZVNlcnZpY2U6IE1vdmllU2VydmljZSA9IG5ldyBNb3ZpZVNlcnZpY2UoKTtcbmNvbnN0IHRlbXBsYXRlU2VydmljZTogVGVtcGxhdGVTZXJ2aWNlID0gbmV3IFRlbXBsYXRlU2VydmljZSgpO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZWxlbWVudC5pbm5lckhUTUwgPSAnT2kgUmFxdWVsJ1xuXHRyZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZ2V0TW92aWUoKSB7XG5cdG1vdmllU2VydmljZS5nZXRNb3ZpZSgxODE4MTIpXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0cmVzcG9uc2UuanNvbigpLnRoZW4oKG1vdmllOiBhbnkpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2cobW92aWUpO1xuXHRcdFx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gdGVtcGxhdGVTZXJ2aWNlLmJ1aWxkTW92aWVUZW1wbGF0ZShtb3ZpZSk7XG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdFx0XHR9KVxuXHRcdH0pO1xuXG59XG5cbmdldE1vdmllKCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbiIsImltcG9ydCB7IEFQUF9DT05GSUcgfSBmcm9tICcuLy4uL2NvcmUvYXBwLWNvbmZpZy5jb25zdGFudHMnO1xuaW1wb3J0IHsgQXBwQ29uZmlnIH0gZnJvbSAnLi4vY29yZS9hcHAtY29uZmlnLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBNb3ZpZVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgX2FwcENvbmZpZzogQXBwQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuX2FwcENvbmZpZyA9IEFQUF9DT05GSUc7XG5cdH1cblxuXHRwdWJsaWMgZ2V0TW92aWUoaWQ6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG5cdFx0cmV0dXJuIGZldGNoKHRoaXMuX2J1aWxkVXJsKGlkKSwgeyBtZXRob2Q6IFwiR0VUXCIgfSk7XG5cdH1cblxuXHRwcml2YXRlIF9idWlsZFVybChtb3ZpZUlkOiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdHJldHVybiBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS8ke21vdmllSWR9P2FwaV9rZXk9JHt0aGlzLl9hcHBDb25maWcuQVBJX0tFWX1gO1xuXHR9XG59IiwiZXhwb3J0IGNsYXNzIFRlbXBsYXRlU2VydmljZSB7XG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRwdWJsaWMgYnVpbGRNb3ZpZVRlbXBsYXRlKG1vdmllOiBhbnkpOiBhbnkge1xuXHRcdHJldHVybiBgXG5cdFx0XHQ8aDE+JHttb3ZpZS50aXRsZX08L2gxPlxuXHRcdFx0PHVsPlxuXHRcdFx0XHQ8bGk+JHttb3ZpZS5vdmVydmlld308L2xpPlxuXHRcdFx0PC91bD5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxpbWcgc3JjPVwiJHt0aGlzLmJ1aWxkSW1hZ2UobW92aWUpfVwiLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0R2VucmVzOiAke3RoaXMuYnVpbGRHZW5yZXMobW92aWUpfVxuXHRcdFx0PC9kaXY+XG5cdFx0YFxuXHR9XG5cblx0cHVibGljIGJ1aWxkR2VucmVzKG1vdmllOiBhbnkpOiBhbnkge1xuXHRcdGxldCBnZW5yZXMgPSAnJztcblx0XHRtb3ZpZS5nZW5yZXMuZm9yRWFjaCgoZ2VucmU6IGFueSkgPT4ge1xuXHRcdFx0Z2VucmVzICs9IGAgJHtnZW5yZS5uYW1lfSBgO1xuXHRcdH0pO1xuXHRcdHJldHVybiBnZW5yZXM7XG5cdH1cblxuXHRwdWJsaWMgYnVpbGRJbWFnZShtb3ZpZTogYW55KTogYW55IHtcblx0XHRjb25zdCBtb3ZpZUJhc2VVcmwgPSAnaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMCc7XG5cdFx0cmV0dXJuIGAke21vdmllQmFzZVVybH0ke21vdmllLnBvc3Rlcl9wYXRofWA7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9