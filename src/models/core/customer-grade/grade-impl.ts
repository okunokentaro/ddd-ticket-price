import { Periods } from '../period/periods';
import { BasedPrice } from '../price/based-price';

export interface GradeImpl {
  getPrice(periods: Periods): BasedPrice;
}
