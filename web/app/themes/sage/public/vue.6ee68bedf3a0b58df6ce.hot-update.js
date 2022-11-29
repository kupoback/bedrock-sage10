"use strict";
self["webpackHotUpdatesage"]("vue",{

/***/ "./node_modules/babel-loader/lib/index.js??babel!./node_modules/vue-loader/dist/index.js??vue!./resources/vue/Components/PostImage.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??babel!./node_modules/vue-loader/dist/index.js??vue!./resources/vue/Components/PostImage.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Util_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util/mixins */ "./resources/vue/Util/mixins.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    image: [Array, Object],
    imageClass: {
      type: String,
      default: ''
    }
  },
  mixins: [_Util_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]],
  name: "PostImage"
});

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??vue!./resources/vue/Components/PostImage.vue?vue&type=template&id=0e23d203":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??vue!./resources/vue/Components/PostImage.vue?vue&type=template&id=0e23d203 ***!
  \*************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _hoisted_1 = ["srcset", "sizes"]
const _hoisted_2 = ["srcset", "sizes", "type"]
const _hoisted_3 = ["src", "data-src", "content", "alt"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("picture", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.imageClass)
  }, [
    ($props.image.webpSrcset)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("source", {
          key: 0,
          srcset: $props.image.webpSrcset,
          sizes: $props.image.sizes,
          type: "image/webp"
        }, null, 8 /* PROPS */, _hoisted_1))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("source", {
      srcset: $props.image.srcset,
      sizes: $props.image.sizes,
      type: $props.image.type
    }, null, 8 /* PROPS */, _hoisted_2),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: $props.image.src,
      "data-src": $props.image.src,
      class: "img-inner",
      content: $props.image.src,
      alt: $props.image.alt,
      role: "img",
      property: "v:image"
    }, null, 8 /* PROPS */, _hoisted_3)
  ], 2 /* CLASS */))
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "705da35c383f2d9e9bcc"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=vue.6ee68bedf3a0b58df6ce.hot-update.js.map