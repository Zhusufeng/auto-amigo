const mongoose = require('mongoose');

// Include subdocument schema
const gasSchema = require('./gas');

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    // Array of subdocuments
    gaslog: [gasSchema]
});

// Compile schema to model and export
module.exports = mongoose.model('User', userSchema);