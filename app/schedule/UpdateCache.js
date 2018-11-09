/**
 * 每天定时清除用户登陆状态
 */
module.exports = {
    schedule: {
      //interval: '10m', // 1 分钟间隔
      cron: '0 59 23 * * *', // 每天的 23点59分清除所有用户的登陆状态
      type: 'all', // 指定所有的 worker 都需要执行
    },
    async task(ctx) {
        // 已登陆的用户状态改成未登陆
        ctx.model.UserLogin.update({status: 1}, {where: {status: 0}});
    }
};