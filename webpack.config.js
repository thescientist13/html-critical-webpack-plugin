const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname + '/index.js'),
  output: {
    path: path.resolve(__dirname + '/dist/'),
    filename: 'html-crtitical-webpack-plugin.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    critical: 'critical'
  }
};