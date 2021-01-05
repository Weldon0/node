// 引入所需模块
const http = require('http');
const fs = require('fs');
const path = require('path');

// 创建服务器实例
const server = http.createServer();

// 监听客户端请求事件
server.on('request', (req, res) => {
  // req请求对象(客户端相关信息)
  // res响应对象(服务端相关)
  // /clock/index.html
  const url = req.url; // 请求路径

  // const fpath = path.join(__dirname, url);
  let fpath = '';
  if (url === '/') {
    fpath = path.join(__dirname, './clock/index.html');
  } else {
    fpath = path.join(__dirname, './clock', url);
  }

  // 读取服务器本地文件，响应给客户端
  fs.readFile(fpath, 'utf8', (err, data) => {
    if (err) {
      res.end('404 Not Found');
      return;
    }
    res.end(data);
  });
});

// 启动服务器，监听端口
server.listen(8083, () => {
  console.log('server running at port 8083');
});
