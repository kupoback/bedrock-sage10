self["webpackHotUpdatesage"]("editor",{

/***/ "./resources/scripts/editor.js":
/*!*************************************!*\
  !*** ./resources/scripts/editor.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

"use strict";

var _client = __webpack_require__(/*! @roots/sage/client */ "./node_modules/@roots/sage/lib/client/index.js");

var _blocks = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");

/**
 * editor.main
 */
const main = err => {
  if (err) {
    // handle hmr errors
    console.error(err);
  }

  (0, _blocks.unregisterBlockStyle)('core/button', 'outline');
  (0, _blocks.registerBlockStyle)('core/button', {
    name: 'outline',
    label: 'Outline'
  });
  const gutenbergContainer = document.querySelector('[class^="block-editor-block-list__layout"]');
  console.log(gutenbergContainer);

  if (gutenbergContainer) {
    gutenbergContainer.classList.add('container');
  }
};
/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */


(0, _client.domReady)(main);
module.hot.accept(main);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
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
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("97b494577a5f9d137d4d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=editor.f8df87b01ba530dc841a.hot-update.js.map