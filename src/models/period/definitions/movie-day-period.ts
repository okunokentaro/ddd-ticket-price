import { TimeContext } from '../../time-context/time-context';
import { assertionError } from '../../../utils/assertion-error';
import { movieDay } from '../period-constants';
import { PeriodImpl } from '../period-impl';

export class MovieDayPeriod implements PeriodImpl {
  readonly label: string = '映画の日';

  constructor(context: TimeContext) {
    if (context.date !== movieDay) {
      throw assertionError();
    }
  }
}
