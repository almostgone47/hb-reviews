const express = require('express');
const app = express();
const port = 80;
const morgan = require('morgan');
const path = require('path');
const db = require('../db.js');

app.use(express.static(path.join(__dirname, '../public')));

app.get('/reviews', (req, res) => {
  db.getReviews((err, data) => {
    if (err) {
      res.status(400).send();
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});