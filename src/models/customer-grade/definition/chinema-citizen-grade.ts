import { assertionError } from '../../../utils/assertion-error';
import { Customer } from '../../customer/customer';
import { HolidayLate } from '../../period/definitions/holiday-late';
import { Holiday } from '../../period/definitions/holiday';
import { MovieDay } from '../../period/definitions/movie-day';
import { WeekDayLate } from '../../period/definitions/week-day-late';
import { WeekDay } from '../../period/definitions/week-day';
import { Periods } from '../../period/periods';
import { Price } from '../../price/price';
import { GradeImpl } from '../grade-impl';

export class CinemaCitizenGrade implements GradeImpl {
  constructor(customer: Customer, origin: Date) {
    if (
      !(customer.attribute === 'CinemaCitizen' && customer.getAge(origin) < 60)
    ) {
      throw assertionError();
    }
  }

  getPrice(periods: Periods): Price {
    if (periods.everyMatch([MovieDay, Holiday])) {
      return new Price(1100);
    }
    if (periods.everyMatch([MovieDay, HolidayLate])) {
      return new Price(1100);
    }
    if (periods.someMatch([Holiday])) {
      return new Price(1300);
    }
    if (periods.someMatch([HolidayLate])) {
      return new Price(1000);
    }
    if (periods.someMatch([WeekDay])) {
      return new Price(1000);
    }
    if (periods.someMatch([WeekDayLate])) {
      return new Price(1000);
    }

    throw new Error('Invalid');
  }
}
