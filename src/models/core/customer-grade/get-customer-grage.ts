import { assertionErrorMessage } from '../../../utils/assertion-error';
import { Customer } from '../customer/customer';
import { GradeConstructorImpl } from './grade-constructor-impl';
import { GradeImpl } from './grade-impl';

export function getCommonCustomerGrade(
  customerGradeDefinitions: GradeConstructorImpl[],
  customer: Customer,
  origin: Date,
): GradeImpl {
  const result = customerGradeDefinitions.reduce(
    (acc: GradeImpl | null, Ctor: GradeConstructorImpl): GradeImpl | null => {
      try {
        return new Ctor(customer, origin);
      } catch (e) {
        // Assertion Error の場合
        // 次の Grade 優先順位に定義された constructor を用いてインスタンス生成に try
        if (e.message.includes(assertionErrorMessage)) {
          return acc; // noop
        }
        throw e;
      }
    },
    null,
  );

  if (result === null) {
    throw new Error('Invalid customer');
  }

  return result;
}
