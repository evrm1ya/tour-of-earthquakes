import { expect } from 'chai'
import * as actions from '../../actions';
import rootReducer from '../../reducers';

describe('logging reducer', () => {
  it('sets a new response error', () => {
    const newState = rootReducer(undefined, actions.setRequestError('bad request'));
    expect(newState.logging.requestError).to.equal('bad request');

    const newerState = rootReducer(newState, actions.setRequestError('server error'));
    expect(newerState.logging.requestError).to.equal('server error');
  });

  it('adds a new message to the log history', () => {
    const newState = rootReducer(undefined, actions.addMessageToHistory({
      type: 'error',
      message: 'bad request'
    }));

    expect(newState.logging.history).to.eql([
      { type: 'error', message: 'bad request' }
    ]);

    const newerState = rootReducer(newState, actions.addMessageToHistory({
      type: 'success',
      message: 'successful request'
    }));

    expect(newerState.logging.history).to.eql([
      { type: 'error', message: 'bad request' },
      { type: 'success', message: 'successful request' }
    ]);
  });
});

