const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './client/app/app.js',
    vendor: ['angular']
  },
  output: {
    filename: 'app.bundle.js',
    path: __dirname + 'client/js'
  }
}