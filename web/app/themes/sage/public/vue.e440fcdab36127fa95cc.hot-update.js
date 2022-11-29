"use strict";
self["webpackHotUpdatesage"]("vue",{

/***/ 684:
/*!******************************!*\
  !*** ./resources/vue/app.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _Vuex_blog_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vuex/blog/store */ "./resources/vue/Vuex/blog/store.js");
/* harmony import */ var _vuex_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vuex/store */ "./resources/vue/vuex/store.js");
/* harmony import */ var _Pages_Blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/Blog */ "./resources/vue/Pages/Blog.vue");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





const frameworkBlogPostsElm = document.getElementById('framework-blog');
console.log(frameworkBlogPostsElm);
if (frameworkBlogPostsElm) {
  const frameworkBlogComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_Pages_Blog__WEBPACK_IMPORTED_MODULE_3__["default"]);
  frameworkBlogComponent.use(_Vuex_blog_store__WEBPACK_IMPORTED_MODULE_1__.blogStore).mount('#framework-blog');
}

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b61e544f60444b6f2d0c"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=vue.e440fcdab36127fa95cc.hot-update.js.map