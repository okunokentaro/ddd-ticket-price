import { GradeConstructorImpl } from '../customer-grade/grade-constructor-impl';
import { Customer } from '../customer/customer';
import { NationalHolidayCollection } from '../national-holiday/national-holiday-collection';
import {
  createPeriodsFactory,
  CreatePeriodsSignature,
} from '../period/create-periods-factory';
import { PeriodConstructorImpl } from '../period/period-constructor-impl';
import { fix } from '../price/fix';
import { FixedPrice } from '../price/fixed-price';
import { getPriceByCommonCustomerGrade } from './get-price-by-common-customer-grade';
import { MovieImpl } from './movie-impl';

export type CreateMovieSignature = (title: string, date: string) => Movie;

export function createMovieFactory(
  periodDefinitions: PeriodConstructorImpl[],
  nationalHolidayDefinitions: NationalHolidayCollection,
  customerGradeDefinitions: GradeConstructorImpl[],
): CreateMovieSignature {
  return function createMovie(title: string, date: string): Movie {
    return new Movie(
      periodDefinitions,
      nationalHolidayDefinitions,
      customerGradeDefinitions,
      title,
      date,
    );
  };
}

/**
 * 一般映画
 */
export class Movie implements MovieImpl {
  private readonly createPeriods: CreatePeriodsSignature;

  constructor(
    periodDefinitions: PeriodConstructorImpl[],
    nationalHolidayDefinitions: NationalHolidayCollection,
    readonly customerGradeDefinitions: GradeConstructorImpl[],
    readonly title: string,
    readonly date: string,
  ) {
    this.createPeriods = createPeriodsFactory(
      periodDefinitions,
      nationalHolidayDefinitions,
    );
  }

  getPrice(customer: Customer, origin: Date): FixedPrice {
    const based = getPriceByCommonCustomerGrade(
      this.date,
      this.customerGradeDefinitions,
      this.createPeriods.bind(this),
      customer,
      origin,
    );
    return fix(based);
  }
}
