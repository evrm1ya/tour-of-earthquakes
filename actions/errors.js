import {
  SET_RESPONSE_ERROR
} from './types';

export function setResponseError(error) {
  return {
    type: SET_RESPONSE_ERROR,
    error
  };
}

