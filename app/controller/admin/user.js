/**
 * 用户Controller
 * @param app
 */

'use strict';

const BaseController = require('../../core/baseController');

class UserController extends BaseController {
  async info(ctx) {
    const token = ctx.query.token;
    const userInfo = await ctx.model.User.findOne({where: {uid: token}, raw: true});
    if (!userInfo) {
       this.failure('token已失效');
       return; 
    }
    userInfo.role = ['admin'];
    userInfo.token = userInfo.uid;
    userInfo.introduction = 'xx';
    userInfo.avatar = '';
    userInfo.name = userInfo.username;
    this.success('获取成功', userInfo);  
  }
}

module.exports = UserController;