import {
  TOGGLE_OVERVIEW_CAN_RENDER,
  SET_TOP_FIVE_MAGNITUDE_EARTHQUAKES
} from '../actions';
import INITIAL_STATE from './initial-state';

export default function overview(state = INITIAL_STATE.overview, action) {
  switch (action.type) {
    case SET_TOP_FIVE_MAGNITUDE_EARTHQUAKES:
      return {
        ...state,
        topFiveMagnitudes: action.topFiveMagnitudeEarthquakes
      };
    default:
      return state;
  }
}

