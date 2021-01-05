const format = require('./src/dateFormat'); // {}
const htmlEscape = require('./src/htmlEscape'); // {}

// 向外暴露需要的成员
module.exports = {
  ...format,
  ...htmlEscape,
};
