import { assertionError } from '../../../utils/assertion-error';
import { Customer } from '../../customer/customer';
import { Price } from '../../price';
import { GradeImpl } from '../grade-impl';

export class CinemaCitizenSeniorGrade implements GradeImpl {
  constructor(customer: Customer, origin: Date) {
    if (
      !(customer.attribute === 'CinemaCitizen' && 60 <= customer.getAge(origin))
    ) {
      throw assertionError();
    }
  }

  getPrice(): Price {
    return new Price(1000); // 一律
  }
}
