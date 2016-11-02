import {
  TOGGLE_OVERVIEW_CAN_RENDER,
  SET_TOP_FIVE_MAGNITUDE_EARTHQUAKES,
  SET_TOP_FIVE_EARTHQUAKE_FREQUENCIES_BY_LOCATION,
  TOGGLE_MAGNITUDE_SORTER_MENU_IS_VISIBLE,
  TOGGLE_TIME_SORTER_MENU_IS_VISIBLE,
  SET_ALL_EARTHQUAKES_TABLE_SORTED_BY
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

