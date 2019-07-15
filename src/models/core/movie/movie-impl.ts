import { Customer } from '../customer/customer';
import { FixedPrice } from '../price/fixed-price';

export interface MovieImpl {
  title: string;
  date: string;

  /**
   * @param customer 顧客
   * @param origin 顧客年齢を計算するための基準日
   */
  getPrice(customer: Customer, origin: Date): FixedPrice;
}
