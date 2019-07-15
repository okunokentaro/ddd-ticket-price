import { TimeContext } from '../../time-context/time-context';
import { assertionError } from '../../../../utils/assertion-error';
import { movieDay } from './period-constants';
import { PeriodImpl } from './period-impl';

export class MovieDay implements PeriodImpl {
  readonly label: string = '映画の日';
  readonly type = 'MovieDay';

  constructor(context: TimeContext) {
    if (![context.date === movieDay].every(v => v)) {
      throw assertionError();
    }
  }
}
