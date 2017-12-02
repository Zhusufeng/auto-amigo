const mongoose = require('mongoose');
let url;

if (process.env.NODE_ENV === 'dev') {
  url = process.env.MONGODB_URI || 'mongodb://localhost/auto-amigo'; 
} else {
  url = 'mongodb://localhost/test'
}
console.log('url is ', url);

mongoose.connect(url);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('MongoDB is connected');
});

module.exports = db;