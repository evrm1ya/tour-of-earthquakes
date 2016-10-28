import {
  TOGGLE_OVERVIEW_CAN_RENDER,
  SET_TOP_FIVE_MAGNITUDE_EARTHQUAKES,
  SET_TOP_FIVE_EARTHQUAKE_FREQUENCIES_BY_LOCATION
} from '../actions';
import INITIAL_STATE from './initial-state';

export default function overview(state = INITIAL_STATE.overview, action) {
  switch (action.type) {
    case TOGGLE_OVERVIEW_CAN_RENDER:
      return {
        ...state,
        overviewCanRender: action.bool
      };
    case SET_TOP_FIVE_MAGNITUDE_EARTHQUAKES:
      return {
        ...state,
        topFiveMagnitudes: action.topFiveMagnitudeEarthquakes
      };
    case SET_TOP_FIVE_EARTHQUAKE_FREQUENCIES_BY_LOCATION:
      return {
        ...state,
        topFiveEarthquakeFrequenciesByLocation: action.topFiveLocations
      };
    default:
      return state;
  }
}

