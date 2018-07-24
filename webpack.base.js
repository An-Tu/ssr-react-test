const path = require('path');

module.exports = {
  resolve: {
    modules: [
      path.resolve(__dirname, '.'),
      'node_modules'
    ],
  },

  module: {
    rules: [
      {
        test: /(\.js|.jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};