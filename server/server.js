const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db/index.js');
const gas = require('./routes/gas.js');
const user = require('./routes/user');

// Parse to json
app.use(bodyParser.json());

// Load static assets from client folder
app.use(express.static(__dirname + '/../client/js'));

/* USER */
app.route('/user')
  .get(user.getUsers)
  .post(user.postUser);

app.route('/user/:id')
  .get(user.getUser)
  .put(user.putUser)
  .delete(user.deleteUser);

/* GAS */
app.route('/gas')
  .get(gas.getGas)
  .post(gas.postGas);

module.exports = app;