import { assertionError } from '../../../utils/assertion-error';
import { Customer } from '../../customer/customer';
import { PeriodImpl } from '../../period/period-impl';
import { Price } from '../../price/price';
import { GradeImpl } from '../grade-impl';

export class MiddleStudentGrade implements GradeImpl {
  constructor(customer: Customer, origin: Date) {
    if (
      ![
        customer.getAge(origin) <= 15,
        customer.attribute === 'CollegeStudent',
        customer.attribute === 'HighSchool',
      ].some(v => v)
    ) {
      throw assertionError();
    }
  }

  getPrice(periods: PeriodImpl[]): Price {
    return new Price(1000); // 一律
  }
}
