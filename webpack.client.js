const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  entry: './src/client/client.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  plugins: [
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
    }),
  ],
};

module.exports = merge(baseConfig, config);
