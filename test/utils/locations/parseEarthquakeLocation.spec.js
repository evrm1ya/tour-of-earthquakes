import { expect } from 'chai';
import parseEarthquakeLocation from '../../../utils/locations/parseEarthquakeLocation';

const place1 = "60km ESE of Whittier, Alaska";
const place2 = "Southeast of Easter Island";
const place3 = "8km WSW of Holtville, CA";
const place4 = "8km E of Mammoth Lakes, California";
const place5 = "49km N of Road Town, British Virgin Islands";

describe('parseEarthquakeLocation', () => {
  it('grabs the state/country after the comma', () => {
    expect(parseEarthquakeLocation(place1)).to.equal('Alaska');
  });

  it('if no comma, grabs location after "of"', () => {
    expect(parseEarthquakeLocation(place2)).to.equal('Easter Island');
  });

  it('converts CA to California', () => {
    expect(parseEarthquakeLocation(place3)).to.equal('California');
  });

  it('does not affect long California', () => {
    expect(parseEarthquakeLocation(place4)).to.equal('California');
  });

  it('grabs whole phrase after comma', () => {
    expect(parseEarthquakeLocation(place5)).to.equal('British Virgin Islands');
  });

  it('returns "UNKNOWN" if place is undefined', () => {
    expect(parseEarthquakeLocation('')).to.equal('UNKNOWN');
    expect(parseEarthquakeLocation(null)).to.equal('UNKNOWN');
  });
});

