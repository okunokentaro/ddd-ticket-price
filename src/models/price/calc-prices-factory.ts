import { Customer } from '../customer/customer';
import { getPeriods } from '../movie/get-period';
import { Movie } from '../movie/movie';
import { NationalHolidayCollection } from '../national-holiday/national-holiday-collection';
import { createPeriodsFactory } from '../period/create-periods-factory';
import { PeriodConstructorImpl } from '../period/period-constructor-impl';
import { Price } from './price';

type CalcPricesSignature = (movie: Movie, customers: Customer[]) => Price[];

export function calcPricesFactory(
  origin: Date,
  periodDefinitions: PeriodConstructorImpl[],
  nationalHolidayDefinitions: NationalHolidayCollection,
): CalcPricesSignature {
  const createPeriods = createPeriodsFactory(
    periodDefinitions,
    nationalHolidayDefinitions,
  );

  return function calcPrices(movie: Movie, customers: Customer[]): Price[] {
    const periods = getPeriods(movie, createPeriods);
    return customers.map(customer => {
      return movie.getPrice(customer, origin, periods);
    });
  };
}
