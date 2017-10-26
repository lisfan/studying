const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index.js',
    app: './src/app.js',
  },
  output: {
    filename: '[name]-numbers.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js',
    library: 'webpackNumbers',
    libraryTarget: 'umd'
  },
  // externals: ['lodash', 'jquery'],
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: './dist',
  //   // hot: true
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Code Splitting'
    }),
    new webpack.ProvidePlugin({
      _: 'lodash'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
    // new ManifestPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new UglifyJSPlugin(),
  ],
};