import { TimeContext } from '../../time-context/time-context';
import { assertionError } from '../../../utils/assertion-error';
import { lateShowBoundary } from '../period-constants';
import { PeriodImpl } from '../period-impl';

export class HolidayPeriod implements PeriodImpl {
  readonly label: string = '土日祝';

  constructor(context: TimeContext) {
    if (!(context.isHoliday && context.isEarlierThan(lateShowBoundary))) {
      throw assertionError();
    }
  }
}
