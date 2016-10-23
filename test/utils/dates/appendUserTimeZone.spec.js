import { assert } from 'chai';
import appendUserTimeZone from '../../../utils/dates/appendUserTimeZone';

describe('appendUserTimeZone', () => {
  it('appends the user time zone to an ISO8601 date/time string', () => {
    const appended = appendUserTimeZone('2016-10-23T07:11:39');
    assert.strictEqual(
      appended,
      '2016-10-23T07:11:39-05:00'
    );
  });
});

