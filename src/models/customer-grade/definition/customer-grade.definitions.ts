import { ChildGrade } from './child-grade';
import { CinemaCitizenGrade } from './chinema-citizen-grade';
import { CinemaCitizenSeniorGrade } from './cinema-citizen-senior-grade';
import { GradeConstructorImpl } from '../grade-impl';
import { HandicappedChildGrade } from './handicapped-child-grade';
import { HandicappedGrade } from './handicapped-grade';
import { MiddleStudentGrade } from './middle-student-grade';
import { NoChargeGrade } from './no-charge-grade';
import { OrdinaryGrade } from './ordinary-grade';
import { SeniorGrade } from './senior-grade';
import { StudentGrade } from './student-grade';

/**
 * 上から順番に判定
 */
export const customerGradeDefinitions: GradeConstructorImpl[] = [
  // 障がい者割引
  HandicappedChildGrade,
  HandicappedGrade,

  // 会員もしくはシニア
  CinemaCitizenSeniorGrade,
  CinemaCitizenGrade,
  SeniorGrade,

  // 乳児〜学生
  NoChargeGrade,
  ChildGrade,
  MiddleStudentGrade,
  StudentGrade,

  // 一般顧客は常に優先順位最下位
  OrdinaryGrade,
];
