import { assertionError } from '../../../utils/assertion-error';
import { Customer } from '../../customer/customer';
import { Price } from '../../price/price';
import { GradeImpl } from '../grade-impl';

export class SeniorGrade implements GradeImpl {
  constructor(customer: Customer, origin: Date) {
    if (!(70 <= customer.getAge(origin))) {
      throw assertionError();
    }
  }

  getPrice(): Price {
    return new Price(1100); // 一律
  }
}
