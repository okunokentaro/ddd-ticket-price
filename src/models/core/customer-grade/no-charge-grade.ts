import { assertionError } from '../../../utils/assertion-error';
import { Customer } from '../customer/customer';
import { BasedPrice } from '../price/based-price';
import { GradeImpl } from './grade-impl';

export class NoChargeGrade implements GradeImpl {
  constructor(customer: Customer, origin: Date) {
    if (![customer.getAge(origin) < 3].every(v => v)) {
      throw assertionError();
    }
  }

  getPrice(): BasedPrice {
    return new BasedPrice(0); // 乳児は無料
  }
}
