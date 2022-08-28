var express = require('express');
var router = express.Router();
const upload = require('../tools/upload')();
/* GET users listing. */
router.post('/addUser', upload.single('userPht'), function (req, res) {
  let {
    size,
    mimetype,
    path
  } = req.file;
  console.log(req.file)
  let types = ['jpeg', 'jpg', 'png', 'gif'];
  let tmpType = mimetype.split('/')[1];
  console.log(tmpType);
  if (size > 5000000) {
    return res.send({
      code: 101001001,
      message: '上传内容不能超过5Mb'
    })
  } else if (types.indexOf(tmpType) === -1) {
    return res.send({
      code: 101001002,
      message: '上传文件格式错误'
    })
  } else {
    //服务器静态化目录 app.use('filename', express.static(path.join(process.cwd(), './uploads')))
    let url = `${req.file.filename}`;
    let phtUrl = 'http://localhost:3000/images/users/' + url

    res.send({
      code: 0,
      message: '添加成功',
      img: phtUrl
    });
  }
});

module.exports = router;