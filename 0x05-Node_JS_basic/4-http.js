const http = require('http');

// create http server
const app = http.createServer((req, res) => {
  res.statusCode = 200; // Setting statusCode
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
