import { TimeContext } from './time-context';

/**
 * makeTimeContext('2019-07-16T19:00+0900');
 */
export function makeTimeContext(str: string): TimeContext {
  return new TimeContext(new Date(str));
}
