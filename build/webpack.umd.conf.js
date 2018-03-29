var path = require('path');
var webpack = require('webpack');
var baseWebpackConfig = require('./webpack.base.conf')
var merge = require('webpack-merge')

var plugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_debugger: true,
      drop_console: true,
    },
  }),
];

delete baseWebpackConfig.entry;
delete baseWebpackConfig.output;

module.exports = merge(baseWebpackConfig, {
  entry: {
    ['zarm-vue.umd.js']: path.join(__dirname, '../src/index.js'),
  },
  externals: [
    'vue',
  ],
  output: {
    path: path.resolve(__dirname, '../release'),
    filename: '[name]',
    library: 'zarm-vue',
    libraryTarget: 'umd',
  },
  plugins: plugins
});
