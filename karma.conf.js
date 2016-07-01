'use strict';

var baseConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    basePath: '',
    plugins: [
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-jasmine',
    ],
    frameworks: [
      'jasmine'
    ],
    files: [
      'src/**/*Test.js'
    ],
    preprocessors: {
      'src/**/*Test.js': ['webpack']
    },
    webpack: {
      module: baseConfig.module,
    },
    webpackMiddleware: {
      stats: {
        colors: true,
        chunks: false
      },
    },

    browserConsoleLogOptions: {
      level: 'error',
      format: '%b %T: %m',
      terminal: true
    },

    port: 9876,
    colors: true,

    browsers: ['Chrome'],
    reporters: ['progress'],
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
    logLevel: config.LOG_DEBUG,
  });
};
