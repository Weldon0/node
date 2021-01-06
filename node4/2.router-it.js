const express = require('express');
// 导入路由模块
const router = require('./router/index');
const app = express();
const port = 3000;

// 注册路由模块
// 添加访问前缀
app.use('/api', router); // /api/user

// app.use((req, res, next))

app.listen(port, () => console.log(`Example app listening on port port!`));
