/**
 * 管理平台-模块页（主页）
 * @param app
 * @returns {HomeController}
 */

'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(ctx) {
    await ctx.render('admin/index');
  }
}

module.exports = HomeController;
