import { expect } from 'chai';
import * as sort from '../../../utils/sorting';
import MOCK_MAGNITUDE_DATA from '../../mock_magnitude_data';

describe('sorting utilities', () => {
  it('sorts from largest prop val in collection to smallest', () => {
    expect(sort.largestItemToSmallestByProp('mag', MOCK_MAGNITUDE_DATA)).to.eql([
      { id: 'vwy', mag: 5.1 },
      { id: 'stu', mag: 5.0 },
      { id: 'pqr', mag: 4.0 },
      { id: 'mno', mag: 3.0 },
      { id: 'def', mag: 2.0 },
      { id: 'ghi', mag: 2.0 },
      { id: 'abc', mag: 1.0 },
      { id: 'jkl', mag: 1.0 },
    ]);
  });
});

