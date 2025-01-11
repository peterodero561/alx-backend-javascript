const express = require("express");
const app = express();
const port = 7865;

app.get("/", (req, res) => {
  res.send("Welcome to the payment system");
});

// Add the /cart/:id endpoint
app.get("/cart/:id(\\d+)", (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// Handle invalid :id (not a number)
app.get("/cart/:id", (req, res) => {
  res.status(404).send("Not Found");
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
