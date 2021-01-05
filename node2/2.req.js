const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  // req是请求对象
  // req.url请求地址
  // req.method请求方法

  // res响应对象
  // 包含服务端相关信息
  // res.end向客户端响应消息
  const url = req.url;
  const method = req.method;

  console.log('url', url);
  console.log('method', method);
  // res.end('server:' + url);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end('她睡着了');
});

server.listen(8080, () => {
  console.log('server running ');
});
