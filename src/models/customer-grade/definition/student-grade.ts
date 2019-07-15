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

export class StudentGrade implements GradeImpl {
  constructor(customer: Customer) {
    if (
      ![
        customer.attribute === 'University',
        customer.attribute === 'VocationalSchool',
      ].some(v => v)
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
    if (periods.everyMatch([MovieDay, WeekDay])) {
      return new Price(1100);
    }
    if (periods.everyMatch([MovieDay, WeekDayLate])) {
      return new Price(1100);
    }
    if (periods.someMatch([Holiday])) {
      return new Price(1500);
    }
    if (periods.someMatch([HolidayLate])) {
      return new Price(1300);
    }
    if (periods.someMatch([WeekDay])) {
      return new Price(1500);
    }
    if (periods.someMatch([WeekDayLate])) {
      return new Price(1300);
    }

    throw new Error('Invalid');
  }
}
