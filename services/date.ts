import moment from 'moment';

moment.locale('pt-br');

export function stringToDate(str : string) {
  return moment(str, 'DD-MM-YYYY').toDate();
}

export function dateToString(date: Date) {
  return moment(date).format('DD-MM-YYYY');
}
