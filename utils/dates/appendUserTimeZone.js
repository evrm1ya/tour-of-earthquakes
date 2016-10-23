import moment from 'moment';

export default function appendUserTimeZone(dateTimeString) {
  return dateTimeString + moment().format('Z');
}

