import { getCommonCustomerGrade } from '../../core/customer-grade/get-customer-grage';
import { GradeConstructorImpl } from '../../core/customer-grade/grade-constructor-impl';
import { Customer } from '../../core/customer/customer';
import { MovieImpl } from '../../core/movie/movie-impl';
import { NationalHolidayCollection } from '../../core/national-holiday/national-holiday-collection';
import {
  createPeriodsFactory,
  CreatePeriodsSignature,
} from '../../core/period/create-periods-factory';
import { PeriodConstructorImpl } from '../../core/period/period-constructor-impl';
import { fix } from '../../core/price/fix';
import { FixedPrice } from '../../core/price/fixed-price';

/**
 * 特別興行
 */
export class SpecialMovie implements MovieImpl {
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
    const periods = this.createPeriods(this.date);
    const based = getCommonCustomerGrade(
      this.customerGradeDefinitions,
      customer,
      origin,
    ).getPrice(periods);
    return fix(based);
  }
}
