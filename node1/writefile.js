const fs = require('fs');

// 写文件
// 参数1: 路径
// 参数2：写入的数据
// 参数3：可以省略，编码格式，默认utf8
// 参数4：回调
fs.writeFile('./file/2.txt', '黑马', (err) => {
  if (err) {
    console.log(err.message);
  }
  console.log('写入成功');
});
