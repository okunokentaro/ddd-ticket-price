import { GradeConstructorImpl } from '../../core/customer-grade/grade-constructor-impl';
import { NationalHolidayCollection } from '../../core/national-holiday/national-holiday-collection';
import { PeriodConstructorImpl } from '../../core/period/period-constructor-impl';
import { SpecialMovie } from './special-movie';

export type CreateSpecialMovieSignature = (
  title: string,
  date: string,
) => SpecialMovie;

export function createSpecialMovieFactory(
  periodDefinitions: PeriodConstructorImpl[],
  nationalHolidayDefinitions: NationalHolidayCollection,
  customerGradeDefinitions: GradeConstructorImpl[],
): CreateSpecialMovieSignature {
  return function createSpecialMovie(
    title: string,
    date: string,
  ): SpecialMovie {
    return new SpecialMovie(
      periodDefinitions,
      nationalHolidayDefinitions,
      customerGradeDefinitions,
      title,
      date,
    );
  };
}
