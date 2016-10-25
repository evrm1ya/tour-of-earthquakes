import { expect } from 'chai';
import rootReducer from '../../reducers';
import * as actions from '../../actions';
import firstN from '../../utils/list/firstN';
import { largestItemToSmallestByProp } from '../../utils/sorting';
import MOCK_MAGNITUDE_DATA from '../mock_magnitude_data';

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
});

