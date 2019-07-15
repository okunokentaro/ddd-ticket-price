import { Customer } from '../customer/customer';
import { MovieImpl } from '../movie/movie-impl';
import { FixedPrice } from './fixed-price';

export function calcPrices(
  origin: Date,
  movie: MovieImpl,
  customers: Customer[],
): FixedPrice[] {
  return customers.map(customer => movie.getPrice(customer, origin));
}
