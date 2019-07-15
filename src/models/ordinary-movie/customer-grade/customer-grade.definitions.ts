import { ChildGrade } from '../../core/customer-grade/child-grade';
import { CinemaCitizenGrade } from '../../core/customer-grade/chinema-citizen-grade';
import { CinemaCitizenSeniorGrade } from '../../core/customer-grade/cinema-citizen-senior-grade';
import { GradeConstructorImpl } from '../../core/customer-grade/grade-constructor-impl';
import { HandicappedChildGrade } from '../../core/customer-grade/handicapped-child-grade';
import { HandicappedGrade } from '../../core/customer-grade/handicapped-grade';
import { MiddleStudentGrade } from '../../core/customer-grade/middle-student-grade';
import { NoChargeGrade } from '../../core/customer-grade/no-charge-grade';
import { OrdinaryGrade } from '../../core/customer-grade/ordinary-grade';
import { SeniorGrade } from '../../core/customer-grade/senior-grade';
import { StudentGrade } from '../../core/customer-grade/student-grade';

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
