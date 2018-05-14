const HtmlWebpackCriticalPlugin = require('./src/index');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, 'build');

module.exports = {

  mode: 'production',

  entry: {
    index: './test/cases/generate-critical-css/index.js'
  },

  output: {
    path: OUTPUT_DIR,
    filename: 'html-crtitical-webpack-plugin.[contenthash].js'
  },

  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    }]
  },

  plugins: [
    new HtmlWebpackPlugin(),

    new MiniCssExtractPlugin(),
    
    new HtmlWebpackCriticalPlugin({
      base: OUTPUT_DIR,
      src: 'index.html',
      dest: 'index.html',
      inline: true
    })
  ]
};