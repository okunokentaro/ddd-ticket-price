import { GradeConstructorImpl } from '../../core/customer-grade/grade-constructor-impl';
import { Customer } from '../../core/customer/customer';
import { getPriceByCommonCustomerGrade } from '../../core/movie/get-price-by-common-customer-grade';
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
 * 爆音上映
 */
export class BakuonMovie implements MovieImpl {
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
