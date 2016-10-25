import { sort } from 'ramda';

export function largestItemToSmallestByProp(prop, collection) {
  return sort((a, b) => b[prop] - a[prop], collection);
}

