import { assertionError } from '../../../utils/assertion-error';
import { Customer } from '../customer/customer';
import { BasedPrice } from '../price/based-price';
import { GradeImpl } from './grade-impl';

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

  getPrice(): BasedPrice {
    return new BasedPrice(1000); // 一律
  }
}
