// fs.readFile
const fs = require('fs');

fs.readFile('./lib/成绩.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('读取失败:' + err.message);
    return;
  }

  // console.log('读取成功：' + data);
  // 小红=99 小白=100 小黄=70 小黑=66 小绿=88
  const oldArr = data.split(' ');
  const newArr = oldArr.map((item) => item.replace('=', ':'));

  console.log(newArr);

  const res = newArr.join('\r\n');

  console.log(res);
  //  /user/desktop/
  fs.writeFile('./file/okokok.txt', res, (err) => {
    if (err) {
      console.log('写入失败' + err.message);
      return;
    }
    console.log('success');
  });
});
