import { getCommonCustomerGrade } from '../customer-grade/get-customer-grage';
import { GradeConstructorImpl } from '../customer-grade/grade-constructor-impl';
import { Customer } from '../customer/customer';
import { CreatePeriodsSignature } from '../period/create-periods-factory';
import { BasedPrice } from '../price/based-price';

/**
 * 一般興行における料金テーブルから、上映日時に該当する金額を返却
 *
 * @param movieDate 上映日時
 * @param customerGradeDefinitions 顧客属性に基づく料金定義
 * @param createPeriods 金額時間区分の算出手段の注入
 * @param customer 顧客
 * @param origin 顧客年齢計算の基準日
 */
export function getPriceByCommonCustomerGrade(
  movieDate: string,
  customerGradeDefinitions: GradeConstructorImpl[],
  createPeriods: CreatePeriodsSignature,
  customer: Customer,
  origin: Date,
): BasedPrice {
  const periods = createPeriods(movieDate);
  return getCommonCustomerGrade(
    customerGradeDefinitions,
    customer,
    origin,
  ).getPrice(periods);
}
