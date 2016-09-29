'use strict';

const path = require('path');

const webpack = require('webpack');


const config = {
  bail: true,
  cache: true,
  devtool: 'source-map',

  entry: path.join(__dirname, 'src', 'client', 'index.js'),

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: path.join('static', 'app.min.js'),
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
  ],

  resolve: {
    extensions: ['', '.js'],
  },
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJSPlugin({
      compress: {warnings: false},
    })
  );
}

module.exports = config;
