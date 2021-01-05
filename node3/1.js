const Time = require('./it-tools');

const str = Time.htmlEscape('<h1>黑马</h1>');

// console.log(str);
const html = Time.htmlUnEscape('&glt;h1&gt;黑马&glt;/h1');

console.log(html);
