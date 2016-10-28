import { expect } from 'chai';
import MOCK_MAGNITUDE_DATA from '../mock_magnitude_data';
import MOCK_LOCATION_DATA from '../mock_location_data';
import rootReducer from '../../reducers';
import * as actions from '../../actions';
import firstN from '../../utils/list/firstN';
import { largestItemToSmallestByProp } from '../../utils/sorting';
import { earthquakeFrequenciesByLocation } from '../../utils/locations/earthquakeFrequenciesByLocation';

describe('overview reducer', () => {
  it('sets the top five earthquakes by magnitude state', () => {
    const eqs = firstN(5, largestItemToSmallestByProp('mag', MOCK_MAGNITUDE_DATA));
    const newState = rootReducer(undefined, actions.setTopFiveMagnitudeEarthquakes(eqs));

    expect(newState.overview.topFiveMagnitudes).to.eql([
      { id: 'vwy', mag: 5.1 },
      { id: 'stu', mag: 5.0 },
      { id: 'pqr', mag: 4.0 },
      { id: 'mno', mag: 3.0 },
      { id: 'def', mag: 2.0 },
    ]);
  });

  it('toggles the overviewCanRender state', () => {
    const newState = rootReducer(undefined, actions.toggleOverviewCanRender(true));
    expect(newState.overview.overviewCanRender).to.be.true;
  });

  it('sets the top five earthquake frequencies by location', () => {
    const newState = rootReducer(
      undefined, 
      actions.setTopFiveEarthquakeFrequenciesByLocation(
        firstN(5, earthquakeFrequenciesByLocation(MOCK_LOCATION_DATA))
      )
    );

    expect(newState.overview.topFiveEarthquakeFrequenciesByLocation)
      .to.eql([
        { location: 'Kansas', frequency: 6 },
        { location: 'British Virgin Islands', frequency: 5 },
        { location: 'Alaska', frequency: 4 },
        { location: 'California', frequency: 3 },
        { location: 'Easter Island', frequency: 2 }
      ]);
  });
});

