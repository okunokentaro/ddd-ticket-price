import { CreatePeriodsSignature } from '../period/create-periods-factory';
import { Periods } from '../period/periods';
import { Movie } from './movie';

export function getPeriods(
  movie: Movie,
  createPeriods: CreatePeriodsSignature,
): Periods {
  const { date } = movie;
  return createPeriods(date);
}
