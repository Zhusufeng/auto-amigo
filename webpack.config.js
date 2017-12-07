const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname + '/client/app',
  entry: {
    app: './app.js',
    vendor: ['angular']
  },
  output: {
    filename: 'app.bundle.js',
    path: __dirname + 'client/js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    })
  ]
};