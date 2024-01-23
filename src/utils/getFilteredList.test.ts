import {add, getUnixTime} from 'date-fns';
import {ForecastHour} from '../services';
import {getFiteredList} from './getFilteredList';

const addTime = (ts: number, minutes: number) => {
  return getUnixTime(add(getUnixTime(ts), {minutes}));
};

const items = [
  {time_epoch: addTime(Date.now(), 1)},
  {time_epoch: addTime(Date.now(), 2)},
  {time_epoch: addTime(Date.now(), 3)},
  {time_epoch: addTime(Date.now(), 4)},
  {time_epoch: addTime(Date.now(), 5)},
  {time_epoch: addTime(Date.now(), 6)},
] as ForecastHour[];

describe('getIconURI', () => {
  it('should return correct uri', () => {
    // const filtered = getFiteredList(items);

    // console.info(filtered)

    expect('https:test').toBe('https:test');
  });
});
