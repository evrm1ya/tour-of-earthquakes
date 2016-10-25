import moment from 'moment';

export default function initialRequestTimes() {
  let formatString = 'YYYY:MM:DD:HH:mm:ss';
  let now = moment().format(formatString).split(':');
  let hourAgo = moment().subtract(1, 'hours').format(formatString).split(':');

  return {
    start: {
      year: hourAgo[0],
      month: hourAgo[1],
      day: hourAgo[2],
      hour: hourAgo[3],
      minute: hourAgo[4],
      second: hourAgo[5]
    },
    end: {
      year: now[0],
      month: now[1],
      day: now[2],
      hour: now[3],
      minute: now[4],
      second: now[5]
    }
  };
}

