import initialRequestTime from '../utils/dates/initialRequestTimes';

const requestTime = initialRequestTime();

const INITIAL_STATE = {
  earthquakes: {
    flattened: [],
    metadata: {},
    sortedByMagnitude: [],
    sortedByTime: []
  },
  logging: {
    history: [],
    requestError: null,
  },
  overview: {
    allEarthquakesTableSortedBy: '',
    magnitudeSorterMenuIsVisible: false,
    overviewCanRender: false,
    sortedEarthquakesForAllEarthquakesTable: [],
    topFiveMagnitudes: [],
    topFiveEarthquakeFrequenciesByLocation: [],
    timeSorterMenuIsVisible: false
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
