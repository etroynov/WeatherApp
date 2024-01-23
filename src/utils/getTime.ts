import {format, fromUnixTime} from 'date-fns';

export const getTime = (ts: number) => format(fromUnixTime(ts), 'p');
