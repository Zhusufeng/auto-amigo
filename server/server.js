const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse to json
app.use(bodyParser.json());

// Load static assets from client folder
app.use(express.static('client'));

module.exports = app;