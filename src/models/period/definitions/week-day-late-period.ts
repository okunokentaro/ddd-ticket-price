import { TimeContext } from '../../time-context/time-context';
import { assertionError } from '../../../utils/assertion-error';
import { lateShowBoundary } from '../period-constants';
import { PeriodImpl } from '../period-impl';

export class WeekDayLatePeriod implements PeriodImpl {
  readonly label: string = '平日レイト';

  constructor(context: TimeContext) {
    if (!(context.isWeekday && context.isLaterThan(lateShowBoundary))) {
      throw assertionError();
    }
  }
}
