const webpack = require('webpack');

module.exports = {
  context: __dirname + '/client/app',
  entry: {
    app: './app.js',
    vendor: ['angular']
  },
  output: {
    filename: 'app.bundle.js',
    path: __dirname + '/client/js'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: "html" }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    })
  ]
};