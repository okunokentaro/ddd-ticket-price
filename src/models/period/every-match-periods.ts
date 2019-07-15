import { PeriodTypes } from './definitions/period-types';
import { PeriodImpl } from './period-impl';

export function everyMatchPeriods(
  periods: PeriodImpl[],
  types: PeriodTypes[],
): boolean {
  if (periods.length !== types.length) {
    return false;
  }
  return periods.every(period => types.some(type => period instanceof type));
}
