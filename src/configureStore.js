// @flow
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { connectRoutes } from 'redux-first-router';
import routesMap from './routesMap';
import * as reducers from './reducers';

const composeEnhancers = (...args) =>
  (typeof window !== 'undefined'
    ? composeWithDevTools({ actionCreators: {} })(...args)
    : compose(...args));


export default (history: Object, preLoadedState: Object) => {
  const {
    reducer, middleware, enhancer, thunk,
  } = connectRoutes(
    history,
    routesMap,
  );

  const rootReducer = combineReducers({ ...reducers, location: reducer });
  const middlewares = applyMiddleware(middleware);
  const enhancers = composeEnhancers(enhancer, middlewares);
  const store = createStore(rootReducer, preLoadedState, enhancers);

  if (module.hot && process.env.NODE_ENV === 'development' && typeof module.hot.accept === 'function') {
    module.hot.accept('./reducers/index', () => {
      // eslint-disable-next-line global-require
      const hotReducers = require('./reducers/index');
      const root = combineReducers({ ...hotReducers, location: reducer });
      store.replaceReducer(root);
    });
  }

  return { store, thunk };
};
