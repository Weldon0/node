const fs = require('fs');
const path = require('path');

// 样式表的正则
const styleReg = /<style>([\s\S]*)<\/style>/;

// script的正则
const scriptReg = /<script>([\s\S]*)<\/script>/;

fs.readFile(path.join(__dirname, './lib/index.html'), 'utf8', (err, data) => {
  if (err) {
    console.log('读取失败' + err.message);
    return;
  }
  resolveCss(data);
  resolveJs(data);
  resolveHtml(data);
});

function resolveCss(htmlStr) {
  const [r1, r2] = styleReg.exec(htmlStr);
  fs.writeFile(path.join(__dirname, './clock/index.css'), r2, (err) => {
    if (err) {
      console.log('写入失败');
      return;
    }
    console.log('写入成功');
  });
}

function resolveJs(htmlStr) {
  const r = scriptReg.exec(htmlStr);
  fs.writeFile(path.join(__dirname, './clock/index.js'), r[1], (err) => {
    if (err) {
      console.log('写入失败');
      return;
    }
    console.log('写入成功');
  });
}

function resolveHtml(htmlStr) {
  const newHtml = htmlStr
    .replace(styleReg, '<link rel="stylesheet" href="./index.css">')
    .replace(scriptReg, '<script src="./index.js"></script>');

  fs.writeFile(path.join(__dirname, './clock/index.html'), newHtml, (err) => {
    if (err) {
      console.log('写入失败');
      return;
    }
    console.log('写入成功');
  });
}
