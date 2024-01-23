import {isBefore, isAfter, isEqual} from 'date-fns';

export const isBetween = (
  date: Date,
  start: Date,
  end: Date,
  inclusivity = '()',
) => {
  if (!['()', '[]', '(]', '[)'].includes(inclusivity)) {
    throw new Error('Inclusivity parameter must be one of (), [], (], [)');
  }

  const isBeforeEqual = inclusivity[0] === '[',
    isAfterEqual = inclusivity[1] === ']';

  return (
    (isBeforeEqual
      ? isEqual(start, date) || isBefore(end, date)
      : isBefore(start, date)) &&
    (isAfterEqual
      ? isEqual(end, date) || isAfter(end, date)
      : isAfter(end, date))
  );
};
