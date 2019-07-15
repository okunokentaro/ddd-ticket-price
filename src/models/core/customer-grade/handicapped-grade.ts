import { assertionError } from '../../../utils/assertion-error';
import { Customer } from '../customer/customer';
import { BasedPrice } from '../price/based-price';
import { GradeImpl } from './grade-impl';

export class HandicappedGrade implements GradeImpl {
  constructor(customer: Customer, origin: Date) {
    if (
      ![
        18 < customer.getAge(origin),
        customer.attribute === 'Handicapped',
      ].every(v => v)
    ) {
      throw assertionError();
    }
  }

  getPrice(): BasedPrice {
    return new BasedPrice(1000); // 一律
  }
}
