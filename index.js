const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: ['http://localhost:5173', "https://my-first-deploy-front.vercel.app/"]
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/health', (req, res) => {
  res.send('The service is on line');
});

app.listen(3000, () => {
  console.log('Server working on port 3000');
});
