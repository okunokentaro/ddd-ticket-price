import { assertionError } from '../../../utils/assertion-error';
import { Customer } from '../../customer/customer';
import { Price } from '../../price/price';
import { GradeImpl } from '../grade-impl';

export class HandicappedChildGrade implements GradeImpl {
  constructor(customer: Customer, origin: Date) {
    if (
      ![
        customer.getAge(origin) <= 18,
        customer.attribute === 'Handicapped',
      ].every(v => v)
    ) {
      throw assertionError();
    }
  }

  getPrice(): Price {
    return new Price(900); // 一律
  }
}
