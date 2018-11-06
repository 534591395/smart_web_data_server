/**
 * 登录Controller
 * @param app
 */

'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login(ctx) {
    const {username, password} = ctx.request.body;
    const userInfo = await ctx.model.User.findOne({where: {username}});
    if (!userInfo) {
      this.failure('用户名或密码错误！');
      return;
    }
    if (userInfo.userType !== 'A') {}
  }
  async logout(ctx) {

  }
}

module.exports = LoginController;
