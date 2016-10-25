import {
  TOGGLE_OVERVIEW_CAN_RENDER,
  SET_TOP_FIVE_MAGNITUDE_EARTHQUAKES
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

