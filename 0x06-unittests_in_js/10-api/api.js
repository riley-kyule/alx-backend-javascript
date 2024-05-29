const express = require('express');
const bodyParser = require('body-parser');
const util = require('util');

const port = 7865;
const app = express();
// The body is expected as a JSON raw data
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/available_payments', (request, response) => {
  response.send({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (request, response) => {
  const { userName } = request.body;
  // console.log(`body: ${util.inspect(request.body)}`); // test
  response.send(`Welcome ${userName}`);
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