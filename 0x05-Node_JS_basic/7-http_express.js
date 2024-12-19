const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

// route for the root path
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

// route for /students path
app.get('/students', (req, res) => {
  const databasePath = process.argv[2];

  res.set('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  countStudents(databasePath)
    .then((result) => {
      res.write(result);
      res.end();
    })
    .catch((err) => {
      res.end(err.message);
    });
});

app.listen(1245, () => {
  console.log('Server is listenig to port 1245');
});

module.exports = app;
