const mongoose = require('mongoose');

const gasSchema = mongoose.Schema({
    date: String,
    previousMileage: Number,
    currentMileage: Number,
    milesDriven: Number,
    gallons: Number,
    MPG: Number,
    pricePerGallon: Number,
    totalSpent: Number
});

// Compile schema to model and export
module.exports = mongoose.model('Gas', gasSchema);