/**
 * 用户Controller
 * @param app
 */

'use strict';

const BaseController = require('../../core/baseController');

class UserController extends BaseController {
  async info(ctx) {
    const token = ctx.query.token;
    const userLoginInfo = await ctx.model.UserLogin.findOne({where: {uid: token}, raw: true});
    // status 0=正常, 1=失效
    if (!userLoginInfo || userLoginInfo.status== '1') {
      this.failure('token已失效');
      return; 
    }
    const userInfo = await ctx.model.User.findOne({where: {uid: token}, raw: true});
    if (!userInfo) {
      this.failure('未找到该用户信息');
      return; 
    }
    userInfo.roles = ['admin'];
    userInfo.token = userInfo.uid;
    userInfo.introduction = 'xx';
    userInfo.avatar = '';
    userInfo.name = userInfo.username;
    this.success('获取成功', userInfo);  
  }
}

module.exports = UserController;