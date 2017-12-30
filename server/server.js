// Packages
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

// Database
const db = require('./db/index.js');

// Routes
const login = require('./routes/login');
const gas = require('./routes/gas');
const user = require('./routes/user');

// Create instance
const app = express();

// Middleware
app.use(bodyParser.json()); // Parse to json
app.use(express.static(__dirname + '/../client/js')); // Load static assets from client folder
app.use(session({
  secret: 'notASecretForNow',
  resave: false, // save session even if not modified
  saveUninitialized: true // save session even if new and not modified
}));

// Routes
/* LOGIN */
app.route('/login')
  .post(login.postLogin);

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