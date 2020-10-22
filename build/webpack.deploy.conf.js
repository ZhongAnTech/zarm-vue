const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const utils = require('./utils');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf');

delete baseWebpackConfig.output;
delete baseWebpackConfig.entry;

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  // devtool: config.build.productionSourceMap ? '#source-map' : false,
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      extract: true,
    }),
  },
  entry: {
    demo: path.join(__dirname, '../example/deploy.js'),
    site: path.join(__dirname, '../site/deploy.js'),
  },
  // cheap-module-eval-source-map is faster for development
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    minimize: true,
    noEmitOnErrors: true,
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.build.env,
    }),
    new VueLoaderPlugin(),
    // extract css into its own file
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      chunkFilename: utils.assetsPath('css/[id].[contenthash].css'),
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
        map: false,
      },
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: config.build.demo,
      template: path.join(__dirname, '../example/index.html'),
      inject: true,
      favicon: './site/styles/images/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      chunks: ['manifest', 'demo'],
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency',
    }),
    new HtmlWebpackPlugin({
      filename: config.build.site,
      template: path.join(__dirname, '../site/index.html'),
      pathname: '/',
      favicon: './site/styles/images/favicon.ico',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      chunks: ['manifest', 'site'],
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency',
    }),
  ],
});
