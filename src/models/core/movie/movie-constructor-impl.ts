import { GradeConstructorImpl } from '../customer-grade/grade-constructor-impl';
import { NationalHolidayCollection } from '../national-holiday/national-holiday-collection';
import { PeriodConstructorImpl } from '../period/period-constructor-impl';
import { MovieImpl } from './movie-impl';

export interface MovieConstructorImpl {
  new (
    periodDefinitions: PeriodConstructorImpl[],
    nationalHolidayDefinitions: NationalHolidayCollection,
    customerGradeDefinitions: GradeConstructorImpl[],
    title: string,
    date: string,
  ): MovieImpl;
}
