import moment from 'moment';

export default function msToHumanFriendlyDate(ms) {
  return moment(ms).format('M/D/YYYY - hh:mm:ss a');
}
