// Require database models
const User = require('../db/models/user');
const Gas = require('../db/models/gas');

// Require session methods
const util = require('../session-utility');

/* GET /gas route to retrieve a user's gas entries */
const getUsersGas = (req, res) => {
  console.log(`req.session is ${req.session}`);
  console.log(`req.session._id is ${req.session._id}`);

  if (!req.session._id) {
    res.status(200).send({error: 'Not logged in'});
  } else {
    // Create query to find if username is in the database
    let findQuery = User.findOne({_id: req.session._id});

    // Execute query
    findQuery.exec(function(err, user) {
      if (err) console.error('Error in User.findOne: ', err);
    })
    .then((userInfo) => {
      console.log(`userInfo is ${userInfo}`);
      // Send array of gas entries to client
      res.status(200).send(userInfo.gaslog);
    });
  }
};

/* POST /gas route to add a user's gas entry */
const postUsersGas = (req, res) => {
  console.log(`req.session is ${req.session}`);
  console.log(`req.session._id is ${req.session._id}`);

  // Create new gasEntry
  var gasEntry = new Gas({
    date: req.body.date,
    previousMileage: req.body.previousMileage,
    currentMileage: req.body.currentMileage,
    milesDriven: req.body.milesDriven,
    gallons: req.body.gallons,
    MPG: req.body.MPG,
    pricePerGallon: req.body.pricePerGallon,
    totalSpent: req.body.totalSpent
  });
  
  // Save gasEntry to database
  gasEntry.save(function (err, gasEntry) {
    if (err) return console.error(err);
    // res.status(200).send(req.body);
  })
  .then(gasEntry => {
    console.log(`gasEntry is ${gasEntry}`);

    // Create query to grab userInfo in the database
    let findQuery = User.findOne({_id: req.session._id});

    // Execute query
    findQuery.exec(function(err, user) {
      if (err) console.error('Error in User.findOne: ', err);
    })
    .then((userInfo) => {
      console.log(`userInfo is ${userInfo}`);
      userInfo.gaslog.push(gasEntry);
      
      res.status(200).send(gasEntry);
    });
  });
};

/* Below functions are now deprecated but can be useful for debugging */
/* They can be used to save entries straight to the Gas collection */
/* GET /gas route to retrieve all gas entries */
const getGas = (req, res) => {
  Gas.find(function(err, gasEntries) {
    if (err) return console.error(err);
    res.status(200).send(gasEntries);
  });
};

/* POST /gas route to add a gas entry */
const postGas = (req, res) => {
  // Create new gasEntry
  var gasEntry = new Gas({
    date: req.body.date,
    previousMileage: req.body.previousMileage,
    currentMileage: req.body.currentMileage,
    milesDriven: req.body.milesDriven,
    gallons: req.body.gallons,
    MPG: req.body.MPG,
    pricePerGallon: req.body.pricePerGallon,
    totalSpent: req.body.totalSpent
  });
  
  // Save gasEntry to database
  gasEntry.save(function (err, gasEntry) {
    if (err) return console.error(err);
    res.status(200).send(req.body);
  }); 
};

// Export functions using es6
module.exports = {
  getUsersGas,
  postUsersGas,
  getGas, 
  postGas
};