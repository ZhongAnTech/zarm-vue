const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')
const buildPath = path.resolve(__dirname, '../lib');

var plugins = [
  new ExtractTextPlugin('[name].css'),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
]

module.exports = {
  entry:{
    ['zarm-vue.default']:path.join(__dirname, '../styles/index.js')
  },
  output: {
    path: buildPath,
    filename: 'zarm-vue.default.css'
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract([
          {
            loader: "css-loader",
            options:{minimize:true}
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')({
                  browsers: [
                    'last 3 versions',
                    'ie >= 10',
                    'ie_mob >= 10',
                    'ff >= 30',
                    'chrome >= 34',
                    'safari >= 6',
                    'opera >= 12.1',
                    'ios >= 6',
                    'android >= 4.4',
                    'bb >= 10',
                    'and_uc 9.9',
                  ],
                }),
              ],
            },
          },
        ])
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
         'file-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          [
            {
              loader: "css-loader",
              options:{minimize:true}
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: [
                  require('autoprefixer')({
                    browsers: [
                      'last 3 versions',
                      'ie >= 10',
                      'ie_mob >= 10',
                      'ff >= 30',
                      'chrome >= 34',
                      'safari >= 6',
                      'opera >= 12.1',
                      'ios >= 6',
                      'android >= 4.4',
                      'bb >= 10',
                      'and_uc 9.9',
                    ],
                  }),
                ],
              },
            },
            {
              loader: "sass-loader"
            },
          ]
        )
      }
    ]
  }
}
