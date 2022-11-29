"use strict";
self["webpackHotUpdatesage"]("vue",{

/***/ "./resources/vue/Vuex/blog/actions.js":
/*!********************************************!*\
  !*** ./resources/vue/Vuex/blog/actions.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const windowUrl = new URL(window.location);

/**
 * Makes an API call and setups data to store state,
 * as well as whether to update the browser history
 *
 * @param {string} api The API Url to make a call to
 * @param {object} store The vuex store state
 * @param {object} config Any config content to send to
 * @param {int} page The page number
 * @param {boolean} updateHistory Whether or not to update the browser history
 * @param {boolean} pushData Whether to add data to the var or replace it
 *
 * @returns {Promise<unknown>}
 */
const makeApiCall = function (api, store) {
  let config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    params: {}
  };
  let page = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  let updateHistory = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  let pushData = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  updateLoading(store, true);
  let commitType = "updateState";
  if (pushData) {
    commitType = "mergeData";
  }
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(api, config).then(_ref => {
    let {
      data,
      status
    } = _ref;
    const {
      maxPages,
      posts,
      postTypeCount
    } = data;
    status === 200 && data.status !== 404 && store.commit(commitType, {
      maxPages: Number(maxPages),
      page,
      posts
    });
    postTypeCount !== undefined && store.commit('searchPostTypeCount', {
      postTypeCount
    });
  }).catch(err => console.error(err)).finally(() => {
    // Remove the Page Number from the query params if on the first page
    if (page > 1) {
      config.params.page_num = page;
    } else {
      delete config.params.page_num;
    }

    // Remove the updateCount from the query params
    delete config.params.updateCount;
    store.commit("setQuery", config.params);
    if (updateHistory) {
      store.dispatch("updateBrowserHistory", {
        updateHistory
      });
    }
    updateLoading(store);
  });
};
/* harmony default export */ __webpack_exports__["default"] = ({});

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
/******/ 	__webpack_require__.h = function() { return "de820dcd332e5997baa4"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=vue.650f449b1a3b63a00b75.hot-update.js.map