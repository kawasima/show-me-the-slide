const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  serve: {
    add: (app, middleware, options) => {
      app.use(convert(history()));
    },
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html.ejs'
    })
  ]
});
