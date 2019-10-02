const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'moxi-left-nav.js'
  },
  module: {
    rules: [{
        test: /.js$/,
        // exclude: /node_modules/,
        include: [
          /node_modules(?:\/|\\)lit-element|lit-html/
        ],
        loader: "babel-loader"
      }
    ]
  }
};