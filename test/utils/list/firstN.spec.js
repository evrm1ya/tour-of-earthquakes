import { expect } from 'chai';
import MOCK_MAGNITUDE_DATA from '../../mock_magnitude_data';
import firstN from '../../../utils/list/firstN';

describe('firstN', () => {
  it('returns the first N number of items in a list', () => {
    expect(firstN(5, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
      .to.eql([1, 2, 3, 4, 5]);
  });
});

