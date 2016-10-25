// @TODO: Eventually split between prod and dev
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const middleware = [thunk, createLogger()];

const configureStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
}

export default configureStore;
