// @flow
const path = require('path');

module.exports = {
  node: {
    fs: 'empty',
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../src'),
      'node_modules',
    ],
    alias: {
      'redux-first-router-link$': path.resolve(__dirname, 'MockLink.js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.yml$/,
        use: ['json-loader', 'yaml-frontmatter-loader'],
      },
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
