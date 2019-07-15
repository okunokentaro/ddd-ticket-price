import { Periods } from '../period/periods';
import { BasedPrice } from '../price/based-price';
import { GradeImpl } from './grade-impl';

export class SpecialMovieGrade implements GradeImpl {
  getPrice(periods: Periods): BasedPrice {
    if (periods.everyMatch(['MovieDay', 'Holiday'])) {
      return new BasedPrice(2100);
    }
    if (periods.everyMatch(['MovieDay', 'HolidayLate'])) {
      return new BasedPrice(2100);
    }
    if (periods.everyMatch(['MovieDay', 'WeekDay'])) {
      return new BasedPrice(2100);
    }
    if (periods.everyMatch(['MovieDay', 'WeekDayLate'])) {
      return new BasedPrice(2100);
    }
    if (periods.someMatch(['Holiday'])) {
      return new BasedPrice(2800);
    }
    if (periods.someMatch(['HolidayLate'])) {
      return new BasedPrice(2300);
    }
    if (periods.someMatch(['WeekDay'])) {
      return new BasedPrice(2800);
    }
    if (periods.someMatch(['WeekDayLate'])) {
      return new BasedPrice(2300);
    }

    throw new Error('Invalid');
  }
}
