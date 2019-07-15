import { nationalHolidayDefinitions } from '../../lib/national-holiday.definitions';
import { TimeContext } from './time-context';

describe('TimeContext', () => {
  describe('#isWeekday', () => {
    test('平日は真', () => {
      const actual = new TimeContext(
        new Date('2019-07-16T19:00+0900'),
        nationalHolidayDefinitions,
      );
      expect(actual.isWeekday).toEqual(true);
    });

    test('祝日・休日でも平日ならば真', () => {
      const actual = new TimeContext(
        new Date('2019-07-15T19:00+0900'),
        nationalHolidayDefinitions,
      );
      expect(actual.isWeekday).toEqual(true);
    });

    test('土曜は偽', () => {
      const actual = new TimeContext(
        new Date('2019-07-13T19:00+0900'),
        nationalHolidayDefinitions,
      );
      expect(actual.isWeekday).toEqual(false);
    });

    test('日曜は偽', () => {
      const actual = new TimeContext(
        new Date('2019-07-14T19:00+0900'),
        nationalHolidayDefinitions,
      );
      expect(actual.isWeekday).toEqual(false);
    });
  });

  describe('#isNationalHoliday', () => {
    test('祝日は真', () => {
      const actual = new TimeContext(
        new Date('2019-07-15T19:00+0900'),
        nationalHolidayDefinitions,
      );
      expect(actual.isNationalHoliday).toEqual(true);
    });

    test('日曜は偽', () => {
      const actual = new TimeContext(
        new Date('2019-07-14T19:00+0900'),
        nationalHolidayDefinitions,
      );
      expect(actual.isNationalHoliday).toEqual(false);
    });

    test('平日は偽', () => {
      const actual = new TimeContext(
        new Date('2019-07-16T19:00+0900'),
        nationalHolidayDefinitions,
      );
      expect(actual.isNationalHoliday).toEqual(false);
    });
  });

  describe('#isHoliday', () => {
    test('祝日は真', () => {
      const actual = new TimeContext(
        new Date('2019-07-15T19:00+0900'),
        nationalHolidayDefinitions,
      );
      expect(actual.isHoliday).toEqual(true);
    });

    test('日曜は真', () => {
      const actual = new TimeContext(
        new Date('2019-07-14T19:00+0900'),
        nationalHolidayDefinitions,
      );
      expect(actual.isHoliday).toEqual(true);
    });

    test('平日は偽', () => {
      const actual = new TimeContext(
        new Date('2019-07-16T19:00+0900'),
        nationalHolidayDefinitions,
      );
      expect(actual.isHoliday).toEqual(false);
    });
  });
});
