import initialRequestTime from '../utils/dates/initialRequestTimes';

const requestTime = initialRequestTime();

const INITIAL_STATE = {
  request: {
    endtime: requestTime.end,
    isRequesting: false,
    lastRequestUrl: '',
    starttime: requestTime.start
  }
};

export default INITIAL_STATE;
