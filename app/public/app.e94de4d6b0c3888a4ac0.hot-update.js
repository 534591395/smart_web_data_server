webpackHotUpdate("app",{

/***/ "+8DU":
false,

/***/ "6DIm":
/*!***************************************************!*\
  !*** ../node_modules/vue/dist/vue.runtime.esm.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/xupengcheng/Documents/pro/smart_server/node_modules/vue/dist/vue.runtime.esm.js'");

/***/ }),

/***/ "HW8R":
/*!***********************************************!*\
  !*** ../node_modules/path-to-regexp/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/xupengcheng/Documents/pro/smart_server/node_modules/path-to-regexp/index.js'");

/***/ }),

/***/ "R8iU":
/*!************************************************!*\
  !*** ../node_modules/path-browserify/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/xupengcheng/Documents/pro/smart_server/node_modules/path-browserify/index.js'");

/***/ }),

/***/ "TPqO":
/*!*********************************************************************************************************************************!*\
  !*** ../node_modules/css-loader??ref--7-1!../node_modules/postcss-loader/lib??ref--7-2!../node_modules/nprogress/nprogress.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/postcss-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/xupengcheng/Documents/pro/smart_server/node_modules/nprogress/nprogress.css'");

/***/ }),

/***/ "ZLCB":
/*!**********************************************!*\
  !*** ../node_modules/nprogress/nprogress.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/xupengcheng/Documents/pro/smart_server/node_modules/nprogress/nprogress.js'");

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
    return __webpack_require__.e(/*! import() */ "chunk-2420d15").then(__webpack_require__.bind(null, /*! @/views/login/index */ "ntYl"));
  }, hidden: true }, { path: '/404', component: function component() {
    return __webpack_require__.e(/*! import() */ "chunk-6cce8ea").then(__webpack_require__.bind(null, /*! @/views/404 */ "jNvO"));
  }, hidden: true }, {
  path: '/redirect',
  component: _views_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"],
  hidden: true,
  children: [{
    path: '/redirect/:path*',
    component: function component() {
      return __webpack_require__.e(/*! import() */ "chunk-1455f3a").then(__webpack_require__.bind(null, /*! @/views/redirect/index */ "7zzA"));
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
      return __webpack_require__.e(/*! import() */ "chunk-79a41f9").then(__webpack_require__.bind(null, /*! @/views/dashboard/index */ "lAbF"));
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
      return __webpack_require__.e(/*! import() */ "chunk-c07d0ec").then(__webpack_require__.bind(null, /*! @/views/goods_list/index */ "vr3Q"));
    },
    meta: { title: '商品列表', icon: 'table' }
  }, {
    path: '/goods/add',
    name: '新增商品',
    component: function component() {
      return __webpack_require__.e(/*! import() */ "chunk-2868b47").then(__webpack_require__.bind(null, /*! @/views/tree/index */ "ad09"));
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

/***/ "tFQF":
/*!***************************************************************!*\
  !*** ../node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/xupengcheng/Documents/pro/smart_server/node_modules/vue-style-loader/lib/addStylesClient.js'");

/***/ })

})
//# sourceMappingURL=app.e94de4d6b0c3888a4ac0.hot-update.js.map