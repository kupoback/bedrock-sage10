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



//region Action Functions
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
  if (pushData) commitType = "mergeData";
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
    if (page > 1) config.params.page_num = page;else delete config.params.page_num;

    // Remove the updateCount from the query params
    delete config.params.updateCount;
    store.commit("setQuery", config.params);
    if (updateHistory) store.dispatch("updateBrowserHistory", {
      updateHistory
    });
    updateLoading(store);
  });
};

/**
 * Makes an update to the store state on the `loading` condition
 *
 * @param {object} store    The Vuex store state
 * @param {boolean} loading Whether the loading animation should appear or not
 * @returns {*}
 */
const updateLoading = function (store) {
  let loading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return store.commit("updateState", {
    loading
  });
};
//endregion

/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * Method to make an API call to get the content for the Blogs Page
   *
   * @param {object} store
   * @param {object} params Any parameters for the API call
   * @returns {Promise<AxiosResponse<any> | void>}
   */
  getBlogPosts(store) {
    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      update: false
    };
    const {
      update
    } = params;
    const {
      api,
      page,
      selectedCategories,
      search
    } = store.state;
    const config = {
      params: {}
    };

    // Setup Config
    if (search) config.params.search = search;
    // if (selectedCategories.length) config.params.categories = selectedCategories;

    return makeApiCall(api + (page || 1), store, config, page || 1, update);
  },
  /**
   * Method to build and send to the browser's history any
   * query parameters built on the page when the user filters
   * any content
   *
   * @param {object} store The Vuex store state
   * @param {boolean} updateHistory Whether to update the history or not
   */
  updateBrowserHistory(store) {
    let updateHistory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const {
      searchParams
    } = store.state;
    let newUrl = "";
    if (searchParams.toString() && updateHistory) newUrl = "?".concat(searchParams.toString());
    const urlLocation = windowUrl.origin + windowUrl.pathname + newUrl;
    window.history.pushState({
      path: urlLocation
    }, document.title, urlLocation);
  }
});

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

/***/ }),

/***/ "./resources/vue/Vuex/blog/mutations.js":
/*!**********************************************!*\
  !*** ./resources/vue/Vuex/blog/mutations.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * A method to update a state variable based on the param and key set
   *
   * @param {object} currentState Vuex store state
   * @param {object} params       Any data passed to update
   */
  updateState(currentState, params) {
    Object.keys(params).map(key => currentState[key] = params[key]);
  },
  searchPostTypeCount(currentState, _ref) {
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
  },
  /**
   * Sets up a query for the state and the URLSearchParams
   *
   * @param {object} currentState Vuex store state
   * @param {object} params       Any data passed to update
   */
  setQuery(currentState, params) {
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
  },
  /**
   * Removes an item from the queryParams state
   *
   * @param {object} currentState Vuex store state
   * @param {object} params       Any data passed to update
   */
  removeFromQuery(currentState, params) {
    if (Object.keys(params).length) {
      for (const [key, value] of Object.entries(params)) {
        delete currentState.queryParams[key];
      }
    }
  },
  /**
   * Build the Vuex query based on the URL params
   *
   * @param {object} currentState Vuex store state
   */
  buildQuery(currentState) {
    const stateQuery = {};
    const queryParams = new URL(window.location).searchParams;
    queryParams.forEach((value, key) => {
      if (key === 'categories') stateQuery[key] = value.split(',');else if (key === 'search' || key === 's') currentState.searchText = value;else if (key === 'page_num') currentState.page = Number(value);else stateQuery[key] = value;
    });
    currentState.queryParams = stateQuery;
  }
});

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
/******/ 	__webpack_require__.h = function() { return "5d6d2c29e3fd6461cfa5"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=vue.e3aa13cfe798685a566a.hot-update.js.map