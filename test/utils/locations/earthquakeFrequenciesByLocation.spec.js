import { expect } from 'chai';
import MOCK_LOCATION_DATA from '../../mock_location_data';
import { slice } from 'ramda';
import { earthquakeFrequenciesByLocation } from '../../../utils/locations/earthquakeFrequenciesByLocation';

describe('earthquakeFrequencies', () => {
  describe('earthquakeFrequenciesByLocation', () => {
    it('handles 0 earthquakes', () => {
      expect(earthquakeFrequenciesByLocation([])).to.eql([]);
    });

    it('handles unknown locations', () => {
      expect(earthquakeFrequenciesByLocation([
        { place: '' },
        { place: null },
        { place: undefined },
        { place: 0 },
        { place: false }
      ]))
      .to.eql([{ location: 'UNKNOWN', frequency: 5 }]);
    });

    it('returns a sorted collection of place/frequency objects', () => {
      const sorted = earthquakeFrequenciesByLocation(MOCK_LOCATION_DATA);

      expect(slice(0, 5, sorted)).to.eql([
        { location: 'Kansas', frequency: 6 },
        { location: 'British Virgin Islands', frequency: 5 },
        { location: 'Alaska', frequency: 4 },
        { location: 'California', frequency: 3 },
        { location: 'Easter Island', frequency: 2 }
      ]);
    });
  });
});

