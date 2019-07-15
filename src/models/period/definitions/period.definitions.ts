import { PeriodConstructorImpl } from '../period-constructor-impl';
import { HolidayLate } from './holiday-late';
import { Holiday } from './holiday';
import { MovieDay } from './movie-day';
import { WeekDayLate } from './week-day-late';
import { WeekDay } from './week-day';

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
