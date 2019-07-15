import { assertionErrorMessage } from '../../utils/assertion-error';
import { NationalHolidayCollection } from '../national-holiday/national-holiday-collection';
import { makeTimeContext } from '../time-context/make-time-context';
import { PeriodConstructorImpl } from './period-constructor-impl';
import { PeriodImpl } from './period-impl';
import { Periods } from './periods';

export type CreatePeriodsSignature = (dateStr: string) => Periods;

/**
 * 該当する料金期間 Period を該当する限り複数返却する
 * 例: [平日], [映画の日, 平日], [映画の日, 祝日レイト]
 */
export function createPeriodsFactory(
  periodDefinitions: PeriodConstructorImpl[],
  nationalHolidayDefinitions: NationalHolidayCollection,
): CreatePeriodsSignature {
  return function createPeriods(dateStr: string): Periods {
    const context = makeTimeContext(dateStr);

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

    return new Periods(result);
  };
}
