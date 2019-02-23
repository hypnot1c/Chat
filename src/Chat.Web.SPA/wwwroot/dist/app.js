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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@aspnet/signalr/dist/esm/index.js":
/*!********************************************************************************************!*\
  !*** delegated ./node_modules/@aspnet/signalr/dist/esm/index.js from dll-reference vendor ***!
  \********************************************************************************************/
/*! exports provided: VERSION, AbortError, HttpError, TimeoutError, HttpClient, HttpResponse, DefaultHttpClient, HubConnection, HubConnectionState, HubConnectionBuilder, MessageType, LogLevel, HttpTransportType, TransferFormat, NullLogger, JsonHubProtocol */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/@aspnet/signalr/dist/esm/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@aspnet/signalr/dist/esm/index.js_from_dll-reference_vendor?");

/***/ }),

/***/ "./node_modules/aurelia-bootstrapper/dist/native-modules/aurelia-bootstrapper.js":
/*!***************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-bootstrapper/dist/native-modules/aurelia-bootstrapper.js from dll-reference vendor ***!
  \***************************************************************************************************************************/
/*! exports provided: bootstrap, starting */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/aurelia-bootstrapper/dist/native-modules/aurelia-bootstrapper.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-bootstrapper/dist/native-modules/aurelia-bootstrapper.js_from_dll-reference_vendor?");

/***/ }),

/***/ "./node_modules/aurelia-fetch-client/dist/native-modules/aurelia-fetch-client.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/aurelia-fetch-client/dist/native-modules/aurelia-fetch-client.js ***!
  \***************************************************************************************/
/*! exports provided: json, retryStrategy, RetryInterceptor, HttpClientConfiguration, HttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(Promise) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"json\", function() { return json; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"retryStrategy\", function() { return retryStrategy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RetryInterceptor\", function() { return RetryInterceptor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HttpClientConfiguration\", function() { return HttpClientConfiguration; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HttpClient\", function() { return HttpClient; });\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ \"./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js\");\n\n\nfunction json(body, replacer) {\r\n    return JSON.stringify((body !== undefined ? body : {}), replacer);\r\n}\n\nvar retryStrategy = {\r\n    fixed: 0,\r\n    incremental: 1,\r\n    exponential: 2,\r\n    random: 3\r\n};\r\nvar defaultRetryConfig = {\r\n    maxRetries: 3,\r\n    interval: 1000,\r\n    strategy: retryStrategy.fixed\r\n};\r\nvar RetryInterceptor = (function () {\r\n    function RetryInterceptor(retryConfig) {\r\n        this.retryConfig = Object.assign({}, defaultRetryConfig, retryConfig || {});\r\n        if (this.retryConfig.strategy === retryStrategy.exponential &&\r\n            this.retryConfig.interval <= 1000) {\r\n            throw new Error('An interval less than or equal to 1 second is not allowed when using the exponential retry strategy');\r\n        }\r\n    }\r\n    RetryInterceptor.prototype.request = function (request) {\r\n        var $r = request;\r\n        if (!$r.retryConfig) {\r\n            $r.retryConfig = Object.assign({}, this.retryConfig);\r\n            $r.retryConfig.counter = 0;\r\n        }\r\n        $r.retryConfig.requestClone = request.clone();\r\n        return request;\r\n    };\r\n    RetryInterceptor.prototype.response = function (response, request) {\r\n        delete request.retryConfig;\r\n        return response;\r\n    };\r\n    RetryInterceptor.prototype.responseError = function (error, request, httpClient) {\r\n        var retryConfig = request.retryConfig;\r\n        var requestClone = retryConfig.requestClone;\r\n        return Promise.resolve().then(function () {\r\n            if (retryConfig.counter < retryConfig.maxRetries) {\r\n                var result = retryConfig.doRetry ? retryConfig.doRetry(error, request) : true;\r\n                return Promise.resolve(result).then(function (doRetry) {\r\n                    if (doRetry) {\r\n                        retryConfig.counter++;\r\n                        return new Promise(function (resolve) { return aurelia_pal__WEBPACK_IMPORTED_MODULE_0__[\"PLATFORM\"].global.setTimeout(resolve, calculateDelay(retryConfig) || 0); })\r\n                            .then(function () {\r\n                            var newRequest = requestClone.clone();\r\n                            if (typeof (retryConfig.beforeRetry) === 'function') {\r\n                                return retryConfig.beforeRetry(newRequest, httpClient);\r\n                            }\r\n                            return newRequest;\r\n                        })\r\n                            .then(function (newRequest) {\r\n                            return httpClient.fetch(Object.assign(newRequest, { retryConfig: retryConfig }));\r\n                        });\r\n                    }\r\n                    delete request.retryConfig;\r\n                    throw error;\r\n                });\r\n            }\r\n            delete request.retryConfig;\r\n            throw error;\r\n        });\r\n    };\r\n    return RetryInterceptor;\r\n}());\r\nfunction calculateDelay(retryConfig) {\r\n    var interval = retryConfig.interval, strategy = retryConfig.strategy, minRandomInterval = retryConfig.minRandomInterval, maxRandomInterval = retryConfig.maxRandomInterval, counter = retryConfig.counter;\r\n    if (typeof (strategy) === 'function') {\r\n        return retryConfig.strategy(counter);\r\n    }\r\n    switch (strategy) {\r\n        case (retryStrategy.fixed):\r\n            return retryStrategies[retryStrategy.fixed](interval);\r\n        case (retryStrategy.incremental):\r\n            return retryStrategies[retryStrategy.incremental](counter, interval);\r\n        case (retryStrategy.exponential):\r\n            return retryStrategies[retryStrategy.exponential](counter, interval);\r\n        case (retryStrategy.random):\r\n            return retryStrategies[retryStrategy.random](counter, interval, minRandomInterval, maxRandomInterval);\r\n        default:\r\n            throw new Error('Unrecognized retry strategy');\r\n    }\r\n}\r\nvar retryStrategies = [\r\n    function (interval) { return interval; },\r\n    function (retryCount, interval) { return interval * retryCount; },\r\n    function (retryCount, interval) { return retryCount === 1 ? interval : Math.pow(interval, retryCount) / 1000; },\r\n    function (retryCount, interval, minRandomInterval, maxRandomInterval) {\r\n        if (minRandomInterval === void 0) { minRandomInterval = 0; }\r\n        if (maxRandomInterval === void 0) { maxRandomInterval = 60000; }\r\n        return Math.random() * (maxRandomInterval - minRandomInterval) + minRandomInterval;\r\n    }\r\n];\n\nvar HttpClientConfiguration = (function () {\r\n    function HttpClientConfiguration() {\r\n        this.baseUrl = '';\r\n        this.defaults = {};\r\n        this.interceptors = [];\r\n    }\r\n    HttpClientConfiguration.prototype.withBaseUrl = function (baseUrl) {\r\n        this.baseUrl = baseUrl;\r\n        return this;\r\n    };\r\n    HttpClientConfiguration.prototype.withDefaults = function (defaults) {\r\n        this.defaults = defaults;\r\n        return this;\r\n    };\r\n    HttpClientConfiguration.prototype.withInterceptor = function (interceptor) {\r\n        this.interceptors.push(interceptor);\r\n        return this;\r\n    };\r\n    HttpClientConfiguration.prototype.useStandardConfiguration = function () {\r\n        var standardConfig = { credentials: 'same-origin' };\r\n        Object.assign(this.defaults, standardConfig, this.defaults);\r\n        return this.rejectErrorResponses();\r\n    };\r\n    HttpClientConfiguration.prototype.rejectErrorResponses = function () {\r\n        return this.withInterceptor({ response: rejectOnError });\r\n    };\r\n    HttpClientConfiguration.prototype.withRetry = function (config) {\r\n        var interceptor = new RetryInterceptor(config);\r\n        return this.withInterceptor(interceptor);\r\n    };\r\n    return HttpClientConfiguration;\r\n}());\r\nfunction rejectOnError(response) {\r\n    if (!response.ok) {\r\n        throw response;\r\n    }\r\n    return response;\r\n}\n\nvar HttpClient = (function () {\r\n    function HttpClient() {\r\n        this.activeRequestCount = 0;\r\n        this.isRequesting = false;\r\n        this.isConfigured = false;\r\n        this.baseUrl = '';\r\n        this.defaults = null;\r\n        this.interceptors = [];\r\n        if (typeof fetch === 'undefined') {\r\n            throw new Error('HttpClient requires a Fetch API implementation, but the current environment doesn\\'t support it. You may need to load a polyfill such as https://github.com/github/fetch');\r\n        }\r\n    }\r\n    HttpClient.prototype.configure = function (config) {\r\n        var normalizedConfig;\r\n        if (typeof config === 'object') {\r\n            normalizedConfig = { defaults: config };\r\n        }\r\n        else if (typeof config === 'function') {\r\n            normalizedConfig = new HttpClientConfiguration();\r\n            normalizedConfig.baseUrl = this.baseUrl;\r\n            normalizedConfig.defaults = Object.assign({}, this.defaults);\r\n            normalizedConfig.interceptors = this.interceptors;\r\n            var c = config(normalizedConfig);\r\n            if (HttpClientConfiguration.prototype.isPrototypeOf(c)) {\r\n                normalizedConfig = c;\r\n            }\r\n        }\r\n        else {\r\n            throw new Error('invalid config');\r\n        }\r\n        var defaults = normalizedConfig.defaults;\r\n        if (defaults && Headers.prototype.isPrototypeOf(defaults.headers)) {\r\n            throw new Error('Default headers must be a plain object.');\r\n        }\r\n        var interceptors = normalizedConfig.interceptors;\r\n        if (interceptors && interceptors.length) {\r\n            if (interceptors.filter(function (x) { return RetryInterceptor.prototype.isPrototypeOf(x); }).length > 1) {\r\n                throw new Error('Only one RetryInterceptor is allowed.');\r\n            }\r\n            var retryInterceptorIndex = interceptors.findIndex(function (x) { return RetryInterceptor.prototype.isPrototypeOf(x); });\r\n            if (retryInterceptorIndex >= 0 && retryInterceptorIndex !== interceptors.length - 1) {\r\n                throw new Error('The retry interceptor must be the last interceptor defined.');\r\n            }\r\n        }\r\n        this.baseUrl = normalizedConfig.baseUrl;\r\n        this.defaults = defaults;\r\n        this.interceptors = normalizedConfig.interceptors || [];\r\n        this.isConfigured = true;\r\n        return this;\r\n    };\r\n    HttpClient.prototype.fetch = function (input, init) {\r\n        var _this = this;\r\n        trackRequestStart(this);\r\n        var request = this.buildRequest(input, init);\r\n        return processRequest(request, this.interceptors, this).then(function (result) {\r\n            var response = null;\r\n            if (Response.prototype.isPrototypeOf(result)) {\r\n                response = Promise.resolve(result);\r\n            }\r\n            else if (Request.prototype.isPrototypeOf(result)) {\r\n                request = result;\r\n                response = fetch(result);\r\n            }\r\n            else {\r\n                throw new Error(\"An invalid result was returned by the interceptor chain. Expected a Request or Response instance, but got [\" + result + \"]\");\r\n            }\r\n            return processResponse(response, _this.interceptors, request, _this);\r\n        })\r\n            .then(function (result) {\r\n            if (Request.prototype.isPrototypeOf(result)) {\r\n                return _this.fetch(result);\r\n            }\r\n            return result;\r\n        })\r\n            .then(function (result) {\r\n            trackRequestEnd(_this);\r\n            return result;\r\n        }, function (error) {\r\n            trackRequestEnd(_this);\r\n            throw error;\r\n        });\r\n    };\r\n    HttpClient.prototype.buildRequest = function (input, init) {\r\n        var defaults = this.defaults || {};\r\n        var request;\r\n        var body;\r\n        var requestContentType;\r\n        var parsedDefaultHeaders = parseHeaderValues(defaults.headers);\r\n        if (Request.prototype.isPrototypeOf(input)) {\r\n            request = input;\r\n            requestContentType = new Headers(request.headers).get('Content-Type');\r\n        }\r\n        else {\r\n            if (!init) {\r\n                init = {};\r\n            }\r\n            body = init.body;\r\n            var bodyObj = body ? { body: body } : null;\r\n            var requestInit = Object.assign({}, defaults, { headers: {} }, init, bodyObj);\r\n            requestContentType = new Headers(requestInit.headers).get('Content-Type');\r\n            request = new Request(getRequestUrl(this.baseUrl, input), requestInit);\r\n        }\r\n        if (!requestContentType) {\r\n            if (new Headers(parsedDefaultHeaders).has('content-type')) {\r\n                request.headers.set('Content-Type', new Headers(parsedDefaultHeaders).get('content-type'));\r\n            }\r\n            else if (body && isJSON(body)) {\r\n                request.headers.set('Content-Type', 'application/json');\r\n            }\r\n        }\r\n        setDefaultHeaders(request.headers, parsedDefaultHeaders);\r\n        if (body && Blob.prototype.isPrototypeOf(body) && body.type) {\r\n            request.headers.set('Content-Type', body.type);\r\n        }\r\n        return request;\r\n    };\r\n    HttpClient.prototype.get = function (input, init) {\r\n        return this.fetch(input, init);\r\n    };\r\n    HttpClient.prototype.post = function (input, body, init) {\r\n        return callFetch(this, input, body, init, 'POST');\r\n    };\r\n    HttpClient.prototype.put = function (input, body, init) {\r\n        return callFetch(this, input, body, init, 'PUT');\r\n    };\r\n    HttpClient.prototype.patch = function (input, body, init) {\r\n        return callFetch(this, input, body, init, 'PATCH');\r\n    };\r\n    HttpClient.prototype.delete = function (input, body, init) {\r\n        return callFetch(this, input, body, init, 'DELETE');\r\n    };\r\n    return HttpClient;\r\n}());\r\nvar absoluteUrlRegexp = /^([a-z][a-z0-9+\\-.]*:)?\\/\\//i;\r\nfunction trackRequestStart(client) {\r\n    client.isRequesting = !!(++client.activeRequestCount);\r\n    if (client.isRequesting) {\r\n        var evt_1 = aurelia_pal__WEBPACK_IMPORTED_MODULE_0__[\"DOM\"].createCustomEvent('aurelia-fetch-client-request-started', { bubbles: true, cancelable: true });\r\n        setTimeout(function () { return aurelia_pal__WEBPACK_IMPORTED_MODULE_0__[\"DOM\"].dispatchEvent(evt_1); }, 1);\r\n    }\r\n}\r\nfunction trackRequestEnd(client) {\r\n    client.isRequesting = !!(--client.activeRequestCount);\r\n    if (!client.isRequesting) {\r\n        var evt_2 = aurelia_pal__WEBPACK_IMPORTED_MODULE_0__[\"DOM\"].createCustomEvent('aurelia-fetch-client-requests-drained', { bubbles: true, cancelable: true });\r\n        setTimeout(function () { return aurelia_pal__WEBPACK_IMPORTED_MODULE_0__[\"DOM\"].dispatchEvent(evt_2); }, 1);\r\n    }\r\n}\r\nfunction parseHeaderValues(headers) {\r\n    var parsedHeaders = {};\r\n    for (var name_1 in headers || {}) {\r\n        if (headers.hasOwnProperty(name_1)) {\r\n            parsedHeaders[name_1] = (typeof headers[name_1] === 'function') ? headers[name_1]() : headers[name_1];\r\n        }\r\n    }\r\n    return parsedHeaders;\r\n}\r\nfunction getRequestUrl(baseUrl, url) {\r\n    if (absoluteUrlRegexp.test(url)) {\r\n        return url;\r\n    }\r\n    return (baseUrl || '') + url;\r\n}\r\nfunction setDefaultHeaders(headers, defaultHeaders) {\r\n    for (var name_2 in defaultHeaders || {}) {\r\n        if (defaultHeaders.hasOwnProperty(name_2) && !headers.has(name_2)) {\r\n            headers.set(name_2, defaultHeaders[name_2]);\r\n        }\r\n    }\r\n}\r\nfunction processRequest(request, interceptors, http) {\r\n    return applyInterceptors(request, interceptors, 'request', 'requestError', http);\r\n}\r\nfunction processResponse(response, interceptors, request, http) {\r\n    return applyInterceptors(response, interceptors, 'response', 'responseError', request, http);\r\n}\r\nfunction applyInterceptors(input, interceptors, successName, errorName) {\r\n    var interceptorArgs = [];\r\n    for (var _i = 4; _i < arguments.length; _i++) {\r\n        interceptorArgs[_i - 4] = arguments[_i];\r\n    }\r\n    return (interceptors || [])\r\n        .reduce(function (chain, interceptor) {\r\n        var successHandler = interceptor[successName];\r\n        var errorHandler = interceptor[errorName];\r\n        return chain.then(successHandler && (function (value) { return successHandler.call.apply(successHandler, [interceptor, value].concat(interceptorArgs)); }) || identity, errorHandler && (function (reason) { return errorHandler.call.apply(errorHandler, [interceptor, reason].concat(interceptorArgs)); }) || thrower);\r\n    }, Promise.resolve(input));\r\n}\r\nfunction isJSON(str) {\r\n    try {\r\n        JSON.parse(str);\r\n    }\r\n    catch (err) {\r\n        return false;\r\n    }\r\n    return true;\r\n}\r\nfunction identity(x) {\r\n    return x;\r\n}\r\nfunction thrower(x) {\r\n    throw x;\r\n}\r\nfunction callFetch(client, input, body, init, method) {\r\n    if (!init) {\r\n        init = {};\r\n    }\r\n    init.method = method;\r\n    if (body) {\r\n        init.body = body;\r\n    }\r\n    return client.fetch(input, init);\r\n}\n\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! bluebird */ \"./node_modules/bluebird/js/browser/bluebird.js\")))\n\n//# sourceURL=webpack:///./node_modules/aurelia-fetch-client/dist/native-modules/aurelia-fetch-client.js?");

/***/ }),

/***/ "./node_modules/aurelia-loader-webpack/dist/native-modules/aurelia-loader-webpack.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/aurelia-loader-webpack/dist/native-modules/aurelia-loader-webpack.js ***!
  \*******************************************************************************************/
/*! exports provided: TextTemplateLoader, ensureOriginOnExports, WebpackLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(Promise, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextTemplateLoader\", function() { return TextTemplateLoader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ensureOriginOnExports\", function() { return ensureOriginOnExports; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WebpackLoader\", function() { return WebpackLoader; });\n/* harmony import */ var aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-metadata */ \"./node_modules/aurelia-metadata/dist/native-modules/aurelia-metadata.js\");\n/* harmony import */ var aurelia_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-loader */ \"./node_modules/aurelia-loader/dist/native-modules/aurelia-loader.js\");\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-pal */ \"./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\n/**\n* An implementation of the TemplateLoader interface implemented with text-based loading.\n*/\nvar TextTemplateLoader = /** @class */ (function () {\n    function TextTemplateLoader() {\n    }\n    /**\n    * Loads a template.\n    * @param loader The loader that is requesting the template load.\n    * @param entry The TemplateRegistryEntry to load and populate with a template.\n    * @return A promise which resolves when the TemplateRegistryEntry is loaded with a template.\n    */\n    TextTemplateLoader.prototype.loadTemplate = function (loader, entry) {\n        return __awaiter(this, void 0, void 0, function () {\n            var text;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, loader.loadText(entry.address)];\n                    case 1:\n                        text = _a.sent();\n                        entry.template = aurelia_pal__WEBPACK_IMPORTED_MODULE_2__[\"DOM\"].createTemplateFromMarkup(text);\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    return TextTemplateLoader;\n}());\n\nfunction ensureOriginOnExports(moduleExports, moduleId) {\n    var target = moduleExports;\n    var key;\n    var exportedValue;\n    if (target.__useDefault) {\n        target = target.default;\n    }\n    aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__[\"Origin\"].set(target, new aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__[\"Origin\"](moduleId, 'default'));\n    if (typeof target === 'object') {\n        for (key in target) {\n            exportedValue = target[key];\n            if (typeof exportedValue === 'function') {\n                aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__[\"Origin\"].set(exportedValue, new aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__[\"Origin\"](moduleId, key));\n            }\n        }\n    }\n    return moduleExports;\n}\n/**\n* A default implementation of the Loader abstraction which works with webpack (extended common-js style).\n*/\nvar WebpackLoader = /** @class */ (function (_super) {\n    __extends(WebpackLoader, _super);\n    function WebpackLoader() {\n        var _this = _super.call(this) || this;\n        _this.moduleRegistry = Object.create(null);\n        _this.loaderPlugins = Object.create(null);\n        _this.modulesBeingLoaded = new Map();\n        _this.useTemplateLoader(new TextTemplateLoader());\n        _this.addPlugin('template-registry-entry', {\n            fetch: function (moduleId) { return __awaiter(_this, void 0, void 0, function () {\n                var HmrContext, entry;\n                var _this = this;\n                return __generator(this, function (_a) {\n                    switch (_a.label) {\n                        case 0:\n                            // HMR:\n                            if (false) {}\n                            entry = this.getOrCreateTemplateRegistryEntry(moduleId);\n                            if (!!entry.templateIsLoaded) return [3 /*break*/, 2];\n                            return [4 /*yield*/, this.templateLoader.loadTemplate(this, entry)];\n                        case 1:\n                            _a.sent();\n                            _a.label = 2;\n                        case 2: return [2 /*return*/, entry];\n                    }\n                });\n            }); }\n        });\n        aurelia_pal__WEBPACK_IMPORTED_MODULE_2__[\"PLATFORM\"].eachModule = function (callback) {\n            var registry = __webpack_require__.c;\n            var cachedModuleIds = Object.getOwnPropertyNames(registry);\n            cachedModuleIds\n                // Note: we use .some here like a .forEach that can be \"break\"ed out of.\n                // It will stop iterating only when a truthy value is returned.\n                // Even though the docs say \"true\" explicitly, loader-default also goes by truthy\n                // and this is to keep it consistent with that.\n                .some(function (moduleId) {\n                var moduleExports = registry[moduleId].exports;\n                if (typeof moduleExports === 'object') {\n                    return callback(moduleId, moduleExports);\n                }\n                return false;\n            });\n        };\n        return _this;\n    }\n    WebpackLoader.prototype._import = function (address, defaultHMR) {\n        if (defaultHMR === void 0) { defaultHMR = true; }\n        return __awaiter(this, void 0, void 0, function () {\n            var addressParts, moduleId, loaderPlugin, plugin_1, asyncModuleId, callback;\n            var _this = this;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        addressParts = address.split('!');\n                        moduleId = addressParts.splice(addressParts.length - 1, 1)[0];\n                        loaderPlugin = addressParts.length === 1 ? addressParts[0] : null;\n                        if (!loaderPlugin) return [3 /*break*/, 2];\n                        plugin_1 = this.loaderPlugins[loaderPlugin];\n                        if (!plugin_1) {\n                            throw new Error(\"Plugin \" + loaderPlugin + \" is not registered in the loader.\");\n                        }\n                        if (false) {}\n                        return [4 /*yield*/, plugin_1.fetch(moduleId)];\n                    case 1: return [2 /*return*/, _a.sent()];\n                    case 2:\n                        if (__webpack_require__.m[moduleId]) {\n                            if (defaultHMR && module.hot && this.hmrContext) {\n                                module.hot.accept(moduleId, function () { return _this.hmrContext.handleModuleChange(moduleId, module.hot); });\n                            }\n                            return [2 /*return*/, __webpack_require__(moduleId)];\n                        }\n                        asyncModuleId = \"async!\" + moduleId;\n                        if (!__webpack_require__.m[asyncModuleId]) return [3 /*break*/, 4];\n                        if (defaultHMR && module.hot && this.hmrContext) {\n                            module.hot.accept(moduleId, function () { return _this.hmrContext.handleModuleChange(moduleId, module.hot); });\n                            module.hot.accept(asyncModuleId, function () { return _this.hmrContext.handleModuleChange(moduleId, module.hot); });\n                        }\n                        callback = __webpack_require__(asyncModuleId);\n                        return [4 /*yield*/, new Promise(callback)];\n                    case 3: return [2 /*return*/, _a.sent()];\n                    case 4: throw new Error(\"Unable to find module with ID: \" + moduleId);\n                }\n            });\n        });\n    };\n    /**\n    * Maps a module id to a source.\n    * @param id The module id.\n    * @param source The source to map the module to.\n    */\n    WebpackLoader.prototype.map = function (id, source) { };\n    /**\n    * Normalizes a module id.\n    * @param moduleId The module id to normalize.\n    * @param relativeTo What the module id should be normalized relative to.\n    * @return The normalized module id.\n    */\n    WebpackLoader.prototype.normalizeSync = function (moduleId, relativeTo) {\n        return moduleId;\n    };\n    /**\n    * Normalizes a module id.\n    * @param moduleId The module id to normalize.\n    * @param relativeTo What the module id should be normalized relative to.\n    * @return The normalized module id.\n    */\n    WebpackLoader.prototype.normalize = function (moduleId, relativeTo) {\n        return Promise.resolve(moduleId);\n    };\n    /**\n    * Instructs the loader to use a specific TemplateLoader instance for loading templates\n    * @param templateLoader The instance of TemplateLoader to use for loading templates.\n    */\n    WebpackLoader.prototype.useTemplateLoader = function (templateLoader) {\n        this.templateLoader = templateLoader;\n    };\n    /**\n    * Loads a collection of modules.\n    * @param ids The set of module ids to load.\n    * @return A Promise for an array of loaded modules.\n    */\n    WebpackLoader.prototype.loadAllModules = function (ids) {\n        var _this = this;\n        return Promise.all(ids.map(function (id) { return _this.loadModule(id); }));\n    };\n    /**\n    * Loads a module.\n    * @param moduleId The module ID to load.\n    * @return A Promise for the loaded module.\n    */\n    WebpackLoader.prototype.loadModule = function (moduleId, defaultHMR) {\n        if (defaultHMR === void 0) { defaultHMR = true; }\n        return __awaiter(this, void 0, void 0, function () {\n            var existing, beingLoaded, moduleExports;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        existing = this.moduleRegistry[moduleId];\n                        if (existing) {\n                            return [2 /*return*/, existing];\n                        }\n                        beingLoaded = this.modulesBeingLoaded.get(moduleId);\n                        if (beingLoaded) {\n                            return [2 /*return*/, beingLoaded];\n                        }\n                        beingLoaded = this._import(moduleId, defaultHMR);\n                        this.modulesBeingLoaded.set(moduleId, beingLoaded);\n                        return [4 /*yield*/, beingLoaded];\n                    case 1:\n                        moduleExports = _a.sent();\n                        this.moduleRegistry[moduleId] = ensureOriginOnExports(moduleExports, moduleId);\n                        this.modulesBeingLoaded.delete(moduleId);\n                        return [2 /*return*/, moduleExports];\n                }\n            });\n        });\n    };\n    /**\n    * Loads a template.\n    * @param url The url of the template to load.\n    * @return A Promise for a TemplateRegistryEntry containing the template.\n    */\n    WebpackLoader.prototype.loadTemplate = function (url) {\n        return this.loadModule(this.applyPluginToUrl(url, 'template-registry-entry'), false);\n    };\n    /**\n    * Loads a text-based resource.\n    * @param url The url of the text file to load.\n    * @return A Promise for text content.\n    */\n    WebpackLoader.prototype.loadText = function (url) {\n        return __awaiter(this, void 0, void 0, function () {\n            var result;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.loadModule(url, false)];\n                    case 1:\n                        result = _a.sent();\n                        if (result instanceof Array && result[0] instanceof Array && result.hasOwnProperty('toString')) {\n                            // we're dealing with a file loaded using the css-loader:\n                            return [2 /*return*/, result.toString()];\n                        }\n                        return [2 /*return*/, result];\n                }\n            });\n        });\n    };\n    /**\n    * Alters a module id so that it includes a plugin loader.\n    * @param url The url of the module to load.\n    * @param pluginName The plugin to apply to the module id.\n    * @return The plugin-based module id.\n    */\n    WebpackLoader.prototype.applyPluginToUrl = function (url, pluginName) {\n        return pluginName + \"!\" + url;\n    };\n    /**\n    * Registers a plugin with the loader.\n    * @param pluginName The name of the plugin.\n    * @param implementation The plugin implementation.\n    */\n    WebpackLoader.prototype.addPlugin = function (pluginName, implementation) {\n        this.loaderPlugins[pluginName] = implementation;\n    };\n    return WebpackLoader;\n}(aurelia_loader__WEBPACK_IMPORTED_MODULE_1__[\"Loader\"]));\n\naurelia_pal__WEBPACK_IMPORTED_MODULE_2__[\"PLATFORM\"].Loader = WebpackLoader;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! bluebird */ \"./node_modules/bluebird/js/browser/bluebird.js\"), __webpack_require__(/*! ./../../../webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/aurelia-loader-webpack/dist/native-modules/aurelia-loader-webpack.js?");

/***/ }),

/***/ "./node_modules/aurelia-loader/dist/native-modules/aurelia-loader.js":
/*!***************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-loader/dist/native-modules/aurelia-loader.js from dll-reference vendor ***!
  \***************************************************************************************************************/
/*! exports provided: TemplateDependency, TemplateRegistryEntry, Loader */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/aurelia-loader/dist/native-modules/aurelia-loader.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-loader/dist/native-modules/aurelia-loader.js_from_dll-reference_vendor?");

/***/ }),

/***/ "./node_modules/aurelia-logging/dist/native-modules/aurelia-logging.js":
/*!*****************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-logging/dist/native-modules/aurelia-logging.js from dll-reference vendor ***!
  \*****************************************************************************************************************/
/*! exports provided: logLevel, getLogger, addAppender, removeAppender, getAppenders, clearAppenders, addCustomLevel, removeCustomLevel, setLevel, getLevel, Logger */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/aurelia-logging/dist/native-modules/aurelia-logging.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-logging/dist/native-modules/aurelia-logging.js_from_dll-reference_vendor?");

/***/ }),

/***/ "./node_modules/aurelia-metadata/dist/native-modules/aurelia-metadata.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-metadata/dist/native-modules/aurelia-metadata.js from dll-reference vendor ***!
  \*******************************************************************************************************************/
/*! exports provided: metadata, Origin, decorators, deprecated, mixin, protocol */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/aurelia-metadata/dist/native-modules/aurelia-metadata.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-metadata/dist/native-modules/aurelia-metadata.js_from_dll-reference_vendor?");

/***/ }),

/***/ "./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js from dll-reference vendor ***!
  \*********************************************************************************************************/
/*! exports provided: AggregateError, FEATURE, PLATFORM, DOM, isInitialized, initializePAL, reset */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js_from_dll-reference_vendor?");

/***/ }),

/***/ "./node_modules/aurelia-router/dist/native-modules/aurelia-router.js":
/*!***************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-router/dist/native-modules/aurelia-router.js from dll-reference vendor ***!
  \***************************************************************************************************************/
/*! exports provided: _normalizeAbsolutePath, _createRootedPath, _resolveUrl, _ensureArrayWithSingleRoutePerConfig, CommitChangesStep, NavigationInstruction, NavModel, isNavigationCommand, Redirect, RedirectToRoute, pipelineStatus, Pipeline, RouterConfiguration, activationStrategy, BuildNavigationPlanStep, _buildNavigationPlan, Router, CanDeactivatePreviousStep, CanActivateNextStep, DeactivatePreviousStep, ActivateNextStep, RouteLoader, LoadRouteStep, PipelineProvider, AppRouter */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/aurelia-router/dist/native-modules/aurelia-router.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-router/dist/native-modules/aurelia-router.js_from_dll-reference_vendor?");

/***/ }),

/***/ "./node_modules/aurelia-webpack-plugin/runtime/empty-entry.js":
/*!********************************************************************!*\
  !*** ./node_modules/aurelia-webpack-plugin/runtime/empty-entry.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// This file contains an empty module that does nothing.\n// It's meant to be added as an entry point to the main bundle\n// and helps reliably adding some Aurelia dependencies that are attached \n// to no module in particular, such as `includeAll` results or `aureliaApp`.\n//\n// Trying to attach those dependencies to, for example, 'aurelia-bootstrapper' \n// is unreliable if 'aurelia-bootstrapper' is in a DLL outside the bundle.\n//\n// Trying to attach to 'aurelia-loader-webpack' works well, unless a user\n// configures a customized loader instead (unlikely, but in theory supported).\n\n\n//# sourceURL=webpack:///./node_modules/aurelia-webpack-plugin/runtime/empty-entry.js?");

/***/ }),

/***/ "./node_modules/aurelia-webpack-plugin/runtime/pal-loader-entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/aurelia-webpack-plugin/runtime/pal-loader-entry.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ \"./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js\");\n// With default aurelia-loader-webpack config, this module is added as an extra entry\n// before any other code executes so that PAL.Loader is properly configured.\n// There are several tricky points worth noticing.\n// \n// We don't add aurelia-loader-webpack itself as an entry point (used to until 2.0 RC2)\n// because it (transitively) brings too much bagage with itself, most notably polyfills.\n// This made it super-hard to add other polyfills before Aurelia's and led to various bugs.\n//\n// We don't add custom code in aurelia-pal or aurelia-loader or aurelia-bootstrapper to detect\n// the Webpack environment and configure the loader because they might live in a DLL.\n// If they do, they would bring aurelia-loader-webpack along in the DLL and this is a special \n// library that *has to be in the main chunk.*\n//\n// The over-complicated design I've settled upon in the end is to use this special module\n// as an entry point that configures aurelia-loader-webpack. It has minimal static imports:\n// just aurelia-pal, which itself has no other dependencies and doesn't run much code.\n// It hacks the loader field into a getter so that it can synchronously load aurelia-loader-webpack\n// just in time when it is demanded by aurelia-bootstrapper.\n// This enables users to load polyfills before aurelia-loader-webpack is actually loaded.\n\n\n\nvar Loader;\n\nObject.defineProperty(aurelia_pal__WEBPACK_IMPORTED_MODULE_0__[\"PLATFORM\"], \"Loader\", {\n  get: function() {\n    return Loader || (Loader = __webpack_require__(/*! aurelia-loader-webpack */ \"./node_modules/aurelia-loader-webpack/dist/native-modules/aurelia-loader-webpack.js\").WebpackLoader);\n  },\n  set: function(value) {\n    Loader = value;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/aurelia-webpack-plugin/runtime/pal-loader-entry.js?");

/***/ }),

/***/ "./node_modules/bluebird/js/browser/bluebird.js":
/*!******************************************************************************************!*\
  !*** delegated ./node_modules/bluebird/js/browser/bluebird.js from dll-reference vendor ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/bluebird/js/browser/bluebird.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/bluebird/js/browser/bluebird.js_from_dll-reference_vendor?");

/***/ }),

/***/ "./node_modules/oidc-client/lib/oidc-client.min.js":
/*!*********************************************************************************************!*\
  !*** delegated ./node_modules/oidc-client/lib/oidc-client.min.js from dll-reference vendor ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/oidc-client/lib/oidc-client.min.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/oidc-client/lib/oidc-client.min.js_from_dll-reference_vendor?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/config/app-config.ts":
/*!**********************************!*\
  !*** ./src/config/app-config.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! oidc-client */ \"./node_modules/oidc-client/lib/oidc-client.min.js\");\n/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aspnet/signalr */ \"./node_modules/@aspnet/signalr/dist/esm/index.js\");\n/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment */ \"./src/config/environment.ts\");\n\r\n\r\n\r\nvar appHost = \"http://localhost:3000\";\r\nvar appConfig = {\r\n    Environment: _environment__WEBPACK_IMPORTED_MODULE_2__[\"Environment\"].DEV,\r\n    AppHost: appHost,\r\n    ApiHost: \"http://localhost:51175\",\r\n    SignalR: {\r\n        HubRoot: 'hub',\r\n        ConnectionOptions: {\r\n            transport: _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__[\"HttpTransportType\"].WebSockets,\r\n            logger: _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__[\"LogLevel\"].Debug\r\n        }\r\n    },\r\n    AuthService: {\r\n        storagePrefix: \"dev-\",\r\n        logLevel: oidc_client__WEBPACK_IMPORTED_MODULE_0__[\"Log\"].DEBUG,\r\n        authority: \"https://test-auth.winteam.io\",\r\n        clientId: \"Chat-SPA-DEV\",\r\n        redirectUri: appHost + \"/auth/signincallback\",\r\n        postLogoutRedirectUri: appHost + \"/auth/signoutcallback\",\r\n        silentRedirectUri: appHost + \"/auth/silentrenew\",\r\n        responseType: \"id_token token\",\r\n        scope: \"openid email profile wplapi wplapisearch\",\r\n    }\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (appConfig);\r\n\n\n//# sourceURL=webpack:///./src/config/app-config.ts?");

/***/ }),

/***/ "./src/config/app-route-config.ts":
/*!****************************************!*\
  !*** ./src/config/app-route-config.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ \"./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js\");\n/* harmony import */ var aurelia_open_id_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-open-id-connect */ \"aurelia-open-id-connect\");\n\r\n\r\nvar config = [\r\n    {\r\n        route: 'login',\r\n        name: 'login',\r\n        moduleId: 'pages/auth/login',\r\n        nav: false,\r\n        title: 'Welcome'\r\n    },\r\n    {\r\n        route: 'logout',\r\n        name: 'logout',\r\n        moduleId: 'pages/auth/logout',\r\n        nav: false,\r\n        title: 'Welcome'\r\n    },\r\n    {\r\n        route: [''],\r\n        name: 'root',\r\n        moduleId: 'pages/main',\r\n        nav: false,\r\n        title: 'Welcome',\r\n        settings: {\r\n            roles: [aurelia_open_id_connect__WEBPACK_IMPORTED_MODULE_1__[\"OpenIdConnectRoles\"].Everyone],\r\n        }\r\n    }\r\n];\r\nvar fallbackRoute = {\r\n    route: 'error',\r\n    name: 'error',\r\n    moduleId: 'pages/error/error-index',\r\n    nav: false,\r\n    title: 'Error'\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ routes: config, fallbackRoute: fallbackRoute });\r\n\n\n//# sourceURL=webpack:///./src/config/app-route-config.ts?");

/***/ }),

/***/ "./src/config/environment.ts":
/*!***********************************!*\
  !*** ./src/config/environment.ts ***!
  \***********************************/
/*! exports provided: Environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Environment\", function() { return Environment; });\nvar Environment;\r\n(function (Environment) {\r\n    Environment[Environment[\"DEV\"] = 0] = \"DEV\";\r\n    Environment[Environment[\"TEST\"] = 1] = \"TEST\";\r\n    Environment[Environment[\"PROD\"] = 2] = \"PROD\";\r\n})(Environment || (Environment = {}));\r\n\n\n//# sourceURL=webpack:///./src/config/environment.ts?");

/***/ }),

/***/ "./src/config/http-config.ts":
/*!***********************************!*\
  !*** ./src/config/http-config.ts ***!
  \***********************************/
/*! exports provided: AppHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(Promise) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppHttpInterceptor\", function() { return AppHttpInterceptor; });\n/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ \"aurelia-framework\");\n/* harmony import */ var aurelia_open_id_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-open-id-connect */ \"aurelia-open-id-connect\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\n\r\n\r\nvar AppHttpInterceptor = (function () {\r\n    function AppHttpInterceptor(openIdConnect) {\r\n        var _this = this;\r\n        this.openIdConnect = openIdConnect;\r\n        this.openIdConnect.userManager.events.addAccessTokenExpiring(this.onAccessTokenExpiring.bind(this));\r\n        this.UserLoad = this.openIdConnect.observeUser(function (user) {\r\n            _this.User = user;\r\n            _this.AccessTokenRenewInProgress = false;\r\n        });\r\n    }\r\n    AppHttpInterceptor.prototype.request = function (request) {\r\n        var _this = this;\r\n        return this.UserLoad\r\n            .then(function () {\r\n            if (!_this.User || _this.User.expired) {\r\n                return _this.openIdConnect.loginSilent()\r\n                    .catch(function (error) {\r\n                    console.log(error);\r\n                    return _this.openIdConnect.userManager.signinRedirect();\r\n                });\r\n            }\r\n        })\r\n            .then(function (r) {\r\n            request.headers.append('Authorization', \"Bearer \" + _this.User.access_token);\r\n            return request;\r\n        });\r\n    };\r\n    AppHttpInterceptor.prototype.responseError = function (error, request) {\r\n        if (error instanceof Response) {\r\n            var resp = error;\r\n            this.onResponseError(resp);\r\n        }\r\n        return Promise.reject(error);\r\n    };\r\n    AppHttpInterceptor.prototype.onAccessTokenExpiring = function () {\r\n        this.AccessTokenRenewInProgress = true;\r\n    };\r\n    AppHttpInterceptor = __decorate([\r\n        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__[\"autoinject\"],\r\n        __metadata(\"design:paramtypes\", [aurelia_open_id_connect__WEBPACK_IMPORTED_MODULE_1__[\"OpenIdConnect\"]])\r\n    ], AppHttpInterceptor);\r\n    return AppHttpInterceptor;\r\n}());\r\n\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! bluebird */ \"./node_modules/bluebird/js/browser/bluebird.js\")))\n\n//# sourceURL=webpack:///./src/config/http-config.ts?");

/***/ }),

/***/ "./src/config/open-id-config.ts":
/*!**************************************!*\
  !*** ./src/config/open-id-config.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! oidc-client */ \"./node_modules/oidc-client/lib/oidc-client.min.js\");\n/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-config */ \"./src/config/app-config.ts\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    logLevel: _app_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].AuthService.logLevel,\r\n    loginRedirectRoute: \"login\",\r\n    logoutRedirectRoute: \"login\",\r\n    unauthorizedRedirectRoute: \"login\",\r\n    userManagerSettings: {\r\n        accessTokenExpiringNotificationTime: 1,\r\n        authority: _app_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].AuthService.authority,\r\n        automaticSilentRenew: true,\r\n        monitorSession: true,\r\n        checkSessionInterval: 2000,\r\n        client_id: _app_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].AuthService.clientId,\r\n        filterProtocolClaims: true,\r\n        loadUserInfo: false,\r\n        post_logout_redirect_uri: _app_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].AuthService.postLogoutRedirectUri,\r\n        redirect_uri: _app_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].AuthService.redirectUri,\r\n        response_type: _app_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].AuthService.responseType,\r\n        scope: _app_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].AuthService.scope,\r\n        silentRequestTimeout: 10000,\r\n        silent_redirect_uri: _app_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].AuthService.silentRedirectUri,\r\n        userStore: new oidc_client__WEBPACK_IMPORTED_MODULE_0__[\"WebStorageStateStore\"]({\r\n            prefix: _app_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].AuthService.storagePrefix,\r\n            store: window.localStorage,\r\n        }),\r\n    },\r\n});\r\n\n\n//# sourceURL=webpack:///./src/config/open-id-config.ts?");

/***/ }),

/***/ 0:
/*!*****************************************************************************************************************************!*\
  !*** multi aurelia-webpack-plugin/runtime/empty-entry aurelia-webpack-plugin/runtime/pal-loader-entry aurelia-bootstrapper ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! aurelia-webpack-plugin/runtime/empty-entry */\"./node_modules/aurelia-webpack-plugin/runtime/empty-entry.js\");\n__webpack_require__(/*! aurelia-webpack-plugin/runtime/pal-loader-entry */\"./node_modules/aurelia-webpack-plugin/runtime/pal-loader-entry.js\");\nmodule.exports = __webpack_require__(/*! aurelia-bootstrapper */\"./node_modules/aurelia-bootstrapper/dist/native-modules/aurelia-bootstrapper.js\");\n\n\n//# sourceURL=webpack:///multi_aurelia-webpack-plugin/runtime/empty-entry_aurelia-webpack-plugin/runtime/pal-loader-entry_aurelia-bootstrapper?");

/***/ }),

/***/ "app":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ \"aurelia-framework\");\n/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-router */ \"./node_modules/aurelia-router/dist/native-modules/aurelia-router.js\");\n/* harmony import */ var aurelia_open_id_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-open-id-connect */ \"aurelia-open-id-connect\");\n/* harmony import */ var aurelia_fetch_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-fetch-client */ \"./node_modules/aurelia-fetch-client/dist/native-modules/aurelia-fetch-client.js\");\n/* harmony import */ var config_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! config/app-config */ \"./src/config/app-config.ts\");\n/* harmony import */ var config_app_route_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! config/app-route-config */ \"./src/config/app-route-config.ts\");\n/* harmony import */ var config_http_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! config/http-config */ \"./src/config/http-config.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar App = (function () {\r\n    function App(router, openIdConnect, http, httpInterceptor) {\r\n        this.router = router;\r\n        this.openIdConnect = openIdConnect;\r\n        this.http = http;\r\n        this.httpInterceptor = httpInterceptor;\r\n        this.configureHttpClient();\r\n    }\r\n    App.prototype.activate = function () {\r\n    };\r\n    App.prototype.attached = function () {\r\n    };\r\n    App.prototype.configureHttpClient = function () {\r\n        var _this = this;\r\n        this.http.configure(function (c) {\r\n            var defaults = {\r\n                credentials: 'same-origin',\r\n                headers: {\r\n                    'Accept': 'application/json',\r\n                    'X-Requested-With': 'Fetch',\r\n                }\r\n            };\r\n            c.withBaseUrl(config_app_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ApiHost + \"/\");\r\n            c.withDefaults(defaults);\r\n            c.withInterceptor(_this.httpInterceptor);\r\n        });\r\n    };\r\n    App.prototype.configureRouter = function (config, router) {\r\n        config.title = 'Chat';\r\n        config.map(config_app_route_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].routes);\r\n        config.mapUnknownRoutes({ redirect: '/error/not-found' });\r\n        config.fallbackRoute('error');\r\n        this.openIdConnect.configure(config);\r\n        this.router = router;\r\n    };\r\n    App = __decorate([\r\n        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__[\"autoinject\"],\r\n        __metadata(\"design:paramtypes\", [aurelia_router__WEBPACK_IMPORTED_MODULE_1__[\"Router\"],\r\n            aurelia_open_id_connect__WEBPACK_IMPORTED_MODULE_2__[\"OpenIdConnect\"],\r\n            aurelia_fetch_client__WEBPACK_IMPORTED_MODULE_3__[\"HttpClient\"],\r\n            config_http_config__WEBPACK_IMPORTED_MODULE_6__[\"AppHttpInterceptor\"]])\r\n    ], App);\r\n    return App;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "aurelia-event-aggregator":
/*!***********************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-event-aggregator/dist/native-modules/aurelia-event-aggregator.js from dll-reference vendor ***!
  \***********************************************************************************************************************************/
/*! exports provided: EventAggregator, includeEventsIn, configure */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/aurelia-event-aggregator/dist/native-modules/aurelia-event-aggregator.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-event-aggregator/dist/native-modules/aurelia-event-aggregator.js_from_dll-reference_vendor?");

/***/ }),

/***/ "aurelia-framework":
/*!*********************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-framework/dist/native-modules/aurelia-framework.js from dll-reference vendor ***!
  \*********************************************************************************************************************/
/*! exports provided: Aurelia, FrameworkConfiguration, LogManager, resolver, StrategyResolver, Lazy, All, Optional, Parent, Factory, NewInstance, getDecoratorDependencies, lazy, all, optional, parent, factory, newInstance, invoker, invokeAsFactory, FactoryInvoker, registration, transient, singleton, TransientRegistration, SingletonRegistration, _emptyParameters, InvocationHandler, Container, autoinject, inject, getArrayObserver, getMapObserver, getSetObserver, targetContext, sourceContext, camelCase, createOverrideContext, getContextFor, createScopeForTest, connectable, enqueueBindingConnect, setConnectQueueThreshold, enableConnectQueue, disableConnectQueue, getConnectQueueSize, subscriberCollection, ExpressionObserver, calcSplices, mergeSplice, projectArraySplices, getChangeRecords, ModifyCollectionObserver, CollectionLengthObserver, Expression, BindingBehavior, ValueConverter, Assign, Conditional, AccessThis, AccessScope, AccessMember, AccessKeyed, CallScope, CallMember, CallFunction, Binary, Unary, LiteralPrimitive, LiteralString, LiteralTemplate, LiteralArray, LiteralObject, Unparser, ExpressionCloner, cloneExpression, bindingMode, Parser, ParserImplementation, delegationStrategy, EventManager, EventSubscriber, DirtyChecker, DirtyCheckProperty, propertyAccessor, PrimitiveObserver, SetterObserver, XLinkAttributeObserver, dataAttributeAccessor, DataAttributeObserver, StyleObserver, ValueAttributeObserver, CheckedObserver, SelectValueObserver, ClassObserver, hasDeclaredDependencies, declarePropertyDependencies, computedFrom, ComputedExpression, createComputedObserver, elements, presentationElements, presentationAttributes, SVGAnalyzer, ObserverLocator, ObjectObservationAdapter, BindingExpression, Binding, CallExpression, Call, ValueConverterResource, valueConverter, BindingBehaviorResource, bindingBehavior, ListenerExpression, Listener, NameExpression, BindingEngine, observable, connectBindingToSignal, signalBindings, metadata, Origin, decorators, deprecated, mixin, protocol, animationEvent, Animator, CompositionTransactionNotifier, CompositionTransactionOwnershipToken, CompositionTransaction, _hyphenate, _isAllWhitespace, ViewEngineHooksResource, viewEngineHooks, ElementEvents, ResourceLoadContext, ViewCompileInstruction, BehaviorInstruction, TargetInstruction, viewStrategy, RelativeViewStrategy, ConventionalViewStrategy, NoViewStrategy, TemplateRegistryViewStrategy, InlineViewStrategy, StaticViewStrategy, ViewLocator, BindingLanguage, SlotCustomAttribute, PassThroughSlot, ShadowSlot, ShadowDOM, validateBehaviorName, ViewResources, View, ViewSlot, BoundViewFactory, ViewFactory, ViewCompiler, ResourceModule, ResourceDescription, ModuleAnalyzer, ViewEngine, Controller, BehaviorPropertyObserver, BindableProperty, HtmlBehaviorResource, children, child, SwapStrategies, CompositionEngine, ElementConfigResource, resource, behavior, customElement, customAttribute, templateController, bindable, dynamicOptions, useShadowDOM, processAttributes, processContent, containerless, useViewStrategy, useView, inlineView, noView, view, elementConfig, viewResources, TemplatingEngine, TemplateDependency, TemplateRegistryEntry, Loader, TaskQueue, relativeToFile, join, buildQueryString, parseQueryString, AggregateError, FEATURE, PLATFORM, DOM, isInitialized, initializePAL, reset */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/aurelia-framework/dist/native-modules/aurelia-framework.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-framework/dist/native-modules/aurelia-framework.js_from_dll-reference_vendor?");

/***/ }),

/***/ "aurelia-history-browser":
/*!*********************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-history-browser/dist/native-modules/aurelia-history-browser.js from dll-reference vendor ***!
  \*********************************************************************************************************************************/
/*! exports provided: LinkHandler, DefaultLinkHandler, configure, BrowserHistory */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/aurelia-history-browser/dist/native-modules/aurelia-history-browser.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-history-browser/dist/native-modules/aurelia-history-browser.js_from_dll-reference_vendor?");

/***/ }),

/***/ "aurelia-logging-console":
/*!*********************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-logging-console/dist/native-modules/aurelia-logging-console.js from dll-reference vendor ***!
  \*********************************************************************************************************************************/
/*! exports provided: ConsoleAppender */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/aurelia-logging-console/dist/native-modules/aurelia-logging-console.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-logging-console/dist/native-modules/aurelia-logging-console.js_from_dll-reference_vendor?");

/***/ }),

/***/ "aurelia-open-id-connect":
/*!***************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-open-id-connect/dist/native-modules/index.js from dll-reference vendor ***!
  \***************************************************************************************************************/
/*! exports provided: configure, OpenIdConnect, OpenIdConnectRoles, OpenIdConnectConfiguration */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/aurelia-open-id-connect/dist/native-modules/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-open-id-connect/dist/native-modules/index.js_from_dll-reference_vendor?");

/***/ }),

/***/ "aurelia-open-id-connect/open-id-connect-navigation-filter":
/*!*******************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-open-id-connect/dist/native-modules/open-id-connect-navigation-filter.js from dll-reference vendor ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/aurelia-open-id-connect/dist/native-modules/open-id-connect-navigation-filter.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-open-id-connect/dist/native-modules/open-id-connect-navigation-filter.js_from_dll-reference_vendor?");

/***/ }),

/***/ "aurelia-open-id-connect/open-id-connect-user-block":
/*!************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-open-id-connect/dist/native-modules/open-id-connect-user-block.js from dll-reference vendor ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/aurelia-open-id-connect/dist/native-modules/open-id-connect-user-block.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-open-id-connect/dist/native-modules/open-id-connect-user-block.js_from_dll-reference_vendor?");

/***/ }),

/***/ "aurelia-open-id-connect/open-id-connect-user-block.html":
/*!**************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-open-id-connect/dist/native-modules/open-id-connect-user-block.html from dll-reference vendor ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/aurelia-open-id-connect/dist/native-modules/open-id-connect-user-block.html\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-open-id-connect/dist/native-modules/open-id-connect-user-block.html_from_dll-reference_vendor?");

/***/ }),

/***/ "aurelia-open-id-connect/open-id-connect-user-debug":
/*!************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-open-id-connect/dist/native-modules/open-id-connect-user-debug.js from dll-reference vendor ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/aurelia-open-id-connect/dist/native-modules/open-id-connect-user-debug.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-open-id-connect/dist/native-modules/open-id-connect-user-debug.js_from_dll-reference_vendor?");

/***/ }),

/***/ "aurelia-open-id-connect/open-id-connect-user-debug.html":
/*!**************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-open-id-connect/dist/native-modules/open-id-connect-user-debug.html from dll-reference vendor ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/aurelia-open-id-connect/dist/native-modules/open-id-connect-user-debug.html\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-open-id-connect/dist/native-modules/open-id-connect-user-debug.html_from_dll-reference_vendor?");

/***/ }),

/***/ "aurelia-pal-browser":
/*!*************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-pal-browser/dist/native-modules/aurelia-pal-browser.js from dll-reference vendor ***!
  \*************************************************************************************************************************/
/*! exports provided: _PLATFORM, _FEATURE, _DOM, initialize */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/aurelia-pal-browser/dist/native-modules/aurelia-pal-browser.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-pal-browser/dist/native-modules/aurelia-pal-browser.js_from_dll-reference_vendor?");

/***/ }),

/***/ "aurelia-templating-binding":
/*!***************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-binding/dist/native-modules/aurelia-templating-binding.js from dll-reference vendor ***!
  \***************************************************************************************************************************************/
/*! exports provided: AttributeMap, InterpolationBindingExpression, InterpolationBinding, ChildInterpolationBinding, LetExpression, LetBinding, LetInterpolationBindingExpression, LetInterpolationBinding, SyntaxInterpreter, TemplatingBindingLanguage, configure */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/aurelia-templating-binding/dist/native-modules/aurelia-templating-binding.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-binding/dist/native-modules/aurelia-templating-binding.js_from_dll-reference_vendor?");

/***/ }),

/***/ "aurelia-templating-resources":
/*!*******************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-resources/dist/native-modules/aurelia-templating-resources.js from dll-reference vendor ***!
  \*******************************************************************************************************************************************/
/*! exports provided: Compose, If, Else, With, Repeat, Show, Hide, HTMLSanitizer, SanitizeHTMLValueConverter, Replaceable, Focus, configure, AttrBindingBehavior, OneTimeBindingBehavior, OneWayBindingBehavior, ToViewBindingBehavior, FromViewBindingBehavior, TwoWayBindingBehavior, ThrottleBindingBehavior, DebounceBindingBehavior, SelfBindingBehavior, SignalBindingBehavior, BindingSignaler, UpdateTriggerBindingBehavior, AbstractRepeater, RepeatStrategyLocator, NullRepeatStrategy, ArrayRepeatStrategy, MapRepeatStrategy, SetRepeatStrategy, NumberRepeatStrategy, createFullOverrideContext, updateOverrideContext, getItemsSourceExpression, isOneTime, updateOneTimeBinding, unwrapExpression, viewsRequireLifecycle */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/aurelia-templating-resources/dist/native-modules/aurelia-templating-resources.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-resources/dist/native-modules/aurelia-templating-resources.js_from_dll-reference_vendor?");

/***/ }),

/***/ "aurelia-templating-router":
/*!*************************************************************************************************************************************!*\
  !*** delegated ./node_modules/aurelia-templating-router/dist/native-modules/aurelia-templating-router.js from dll-reference vendor ***!
  \*************************************************************************************************************************************/
/*! exports provided: TemplatingRouteLoader, RouterView, RouteHref, configure */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(\"./node_modules/aurelia-templating-router/dist/native-modules/aurelia-templating-router.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/aurelia-templating-router/dist/native-modules/aurelia-templating-router.js_from_dll-reference_vendor?");

/***/ }),

/***/ "dll-reference vendor":
/*!*************************!*\
  !*** external "vendor" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = vendor;\n\n//# sourceURL=webpack:///external_%22vendor%22?");

/***/ }),

/***/ "main":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bluebird */ \"./node_modules/bluebird/js/browser/bluebird.js\");\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ \"aurelia-framework\");\n/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-logging */ \"./node_modules/aurelia-logging/dist/native-modules/aurelia-logging.js\");\n/* harmony import */ var aurelia_logging_console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-logging-console */ \"aurelia-logging-console\");\n/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! oidc-client */ \"./node_modules/oidc-client/lib/oidc-client.min.js\");\n/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var config_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! config/app-config */ \"./src/config/app-config.ts\");\n/* harmony import */ var config_open_id_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! config/open-id-config */ \"./src/config/open-id-config.ts\");\n/* harmony import */ var config_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! config/environment */ \"./src/config/environment.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nbluebird__WEBPACK_IMPORTED_MODULE_0__[\"config\"]({ warnings: { wForgottenReturn: false } });\r\nfunction configure(aurelia) {\r\n    var aureliaConfig = aurelia.use.standardConfiguration();\r\n    var logger = aurelia_logging__WEBPACK_IMPORTED_MODULE_2__[\"getLogger\"]('Oidc');\r\n    if (config_app_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Environment < config_environment__WEBPACK_IMPORTED_MODULE_7__[\"Environment\"].PROD) {\r\n        logger.setLevel(aurelia_logging__WEBPACK_IMPORTED_MODULE_2__[\"logLevel\"].debug);\r\n        aureliaConfig = aureliaConfig.developmentLogging();\r\n    }\r\n    else {\r\n        aurelia_logging__WEBPACK_IMPORTED_MODULE_2__[\"addAppender\"](new aurelia_logging_console__WEBPACK_IMPORTED_MODULE_3__[\"ConsoleAppender\"]());\r\n        aurelia_logging__WEBPACK_IMPORTED_MODULE_2__[\"setLevel\"](aurelia_logging__WEBPACK_IMPORTED_MODULE_2__[\"logLevel\"].warn);\r\n        logger.setLevel(aurelia_logging__WEBPACK_IMPORTED_MODULE_2__[\"logLevel\"].warn);\r\n    }\r\n    oidc_client__WEBPACK_IMPORTED_MODULE_4__[\"Log\"].logger = logger;\r\n    aureliaConfig\r\n        .plugin('aurelia-open-id-connect', function () { return config_open_id_config__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\r\n    aurelia.start().then(function () { return aurelia.setRoot('app'); });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ });
//# sourceMappingURL=app.js.map