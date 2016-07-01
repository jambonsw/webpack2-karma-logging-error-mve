'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = (function buildWebpackConfiguration() {
  var CDN_PATH = JSON.stringify(process.env.CDN_PATH)
  var PROJECT_ROOT = __dirname;

  return {
    context: PROJECT_ROOT,

    entry: {
      main: path.resolve(PROJECT_ROOT, 'src/main')
    },

    output: {
      filename: '[name]-[hash].js',
      path: path.resolve(PROJECT_ROOT, 'build'),
      publicPath: CDN_PATH || '/'
    },

    devtool: 'source-map',

    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: ['babel-loader']
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader',
          query: { limit: 8192 } // inline base64 URLs <=8k
        },
        {
          test: /\.css$/,
          loader: ['style-loader', 'css-loader?sourceMap']
        },
        {
          test: /\.(ttf|eot|svg|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader'
        }
      ]
    },

    resolve: {
      extensions: ['', '.js', '.jsx'],
      modules: [
        path.resolve(PROJECT_ROOT, 'src'),
        'node_modules'
      ]
    }
  };
}());
