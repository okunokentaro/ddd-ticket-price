import { HolidayLatePeriod } from './holiday-late-period';
import { HolidayPeriod } from './holiday-period';
import { MovieDayPeriod } from './movie-day-period';
import { WeekDayLatePeriod } from './week-day-late-period';
import { WeekDayPeriod } from './week-day-period';

export type PeriodTypes =
  | typeof HolidayPeriod
  | typeof HolidayLatePeriod
  | typeof WeekDayPeriod
  | typeof MovieDayPeriod
  | typeof WeekDayLatePeriod;
