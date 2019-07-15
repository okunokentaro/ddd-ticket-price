import { assertionError } from '../../../../utils/assertion-error';
import { NationalHolidayCollection } from '../../national-holiday/national-holiday-collection';
import { TimeContext } from '../../time-context/time-context';
import { lateShowBoundary } from './period-constants';
import { PeriodImpl } from './period-impl';

export class HolidayLate implements PeriodImpl {
  readonly label: string = '土日祝レイト';
  readonly type = 'HolidayLate';

  constructor(
    context: TimeContext,
    nationalHolidayMaster: NationalHolidayCollection,
  ) {
    if (
      ![
        context.getIsHoliday(nationalHolidayMaster),
        context.isLaterThan(lateShowBoundary),
      ].every(v => v)
    ) {
      throw assertionError();
    }
  }
}
