import {add, fromUnixTime} from 'date-fns';

import {ForecastHour} from '../services';
import {isBetween} from '.';

export const getFiteredList = (
  list: ForecastHour[],
  start: Date,
  hours: number,
) => {
  const end = add(start, {hours});

  return list.filter(el => isBetween(fromUnixTime(el.time_epoch), start, end));
};
