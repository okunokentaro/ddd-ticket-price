import { TimeContext } from './time-context/time-context';

export class Movie {}

export class Customer {}

export class Price {}

export function calcPrice(
  timeContext: TimeContext,
  movie: Movie,
  customers: Customer[],
): Price {
  console.info(timeContext, movie, customers);
  return new Price();
}
