webpackHotUpdate("app",{

/***/ "+5De":
false,

/***/ "/gYy":
false,

/***/ "0C/m":
false,

/***/ "25/h":
false,

/***/ "4NnO":
false,

/***/ "6wyp":
false,

/***/ "8KmP":
false,

/***/ "8lR7":
false,

/***/ "8t9r":
false,

/***/ "ADrA":
false,

/***/ "AQG6":
false,

/***/ "BTf0":
false,

/***/ "Bcq9":
false,

/***/ "CYWO":
false,

/***/ "DbEF":
false,

/***/ "DryW":
false,

/***/ "EC7H":
false,

/***/ "EI5V":
false,

/***/ "ER6q":
false,

/***/ "ESIk":
/*!***********************************************************!*\
  !*** ../node_modules/element-ui/lib/locale/lang/zh-CN.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/xupengcheng/Documents/pro/smart_server/node_modules/element-ui/lib/locale/lang/zh-CN.js'");

/***/ }),

/***/ "FGxE":
false,

/***/ "FnK/":
false,

/***/ "GBbY":
false,

/***/ "GKY7":
/*!********************************************************!*\
  !*** ../node_modules/element-ui/lib/locale/lang/es.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/xupengcheng/Documents/pro/smart_server/node_modules/element-ui/lib/locale/lang/es.js'");

/***/ }),

/***/ "GcJB":
false,

/***/ "H2fV":
false,

/***/ "Hi5y":
false,

/***/ "ISDe":
false,

/***/ "In3m":
false,

/***/ "KVGu":
false,

/***/ "LJeX":
false,

/***/ "M2wU":
false,

/***/ "M44s":
false,

/***/ "NFWU":
false,

/***/ "OcvO":
false,

/***/ "Px02":
false,

/***/ "Q8HJ":
false,

/***/ "RpRD":
false,

/***/ "S6Oy":
false,

/***/ "SG21":
false,

/***/ "T2oc":
false,

/***/ "VzG+":
false,

/***/ "WGrI":
false,

/***/ "ZCHz":
false,

/***/ "cmcF":
false,

/***/ "dQIm":
false,

/***/ "eNG8":
false,

/***/ "f1Pt":
false,

/***/ "fe8y":
false,

/***/ "g8/K":
false,

/***/ "gi48":
false,

/***/ "h+ni":
false,

/***/ "hhPo":
false,

/***/ "hky6":
/*!**********************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader??ref--7-1!../node_modules/postcss-loader/lib??ref--7-2!../node_modules/element-ui/lib/theme-chalk/index.css ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/postcss-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/xupengcheng/Documents/pro/smart_server/node_modules/element-ui/lib/theme-chalk/index.css'");

/***/ }),

/***/ "hymL":
false,

/***/ "iXzu":
false,

/***/ "iu0Q":
false,

/***/ "jy/Q":
false,

/***/ "kQAb":
false,

/***/ "lee9":
false,

/***/ "lhBK":
false,

/***/ "lu6V":
false,

/***/ "m2MI":
false,

/***/ "mJG8":
false,

/***/ "mj6n":
/*!***********************************************************!*\
  !*** ../node_modules/svg-baker-runtime/browser-symbol.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/xupengcheng/Documents/pro/smart_server/node_modules/svg-baker-runtime/browser-symbol.js'");

/***/ }),

/***/ "nOx7":
false,

/***/ "oWq1":
/*!********************************************************!*\
  !*** ../node_modules/vue-hot-reload-api/dist/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/xupengcheng/Documents/pro/smart_server/node_modules/vue-hot-reload-api/dist/index.js'");

/***/ }),

/***/ "oYx3":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: constantRouterMap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constantRouterMap", function() { return constantRouterMap; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "6DIm");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "SvlV");
/* harmony import */ var _views_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/layout/Layout */ "2c6e");



// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* Layout */


/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
var constantRouterMap = [{ path: '/login', component: function component() {
    return __webpack_require__.e(/*! import() */ "chunk-2420d1").then(__webpack_require__.bind(null, /*! @/views/login/index */ "ntYl"));
  }, hidden: true }, { path: '/404', component: function component() {
    return __webpack_require__.e(/*! import() */ "chunk-6cce8e").then(__webpack_require__.bind(null, /*! @/views/404 */ "jNvO"));
  }, hidden: true }, {
  path: '/redirect',
  component: _views_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"],
  hidden: true,
  children: [{
    path: '/redirect/:path*',
    component: function component() {
      return __webpack_require__.e(/*! import() */ "chunk-1455f3").then(__webpack_require__.bind(null, /*! @/views/redirect/index */ "7zzA"));
    }
  }]
}, {
  path: '',
  component: _views_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"],
  redirect: 'dashboard',
  children: [{
    path: 'dashboard',
    name: 'dashboard',
    component: function component() {
      return __webpack_require__.e(/*! import() */ "chunk-79a41f").then(__webpack_require__.bind(null, /*! @/views/dashboard/index */ "lAbF"));
    },
    meta: { title: '首页', icon: 'dashboard', noCache: true }
  }]
}, {
  path: '/goods',
  component: _views_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"],
  redirect: '/goods/list',
  name: '商品管理',
  meta: { title: '商品管理', icon: 'example' },
  children: [{
    path: '/goods/list',
    name: '商品列表',
    component: function component() {
      return __webpack_require__.e(/*! import() */ "chunk-c07d0e").then(__webpack_require__.bind(null, /*! @/views/goods_list/index */ "vr3Q"));
    },
    meta: { title: '商品列表', icon: 'table' }
  }, {
    path: '/goods/add',
    name: '新增商品',
    component: function component() {
      return __webpack_require__.e(/*! import() */ "chunk-2868b4").then(__webpack_require__.bind(null, /*! @/views/tree/index */ "ad09"));
    },
    meta: { title: 'Tree', icon: 'tree' }
  }]
}, {
  path: 'external-link',
  component: _views_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"],
  children: [{
    path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
    meta: { title: 'External Link', icon: 'link' }
  }]
}, { path: '*', redirect: '/404', hidden: true }];

/* harmony default export */ __webpack_exports__["default"] = (new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  // mode: 'history', //后端支持可开
  scrollBehavior: function scrollBehavior() {
    return { y: 0 };
  },
  routes: constantRouterMap
}));

/***/ }),

/***/ "pzrO":
false,

/***/ "qpMM":
false,

/***/ "rt0L":
false,

/***/ "sK+c":
false,

/***/ "seW+":
false,

/***/ "trrL":
false,

/***/ "tuJd":
false,

/***/ "u67i":
false,

/***/ "vfvj":
/*!********************************************************!*\
  !*** ../node_modules/element-ui/lib/locale/lang/en.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/xupengcheng/Documents/pro/smart_server/node_modules/element-ui/lib/locale/lang/en.js'");

/***/ }),

/***/ "wfUR":
false,

/***/ "xgHb":
false,

/***/ "xkQa":
false,

/***/ "y1Qr":
false,

/***/ "zKGb":
/*!***********************************************************!*\
  !*** ../node_modules/element-ui/lib/element-ui.common.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/xupengcheng/Documents/pro/smart_server/node_modules/element-ui/lib/element-ui.common.js'");

/***/ })

})
//# sourceMappingURL=app.26479f94af3bacd4259b.hot-update.js.map