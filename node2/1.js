const http = require('http');

const server = http.createServer();

server.on('request', () => {
  console.log('visit');
});

server.listen(8081, () => {
  console.log('server running');
});
