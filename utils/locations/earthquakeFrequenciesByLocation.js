import { countBy, keys, map, sort } from 'ramda';
import parseEarthquakeLocation from './parseEarthquakeLocation';

export function earthquakeFrequenciesByLocation(flattenedEarthquakes = []) {
  let counter = earthquake => parseEarthquakeLocation(earthquake.place);
  let frequencies = countBy(counter)(flattenedEarthquakes);
  let sorted = sort((a, b) => frequencies[b] - frequencies[a], keys(frequencies));

  return map(key => {
    return { 
      location: key, 
      frequency: frequencies[key] 
    };
  }, sorted);
}

