import { slice } from 'ramda';

export default function firstN(N, list) {
  return slice(0, N)(list);
}

