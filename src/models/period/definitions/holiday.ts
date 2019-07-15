import { assertionError } from '../../../utils/assertion-error';
import { NationalHolidayCollection } from '../../national-holiday/national-holiday-collection';
import { TimeContext } from '../../time-context/time-context';
import { lateShowBoundary } from '../period-constants';
import { PeriodImpl } from '../period-impl';

export class Holiday implements PeriodImpl {
  readonly label: string = '土日祝';

  constructor(
    context: TimeContext,
    nationalHolidayMaster: NationalHolidayCollection,
  ) {
    if (
      ![
        context.getIsHoliday(nationalHolidayMaster),
        context.isEarlierThan(lateShowBoundary),
      ].every(v => v)
    ) {
      throw assertionError();
    }
  }
}
