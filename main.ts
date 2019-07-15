import { nationalHolidayDefinitions } from './src/lib/national-holiday.definitions';
import { calcPricesFactory } from './src/models/calc-prices-factory';
import { Customer } from './src/models/customer/customer';
import { Movie } from './src/models/movie/movie';
import { periodDefinitions } from './src/models/period/definitions/period.definitions';
import { printPrices } from './src/models/print-prices';

function main() {
  const calcPrices = calcPricesFactory(
    periodDefinitions,
    nationalHolidayDefinitions,
  );

  const movie = new Movie('トイ・ストーリー 4', '2019-07-15T21:00+0900');
  const customers = [new Customer('1990-05-10', 'Male', 'NoAttributes')];

  const prices = calcPrices(movie, customers);
  printPrices(prices);
}

main();
