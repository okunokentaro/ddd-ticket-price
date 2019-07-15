import { nationalHolidayDefinitions as defs } from '../../../lib/national-holiday.definitions';
import { createTimeContext } from './create-time-context';
import { TimeContext } from './time-context';

describe('TimeContext', () => {
  describe('#isWeekday', () => {
    const params: [string, [number, boolean], string][] = [
      ['2019-07-16T19:00+0900', [2, true], '平日は真'],
      ['2019-07-15T19:00+0900', [1, true], '祝日・休日でも平日ならば真'],
      ['2019-07-13T19:00+0900', [6, false], '土曜は偽'],
      ['2019-07-14T19:00+0900', [0, false], '日曜は偽'],
    ];

    params.forEach(([str, expected, name]) => {
      test(name, () => {
        const actual = createTimeContext(str);
        expect([new Date(str).getDay(), actual.isWeekday]).toEqual(expected);
      });
    });
  });

  describe('#getIsNationalHoliday()', () => {
    const params: [string, [number, boolean], string][] = [
      ['2019-07-15T19:00+0900', [1, true], '月曜祝日は真'],
      ['2019-08-11T19:00+0900', [0, true], '日曜祝日は真'],
      ['2019-07-13T19:00+0900', [6, false], '土曜は偽'],
      ['2019-07-14T19:00+0900', [0, false], '日曜は偽'],
      ['2019-07-16T19:00+0900', [2, false], '平日は偽'],
    ];

    params.forEach(([str, expected, name]) => {
      test(name, () => {
        const actual = createTimeContext(str);
        expect([
          new Date(str).getDay(),
          actual.getIsNationalHoliday(defs),
        ]).toEqual(expected);
      });
    });
  });

  describe('#getIsHoliday()', () => {
    const params: [string, [number, boolean], string][] = [
      ['2019-07-13T19:00+0900', [6, true], '土曜は真'],
      ['2019-07-14T19:00+0900', [0, true], '日曜は真'],
      ['2019-08-11T19:00+0900', [0, true], '日曜祝日は真'],
      ['2019-07-15T19:00+0900', [1, true], '月曜祝日は真'],
      ['2019-07-16T19:00+0900', [2, false], '平日は偽'],
    ];

    params.forEach(([str, expected, name]) => {
      test(name, () => {
        const actual = createTimeContext(str);
        expect([new Date(str).getDay(), actual.getIsHoliday(defs)]).toEqual(
          expected,
        );
      });
    });
  });

  describe('#isEarlierThan()', () => {
    const params: [string, boolean][] = [
      ['2019-07-15T00:00+0900', true],
      ['2019-07-15T11:59+0900', true],
      ['2019-07-15T12:00+0900', false],
      ['2019-07-15T23:59+0900', false],
      // 日付は関係なく判定
      ['2019-07-16T00:00+0900', true],
      ['2019-07-16T11:59+0900', true],
      ['2019-07-16T12:00+0900', false],
      ['2019-07-16T23:59+0900', false],
    ];

    params.forEach(([str, expected]) => {
      test(str, () => {
        const actual = createTimeContext(str);
        expect(actual.isEarlierThan(12 * 60 * 60)).toEqual(expected);
      });
    });
  });

  describe('#isLaterThan()', () => {
    const params: [string, boolean][] = [
      ['2019-07-15T00:00+0900', false],
      ['2019-07-15T11:59+0900', false],
      ['2019-07-15T12:00+0900', true],
      ['2019-07-15T23:59+0900', true],
      // 日付は関係なく判定
      ['2019-07-16T00:00+0900', false],
      ['2019-07-16T11:59+0900', false],
      ['2019-07-16T12:00+0900', true],
      ['2019-07-16T23:59+0900', true],
    ];

    params.forEach(([str, expected]) => {
      test(str, () => {
        const actual = createTimeContext(str);
        expect(actual.isLaterThan(12 * 60 * 60)).toEqual(expected);
      });
    });
  });
});
