"use strict";
self["webpackHotUpdatesage"]("vue",{

/***/ "./node_modules/babel-loader/lib/index.js??babel!./node_modules/vue-loader/dist/index.js??vue!./resources/vue/Pages/Blog/Blog.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??babel!./node_modules/vue-loader/dist/index.js??vue!./resources/vue/Pages/Blog/Blog.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/Post */ "./resources/vue/Pages/Blog/Components/Post.vue");
/* harmony import */ var _Components_NoResults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/NoResults */ "./resources/vue/Components/NoResults.vue");
/* harmony import */ var _Components_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Loading */ "./resources/vue/Components/Loading.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {},
  data: () => ({}),
  created() {
    this.$store.dispatch('getBlogPosts');
  },
  mounted() {},
  methods: {},
  components: {
    Loading: _Components_Loading__WEBPACK_IMPORTED_MODULE_2__["default"],
    NoResults: _Components_NoResults__WEBPACK_IMPORTED_MODULE_1__["default"],
    Post: _Components_Post__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    maxPages() {
      return this.$store.state.maxPages;
    },
    noResults() {
      return this.$store.state.noResults;
    },
    page() {
      return this.$store.state.page;
    },
    posts() {
      return this.$store.state.posts;
    }
  },
  watch: {},
  name: "Blog"
});

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??vue!./resources/vue/Pages/Blog/Blog.vue?vue&type=template&id=6928469a":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??vue!./resources/vue/Pages/Blog/Blog.vue?vue&type=template&id=6928469a ***!
  \********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _hoisted_1 = { class: "mx-auto my-16 blog-listing__posts" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Post = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Post")
  const _component_NoResults = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NoResults")
  const _component_Loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Loading")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (!$options.loading && $options.posts.length)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 0 }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.posts, ({author, categories, date, excerpt, id, image, permalink, title}) => {
          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Post, {
            key: id,
            author: author,
            categories: categories,
            date: date,
            excerpt: excerpt,
            image: image,
            permalink: permalink,
            title: title
          }, null, 8 /* PROPS */, ["author", "categories", "date", "excerpt", "image", "permalink", "title"]))
        }), 128 /* KEYED_FRAGMENT */))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    (!$options.loading && !$options.posts.length)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_NoResults, {
          key: 1,
          noResultsText: "noResults"
        }))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    ($options.loading)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Loading, {
          key: 2,
          white: ""
        }))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
  ]))
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "000c8f5a420982df7ff7"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=vue.aa12d50c8e1c11a7267f.hot-update.js.map