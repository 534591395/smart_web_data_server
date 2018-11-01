'use strict';

// had enabled by egg
// exports.static = true;

// 数据库操作
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize'
};

// 重定向 安全设置
exports.cors = {
    enable: true,
    package: 'egg-cors'
};