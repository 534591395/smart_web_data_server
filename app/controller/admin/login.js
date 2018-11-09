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
    // 填入密码判断，密码加盐加密后判断：https://blog.csdn.net/u013810234/article/details/77053011
    // 校验时，从hash中取出salt，salt跟password进行hash，得到的结果跟保存在DB中的hash（userLoginInfo.password）进行比对
    const resBool = bcrypt.compareSync(password, userLoginInfo.password);
    if (resBool) {
      // 登陆状态改成已登陆
      await userLoginInfo.update({
        status: 0
      });
      // 写入登陆日志
      await ctx.model.UserLoginLog.create({
        uid: userInfo.uid,
        loginString: username,
        loginLogType: 'L' // 登录日志类型（L=登录, Q=退出, P=重要行为)
      });
      userInfo.update({
        loginNum: userInfo.loginNum + 1,
        lastLoginTime: moment()
      });
      this.success("登录成功!",{token: userInfo.uid});
      return;
    } else {
      this.failure("用户名或密码错误!");
      return;
    }
  }
  async logout(ctx) {
    // 从 header里拿取token https://eggjs.org/zh-cn/basics/controller.html
    const token = ctx.get('x-token');
    const userInfo = await ctx.model.User.findOne({where: {uid: token}, raw: true});
    if (!userInfo) {
      this.failure('token已失效');
      return;
    }
    ctx.model.UserLoginLog.create({
      uid: userInfo.uid,
      loginString: userInfo.username,
      loginLogType: 'Q' // 登录日志类型（L=登录, Q=退出, P=重要行为)
    });
    this.success('退出成功!');
  }
}

module.exports = LoginController;
