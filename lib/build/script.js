webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\n/*** IMPORTS FROM imports-loader ***/\nvar jQuery = __webpack_require__(70);\nvar $ = __webpack_require__(70);\n(function () {\n\n  'use strict';\n\n  // Vendor Require\n\n  __webpack_require__(70);\n  __webpack_require__(71);\n\n  //script\n  __webpack_require__(94);\n\n  //style\n  __webpack_require__(95);\n\n  var App = __webpack_require__(97);\n  App.start();\n}).call(window);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9tYWluLmpzPzdhOTAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBJTVBPUlRTIEZST00gaW1wb3J0cy1sb2FkZXIgKioqL1xudmFyIGpRdWVyeSA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG52YXIgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG4oZnVuY3Rpb24oKSB7XG5cbid1c2Ugc3RyaWN0JztcblxuLy8gVmVuZG9yIFJlcXVpcmVcbnJlcXVpcmUoJ2pxdWVyeScpO1xucmVxdWlyZSgnYm9vdHN0cmFwLXdlYnBhY2snKTtcblxuXG4vL3NjcmlwdFxucmVxdWlyZSgnLi9hc3NldHMvc2NyaXB0cy9saWIvdG9wTWVudS5qcycpO1xuXG5cblxuLy9zdHlsZVxucmVxdWlyZSgnLi9hc3NldHMvc3R5bGUvX3RoZW1lcy9teS10aGVtZS5zY3NzJyk7XG5cblxuXG52YXIgQXBwID0gcmVxdWlyZSgnLi9hc3NldHMvc2NyaXB0cy9hcHAvYXBwLmpzJyk7XG5BcHAuc3RhcnQoKTtcblxuXG5cbn0uY2FsbCh3aW5kb3cpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBtYWluLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\n/*** IMPORTS FROM imports-loader ***/\nvar jQuery = __webpack_require__(70);\nvar $ = __webpack_require__(70);\n(function () {\n\n  $(window).scroll(function () {\n    if ($(document).scrollTop() > 50) {\n      $('nav').addClass('shrink');\n    } else {\n      $('nav').removeClass('shrink');\n    }\n  });\n\n  $(window).load(function () {\n    // makes sure the whole site is loaded\n    $('.preloader').addClass('LOKOOOOO'); // will first fade out the loading animation\n    $('.overlay').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.\n    $('body').delay(350).css({ 'overflow': 'visible' });\n  });\n}).call(window);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXNzZXRzL3NjcmlwdHMvbGliL3RvcE1lbnUuanM/OWM1NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIElNUE9SVFMgRlJPTSBpbXBvcnRzLWxvYWRlciAqKiovXG52YXIgalF1ZXJ5ID0gcmVxdWlyZShcImpxdWVyeVwiKTtcbnZhciAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcbihmdW5jdGlvbigpIHtcblxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgaWYgKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpID4gNTApIHtcbiAgICAkKCduYXYnKS5hZGRDbGFzcygnc2hyaW5rJyk7XG4gIH0gZWxzZSB7XG4gICAgJCgnbmF2JykucmVtb3ZlQ2xhc3MoJ3NocmluaycpO1xuICB9XG59KTtcblxuJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7IC8vIG1ha2VzIHN1cmUgdGhlIHdob2xlIHNpdGUgaXMgbG9hZGVkXG4gICAgICAgICQoJy5wcmVsb2FkZXInKS5hZGRDbGFzcygnTE9LT09PT08nKTsgLy8gd2lsbCBmaXJzdCBmYWRlIG91dCB0aGUgbG9hZGluZyBhbmltYXRpb25cbiAgICAgICAgJCgnLm92ZXJsYXknKS5kZWxheSgzNTApLmZhZGVPdXQoJ3Nsb3cnKTsgLy8gd2lsbCBmYWRlIG91dCB0aGUgd2hpdGUgRElWIHRoYXQgY292ZXJzIHRoZSB3ZWJzaXRlLlxuICAgICAgICAkKCdib2R5JykuZGVsYXkoMzUwKS5jc3MoeydvdmVyZmxvdyc6J3Zpc2libGUnfSlcbn0pO1xuXG59LmNhbGwod2luZG93KSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYXNzZXRzL3NjcmlwdHMvbGliL3RvcE1lbnUuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 95:
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGUvX3RoZW1lcy9teS10aGVtZS5zY3NzPzM0MTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXNzZXRzL3N0eWxlL190aGVtZXMvbXktdGhlbWUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDk1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(Mn) {\"use strict\";\n\n/*** IMPORTS FROM imports-loader ***/\nvar jQuery = __webpack_require__(70);\nvar $ = __webpack_require__(70);\n(function () {\n\n    'use strict';\n\n    var App = new Mn.Application();\n\n    App.on('start', function () {\n\n        console.log(\"starting app\");\n\n        $('#app').on('click', function () {});\n    });\n\n    module.exports = App;\n}).call(window);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(98)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXNzZXRzL3NjcmlwdHMvYXBwL2FwcC5qcz9mN2NjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiogSU1QT1JUUyBGUk9NIGltcG9ydHMtbG9hZGVyICoqKi9cbnZhciBqUXVlcnkgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xudmFyICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuKGZ1bmN0aW9uKCkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBBcHAgPSBuZXcgTW4uQXBwbGljYXRpb24oKTtcblxuXG5BcHAub24oJ3N0YXJ0JyxmdW5jdGlvbigpIHtcbiAgICBcblxuICAgIGNvbnNvbGUubG9nKFwic3RhcnRpbmcgYXBwXCIpXG4gICAgXG4gICAgJCgnI2FwcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgfSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG5cbn0uY2FsbCh3aW5kb3cpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBhc3NldHMvc2NyaXB0cy9hcHAvYXBwLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

});