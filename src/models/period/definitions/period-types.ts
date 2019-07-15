import { Holiday } from './holiday';
import { HolidayLate } from './holiday-late';
import { MovieDay } from './movie-day';
import { WeekDay } from './week-day';
import { WeekDayLate } from './week-day-late';

export type PeriodTypes =
  | typeof Holiday
  | typeof HolidayLate
  | typeof WeekDay
  | typeof MovieDay
  | typeof WeekDayLate;
