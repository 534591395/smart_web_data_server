/**
 * helper 扩展
 */

const fs = require('fs');
const path = require('path');

module.exports = {
    // 文件保存
    saveFile(stream, type) {
        return new Promise( (resolve, reject) => {
            const filePath = '/public/upload/' + type + path.basename(stream.filename);
            const fileName = this.app.root + '/app' + filePath;
            const ws = fs.createWriteStream(fileName);
            stream.pipe(ws);
            stream.on('error', reject);
            stream.on('end', resolve(fileName));
        } );
    }
}; 
