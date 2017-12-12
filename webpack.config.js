const webpack = require('webpack');

module.exports = {
  // context: __dirname + '/client/app',
  // entry: {
    // app: './app.js',
    // vendor: ['angular']
  // },
  entry: './client/app/app.js',
  output: {
    path: __dirname + '/client/js',
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html-loader' }
    ]
  },
  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'vendor',
  //     filename: 'vendor.bundle.js'
  //   })
  // ]
};