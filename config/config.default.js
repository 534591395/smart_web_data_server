'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1540970028167_8917';

  // 静态模板引擎配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    }
  };

  // add your config here
  config.middleware = [];

  // url安全白名单设置，跨域重定向  https://eggjs.org/zh-cn/core/security.html
  config.security = {
    domainWhiteList: [],
    csrf: {
      // 该路径忽略安全选项
      ignore: /\/api|\/page/,
      // Cookie 中的字段名，默认为 csrfToken   将 CSRF token 存在 Cookie 中字段名称
      cookieName: 'ctoken'
    }
  };

  return config;
};
