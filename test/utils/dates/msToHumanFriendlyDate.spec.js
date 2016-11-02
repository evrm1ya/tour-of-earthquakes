import { assert } from 'chai';
import msToHumanFriendlyDate from '../../../utils/dates/msToHumanFriendlyDate';

describe('msToHumanFriendly', () => {
  it('returns a human readable date from ms', () => {
    let test = 1473112768437;

    assert.equal(
      msToHumanFriendlyDate(test), 
      "9/5/2016 - 04:59:28 pm"
    );
  });
});

