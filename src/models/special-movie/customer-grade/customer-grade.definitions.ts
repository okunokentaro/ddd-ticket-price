import { ChildGrade } from '../../core/customer-grade/child-grade';
import { GradeConstructorImpl } from '../../core/customer-grade/grade-constructor-impl';
import { MiddleStudentGrade } from '../../core/customer-grade/middle-student-grade';
import { NoChargeGrade } from '../../core/customer-grade/no-charge-grade';
import { SpecialMovieGrade } from '../../core/customer-grade/special-movie-grade';
import { StudentGrade } from '../../core/customer-grade/student-grade';

/**
 * 上から順番に判定
 */
export const customerGradeDefinitions: GradeConstructorImpl[] = [
  // 乳児〜学生
  NoChargeGrade,
  ChildGrade,
  MiddleStudentGrade,
  StudentGrade,

  // 学生以外は常に特別興行のグレードが適用
  SpecialMovieGrade,
];
