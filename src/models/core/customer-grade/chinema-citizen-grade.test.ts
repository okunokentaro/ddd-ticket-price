import { nationalHolidayDefinitions } from '../../../lib/national-holiday.definitions';
import { customerGradeDefinitions } from '../../ordinary-movie/customer-grade/customer-grade.definitions';
import { periodDefinitions } from '../../ordinary-movie/period/period.definitions';
import { Customer } from '../customer/customer';
import { createMovieFactory, CreateMovieSignature } from '../movie/movie';
import {
  createPeriodsFactory,
  CreatePeriodsSignature,
} from '../period/create-periods-factory';
import { CinemaCitizenGrade } from './chinema-citizen-grade';

describe('CinemaCitizenGrade', () => {
  const customer = new Customer('2000-01-01', 'Male', 'CinemaCitizen');

  describe('#getPrice()', () => {
    let createPeriods: CreatePeriodsSignature;
    let createMovie: CreateMovieSignature;

    beforeEach(() => {
      createPeriods = createPeriodsFactory(
        periodDefinitions,
        nationalHolidayDefinitions,
      );
      createMovie = createMovieFactory(
        periodDefinitions,
        nationalHolidayDefinitions,
        customerGradeDefinitions,
      );
    });

    test('平日', () => {
      const date = '2019-07-12';

      const grade = new CinemaCitizenGrade(customer, new Date(date));
      const periods = createPeriods(
        createMovie('ダミームービー', `${date}T14:00+0900`).date,
      );

      const actual = grade.getPrice(periods);
      expect(actual.valueOf()).toEqual(1000);
    });

    test('平日 レイト', () => {
      const date = '2019-07-12';

      const grade = new CinemaCitizenGrade(customer, new Date(date));
      const periods = createPeriods(
        createMovie('ダミームービー', `${date}T21:00+0900`).date,
      );

      const actual = grade.getPrice(periods);
      expect(actual.valueOf()).toEqual(1000);
    });

    test('土曜日', () => {
      const date = '2019-07-13';

      const grade = new CinemaCitizenGrade(customer, new Date(date));
      const periods = createPeriods(
        createMovie('ダミームービー', `${date}T14:00+0900`).date,
      );

      const actual = grade.getPrice(periods);
      expect(actual.valueOf()).toEqual(1300);
    });

    test('土曜日 レイト', () => {
      const date = '2019-07-13';

      const grade = new CinemaCitizenGrade(customer, new Date(date));
      const periods = createPeriods(
        createMovie('ダミームービー', `${date}T21:00+0900`).date,
      );

      const actual = grade.getPrice(periods);
      expect(actual.valueOf()).toEqual(1000);
    });

    test('日曜日', () => {
      const date = '2019-07-14';

      const grade = new CinemaCitizenGrade(customer, new Date(date));
      const periods = createPeriods(
        createMovie('ダミームービー', `${date}T14:00+0900`).date,
      );

      const actual = grade.getPrice(periods);
      expect(actual.valueOf()).toEqual(1300);
    });

    test('日曜日 レイト', () => {
      const date = '2019-07-14';

      const grade = new CinemaCitizenGrade(customer, new Date(date));
      const periods = createPeriods(
        createMovie('ダミームービー', `${date}T21:00+0900`).date,
      );

      const actual = grade.getPrice(periods);
      expect(actual.valueOf()).toEqual(1000);
    });

    test('祝日', () => {
      const date = '2019-07-15';

      const grade = new CinemaCitizenGrade(customer, new Date(date));
      const periods = createPeriods(
        createMovie('ダミームービー', `${date}T14:00+0900`).date,
      );

      const actual = grade.getPrice(periods);
      expect(actual.valueOf()).toEqual(1300);
    });

    test('祝日 レイト', () => {
      const date = '2019-07-15';

      const grade = new CinemaCitizenGrade(customer, new Date(date));
      const periods = createPeriods(
        createMovie('ダミームービー', `${date}T21:00+0900`).date,
      );

      const actual = grade.getPrice(periods);
      expect(actual.valueOf()).toEqual(1000);
    });

    test('映画の日 平日', () => {
      const date = '2019-08-01';

      const grade = new CinemaCitizenGrade(customer, new Date(date));
      const periods = createPeriods(
        createMovie('ダミームービー', `${date}T14:00+0900`).date,
      );

      const actual = grade.getPrice(periods);
      expect(actual.valueOf()).toEqual(1000);
    });

    test('映画の日 平日 レイト', () => {
      const date = '2019-08-01';

      const grade = new CinemaCitizenGrade(customer, new Date(date));
      const periods = createPeriods(
        createMovie('ダミームービー', `${date}T21:00+0900`).date,
      );

      const actual = grade.getPrice(periods);
      expect(actual.valueOf()).toEqual(1000);
    });

    test('映画の日 土日祝', () => {
      const date = '2019-09-01';

      const grade = new CinemaCitizenGrade(customer, new Date(date));
      const periods = createPeriods(
        createMovie('ダミームービー', `${date}T14:00+0900`).date,
      );

      const actual = grade.getPrice(periods);
      expect(actual.valueOf()).toEqual(1100);
    });

    test('映画の日 土日祝 レイト', () => {
      const date = '2019-09-01';

      const grade = new CinemaCitizenGrade(customer, new Date(date));
      const periods = createPeriods(
        createMovie('ダミームービー', `${date}T21:00+0900`).date,
      );

      const actual = grade.getPrice(periods);
      expect(actual.valueOf()).toEqual(1100);
    });
  });
});
