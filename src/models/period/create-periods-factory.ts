import { NationalHolidayCollection } from '../national-holiday/national-holiday-collection';
import { TimeContext } from '../time-context/time-context';
import { assertionErrorMessage } from '../../utils/assertion-error';
import { PeriodConstructorImpl } from './period-constructor-impl';
import { PeriodImpl } from './period-impl';

export type CreatePeriodsSignature = (dateStr: string) => PeriodImpl[];

/**
 * 該当する料金期間 Period を該当する限り複数返却する
 * 例: [平日], [映画の日, 平日], [映画の日, 祝日レイト]
 */
export function createPeriodsFactory(
  periodDefinitions: PeriodConstructorImpl[],
  nationalHolidayDefinitions: NationalHolidayCollection,
): CreatePeriodsSignature {
  return function createPeriods(dateStr: string): PeriodImpl[] {
    const context = new TimeContext(new Date(dateStr));

    const result = periodDefinitions.reduce(
      (acc: PeriodImpl[], Ctor: PeriodConstructorImpl): PeriodImpl[] => {
        try {
          const period = new Ctor(context, nationalHolidayDefinitions);
          return acc.concat(period);
        } catch (e) {
          // Assertion Error の場合
          // 次の Period 優先順位に定義された constructor を用いてインスタンス生成に try
          if (e.message.includes(assertionErrorMessage)) {
            return acc; // noop
          }
          throw e;
        }
      },
      [] as PeriodImpl[],
    );

    if (result.length === 0) {
      throw new Error('Invalid time context');
    }

    return result;
  };
}
