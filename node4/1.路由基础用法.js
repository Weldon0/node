const express = require('express');
// 服务器的实例
const app = express();
const port = 3000;

// 通过服务器实例挂载请求
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/', (req, res) => res.send('post'));

// 启动服务器
app.listen(port, () => console.log(`Example app listening on port port!`));
