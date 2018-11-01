'use strict';

/**
 * @param {Egg.Application} app - egg application
 * 路由配置
 */
module.exports = app => {
  const { router, controller } = app;
  // 页面 ---------------------------------------------------------------

  // 首页
  router.get('/', controller.home.index);
  // 登陆页 
  router.get('/page/login', controller.login.index);
  // 注册页
  router.get('/page/signIn', controller.login.signIn);

  // 接口 -------------------------------------------------------------

  // 登陆
  router.post('/api/login', controller.login.login);
  // 退出
  router.post('/api/logout', controller.login.logout);
  
};


