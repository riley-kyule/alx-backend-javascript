const express = require('express');

const app = express();
const port = 7865;

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

module.exports = app;