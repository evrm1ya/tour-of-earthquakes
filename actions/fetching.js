import { 
  logMessage,
  addMessageToHistory,
  setRequestError
} from './logging';
import {
  setEarthquakeMetadata,
  setFlattenedEarthquakeData,
  setEarthquakesSortedByMagnitude,
  setEarthquakesSortedByTime
} from './earthquakes';
import { 
  setTopFiveMagnitudeEarthquakes,
  toggleOverviewCanRender,
  setTopFiveEarthquakeFrequenciesByLocation
} from './overview';
import { 
  updateInitialRequest,
  toggleIsRequesting
} from './request';

import flatterEqData from '../utils/data/flatterEqData';
import { startAndEndTimeEqQuery } from '../utils/queries/startAndEndTimeEqQuery';
import firstN from '../utils/list/firstN';
import { largestItemToSmallestByProp } from '../utils/sorting';
import { earthquakeFrequenciesByLocation } from '../utils/locations/earthquakeFrequenciesByLocation';

const routeEarthquakeData = json => dispatch => {
  const flattenedEarthquakes = flatterEqData(json);
  const earthquakesByMagnitude = largestItemToSmallestByProp('mag', flattenedEarthquakes);
  const topFiveLocations = firstN(5, earthquakeFrequenciesByLocation(flattenedEarthquakes));

  dispatch(setEarthquakeMetadata(json.metadata));
  dispatch(setFlattenedEarthquakeData(flattenedEarthquakes));
  dispatch(setEarthquakesSortedByMagnitude(earthquakesByMagnitude));
  dispatch(setEarthquakesSortedByTime(largestItemToSmallestByProp('time', flattenedEarthquakes)));
  dispatch(setTopFiveMagnitudeEarthquakes(firstN(5, earthquakesByMagnitude)));
  dispatch(setTopFiveEarthquakeFrequenciesByLocation(topFiveLocations));
};

export const fetchEqDataByTimeRange = () => (dispatch, getState) => {
  const { request } = getState();
  const url = startAndEndTimeEqQuery(request.starttime, request.endtime);

  if (request.isRequesting) {
    logMessage(setRequestError, 'already requesting', {
      type: 'error',
      message: 'already requesting',
      time: Date.now()
    })(dispatch);

    return;
  }

  updateInitialRequest(url, Date.now())(dispatch);

  fetch(url)
    .then(response => {
      if (response.status !== 200) {
        logMessage(setRequestError, 'failed request', {
          type: 'error',
          message: 'failed request', 
          status: response.status,
          time: Date.now()
        });

        dispatch(toggleIsRequesting());

        return;
      }

      dispatch(addMessageToHistory({
        type: 'success',
        message: 'successful response',
        time: Date.now()
      }));

      return response.json();
    })
    .then(json => {
      routeEarthquakeData(json)(dispatch);
      dispatch(toggleIsRequesting());
      dispatch(toggleOverviewCanRender(true));
    })
    .catch(error => {
      console.log(error);
    })
};
