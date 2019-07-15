import { NationalHoliday } from './national-holiday';

export class NationalHolidayCollection {
  constructor(private readonly list: NationalHoliday[]) {}

  withinNationalHoliday(unixTime: number): boolean {
    return this.list.some(v => {
      return v.time <= unixTime && unixTime < v.time + 24 * 60 * 60;
    });
  }
}
