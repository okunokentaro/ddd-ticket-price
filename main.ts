import { calcPrice, Customer, Movie } from './src/calc-price';
import { holidaysMaster } from './src/holiday/holidays-master';
import { printPrice } from './src/print-price';
import { TimeContext } from './src/time-context/time-context';

function main() {
  const reservationDate = new Date('2019-07-15T19:00+0900');
  const timeContext = new TimeContext(reservationDate, holidaysMaster);

  const movie = new Movie();

  const customers = [new Customer()];

  const price = calcPrice(timeContext, movie, customers);
  printPrice(price);
}

main();
