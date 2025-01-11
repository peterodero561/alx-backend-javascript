const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 7865;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Add the /cart/:id endpoint
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// Add the /available_payments endpoint
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// Add the /login endpoint
app.post('/login', (req, res) => {
  const { userName } = req.body;

  if (userName) {
    res.send(`Welcome ${userName}`);
  } else {
    res.status(400).send('UserName is required');
  }
});

// Middleware for handling unrecognized routes
app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Error</title>
    </head>
    <body>
      <pre>Cannot GET ${req.url}</pre>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app; // Export app for testing
