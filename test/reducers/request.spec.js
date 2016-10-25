import { expect } from 'chai';
import rootReducer from '../../reducers';
import * as creators from '../../actions/request';

describe('request reducer', () => {
  it('toggles is requesting', () => {
    const newState = rootReducer(undefined, creators.toggleIsRequesting());
    expect(newState.request.isRequesting).to.be.true;

    const newerState = rootReducer(newState, creators.toggleIsRequesting());
    expect(newerState.request.isRequesting).to.be.false;
  });

  it('sets the last request url', () => {
    const newState = rootReducer(undefined, creators.setLastRequestUrl('anewurl.com'));
    expect(newState.request.lastRequestUrl).to.equal('anewurl.com');
  });

  it('updates the request endtime building materials', () => {
    const newState = rootReducer(undefined, creators.updateRequestEndtime({
      day: '10',
      hour: '13',
      minute: '01',
      month: '09',
      second: '45',
      year: '2016'
    }));

    expect(newState.request.endtime).to.eql({
      day: '10',
      hour: '13',
      minute: '01',
      month: '09',
      second: '45',
      year: '2016'
    });

    const newerState = rootReducer(newState, creators.updateRequestEndtime({
      day: '11',
      hour: '14',
    }));

    expect(newerState.request.endtime).to.eql({
      day: '11',
      hour: '14',
      minute: '01',
      month: '09',
      second: '45',
      year: '2016'
    });
  });

  it('updates the request starttime building materials', () => {
    const newState = rootReducer(undefined, creators.updateRequestStarttime({
      day: '10',
      hour: '13',
      minute: '01',
      month: '09',
      second: '45',
      year: '2016'
    }));

    expect(newState.request.starttime).to.eql({
      day: '10',
      hour: '13',
      minute: '01',
      month: '09',
      second: '45',
      year: '2016'
    });

    const newerState = rootReducer(newState, creators.updateRequestStarttime({
      day: '11',
      minute: '02',
      month: '08',
      second: '45',
    }));

    expect(newerState.request.starttime).to.eql({
      day: '11',
      hour: '13',
      minute: '02',
      month: '08',
      second: '45',
      year: '2016'
    });
  });

  it('areas of request state are unaffected by updates to other areas', () => {
    const state1 = rootReducer(undefined, creators.updateRequestStarttime({
      day: '11',
      hour: '14',
      minute: '02',
      month: '08',
      second: '45',
      year: '2016'
    }));

    const state2 = rootReducer(state1, creators.toggleIsRequesting());

    expect(state2.request).to.eql({
      endtime: {
        day: '',
        hour: '',
        minute: '',
        month: '',
        second: '',
        year: ''
      },
      isRequesting: true,
      lastRequestUrl: '',
      starttime: {
        day: '11',
        hour: '14',
        minute: '02',
        month: '08',
        second: '45',
        year: '2016'
      }
    });

    const state3 = rootReducer(state2, creators.setLastRequestUrl('api.test.com'));

    expect(state3.request).to.eql({
      endtime: {
        day: '',
        hour: '',
        minute: '',
        month: '',
        second: '',
        year: ''
      },
      isRequesting: true,
      lastRequestUrl: 'api.test.com',
      starttime: {
        day: '11',
        hour: '14',
        minute: '02',
        month: '08',
        second: '45',
        year: '2016'
      }
    });
  });
});

