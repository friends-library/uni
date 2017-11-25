// @flow
/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import configureStore from './configureStore';
import App from '../src/components/App';

const createApp = (Component, store) => (
  <Provider store={store}>
    <Component />
  </Provider>
);

export default ({ clientStats }: { clientStats: Object }) => async (
  req: express$Request,
  res: express$Response,
) => {
  const store = await configureStore(req, res);
  if (!store) { // no store means redirect was already served
    return undefined;
  }

  const app = createApp(App, store);
  const appString = ReactDOM.renderToString(app);
  const stateJson = JSON.stringify(store.getState());
  const chunkNames = flushChunkNames();
  const { js, styles, cssHash } = flushChunks(clientStats, { chunkNames });

  console.log('REQUESTED PATH:', req.path);
  console.log('CHUNK NAMES', chunkNames);

  return res.send(`<!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Friends Library</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ${styles}
          <link href="https:////netdna.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.css" rel="stylesheet prefetch">
        </head>
        <body>
          <script>window.REDUX_STATE = ${stateJson}</script>
          <div id="root">${appString}</div>
          ${cssHash}
          <script type='text/javascript' src='/static/vendor.js'></script>
          ${js}
        </body>
      </html>`);
};
