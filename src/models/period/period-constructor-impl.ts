import { TimeContext } from '../time-context/time-context';
import { PeriodImpl } from './period-impl';

export interface PeriodConstructorImpl {
  new (context: TimeContext): PeriodImpl;
}
