import { NationalHoliday } from './national-holiday';

export class NationalHolidayCollection {
  constructor(private readonly list: NationalHoliday[]) {}

  withinNationalHoliday(unixTime: number): boolean {
    return this.list.some(holiday => {
      return [
        holiday.time <= unixTime,
        unixTime < holiday.time + 24 * 60 * 60,
      ].every(v => v);
    });
  }
}
