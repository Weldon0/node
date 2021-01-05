// 1、引入http模块
const http = require('http');

// 2、获取服务器实例
const server = http.createServer();

// 3、监听客户端的访问事件
server.on('request', () => {
  console.log('有人偷偷看过你了');
});

// 4、启动服务器，并监听端口号
server.listen(8081, () => {
  console.log('服务器启动了');
});
