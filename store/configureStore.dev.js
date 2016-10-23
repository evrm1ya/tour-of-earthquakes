import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const configureStore = initialState => {
  return createStore(
  );
}

export default configureStore;
