import { assertionError } from '../../../utils/assertion-error';
import { Customer } from '../customer/customer';
import { Periods } from '../period/periods';
import { BasedPrice } from '../price/based-price';
import { GradeImpl } from './grade-impl';

export class CinemaCitizenGrade implements GradeImpl {
  constructor(customer: Customer, origin: Date) {
    if (
      !(customer.attribute === 'CinemaCitizen' && customer.getAge(origin) < 60)
    ) {
      throw assertionError();
    }
  }

  getPrice(periods: Periods): BasedPrice {
    if (periods.everyMatch(['MovieDay', 'Holiday'])) {
      return new BasedPrice(1100);
    }
    if (periods.everyMatch(['MovieDay', 'HolidayLate'])) {
      return new BasedPrice(1100);
    }
    if (periods.someMatch(['Holiday'])) {
      return new BasedPrice(1300);
    }
    if (periods.someMatch(['HolidayLate'])) {
      return new BasedPrice(1000);
    }
    if (periods.someMatch(['WeekDay'])) {
      return new BasedPrice(1000);
    }
    if (periods.someMatch(['WeekDayLate'])) {
      return new BasedPrice(1000);
    }

    throw new Error('Invalid');
  }
}
