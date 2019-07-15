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

function incrementAdditionalCharge(hasGlasses: boolean): (n: number) => number {
  if (hasGlasses) {
    return n => n; // noop
  }

  return (n: number) => {
    return n + 400;
  };
}

function discountIfCustomerHasGlasses(
  hasGlasses: boolean,
): (n: number) => number {
  if (!hasGlasses) {
    return n => n; // noop
  }

  return (n: number) => {
    return n - 100;
  };
}

/**
 * 3D上映
 */
export class ThreeDimensionalMovie implements MovieImpl {
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

    return fix(based, [
      incrementAdditionalCharge(customer.hasGlasses),
      discountIfCustomerHasGlasses(customer.hasGlasses),
    ]);
  }
}
