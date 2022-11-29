"use strict";
self["webpackHotUpdatesage"]("vue",{

/***/ "./resources/vue/Vuex/blog/mutations.js":
/*!**********************************************!*\
  !*** ./resources/vue/Vuex/blog/mutations.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildQuery": function() { return /* binding */ buildQuery; },
/* harmony export */   "removeFromQuery": function() { return /* binding */ removeFromQuery; },
/* harmony export */   "searchPostTypeCount": function() { return /* binding */ searchPostTypeCount; },
/* harmony export */   "setQuery": function() { return /* binding */ setQuery; },
/* harmony export */   "updateState": function() { return /* binding */ updateState; }
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

/**
 * A method to update a state variable based on the param and key set
 *
 * @param {object} currentState Vuex store state
 * @param {object} params       Any data passed to update
 */
function updateState(currentState, params) {
  Object.keys(params).map(key => currentState[key] = params[key]);
}
function searchPostTypeCount(currentState, _ref) {
  let {
    postTypeCount
  } = _ref;
  const getCount = {};
  if (Object.keys(postTypeCount).length) {
    for (const [postType, array] of Object.entries(postTypeCount)) {
      getCount[postType] = array;
    }
  }
  currentState.searchPostTypeCount = getCount;
}

/**
 * Sets up a query for the state and the URLSearchParams
 *
 * @param {object} currentState Vuex store state
 * @param {object} params       Any data passed to update
 */
function setQuery(currentState, params) {
  let searchParameters = new URLSearchParams();
  if (Object.keys(params).length === 0) currentState.queryParams = {};else {
    for (const [key, value] of Object.entries(params)) {
      if (value || value.length) {
        searchParameters.set(key, value.toString());
        currentState.queryParams[key] = value;
      }
    }
  }
  currentState.searchParams = searchParameters;
}

/**
 * Removes an item from the queryParams state
 *
 * @param {object} currentState Vuex store state
 * @param {object} params       Any data passed to update
 */
function removeFromQuery(currentState, params) {
  if (Object.keys(params).length) {
    for (const [key, value] of Object.entries(params)) {
      delete currentState.queryParams[key];
    }
  }
}

/**
 * Build the Vuex query based on the URL params
 *
 * @param {object} currentState Vuex store state
 */
function buildQuery(currentState) {
  const stateQuery = {};
  const queryParams = new URL(window.location).searchParams;
  queryParams.forEach((value, key) => {
    if (key === 'categories') stateQuery[key] = value.split(',');else if (key === 'search' || key === 's') currentState.searchText = value;else if (key === 'page_num') currentState.page = Number(value);else stateQuery[key] = value;
  });
  currentState.queryParams = stateQuery;
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
/******/ 	__webpack_require__.h = function() { return "f8a35cdd0deee91cfefb"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=vue.2c144e5678cb8f173d6c.hot-update.js.map