import {
  SET_REQUEST_ERROR,
  ADD_MESSAGE_TO_HISTORY
} from '../actions';
import INITIAL_STATE from './initial-state';

export default function logging(state = INITIAL_STATE.logging, action) {
  switch (action.type) {
    case SET_REQUEST_ERROR:
      return {
        ...state,
        requestError: action.message
      };
    case ADD_MESSAGE_TO_HISTORY:
      return {
        ...state,
        history: [...state.history, action.payload]
      };
    default:
      return state;
  }
}

