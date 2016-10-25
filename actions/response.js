import {
  SET_RESPONSE_IS_SUCCESSFUL
} from './types';

export function setResponseIsSuccessful(bool) {
  return {
    type: SET_RESPONSE_IS_SUCCESSFUL,
    bool
  };
}

