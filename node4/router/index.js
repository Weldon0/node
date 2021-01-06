const express = require('express'); // 引入express

// 获取路由对象
const router = express.Router();

router.get('/user', (req, res) => {
  res.send('user');
  // next();
});

// 往路由对象身上挂载路由
router.post('/list', (req, res, next) => {
  res.send('post list');
});
// 导出路由对象
module.exports = router;
