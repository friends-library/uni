/* eslint-disable global-require, import/no-unresolved */
import 'babel-polyfill';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import clientConfig from '../webpack/client.dev';
import serverConfig from '../webpack/server.dev';
import auth from './auth';
import * as routes from './routes';

const IS_DEV = process.env.NODE_ENV === 'development';

const { output: { publicPath, path } } = clientConfig;
const app = express();

app.use(express.static('static'));


// non-react routes
app.get('/api/friend/:slug', routes.apiFriend);
app.get('/download/:friend/:doc/:edition/:format', routes.download);


// UNIVERSAL HMR + STATS HANDLING GOODNESS:
if (IS_DEV) {
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

  app.use(auth);
  app.use(publicPath, express.static(path));
  app.use(serverRender({ clientStats, path }));
}

const port = process.env.PORT || 1111;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening @ http://localhost:${port}/`);
});
