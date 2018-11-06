/**
 * 本地配置
 * @type
 * #sequelize-auto -h localhost -d apshop -u apshop -x apShop147852
 */
exports.sequelize  = {
    // 单数据库信息配置

    dialect: 'mysql',
    // host
    host: '106.12.30.146',
    // 端口号
    port: '3306',
    // 用户名
    username: 'root',
    // 密码
    password: 'WangYang534591395@qq.com',
    // 数据库名
    database: 'apshop',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: false, // true by default
        freezeTableName: true
    },
    timezone: '+08:00' //东八时区
};

