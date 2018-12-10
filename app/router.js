'use strict';

/**
 * @param {Egg.Application} app - egg application
 * 路由配置
 */
module.exports = app => {
  //const { router, controller } = app;

  // 电商管理平台后台系统
  app.get('/admin', app.controller.admin.home.index); 

  // 登陆后台管理系统
  app.post('/admin/api/login', app.controller.admin.login.login);
  // 登出后台管理系统
  app.post('/admin/api/logout', app.controller.admin.login.logout);
  // 获取登陆用户信息
  app.get('/admin/api/user/info', app.controller.admin.user.info);
  // 商品列表
  app.get('/admin/api/goods/list', app.controller.admin.goods.list);
  // 创建商品
  app.post('/admin/api/goods/create', app.controller.admin.goods.create);
  // 编辑商品
  app.post('/admin/api/goods/edit', app.controller.admin.goods.create);
  // 商品推荐状态更改
  app.post('/admin/api/goods/recommend', app.controller.admin.goods.recommend);

  // 上传文件
  app.post('/admin/upload/:type', app.controller.admin.file.upload);

};


