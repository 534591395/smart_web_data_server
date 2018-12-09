/**
 * 管理平台-文件上传下载
 * @param app
 * @returns {FileController}
 * 
 */

const BaseController = require('../../core/baseController');

class FileController extends BaseController {
    // 支持单个文件上传
    async upload(ctx) {
        const type = ctx.params.type;
        const stream = await ctx.getFileStream();
        const filePath = await ctx.helper.saveFile(stream, type).catch( (error) => {
            this.failure("上传失败");
            return;
        });
        this.success("上传成功！", app.config.server + filePath);
    }
}

module.exports = FileController;