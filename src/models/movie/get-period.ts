import { CreatePeriodsSignature } from '../period/create-periods-factory';
import { Periods } from '../period/periods';
import { Movie } from './movie';

export function getPeriods(
  createPeriods: CreatePeriodsSignature,
  movie: Movie,
): Periods {
  const { date } = movie;
  return createPeriods(date);
}
