import { TimeContext } from '../../time-context/time-context';
import { assertionError } from '../../../utils/assertion-error';
import { lateShowBoundary } from '../period-constants';
import { PeriodImpl } from '../period-impl';

export class HolidayLatePeriod implements PeriodImpl {
  readonly label: string = '土日祝レイト';

  constructor(context: TimeContext) {
    if (!(context.isHoliday && context.isLaterThan(lateShowBoundary))) {
      throw assertionError();
    }
  }
}
