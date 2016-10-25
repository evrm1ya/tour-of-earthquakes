import INITIAL_STATE from './initial-state';
import {
  SET_EARTHQUAKE_METADATA,
  SET_FLATTENED_EARTHQUAKE_DATA,
  SET_EARTHQUAKES_SORTED_BY_MAGNITUDE
} from '../actions';

export default function earthquakes(state = INITIAL_STATE.earthquakes, action) {
  switch (action.type) {
    case SET_EARTHQUAKE_METADATA:
      return {
        ...state,
        metadata: action.metadata
      };
    case SET_FLATTENED_EARTHQUAKE_DATA:
      return {
        ...state,
        flattened: action.flattenedEarthquakeData
      };
    case SET_EARTHQUAKES_SORTED_BY_MAGNITUDE:
      return {
        ...state,
        sortedByMagnitude: action.earthquakesByMagnitude
      };
    default:
      return state;
  }
}

