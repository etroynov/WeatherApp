import {add} from 'date-fns';
import {isBetween} from './isBetween';

describe('getTime', () => {
  let start: Date;
  let end: Date;

  beforeAll(() => {
    start = new Date();
    end = add(start, {
      minutes: 10,
    });
  });

  it('should return true for date between start and end', () => {
    const mock = add(start, {
      minutes: 5,
    });

    const isCorrect = isBetween(mock, start, end);

    expect(isCorrect).toBeTruthy();
  });

  it('should return false for date outside start and end', () => {
   const mock = add(start, {
      minutes: 50,
    });

    const isCorrect = isBetween(mock, start, end);

    expect(isCorrect).toBeFalsy();
  });
});
