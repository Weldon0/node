const express = require('express');

const app = express();

app.get('/user', (req, res) => {
  res.send({
    name: 'admin',
  });
});

app.post('/user', (req, res) => {
  res.send('post post post');
});

app.listen(8989, () => {
  console.log('server running');
});

// npm i express
