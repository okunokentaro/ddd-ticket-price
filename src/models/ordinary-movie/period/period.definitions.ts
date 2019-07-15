import { PeriodConstructorImpl } from '../../core/period/period-constructor-impl';
import { HolidayLate } from '../../core/period/period/holiday-late';
import { Holiday } from '../../core/period/period/holiday';
import { MovieDay } from '../../core/period/period/movie-day';
import { WeekDayLate } from '../../core/period/period/week-day-late';
import { WeekDay } from '../../core/period/period/week-day';

/**
 * 上位ほど優先適用
 */
export const periodDefinitions: PeriodConstructorImpl[] = [
  MovieDay,
  HolidayLate,
  WeekDayLate,
  Holiday,
  WeekDay,
];
