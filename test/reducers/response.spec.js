import { expect } from 'chai';
import rootReducer from '../../reducers';
import * as actions from '../../actions';

describe('response reducer', () => {
  it('sets response is successful state', () => {
    const newState = rootReducer(undefined, actions.setResponseIsSuccessful(true));
    expect(newState.response.isSuccessful).to.be.true;

    const newerState = rootReducer(newState, actions.setResponseIsSuccessful(false));
    expect(newerState.response.isSuccessful).to.be.false;
  });
});

