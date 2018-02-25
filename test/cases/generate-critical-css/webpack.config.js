const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackCriticalPlugin = require('../../../index');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
console.log('__dirname', __dirname);

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'index.js'),
    main: path.resolve(__dirname, 'main.js')
  },

  output: {
    path: path.resolve(__dirname, 'build'),
  },

    module: {
      rules: [{
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          use: ['css-loader']
        })
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(),
    new ExtractTextWebpackPlugin('styles.[chunkhash].css'),
    new HtmlWebpackCriticalPlugin({
      base: path.resolve(__dirname, 'build'),
      src: 'index.html',
      dest: 'index.html',
      inline: true
    })
  ]
};