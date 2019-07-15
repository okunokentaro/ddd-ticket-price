import { Holiday } from '../holiday/holiday';
import { WDay, weekday } from '../w-day/w-day';

export class TimeContext {
  constructor(
    private readonly reservationDate: Date,
    private readonly holidaysMaster: Holiday[],
  ) {}

  get isWeekday(): boolean {
    return weekday.includes(this.reservationDate.getDay() as WDay);
  }

  get isHoliday(): boolean {
    const unixTime = Math.floor(new Date().valueOf() / 1000);
    return this.holidaysMaster.some(v => {
      return v.time < unixTime && unixTime < v.time + 24 * 60 * 60;
    });
  }
}
