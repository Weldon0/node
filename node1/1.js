const fs = require('fs');

fs.readFile('./file/1.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err.message);
    return;
  }

  console.log('获取到了数据:' + data);
});
