import { assertionError } from '../../../utils/assertion-error';
import { TimeContext } from '../../time-context/time-context';
import { lateShowBoundary } from '../period-constants';
import { PeriodImpl } from '../period-impl';

export class WeekDayLatePeriod implements PeriodImpl {
  readonly label: string = '平日レイト';

  constructor(context: TimeContext) {
    if (
      ![context.isWeekday, context.isLaterThan(lateShowBoundary)].every(v => v)
    ) {
      throw assertionError();
    }
  }
}
