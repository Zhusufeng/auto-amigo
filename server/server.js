const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse to json
app.use(bodyParser.json());

// Load static assets from client folder
app.use(express.static('client'));

app.route('/user')
  .get((req, res) => {
    res.status(200).send('You made a GET to the /user endpoint');
  })
  .post((req, res) => {
    res.status(200).send('You made a POST to the /user endpoint');
  });

app.route('/user/:id')
  .get((req, res) => {
    res.status(200).send('You made a GET to the /user/:id endpoint');
  })
  .put((req, res) => {
    res.status(200).send('You made a PUT to the /user/:id endpoint');
  })
  .delete((req, res) => {
    res.status(200).send('You made a DELETE to the /user/:id endpoint');
  });
module.exports = app;