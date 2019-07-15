import { Periods } from '../period/periods';
import { Price } from '../price/price';

export interface GradeImpl {
  getPrice(periods: Periods): Price;
}
