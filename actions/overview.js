import {
  TOGGLE_OVERVIEW_CAN_RENDER,
  SET_TOP_FIVE_MAGNITUDE_EARTHQUAKES,
  SET_TOP_FIVE_EARTHQUAKE_FREQUENCIES_BY_LOCATION
} from './types';

export function toggleOverviewCanRender(bool) {
  return {
    type: TOGGLE_OVERVIEW_CAN_RENDER,
    bool
  };
}

export function setTopFiveMagnitudeEarthquakes(topFiveMagnitudeEarthquakes) {
  return {
    type: SET_TOP_FIVE_MAGNITUDE_EARTHQUAKES,
    topFiveMagnitudeEarthquakes
  };
}

export function setTopFiveEarthquakeFrequenciesByLocation(topFiveLocations = []) {
  return {
    type: SET_TOP_FIVE_EARTHQUAKE_FREQUENCIES_BY_LOCATION,
    topFiveLocations
  };
}


