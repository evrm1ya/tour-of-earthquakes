import {
  UPDATE_REQUEST_ENDTIME,
  UPDATE_REQUEST_STARTTIME,
  SET_LAST_REQUEST_URL,
  TOGGLE_IS_REQUESTING
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

export function updateRequestTime(payload) {
  return dispatch => {
    const { day, hour, minute, month, second, type, year } = payload;

    if (type === 'end') {
      return dispatch(updateRequestEndtime({ 
        day, 
        hour, 
        minute, 
        month, 
        second, 
        year 
      }));
    }

    return dispatch(updateRequestStarttime({ 
      day, 
      hour, 
      minute, 
      month, 
      second, 
      year 
    }));
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


