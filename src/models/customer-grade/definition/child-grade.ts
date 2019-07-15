import { assertionError } from '../../../utils/assertion-error';
import { Customer } from '../../customer/customer';
import { PeriodImpl } from '../../period/period-impl';
import { Price } from '../../price';
import { GradeImpl } from '../grade-impl';

export class ChildGrade implements GradeImpl {
  constructor(customer: Customer, origin: Date) {
    if (
      ![3 <= customer.getAge(origin), customer.getAge(origin) <= 12].every(
        v => v,
      )
    ) {
      throw assertionError();
    }
  }

  getPrice(periods: PeriodImpl[]): Price {
    return new Price(1000); // 一律
  }
}
