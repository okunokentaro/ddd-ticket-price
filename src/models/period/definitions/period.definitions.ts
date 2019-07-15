import { PeriodConstructorImpl } from '../period-constructor-impl';
import { HolidayLatePeriod } from './holiday-late-period';
import { HolidayPeriod } from './holiday-period';
import { MovieDayPeriod } from './movie-day-period';
import { WeekDayLatePeriod } from './week-day-late-period';
import { WeekDayPeriod } from './week-day-period';

/**
 * 上位ほど優先適用
 */
export const periodDefinitions: PeriodConstructorImpl[] = [
  MovieDayPeriod,
  HolidayLatePeriod,
  WeekDayLatePeriod,
  HolidayPeriod,
  WeekDayPeriod,
];
