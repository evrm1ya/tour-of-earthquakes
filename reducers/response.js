import INITIAL_STATE from './initial-state';
import {
  SET_RESPONSE_IS_SUCCESSFUL
} from '../actions';

export default function response(state = INITIAL_STATE.response, action) {
  switch (action.type) {
    case SET_RESPONSE_IS_SUCCESSFUL:
      return {
        ...state,
        isSuccessful: action.bool
      };
    default:
      return state;
  }
}

