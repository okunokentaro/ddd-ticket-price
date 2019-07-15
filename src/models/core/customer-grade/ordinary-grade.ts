import { Periods } from '../period/periods';
import { BasedPrice } from '../price/based-price';
import { GradeImpl } from './grade-impl';

export class OrdinaryGrade implements GradeImpl {
  getPrice(periods: Periods): BasedPrice {
    if (periods.everyMatch(['MovieDay', 'Holiday'])) {
      return new BasedPrice(1100);
    }
    if (periods.everyMatch(['MovieDay', 'HolidayLate'])) {
      return new BasedPrice(1100);
    }
    if (periods.everyMatch(['MovieDay', 'WeekDay'])) {
      return new BasedPrice(1100);
    }
    if (periods.everyMatch(['MovieDay', 'WeekDayLate'])) {
      return new BasedPrice(1100);
    }
    if (periods.someMatch(['Holiday'])) {
      return new BasedPrice(1800);
    }
    if (periods.someMatch(['HolidayLate'])) {
      return new BasedPrice(1300);
    }
    if (periods.someMatch(['WeekDay'])) {
      return new BasedPrice(1800);
    }
    if (periods.someMatch(['WeekDayLate'])) {
      return new BasedPrice(1300);
    }

    throw new Error('Invalid');
  }
}
