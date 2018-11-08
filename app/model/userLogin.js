/**
 * Model
 * @param app
 * @returns {*}
 */
const bcrypt = require('bcryptjs');
module.exports = app => {
    const UserLogin = app.model.import('../tables/userLogin');
    UserLogin.updatePassword=async function(username,pass) {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const password = bcrypt.hashSync(pass, salt);
        const userLogin=await this.findOne({where:{loginString:username}});
        if(!userLogin){
            return null;
        }
        userLogin.update({password, salt});
        return userLogin;
    };
    return UserLogin;
};