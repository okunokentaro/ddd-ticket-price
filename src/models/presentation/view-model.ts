import { Movie } from '../movie/movie';
import { Price } from '../price/price';

function priceToString(price: Price): string {
  return `¥${price.valueOf().toLocaleString()}`;
}

export class ViewModel {
  constructor(
    private readonly movie: Movie,
    private readonly prices: Price[],
  ) {}

  print() {
    const { title } = this.movie;
    const label = this.prices.map(v => priceToString(v)).join('\n');
    console.info([title, label].join('\n'));
  }
}
