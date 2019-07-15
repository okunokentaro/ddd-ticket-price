import { GradeConstructorImpl } from '../../core/customer-grade/grade-constructor-impl';
import { NationalHolidayCollection } from '../../core/national-holiday/national-holiday-collection';
import { PeriodConstructorImpl } from '../../core/period/period-constructor-impl';
import { ThreeDimensionalMovie } from './three-dimensional-movie';

export type CreateThreeDimensionalMovieSignature = (
  title: string,
  date: string,
) => ThreeDimensionalMovie;

export function createThreeDimensionalMovieFactory(
  periodDefinitions: PeriodConstructorImpl[],
  nationalHolidayDefinitions: NationalHolidayCollection,
  customerGradeDefinitions: GradeConstructorImpl[],
): CreateThreeDimensionalMovieSignature {
  return function createThreeDimensionalMovie(
    title: string,
    date: string,
  ): ThreeDimensionalMovie {
    return new ThreeDimensionalMovie(
      periodDefinitions,
      nationalHolidayDefinitions,
      customerGradeDefinitions,
      title,
      date,
    );
  };
}
