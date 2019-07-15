import { NationalHolidayCollection } from '../national-holiday/national-holiday-collection';
import { TimeContext } from '../time-context/time-context';
import { PeriodImpl } from './period/period-impl';

export interface PeriodConstructorImpl {
  new (
    context: TimeContext,
    nationalHolidayMaster: NationalHolidayCollection,
  ): PeriodImpl;
}
