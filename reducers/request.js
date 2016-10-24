import INITIAL_STATE from './initial-state';
import {
  UPDATE_REQUEST_ENDTIME,
  UPDATE_REQUEST_STARTTIME,
  SET_LAST_REQUEST_URL,
  TOGGLE_IS_REQUESTING
} from '../actions';

export default function request(state = INITIAL_STATE.request, action) {
  switch (action.type) {
    case TOGGLE_IS_REQUESTING:
      return {
        ...state,
        isRequesting: !state.isRequesting
      };
    case SET_LAST_REQUEST_URL:
      return {
        ...state,
        lastRequestUrl: action.requestUrl
      };
    case UPDATE_REQUEST_ENDTIME:
      return {
        ...state,
        endtime: action.payload
      };
    case UPDATE_REQUEST_STARTTIME:
      return {
        ...state,
        starttime: action.payload
      };
    default:
      return state;
  }
}

