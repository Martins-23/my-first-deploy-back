const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/health', (req, res) => {
  res.send('The service is on line');
});

app.listen(3000, () => {
  console.log('Server working on port 3000');
});
