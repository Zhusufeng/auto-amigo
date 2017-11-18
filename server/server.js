const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse to json
app.use(bodyParser.json());

// Load static assets from client folder
app.use(express.static('client'));

let users = [];

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
    if (userInfo) {
      res.status(200).send(userInfo);
    } else {
      res.status(200).send('You made an unsuccessful GET to the /user/:id endpoint');
    }
    
  })
  .put((req, res) => {
    res.status(200).send('You made a PUT to the /user/:id endpoint');
  })
  .delete((req, res) => {
    res.status(200).send('You made a DELETE to the /user/:id endpoint');
  });
module.exports = app;