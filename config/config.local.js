/**
 * 本地配置
 */



 'use strict';

 module.exports = appInfo => {
    const config = exports = {};

    // 连接数据库配置 远程服务器
    config.sequelize = {
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
  
    return config;
  };