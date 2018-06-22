const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const entries = require('../script/find-entry')();
const version = require('../package.json').version;

const env = process.env.NODE_ENV;

delete baseWebpackConfig.entry;

/**
 * IMPORTNT: make sure .vue file do not have style section
 */
const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  externals: ['vue', 'autosize', 'zscroller', 'moment'],
  entry: entries,
  output: {
    path: path.resolve(__dirname, '../release/lib'),
    filename: '[name].js',
    chunkFilename: '[id].[chunkhash].js',
    libraryTarget: 'commonjs2',
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env,
    }),
    new VueLoaderPlugin(),
    new webpack.BannerPlugin(`zarm-vue v${version}\n(c) 2018-${new Date().getFullYear()} ZhonganTech Engineering\nReleased under the MIT License.`),
  ],
});

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
