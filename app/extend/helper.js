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
        } );
    }
}; 
