/**
 * 登录Controller
 * @param app
 */

'use strict';

const bcrypt = require('bcryptjs');
const moment=require('moment');

const BaseController = require('../../core/baseController');

class LoginController extends BaseController {
  async login(ctx) {
    const {username, password} = ctx.request.body;
    const userInfo = await ctx.model.User.findOne({where: {username}});
    if (!userInfo) {
      this.failure('用户名或密码错误！');
      return;
    }
    if (userInfo.userType !== 'A') {
      this.failure('非管理员身份禁止登录！');
      return;  
    }
    const userLoginInfo = await ctx.model.UserLogin.findOne({where: {loginString: username}});
    if (!userLoginInfo) {
      this.failure('用户登录信息不存在！');
      return;
    }
    const resBool = bcrypt.compareSync(password, userLoginInfo.password);
    if (resBool) {
      await ctx.model.UserLoginLog.create({
        uid: userInfo.uid,
        loginString: username,
        loginLogType: 'L' // 登录日志类型（L=登录, Q=退出, P=重要行为)
      });
      userInfo.update({
        loginNum: userInfo.loginNum + 1,
        lastLoginTime:moment()
      });
      this.success("登录成功!",{token: userInfo.uid});
      return;
    } else {
      this.failure("用户名或密码错误!");
      return;
    }
  }
  async logout(ctx) {

  }
}

module.exports = LoginController;
