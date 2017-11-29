const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db/index.js');
const gas = require('./routes/gas.js');

// Parse to json
app.use(bodyParser.json());

// Load static assets from client folder
app.use(express.static(__dirname + '/../client'));

// Temporary arrays until db is created
let users = [];

/* USER */
app.route('/user')
  .get((req, res) => {
    res.status(200).send(users);
  })
  .post((req, res) => {
    users.push(req.body);
    res.status(200).send('You made a POST to the /user endpoint');
  });

app.route('/user/:id')
  .get((req, res) => {
    let userid = req.params.id;
    let userInfo = users.filter(user => {
      if (user.userid === userid) return user;
    });
    if (userInfo.length <= 0) {
      res.status(200).send('You made an unsuccessful GET to the /user/:id endpoint. User does not exist');
    } else {
      res.status(200).send(userInfo);
    }
  })
  .put((req, res) => {
    res.status(200).send('You made a PUT to the /user/:id endpoint');
  })
  .delete((req, res) => {
    res.status(200).send('You made a DELETE to the /user/:id endpoint');
  });

/* GAS */
app.route('/gas')
  .get(gas.getGas)
  .post(gas.postGas);

module.exports = app;