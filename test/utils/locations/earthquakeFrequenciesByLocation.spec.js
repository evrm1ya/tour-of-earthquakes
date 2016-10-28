import { expect } from 'chai';
import { slice } from 'ramda';
import { earthquakeFrequenciesByLocation } from '../../../utils/locations/earthquakeFrequenciesByLocation';

const MOCK_DATA = [
  { place: "60km ESE of Whittier, Alaska" },
  { place: "60km ESE of Whittier, Alaska" },
  { place: "60km ESE of Whittier, Alaska" },
  { place: "60km ESE of Whittier, Alaska" },
  { place: "Southeast of Easter Island" },
  { place: "Southeast of Easter Island" },
  { place: "8km WSW of Holtville, CA" },
  { place: "8km WSW of Holtville, CA" },
  { place: "8km WSW of Holtville, CA" },
  { place: "Kansas" },
  { place: "Kansas" },
  { place: "Kansas" },
  { place: "Kansas" },
  { place: "Kansas" },
  { place: "Kansas" },
  { place: "Canada" },
  { place: "49km N of Road Town, British Virgin Islands" },
  { place: "49km N of Road Town, British Virgin Islands" },
  { place: "49km N of Road Town, British Virgin Islands" },
  { place: "49km N of Road Town, British Virgin Islands" },
  { place: "49km N of Road Town, British Virgin Islands" },
  { place: 'Texas' },
  { place: 'Texas' },
  { place: '' }
];

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
      const sorted = earthquakeFrequenciesByLocation(MOCK_DATA);

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

