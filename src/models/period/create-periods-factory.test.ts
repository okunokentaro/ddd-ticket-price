import { nationalHolidayDefinitions } from '../../lib/national-holiday.definitions';
import {
  createPeriodsFactory,
  CreatePeriodsSignature,
} from './create-periods-factory';
import { periodDefinitions } from './definitions/period.definitions';

describe('createPeriodsFactory()', () => {
  let createPeriods: CreatePeriodsSignature;

  beforeEach(() => {
    createPeriods = createPeriodsFactory(
      periodDefinitions,
      nationalHolidayDefinitions,
    );
  });

  describe('createPeriods()', () => {
    test('映画の日 平日', () => {
      const actual = createPeriods('2019-07-01T19:00+0900');
      expect(actual.map(v => v.label)).toEqual(['映画の日', '平日']);
    });

    test('映画の日 平日レイト', () => {
      const actual = createPeriods('2019-07-01T20:00+0900');
      expect(actual.map(v => v.label)).toEqual(['映画の日', '平日レイト']);
    });

    test('映画の日 土日祝', () => {
      const actual = createPeriods('2019-09-01T19:00+0900');
      expect(actual.map(v => v.label)).toEqual(['映画の日', '土日祝']);
    });

    test('映画の日 土日祝レイト', () => {
      const actual = createPeriods('2019-09-01T20:00+0900');
      expect(actual.map(v => v.label)).toEqual(['映画の日', '土日祝レイト']);
    });

    test('平日レイト', () => {
      const actual = createPeriods('2019-07-16T20:00+0900');
      expect(actual.map(v => v.label)).toEqual(['平日レイト']);
    });

    test('平日', () => {
      const actual = createPeriods('2019-07-16T19:00+0900');
      expect(actual.map(v => v.label)).toEqual(['平日']);
    });

    test('月〜金の祝日', () => {
      const actual = createPeriods('2019-07-15T19:00+0900');
      expect(actual.map(v => v.label)).toEqual(['土日祝', '平日']);
    });
  });
});
