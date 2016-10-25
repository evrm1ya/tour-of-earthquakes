import { assert } from 'chai';
import moment from 'moment';
import {
  queryDateString,
  queryTimeString,
  startAndEndTimeEqQuery
} from '../../../utils/queries/startAndEndTimeEqQuery';

describe('startAndEndTimeEqQuery functions', () => {
  describe('queryDateString', () => {
    it('returns a correctly formatted query date', () => {
      assert.strictEqual(
        queryDateString({
          day: '23',
          month: '10',
          year: '2016',
          hour: '02'
        }),
        '2016-10-23'
      );
    });

    it('returns current date if year/month/day are undefined', () => {
      assert.strictEqual(
        queryDateString({
          day: null,
          month: '10',
          year: '2016',
          hour: '02'
        }),
        moment().format('YYYY-MM-DD')
      );
    });
  });

  describe('queryTimeString', () => {
    it('returns a correctly formatted time string for the query', () => {
      assert.strictEqual(
        queryTimeString({
          hour: '03',
          minute: '16',
          second: '30',
          type: 'start',
          year: '2016'
        }),
        'T03:16:30'
      );
    });

    it('returns a 12am time if type is start and missing hour/minute/second', () => {
      assert.strictEqual(
        queryTimeString({
          hour: null,
          minute: '16',
          second: '30',
          type: 'start',
          year: '2016'
        }),
        'T00:00:00'
      );
    });

    it('returns the current time if type is end and missing hour/minute/second', () => {
      assert.strictEqual(
        queryTimeString({
          hour: null,
          minute: '16',
          second: '30',
          type: 'end',
          year: '2016'
        }),
        'T' + moment().format('HH:mm:ss')
      );
    });
  });

  describe('startAndEndTimeEqQuery', () => {
    it('returns an acceptable start and end time eq api query', () => {
      const queryString = startAndEndTimeEqQuery({
        day: '10',
        hour: '01',
        minute: '30',
        month: '09',
        second: '15',
        type: 'start',
        year: '2016'
      },
      {
        day: '11',
        hour: '01',
        minute: '30',
        month: '09',
        second: '15',
        type: 'end',
        year: '2016'
      });

      const result = 'http://earthquake.usgs.gov/fdsnws/event/1/query?' +
        'format=geojson&limit=20000&starttime=2016-09-10T01:30:15' +
        moment().format('Z') + '&endtime=2016-09-11T01:30:15' + moment().format('Z');

      assert.strictEqual(
        queryString,
        result
      );
    });
  });
});
