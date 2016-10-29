import initialRequestTime from '../utils/dates/initialRequestTimes';

const requestTime = initialRequestTime();

const INITIAL_STATE = {
  earthquakes: {
    flattened: [],
    metadata: {},
    sortedByMagnitude: []
  },
  logging: {
    history: [],
    requestError: null,
  },
  overview: {
    overviewCanRender: false,
    topFiveMagnitudes: [],
    topFiveEarthquakeFrequenciesByLocation: []
  },
  request: {
    endtime: requestTime.end,
    isRequesting: false,
    lastRequestUrl: '',
    lastRequestTime: null,
    starttime: requestTime.start
  },
  response: {
    isSuccessful: null,
  }
};

export default INITIAL_STATE;
