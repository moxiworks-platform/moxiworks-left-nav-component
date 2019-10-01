const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
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
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      showErrors: true,
      cache: true,
      title: 'Moxi Left Nav Component',
      favicon: path.resolve(__dirname, 'dist/favicon.ico'),
      template: path.resolve(__dirname, 'dist/index.html')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9000,
    hot: true
  },
};