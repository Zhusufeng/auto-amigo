const mongoose = require('mongoose');
const Gas = require('../db/models/gas');

// Temp array until db is used
// let gaslog = [
//   {
//     date: '10/19/2017',
//     previousMileage: 99000,
//     currentMileage: 99500,
//     milesDriven: 500,
//     gallons: 15,
//     MPG: 33.33,
//     pricePerGallon: 3.25,
//     totalSpent: 48.75
//   }
// ];

/* GET /gas route to retrieve all gas entries */
const getGas = (req, res) => {
  res.status(200).send(gaslog);
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
  });

  // gaslog.push(req.body);
  res.status(200).send(req.body);
};

// Export functions using es6
module.exports = {getGas, postGas};