'use strict';

const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


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
      {
        test: /\.pcss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          '!css-loader?sourceMap&importLoaders=1!postcss-loader'
        ),
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new ExtractTextPlugin(path.join('static', 'app.min.css')),
  ],

  resolve: {
    extensions: ['', '.pcss', '.js'],
  },

  postcss: webpack => ({
    defaults: [
      require('stylelint'),
      require('postcss-import')({
        addDependencyTo: webpack,
        path: [
          path.join(__dirname, 'node_modules'),
        ],
      }),
      require('postcss-simple-vars'),
      require('postcss-color-function'),
      require('postcss-nested'),
      require('colorguard'),
      require('autoprefixer')({browsers: 'Firefox >= 52'}),
      require('cssnano'),
      require('postcss-reporter')({
        clearMessages: true,
      }),
    ],
  }),
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
