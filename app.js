/**
 *  全局定义
 * @param app
 */
module.exports = app => {
    app.payCodes= null;
    app.root=__dirname;
    app.beforeStart(function* () {
        // 应用会等待这个函数执行完成才启动
    });
};