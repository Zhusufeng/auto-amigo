const mongoose = require('mongoose');
const Gas = require('../db/models/gas');

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
module.exports = {getGas, postGas};