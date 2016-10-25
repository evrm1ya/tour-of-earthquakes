import { combineReducers } from 'redux';
import request from './request';
import response from './response';
import earthquakes from './earthquakes';

export default combineReducers({
  request,
  response,
  earthquakes
});

