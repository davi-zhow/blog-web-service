/**
 * @file 文件上传工具
 * @author davi-zhow
 * @since 2022-08-28
 */

const multer = require('multer');
const path = require('path');


module.exports = function ({
    destination = '../public/images/users',
    filename = (new Date()).getTime() + parseInt(Math.random() * 9999)
} = {}) {
    const storage = multer.diskStorage({
        destination(req, file, cb) {
            // 指定文件存储路径
            cb(null, path.join(__dirname, destination));
        },
        filename(req, file, cb) {
            // 指定存储后的文件名（有两个问题）
            // 1文件名重复覆盖 时间戳
            // 2后缀名发生改变
            console.log('=======file=====', file);
            // 获取后缀名
            let exts = file.originalname.split('.');
            let ext = exts[exts.length - 1];
            let tepname = filename;

            // 拼接名字
            cb(null, `${tepname}.${ext}`);
        }
    })

    return multer({
        storage
    })
}