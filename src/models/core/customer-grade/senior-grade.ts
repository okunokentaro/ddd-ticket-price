import { assertionError } from '../../../utils/assertion-error';
import { Customer } from '../customer/customer';
import { BasedPrice } from '../price/based-price';
import { GradeImpl } from './grade-impl';

export class SeniorGrade implements GradeImpl {
  constructor(customer: Customer, origin: Date) {
    if (!(70 <= customer.getAge(origin))) {
      throw assertionError();
    }
  }

  getPrice(): BasedPrice {
    return new BasedPrice(1100); // 一律
  }
}
