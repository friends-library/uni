// @flow
const path = require('path');

module.exports = {
  resolve: {
    modules: [
      path.resolve(__dirname, '../src'),
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]',
              importLoaders: 1,
            },
          },
        ],
      },
    ],
  },
};
