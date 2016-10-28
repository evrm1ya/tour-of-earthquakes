import { split } from 'ramda';

export default function parseEarthquakeLocation(place) {
  if (!place) {
    return 'UNKNOWN';
  }

  if (place.includes(',')) {
    let location = split(', ', place)[1];

    return (location === 'CA') ? 'California' : location;
  }

  if (place.includes(' of ')) {
    return split(' of ', place)[1];
  }

  return place;
}

