(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["webpackNumbers"] = factory();
	else
		root["webpackNumbers"] = factory();
})(this, function() {
return webpackJsonpwebpackNumbers([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["numToWord"] = numToWord;
/* harmony export (immutable) */ __webpack_exports__["wordToNum"] = wordToNum;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ref_json__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ref_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ref_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xkeshi_my_test2__ = __webpack_require__(5);



console.log(__WEBPACK_IMPORTED_MODULE_1__xkeshi_my_test2__["a" /* default */].goo())

function numToWord(num) {
  return _.reduce(__WEBPACK_IMPORTED_MODULE_0__ref_json___default.a, (accum, ref) => {
    return ref.num === num ? ref.word : accum;
  }, '');
};

function wordToNum(word) {
  return _.reduce(__WEBPACK_IMPORTED_MODULE_0__ref_json___default.a, (accum, ref) => {
    return ref.word === word && word.toLowerCase() ? ref.num : accum;
  }, -1);
};

$.find('body')

console.log('good')
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = [{"num":1,"word":"One"},{"num":2,"word":"Two"},{"num":3,"word":"Three"},{"num":4,"word":"Four"},{"num":5,"word":"Five"},{"num":0,"word":"Zero"}]

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join('msl', 'is', 'a', 'good')
});

/***/ })
],[1]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVmLmpzb24iLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B4a2VzaGkvbXktdGVzdDIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQSxtQjs7Ozs7Ozs7O0FDbkJBLG1CQUFtQixxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsQzs7Ozs7Ozs7O0FDQWhLOztBQUVBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImluZGV4LW51bWJlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ3ZWJwYWNrTnVtYmVyc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3ZWJwYWNrTnVtYmVyc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJpbXBvcnQgbnVtUmVmIGZyb20gJy4vcmVmLmpzb24nO1xuaW1wb3J0IG15VGVzdDIgZnJvbSAnQHhrZXNoaS9teS10ZXN0MidcblxuY29uc29sZS5sb2cobXlUZXN0Mi5nb28oKSlcblxuZXhwb3J0IGZ1bmN0aW9uIG51bVRvV29yZChudW0pIHtcbiAgcmV0dXJuIF8ucmVkdWNlKG51bVJlZiwgKGFjY3VtLCByZWYpID0+IHtcbiAgICByZXR1cm4gcmVmLm51bSA9PT0gbnVtID8gcmVmLndvcmQgOiBhY2N1bTtcbiAgfSwgJycpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHdvcmRUb051bSh3b3JkKSB7XG4gIHJldHVybiBfLnJlZHVjZShudW1SZWYsIChhY2N1bSwgcmVmKSA9PiB7XG4gICAgcmV0dXJuIHJlZi53b3JkID09PSB3b3JkICYmIHdvcmQudG9Mb3dlckNhc2UoKSA/IHJlZi5udW0gOiBhY2N1bTtcbiAgfSwgLTEpO1xufTtcblxuJC5maW5kKCdib2R5JylcblxuY29uc29sZS5sb2coJ2dvb2QnKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gW3tcIm51bVwiOjEsXCJ3b3JkXCI6XCJPbmVcIn0se1wibnVtXCI6MixcIndvcmRcIjpcIlR3b1wifSx7XCJudW1cIjozLFwid29yZFwiOlwiVGhyZWVcIn0se1wibnVtXCI6NCxcIndvcmRcIjpcIkZvdXJcIn0se1wibnVtXCI6NSxcIndvcmRcIjpcIkZpdmVcIn0se1wibnVtXCI6MCxcIndvcmRcIjpcIlplcm9cIn1dXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVmLmpzb25cbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfLmpvaW4oJ21zbCcsICdpcycsICdhJywgJ2dvb2QnKVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B4a2VzaGkvbXktdGVzdDIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==