import moment from 'moment';
import { is, filter } from 'ramda';
import { USGS_EQ_API_QUERY_ROOT } from '../../constants/usgs-urls';
import appendUserTimeZone from '../dates/appendUserTimeZone';

export function queryDateString(dateTimeData) {
  const { day, month, year } = dateTimeData;

  if (!day || !month || !year) {
    return moment().format('YYYY-MM-DD');
  }

  return `${year}-${month}-${day}`;
}

function allTimeDataIsDefined(dateTimeData) {
  const { hour, minute, second } = dateTimeData;
  const checkString = value => is(String, value) && value.length === 2;

  return filter(checkString, [ hour, minute, second ]).length === 3;
}

export function queryTimeString(dateTimeData) {
  const { type, hour, minute, second } = dateTimeData;

  if (allTimeDataIsDefined(dateTimeData)) {
    return `T${hour}:${minute}:${second}`;
  }

  if (type === 'start') {
    return 'T00:00:00';
  }

  return 'T' + moment().format('HH:mm:ss');
}

export function startAndEndTimeEqQuery(startTimeData, endTimeData) {
  const starttime = '&starttime=' + queryDateString(startTimeData) + 
    appendUserTimeZone(queryTimeString(startTimeData));

  const endtime = '&endtime=' + queryDateString(endTimeData) +
    appendUserTimeZone(queryTimeString(endTimeData));

  return USGS_EQ_API_QUERY_ROOT + starttime + endtime;
}

