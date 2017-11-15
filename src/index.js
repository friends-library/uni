// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import configureStore from './configureStore';

const history = createHistory();
const { store } = configureStore(history, {
  ...window.REDUX_STATE,
  friends: fromJS(window.REDUX_STATE.friends),
});

const render = (Component) => {
  const root = document.getElementById('root');

  // $FlowFixMe
  ReactDOM.hydrate(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    root,
  );
};

render(App);

if (module.hot && process.env.NODE_ENV === 'development' && typeof module.hot.accept === 'function') {
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line
    const App = require('./components/App').default
    render(App);
  });
}
