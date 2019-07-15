import { Customer } from '../customer/customer';
import { PeriodImpl } from '../period/period-impl';
import { Price } from '../price';

export interface GradeImpl {
  getPrice(periods: PeriodImpl[]): Price;
}

export interface GradeConstructorImpl {
  new(customer: Customer, origin: Date): GradeImpl;
}
