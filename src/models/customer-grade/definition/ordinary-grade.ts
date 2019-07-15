import { Holiday } from '../../period/definitions/holiday';
import { HolidayLate } from '../../period/definitions/holiday-late';
import { MovieDay } from '../../period/definitions/movie-day';
import { WeekDay } from '../../period/definitions/week-day';
import { WeekDayLate } from '../../period/definitions/week-day-late';
import { Periods } from '../../period/periods';
import { Price } from '../../price/price';
import { GradeImpl } from '../grade-impl';

export class OrdinaryGrade implements GradeImpl {
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
      return new Price(1800);
    }
    if (periods.someMatch([HolidayLate])) {
      return new Price(1300);
    }
    if (periods.someMatch([WeekDay])) {
      return new Price(1800);
    }
    if (periods.someMatch([WeekDayLate])) {
      return new Price(1300);
    }

    throw new Error('Invalid');
  }
}
