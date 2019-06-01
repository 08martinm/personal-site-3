/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const envVars = require('../envVars');

const { PORTS } = envVars;

module.exports = {
  name: 'client',
  target: 'web',
  mode: 'development',
  node: { fs: 'empty' },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.(css|scss)$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  devtool: 'source-map',
  entry: ['babel-polyfill', path.resolve(__dirname, '../../src/index.js')],
  output: {
    filename: 'bundle-frontend.js',
    path: path.resolve(__dirname, '../../public/dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, '../../public/favicon.ico'),
      template: 'src/index.html',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    hot: true,
    port: PORTS.APP,
    proxy: [
      {
        context: ['/favicon.ico', '/api'],
        target: `http://localhost:${PORTS.SERVER}`,
      },
    ],
  },
};
