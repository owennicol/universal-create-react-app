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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_http_proxy_middleware__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_http_proxy_middleware___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_http_proxy_middleware__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(5);






var host = "localhost" || 'localhost';
var serverPort =  false ? process.env.REACT_APP_SERVER_PORT : "8080" || 80;

var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

if (true) {
  // In production we want to serve our JavaScripts from a file on the file
  // system.
  app.use('/static', __WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_1_path___default.a.join(process.cwd(), 'build/client/static')));
} else {
  // Otherwise we want to proxy the webpack development server.
  app.use(['/static', '/sockjs-node'], proxy({
    target: 'http://localhost:' + process.env.REACT_APP_CLIENT_PORT,
    ws: true,
    logLevel: 'error'
  }));
}

app.use('/', __WEBPACK_IMPORTED_MODULE_0_express___default.a.static('build/client'));

app.use(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* default */]);

app.listen(serverPort);
console.log('Listening at http://' + host + ':' + serverPort);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("http-proxy-middleware");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_context_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_context_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_context_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__render__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_App__ = __webpack_require__(10);







var ErrorPage = function ErrorPage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h1',
    null,
    'Oops there was an error'
  );
};

var reactApp = function reactApp(req, res) {
  var context = {};
  var HTML = void 0;
  var status = 200;

  var setStatus = function setStatus(newStatus) {
    status = newStatus;
  };

  try {
    HTML = Object(__WEBPACK_IMPORTED_MODULE_3__render__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_context_component___default.a,
      { setStatus: setStatus },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router__["StaticRouter"],
        { context: {}, location: req.url },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__shared_App__["a" /* default */], null)
      )
    ));
  } catch (error) {
    HTML = Object(__WEBPACK_IMPORTED_MODULE_3__render__["a" /* default */])(ErrorPage);
    status = 500;
  }

  if (context.url) {
    res.redirect(301, context.url);
  } else {
    res.status(status).send(HTML);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (reactApp);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-context-component");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom_server__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_dom_server__);


var DEV = "production" === 'development';
var assetManifest = JSON.parse("{\"main.css\":\"static/css/main.cacbacc7.css\",\"main.css.map\":\"static/css/main.cacbacc7.css.map\",\"main.js\":\"static/js/main.e719e44f.js\",\"static/media/logo.svg\":\"static/media/logo.5d5d9eef.svg\"}" || '{}');
var bundleUrl = DEV ? '/static/js/bundle.js' : '/' + assetManifest['main.js'];
var css = DEV ? '' // in DEV the css is hot loaded
: '<link href="/' + assetManifest['main.css'] + '" media="all" rel="stylesheet" />';

/* harmony default export */ __webpack_exports__["a"] = (function (component) {
  return '\n  <!DOCTYPE html>\n    <html lang="en">\n      <head>\n        <meta charset="utf-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n        <meta name="theme-color" content="#000000">\n        ' + css + '\n        <link rel="manifest" href="/public/manifest.json">\n        <link rel="shortcut icon" href="/public/favicon.ico">\n        <title>React App</title>\n      </head>\n      <body>\n        <div id="root">' + Object(__WEBPACK_IMPORTED_MODULE_0_react_dom_server__["renderToString"])(component) + '</div>\n        <script type="application/javascript" src="' + bundleUrl + '"></script>\n      </body>\n  </html>\n';
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PageNotFound */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logo_svg__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__logo_svg__);







var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'App-header' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_3__logo_svg___default.a, className: 'App-logo', alt: 'logo' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h2',
      null,
      'Welcome to Universal React'
    )
  );
};

var PageNotFound = function PageNotFound(props) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (context.setStatus) {
    context.setStatus(404);
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      null,
      'Page not found'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],
      { to: '/' },
      'Go home'
    )
  );
};
PageNotFound.contextTypes = {
  setStatus: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

var TestRouterPage = function TestRouterPage(_ref) {
  var match = _ref.match;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'App-intro' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      'Test page ',
      match.params.id
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],
        { to: '/' },
        'Home'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],
        { to: '/aljlskaklksdkfaj falsflasd' },
        'Go to non-existent page'
      )
    )
  );
};

var Home = function Home() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'App-intro' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      'To get started, edit ',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'code',
        null,
        'src/shared/App.js'
      ),
      ' and save to reload.'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],
      { to: '/test/123' },
      'Test the router'
    )
  );
};

var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'App' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Route"], { path: '/', component: function component(_ref2) {
        var match = _ref2.match;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Header, null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Switch"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Route"], { exact: true, path: '/', component: Home }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Route"], { exact: true, path: '/test/:id', component: TestRouterPage }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Route"], { component: PageNotFound })
          )
        );
      } })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.5d5d9eef.svg";

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map