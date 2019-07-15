import { getCustomerGrade } from './customer-grade/get-customer-grage';
import { Customer } from './customer/customer';
import { getPeriods } from './movie/get-period';
import { Movie } from './movie/movie';
import { NationalHolidayCollection } from './national-holiday/national-holiday-collection';
import { createPeriodsFactory } from './period/create-periods-factory';
import { PeriodConstructorImpl } from './period/period-constructor-impl';
import { Price } from './price';

type CalcPriceSignature = (movie: Movie, customers: Customer[]) => Price[];

export function calcPricesFactory(
  periodDefinitions: PeriodConstructorImpl[],
  nationalHolidayDefinitions: NationalHolidayCollection,
): CalcPriceSignature {
  const createPeriods = createPeriodsFactory(
    periodDefinitions,
    nationalHolidayDefinitions,
  );

  return function calcPrice(movie: Movie, customers: Customer[]): Price[] {
    const periods = getPeriods(createPeriods, movie);
    return customers.map(v => getCustomerGrade(v).getPrice(periods));
  };
}
