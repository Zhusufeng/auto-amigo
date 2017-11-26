const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse to json
app.use(bodyParser.json());

// Load static assets from client folder
app.use(express.static(__dirname + '/../client'));

// Temporary arrays until db is created
let users = [];
let gaslog = [
    {
    date: '10/19/2017',
    previousMileage: 99000,
    currentMileage: 99500,
    milesDriven: 500,
    gallons: 15,
    MPG: 33.33,
    pricePerGallon: 3.25,
    totalSpent: 48.75
  }
];

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
  .get((req, res) => {
    res.status(200).send(gaslog);
  })
  .post((req, res) => {
    gaslog.push(req.body);
    res.status(200).send(req.body);
  });

module.exports = app;