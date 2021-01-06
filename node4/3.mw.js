const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(req.uname);
  next();
});
app.use((req, res, next) => {
  req.uname = 'it';
  next();
});

app.get('/', (req, res) => {
  console.log(req.uname);

  res.send({
    date: req.date,
  });
});

app.get('/list', (req, res) => {
  res.send({
    date: req.date,
  });
});

app.use((req, res, next) => {
  res.send('<h1>404</h1>');
});
app.listen(port, () => console.log(`Example app listening on port port!`));
