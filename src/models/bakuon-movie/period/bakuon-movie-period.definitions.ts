import { Holiday } from '../../core/period/period/holiday';
import { MovieDay } from '../../core/period/period/movie-day';
import { WeekDay } from '../../core/period/period/week-day';
import { PeriodConstructorImpl } from '../../core/period/period-constructor-impl';
import { BakuonHolidayLate } from './bakuon-holiday-late';
import { BakuonWeekDayLate } from './bakuon-week-day-late';

/**
 * 爆音上映の時間料金区分
 * 上位ほど優先適用
 */
export const bakuonMoviePeriodDefinitions: PeriodConstructorImpl[] = [
  MovieDay,
  BakuonHolidayLate,
  BakuonWeekDayLate,
  Holiday,
  WeekDay,
];
