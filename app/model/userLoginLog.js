/**
 * Model --用户登陆日志
 * @param app
 * @returns {*}
 */
module.exports = app => {
    const UserLoginLog = app.model.import('../tables/userlogin_l');
    return UserLoginLog;
};