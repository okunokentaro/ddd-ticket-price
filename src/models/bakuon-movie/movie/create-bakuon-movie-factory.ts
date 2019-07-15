import { GradeConstructorImpl } from '../../core/customer-grade/grade-constructor-impl';
import { NationalHolidayCollection } from '../../core/national-holiday/national-holiday-collection';
import { PeriodConstructorImpl } from '../../core/period/period-constructor-impl';
import { BakuonMovie } from './bakuon-movie';

export type CreateBakuonMovieSignature = (
  title: string,
  date: string,
) => BakuonMovie;

export function createBakuonMovieFactory(
  periodDefinitions: PeriodConstructorImpl[],
  nationalHolidayDefinitions: NationalHolidayCollection,
  customerGradeDefinitions: GradeConstructorImpl[],
): CreateBakuonMovieSignature {
  return function createBakuonMovie(title: string, date: string): BakuonMovie {
    return new BakuonMovie(
      periodDefinitions,
      nationalHolidayDefinitions,
      customerGradeDefinitions,
      title,
      date,
    );
  };
}
