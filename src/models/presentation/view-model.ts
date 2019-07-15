import { MovieImpl } from '../core/movie/movie-impl';
import { FixedPrice } from '../core/price/fixed-price';

function priceToString(price: FixedPrice): string {
  return `¥${price.valueOf().toLocaleString()}`;
}

export class ViewModel {
  constructor(
    private readonly movie: MovieImpl,
    private readonly prices: FixedPrice[],
  ) {}

  print() {
    const { title } = this.movie;
    const label = this.prices.map(v => priceToString(v)).join('\n');
    console.info([title, label].join('\n'));
  }
}
