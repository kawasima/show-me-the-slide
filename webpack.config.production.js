const path = require('path');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/_redirects', to: ''
    }])
  ]
});
