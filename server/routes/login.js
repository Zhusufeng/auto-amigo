const User = require('../db/models/user');

/* POST /login route to find or create a User entry */
const postLogin = (req, res) => {
  console.log(req.body);

  let name = req.body.email;

  let isFound = false;

  // Create query to find if username is in the database
  let findQuery = User.findOne({username: name});
 
  // Execute query
  findQuery.exec(function(err, user) {
    if (err) console.error('Error in User.findOne: ', err);
    console.log(`user was found: ${user}`);
    if (user) isFound = true;
  })
  .then(data => {
    console.log('Here is the data passed from findQuery.exec', data);
    console.log('isFound is ', isFound);

    if (isFound) {
      res.status(200).send(data);
    } else {
      // Create user
      let newUser = new User({ username: name});

      // Save user to the database
      newUser.save(function(err, newUser) {
        if (err) console.error('Error in newUser.save: ', err);
        console.log(newUser);
        res.status(201).send(newUser);
      });
    }
  }); 
};

module.exports = {postLogin};