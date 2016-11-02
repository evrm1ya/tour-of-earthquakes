import {
  SET_EARTHQUAKE_METADATA,
  SET_FLATTENED_EARTHQUAKE_DATA,
  SET_EARTHQUAKES_SORTED_BY_MAGNITUDE,
  SET_EARTHQUAKES_SORTED_BY_TIME
} from './types';

export function setEarthquakeMetadata(metadata) {
  return {
    type: SET_EARTHQUAKE_METADATA,
    metadata
  };
}

export function setFlattenedEarthquakeData(flattenedEarthquakeData) {
  return {
    type: SET_FLATTENED_EARTHQUAKE_DATA,
    flattenedEarthquakeData
  };
}

export function setEarthquakesSortedByMagnitude(earthquakesByMagnitude) {
  return {
    type: SET_EARTHQUAKES_SORTED_BY_MAGNITUDE,
    earthquakesByMagnitude
  };
}

export function setEarthquakesSortedByTime(earthquakesByTime) {
  return {
    type: SET_EARTHQUAKES_SORTED_BY_TIME,
    earthquakesByTime
  };
}

