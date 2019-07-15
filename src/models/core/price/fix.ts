import { BasedPrice } from './based-price';
import { FixedPrice } from './fixed-price';

export function fix(based: BasedPrice): FixedPrice {
  return new FixedPrice(based.valueOf());
}
