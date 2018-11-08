/**
 * 用户模型
 */

//导入加密模块
const bcrypt = require('bcryptjs');

module.exports = app => {
    const User = app.model.import('../tables/user');

    User.add= async function(username,pass,nickname) {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const password = bcrypt.hashSync(pass, salt);
        const user= await this.create({
            username,nickname,
            'userType':'C'
        });
        //写入登录表
        const userLogin = await app.model.UserLogin.create({
            'loginString': username,
            password,
            'uid': user.uid,
            salt
        });
    };
    return User;
};