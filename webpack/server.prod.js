const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const res = p => path.resolve(__dirname, p);

// if you're specifying externals to leave unbundled, you need to tell Webpack
// to still bundle `react-universal-component`, `webpack-flush-chunks` and
// `require-universal-module` so that they know they are running
// within Webpack and can properly make connections to client modules:
const externals = fs
  .readdirSync(res('../node_modules'))
  .filter(x =>
    !/\.bin|react-universal-component|require-universal-module|webpack-flush-chunks/.test(x))
  .reduce((ex, mod) => {
    ex[mod] = `commonjs ${mod}`; // eslint-disable-line no-param-reassign
    return ex;
  }, {});

module.exports = {
  name: 'server',
  target: 'node',
  devtool: 'source-map',
  entry: ['fetch-everywhere', res('../server/render.js')],
  externals,
  output: {
    path: res('../buildServer'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    publicPath: '/static/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: {
          loader: 'css-loader/locals',
          options: {
            modules: true,
            localIdentName: '[local]',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css'],
    modules: [
      path.resolve(__dirname, '../src'),
      'node_modules',
    ],
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        APP_URL: JSON.stringify(process.env.APP_URL),
      },
    }),
  ],
};
