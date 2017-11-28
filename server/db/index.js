const mongoose = require('mongoose');
let url = process.env.MONGODB_URI || 'mongodb://localhost/test';
console.log('url is ', url);
mongoose.connect(url);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('MongoDB is connected');
});

module.exports = db;