/* eslint-disable global-require, import/no-unresolved */
import 'babel-polyfill';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import clientConfig from '../webpack/client.dev';
import serverConfig from '../webpack/server.dev';

const DEV = process.env.NODE_ENV === 'development';
const { output: { publicPath, path } } = clientConfig;
const app = express();

app.use(express.static('static'));

// API
app.get('/api/friend/:slug', (req, res) => {
  res.json({ name: 'Rebecca', slug: 'rebecca-jones' });
});


// UNIVERSAL HMR + STATS HANDLING GOODNESS:

if (DEV) {
  const multiCompiler = webpack([clientConfig, serverConfig]);
  const clientCompiler = multiCompiler.compilers[0];

  app.use(webpackDevMiddleware(multiCompiler, { publicPath }));
  app.use(webpackHotMiddleware(clientCompiler));
  app.use(webpackHotServerMiddleware(multiCompiler, {
    serverRendererOptions: { path },
  }));
} else {
  const clientStats = require('../buildClient/stats.json');
  const serverRender = require('../buildServer/main.js').default;

  app.use(publicPath, express.static(path));
  app.use(serverRender({ clientStats, path }));
}

app.listen(3000, () => {
  console.log('Listening @ http://localhost:3000/'); // eslint-disable-line no-console
});
