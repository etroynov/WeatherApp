import {format} from 'date-fns';
import {getTime} from './getTime';

describe('getTime', () => {
  it('should return correct time format', () => {
    const ts = Date.now();
    const date = getTime(ts / 1000);
    const formated = format(ts, 'p');

    expect(date).toBe(formated);
  });
});
