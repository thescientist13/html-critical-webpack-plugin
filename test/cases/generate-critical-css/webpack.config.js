const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackCriticalPlugin = require('../../../index');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {

  mode: 'production',

  entry: {
    index: path.resolve(__dirname, 'index.js'),
    main: path.resolve(__dirname, 'main.js')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].bundle.js'
  },

  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextWebpackPlugin.extract({
        use: ['css-loader']
      })
    }]
  },

  plugins: [
    new HtmlWebpackPlugin(),

    new ExtractTextWebpackPlugin('styles.[chunkhash].css'),

    new HtmlWebpackCriticalPlugin({
      base: path.resolve(__dirname, 'dist'),
      src: 'index.html',
      dest: 'index.html',
      inline: true
    })
  ]
};