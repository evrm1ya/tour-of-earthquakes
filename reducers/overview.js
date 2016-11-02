import {
  TOGGLE_OVERVIEW_CAN_RENDER,
  SET_TOP_FIVE_MAGNITUDE_EARTHQUAKES,
  SET_TOP_FIVE_EARTHQUAKE_FREQUENCIES_BY_LOCATION,
  TOGGLE_MAGNITUDE_SORTER_MENU_IS_VISIBLE,
  TOGGLE_TIME_SORTER_MENU_IS_VISIBLE,
  SET_ALL_EARTHQUAKES_TABLE_SORTED_BY
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
    case TOGGLE_MAGNITUDE_SORTER_MENU_IS_VISIBLE:
      return {
        ...state,
        magnitudeSorterMenuIsVisible: !state.magnitudeSorterMenuIsVisible
      };
    case TOGGLE_TIME_SORTER_MENU_IS_VISIBLE:
      return {
        ...state,
        timeSorterMenuIsVisible: !state.timeSorterMenuIsVisible
      };
    case SET_ALL_EARTHQUAKES_TABLE_SORTED_BY:
      return {
        ...state,
        allEarthquakesTableSortedBy: action.sortedBy
      };
    default:
      return state;
  }
}

