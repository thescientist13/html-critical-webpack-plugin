const path = require('path');

module.exports = {

  mode: 'production',

  entry: path.resolve(path.join(__dirname, 'index.js')),
  
  output: {
    path: path.resolve(path.join(__dirname, 'dist/')),
    filename: 'html-crtitical-webpack-plugin.js'
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      }
    ]
  },
  
  externals: {
    critical: 'critical'
  }

};