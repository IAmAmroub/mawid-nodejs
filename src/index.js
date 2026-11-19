const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('Anout Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

app.listen(port, () => {
  console.log(`Mawid app listening on port ${port}`);
});
