import { PeriodTypes } from './definitions/period-types';
import { PeriodImpl } from './period-impl';

export function someMatchPeriods(
  periods: PeriodImpl[],
  types: PeriodTypes[],
): boolean {
  return periods.some(period => types.some(type => period instanceof type));
}
