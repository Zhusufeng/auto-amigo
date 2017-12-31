// Require database User model
const User = require('../db/models/user');

// Require session methods
const util = require('../session-utility');

/* POST /login route to find or create a User entry */
const postLogin = (req, res) => {
  console.log(req.body);
  let name = req.body.email;

  // Create query to find if username is in the database
  let findQuery = User.findOne({username: name});
 
  // Execute query
  findQuery.exec(function(err, user) {
    if (err) console.error('Error in User.findOne: ', err);
    console.log(`user was found: ${user}`);
  })
  .then(userInfo => {
    console.log('Here is the userInfo passed from findQuery.exec', userInfo);

    if (userInfo) {
      // Create session
      util.createSession(req, res, userInfo);
    } else {
      // Create user
      let newUser = new User({ username: name});

      // Save user to the database
      newUser.save(function(err, newUser) {
        if (err) console.error('Error in newUser.save: ', err);
        console.log(newUser);
        util.createSession(req, res, newUser);        
      });
    }
  }); 
};

module.exports = {postLogin};