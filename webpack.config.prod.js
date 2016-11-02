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
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
      {
        text: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['ramda', 'transform-object-rest-spread']
        }
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.json', '.coffee']
  }
};

