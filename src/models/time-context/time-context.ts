import { NationalHolidayCollection } from '../national-holiday/national-holiday-collection';
import { WDay, weekday } from '../w-day/w-day';

export class TimeContext {
  constructor(private readonly reservationDate: Date) {}

  /**
   * 日付を返却
   * 2019年7月15日: 15を返却
   */
  get date(): number {
    return this.reservationDate.getDate();
  }

  /**
   * 平日のとき真
   */
  get isWeekday(): boolean {
    return weekday.includes(this.reservationDate.getDay() as WDay);
  }

  /**
   * 国民の祝日・休日のとき真
   */
  getIsNationalHoliday(
    nationalHolidayMaster: NationalHolidayCollection,
  ): boolean {
    const unixTime = this.getAsUnixTime();
    return nationalHolidayMaster.withinNationalHoliday(unixTime);
  }

  /**
   * 土日祝のとき真
   */
  getIsHoliday(nationalHolidayMaster: NationalHolidayCollection): boolean {
    return [
      this.getIsNationalHoliday(nationalHolidayMaster),
      !this.isWeekday,
    ].some(v => v);
  }

  /**
   * 0:00 - 23:59の範囲内において、自身は引数より早いとき真
   */
  isEarlierThan(relativeTimeSec: number): boolean {
    return this.relativeTimeSec < relativeTimeSec;
  }

  /**
   * 0:00 - 23:59の範囲内において、自身は引数より遅い、または引数と等しいとき真
   */
  isLaterThan(relativeTimeSec: number): boolean {
    return !this.isEarlierThan(relativeTimeSec);
  }

  /**
   * 相対的な予約時刻の秒数を得る
   * 19時: 68400 が返却 （19 * 60 * 60）
   */
  private get relativeTimeSec(): number {
    return this.getAsUnixTime() - this.getAs12AmUnixTime();
  }

  /**
   * 予約日時をUnixTimeで得る
   */
  private getAsUnixTime(): number {
    return Math.floor(this.reservationDate.valueOf() / 1000);
  }

  /**
   * 予約日の0時をUnixTimeで得る
   */
  private getAs12AmUnixTime(): number {
    const date = new Date(
      this.reservationDate.getFullYear(),
      this.reservationDate.getMonth(),
      this.reservationDate.getDate(),
      0, // h
      0, // m
      0, // s
      0, // ms
    );
    return Math.floor(date.valueOf() / 1000);
  }
}
