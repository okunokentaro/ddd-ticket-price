import { nationalHolidayDefinitions } from './src/lib/national-holiday.definitions';
import { Customer } from './src/models/customer/customer';
import { Movie } from './src/models/movie/movie';
import { periodDefinitions } from './src/models/period/definitions/period.definitions';
import { ViewModel } from './src/models/presentation/view-model';
import { calcPricesFactory } from './src/models/price/calc-prices-factory';

function main(origin: Date) {
  const calcPrices = calcPricesFactory(
    origin,
    periodDefinitions,
    nationalHolidayDefinitions,
  );

  const movie = new Movie('トイ・ストーリー 4', '2019-07-15T21:00+0900');
  const customers = [new Customer('1990-05-10', 'Male', 'NoAttributes')];

  const prices = calcPrices(movie, customers);
  const viewModel = new ViewModel(movie, prices);
  viewModel.print();
}

main(new Date());
