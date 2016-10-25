import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore.dev.js';
import rootReducer from './reducers';
import INITIAL_STATE from './reducers/initial-state';

import routes from './routes/';
import { Router, browserHistory } from 'react-router';

var moment = require('moment');
window.moment = moment;

const store = configureStore(INITIAL_STATE);
window.storeRef = store;

render(
  <Provider store={store}>
    <div>
      <Router routes={routes} history={browserHistory}></Router>
    </div>
  </Provider>,
  document.getElementById('root')
);

