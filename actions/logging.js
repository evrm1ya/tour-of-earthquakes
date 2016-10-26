import {
  SET_REQUEST_ERROR,
  ADD_MESSAGE_TO_HISTORY
} from './types';

export function setRequestError(message) {
  return {
    type: SET_REQUEST_ERROR,
    message
  };
}

export function addMessageToHistory(payload) {
  return {
    type: ADD_MESSAGE_TO_HISTORY,
    payload
  };
}

export const logMessage = (creator, message, historyPayload) => (dispatch) => {
  dispatch(creator(message));
  dispatch(addMessageToHistory(historyPayload));
};

