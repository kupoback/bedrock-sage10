"use strict";
self["webpackHotUpdatesage"]("vue",{

/***/ "./resources/vue/Vuex/blog/actions.js":
/*!********************************************!*\
  !*** ./resources/vue/Vuex/blog/actions.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBlogPosts": function() { return /* binding */ getBlogPosts; },
/* harmony export */   "updateBrowserHistory": function() { return /* binding */ updateBrowserHistory; }
/* harmony export */ });
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

/**
 * Method to make an API call to get the content for the Blogs Page
 *
 * @param {object} store
 * @param {object} params Any parameters for the API call
 * @returns {Promise<AxiosResponse<any> | void>}
 */
function getBlogPosts(store) {
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
}

/**
 * Method to build and send to the browser's history any
 * query parameters built on the page when the user filters
 * any content
 *
 * @param {object} store The Vuex store state
 * @param {boolean} updateHistory Whether to update the history or not
 */
function updateBrowserHistory(store) {
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

/***/ "./resources/vue/Vuex/blog/state.js":
/*!******************************************!*\
  !*** ./resources/vue/Vuex/blog/state.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
let blog = typeof BLOG !== 'undefined' && BLOG;
/* harmony default export */ __webpack_exports__["default"] = (_objectSpread(_objectSpread({}, blog), {}, {
  loading: false,
  maxPages: 0,
  page: 1,
  posts: [],
  queryParams: {},
  search: '',
  searchParams: {},
  searchPostTypeCount: null,
  selectedCategories: null
}));

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
/******/ 	__webpack_require__.h = function() { return "1a144c18253d8aa3d8b9"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=vue.0beb8538ace24e6a601a.hot-update.js.map