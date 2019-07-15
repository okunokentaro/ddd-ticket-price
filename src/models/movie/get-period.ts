import { CreatePeriodsSignature } from '../period/create-periods-factory';
import { PeriodImpl } from '../period/period-impl';
import { Movie } from './movie';

export function getPeriods(
  createPeriods: CreatePeriodsSignature,
  movie: Movie,
): PeriodImpl[] {
  const { date } = movie;
  return createPeriods(date);
}
