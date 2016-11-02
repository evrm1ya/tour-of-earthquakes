import { reverse } from 'ramda';
import {
  TOGGLE_OVERVIEW_CAN_RENDER,
  SET_TOP_FIVE_MAGNITUDE_EARTHQUAKES,
  SET_TOP_FIVE_EARTHQUAKE_FREQUENCIES_BY_LOCATION,
  TOGGLE_MAGNITUDE_SORTER_MENU_IS_VISIBLE,
  TOGGLE_TIME_SORTER_MENU_IS_VISIBLE,
  SET_ALL_EARTHQUAKES_TABLE_SORTED_BY,
  SET_SORTED_EARTHQUAKES_FOR_ALL_EARTHQUAKES_TABLE
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

export function toggleMagnitudeSorterMenuIsVisible() {
  return { type: TOGGLE_MAGNITUDE_SORTER_MENU_IS_VISIBLE };
}

export function toggleTimeSorterMenuIsVisible() {
  return { type: TOGGLE_TIME_SORTER_MENU_IS_VISIBLE };
}

export function setAllEarthquakesTableSortedBy(sortedBy) {
  return {
    type: SET_ALL_EARTHQUAKES_TABLE_SORTED_BY,
    sortedBy
  };
}

export function setSortedEarthquakesForAllEarthquakesTable(sortedEarthquakes) {
  return {
    type: SET_SORTED_EARTHQUAKES_FOR_ALL_EARTHQUAKES_TABLE,
    sortedEarthquakes
  };
}

function dispatchSortedEarthquakes(sortedEarthquakes) {
  return dispatch => {
    dispatch(setSortedEarthquakesForAllEarthquakesTable(sortedEarthquakes));
  };
}

export function sortAllEarthquakesTable(sortedBy) {
  return (dispatch, getState) => {
    dispatch(setAllEarthquakesTableSortedBy(sortedBy));

    const { sortedByMagnitude, sortedByTime } = getState().earthquakes;
    
    switch (sortedBy) {
      case 'timeHighToLow':
        return dispatch(setSortedEarthquakesForAllEarthquakesTable(sortedByTime));
      case 'timeLowToHigh':
        return dispatch(setSortedEarthquakesForAllEarthquakesTable(reverse(sortedByTime)));
      case 'magnitudeHighToLow':
        return dispatch(setSortedEarthquakesForAllEarthquakesTable(sortedByMagnitude));
      case 'magnitudeLowToHigh':
        return dispatch(setSortedEarthquakesForAllEarthquakesTable(reverse(sortedByMagnitude)));
      default:
        return dispatch(setSortedEarthquakesForAllEarthquakesTable(sortedByTime));
    }
  };
}



