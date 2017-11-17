const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const webpack = require('webpack')

module.exports = function (env) {
  console.log('NODE_ENV: ', env.NODE_ENV) // 'local'
  console.log('Production: ', env.production) // true
  console.log('xxxx: ', env.xxxx) // true

  return {
    entry: {
      index: './src/index.js',
      vender: ['lodash'],
    },
    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, 'dist'),
      chunkFilename: '[name].bundle.js',
      library: 'webpackNumbers',
      libraryTarget: 'umd',
      publicPath: '/studying/dist'
    },
    // externals: ['lodash', 'jquery'],
    // devtool: 'inline-source-map',
    // devServer: {
    //   contentBase: './dist',
    //   // hot: true
    // },
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    },
    module: {
      rules: [
        {
          test: /\.png?$/,
          use: {
            loader: 'file-loader',
          },
        },
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
            options: {
              happyPackMode: true,
              transpileOnly: true
            }
          },
          exclude: /node_modules/,
        },
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Code Splitting'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vender",
      })
      // new ManifestPlugin(),
      // new webpack.HotModuleReplacementPlugin(),
      // new UglifyJSPlugin(),
    ],
  }
}