import { assertionError } from '../../../utils/assertion-error';
import { Customer } from '../../customer/customer';
import { PeriodImpl } from '../../period/period-impl';
import { Price } from '../../price/price';
import { GradeImpl } from '../grade-impl';

export class NoChargeGrade implements GradeImpl {
  constructor(customer: Customer, origin: Date) {
    if (![customer.getAge(origin) < 3].every(v => v)) {
      throw assertionError();
    }
  }

  getPrice(periods: PeriodImpl[]): Price {
    return new Price(0); // 乳児は無料
  }
}
