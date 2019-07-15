import { assertionError } from '../../../utils/assertion-error';
import { PeriodType } from '../../core/period/period/period-type';
import { lateShowBoundary } from '../../core/period/period/period-constants';
import { PeriodImpl } from '../../core/period/period/period-impl';
import { TimeContext } from '../../core/time-context/time-context';

export class BakuonWeekDayLate implements PeriodImpl {
  readonly label: string = '平日レイト';
  readonly type: PeriodType = 'WeekDay';

  constructor(context: TimeContext) {
    if (
      ![context.isWeekday, context.isLaterThan(lateShowBoundary)].every(v => v)
    ) {
      throw assertionError();
    }
  }
}
