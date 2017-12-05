const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db/index.js');
const gas = require('./routes/gas.js');
const user = require('./routes/user');

// Parse to json
app.use(bodyParser.json());

// Load static assets from client folder
app.use(express.static(__dirname + '/../client'));

/* USER */
app.route('/user')
  .get(user.getUsers)
  .post(user.postUser);

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