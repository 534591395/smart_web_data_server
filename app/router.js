'use strict';

/**
 * @param {Egg.Application} app - egg application
 * 路由配置
 */
module.exports = app => {
  //const { router, controller } = app;

  // 电商管理平台后台系统
  app.get('/admin', app.controller.admin.home.index); 
  
};


