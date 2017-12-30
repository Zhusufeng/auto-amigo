const db = require('./db/index.js');
const User = require('../db/models/user');

/* POST /login route to find or create a User entry */
const postLogin = (req, res) => {
  console.log(req);

  let name = req.body.username;

  User.findOne({username: name}, function(err, user) {
    if (err) console.error('Error in User.find: ', err);
    console.log(`user was found: ${user}`);
    res.status(200).send(user);
  })
};

module.exports = postLogin;