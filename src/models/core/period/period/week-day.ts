import { TimeContext } from '../../time-context/time-context';
import { assertionError } from '../../../../utils/assertion-error';
import { lateShowBoundary } from './period-constants';
import { PeriodImpl } from './period-impl';

export class WeekDay implements PeriodImpl {
  readonly label: string = '平日';
  readonly type = 'WeekDay';

  constructor(context: TimeContext) {
    if (!(context.isWeekday && context.isEarlierThan(lateShowBoundary))) {
      throw assertionError();
    }
  }
}
