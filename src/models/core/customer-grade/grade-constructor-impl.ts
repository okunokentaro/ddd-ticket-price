import { Customer } from '../customer/customer';
import { GradeImpl } from './grade-impl';

export interface GradeConstructorImpl {
  new (customer: Customer, origin: Date): GradeImpl;
}
