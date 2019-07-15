import { assertionError } from '../../../utils/assertion-error';
import { Customer } from '../../customer/customer';
import { HolidayLatePeriod } from '../../period/definitions/holiday-late-period';
import { HolidayPeriod } from '../../period/definitions/holiday-period';
import { MovieDayPeriod } from '../../period/definitions/movie-day-period';
import { WeekDayLatePeriod } from '../../period/definitions/week-day-late-period';
import { WeekDayPeriod } from '../../period/definitions/week-day-period';
import { everyMatchPeriods } from '../../period/every-match-periods';
import { PeriodImpl } from '../../period/period-impl';
import { someMatchPeriods } from '../../period/some-match-periods';
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

  getPrice(periods: PeriodImpl[]): Price {
    if (everyMatchPeriods(periods, [MovieDayPeriod, HolidayPeriod])) {
      return new Price(1100);
    }
    if (everyMatchPeriods(periods, [MovieDayPeriod, HolidayLatePeriod])) {
      return new Price(1100);
    }
    if (someMatchPeriods(periods, [HolidayPeriod])) {
      return new Price(1300);
    }
    if (someMatchPeriods(periods, [HolidayLatePeriod])) {
      return new Price(1000);
    }
    if (someMatchPeriods(periods, [WeekDayPeriod])) {
      return new Price(1000);
    }
    if (someMatchPeriods(periods, [WeekDayLatePeriod])) {
      return new Price(1000);
    }

    throw new Error('Invalid');
  }
}
