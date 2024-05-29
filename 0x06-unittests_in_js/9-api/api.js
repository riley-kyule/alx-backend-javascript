const express = require('express');

const app = express();
const port = 7865;

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});


app.get('/cart/:id', (request, response) => {
  const id = request.params.id;
  if (!/^\d+$/.test(id)) {
    return response.status(404).send('Invalid ID. ID must be a number.');
  }
  response.send(`Payment methods for cart ${id}`);
});

app.listen(port, () => {
  console.log(`API is listening on localhost port ${port}`);
});

module.exports = app;