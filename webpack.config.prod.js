const path = require('path');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'index.js'),
  build: path.join(__dirname, 'dist')
};

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: PATHS.app
  },

  output: {
    path: PATHS.build,
    filename: '[name].js'
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ],

  module: {
    loaders: [
      {
        text: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  }
};

