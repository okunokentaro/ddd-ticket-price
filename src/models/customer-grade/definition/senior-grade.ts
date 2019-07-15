import { assertionError } from '../../../utils/assertion-error';
import { Customer } from '../../customer/customer';
import { PeriodImpl } from '../../period/period-impl';
import { Price } from '../../price';
import { GradeImpl } from '../grade-impl';

export class SeniorGrade implements GradeImpl {
  constructor(customer: Customer, origin: Date) {
    if (!(70 <= customer.getAge(origin))) {
      throw assertionError();
    }
  }

  getPrice(periods: PeriodImpl[]): Price {
    return new Price(1100); // 一律
  }
}
