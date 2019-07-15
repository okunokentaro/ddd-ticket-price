import { assertionError } from '../../../utils/assertion-error';
import { NationalHolidayCollection } from '../../core/national-holiday/national-holiday-collection';
import { lateShowBoundary } from '../../core/period/period/period-constants';
import { PeriodImpl } from '../../core/period/period/period-impl';
import { TimeContext } from '../../core/time-context/time-context';

export class BakuonHolidayLate implements PeriodImpl {
  readonly label: string = '土日祝レイト';
  readonly type = 'Holiday';

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
