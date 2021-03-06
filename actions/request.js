import {
  UPDATE_REQUEST_ENDTIME,
  UPDATE_REQUEST_STARTTIME,
  SET_LAST_REQUEST_URL,
  TOGGLE_IS_REQUESTING,
  SET_LAST_REQUEST_TIME
} from './types';

export function updateRequestEndtime(payload) {
  return {
    type: UPDATE_REQUEST_ENDTIME,
    payload
  };
}

export function updateRequestStarttime(payload) {
  return {
    type: UPDATE_REQUEST_STARTTIME,
    payload
  };
}

export function setLastRequestUrl(requestUrl) {
  return {
    type: SET_LAST_REQUEST_URL,
    requestUrl
  };
}

export function toggleIsRequesting() {
  return { type: TOGGLE_IS_REQUESTING };
}

export function setLastRequestTime(time) {
  return {
    type: SET_LAST_REQUEST_TIME,
    time
  };
}

export const updateInitialRequest = (requestUrl, time) => (dispatch) => {
  dispatch(setLastRequestUrl(requestUrl));
  dispatch(toggleIsRequesting());
  dispatch(setLastRequestTime(time));
};

