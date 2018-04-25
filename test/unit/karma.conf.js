// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

const webpackConfig = require('../../build/webpack.test.conf');
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
  var configuration = {
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    browsers: ['Chrome', 'ChromeHeadless', 'ChromeHeadlessNoSandbox'],
    // you can define custom flags
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec', 'coverage'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    client: {
      mocha: {
        timeout: 4000
      }
    }
  };

  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'];
  }

  config.set(configuration);
};

// module.exports = function (config) {
//   config.set({
//     // to run in additional browsers:
//     // 1. install corresponding karma launcher
//     //    http://karma-runner.github.io/0.13/config/browsers.html
//     // 2. add it to the `browsers` array below.
//     browsers: ['PhantomJS'],
//     frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
//     reporters: ['spec', 'coverage'],
//     files: [
//       './index.js',
//       '../../node_modules/phantomjs-polyfill/bind-polyfill.js',
//       '../../node_modules/phantomjs-polyfill-find/find-polyfill.js',
//     ],
//     preprocessors: {
//       './index.js': ['webpack', 'sourcemap'],
//     },
//     webpack: webpackConfig,
//     webpackMiddleware: {
//       noInfo: true,
//     },
//     coverageReporter: {
//       dir: './coverage',
//       reporters: [
//         { type: 'lcov', subdir: '.' },
//         { type: 'text-summary' },
//       ],
//     },
//   });
// };
