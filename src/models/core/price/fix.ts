import { BasedPrice } from './based-price';
import { FixedPrice } from './fixed-price';

export function fix(
  based: BasedPrice,
  functions: ((n: number) => number)[] = [],
): FixedPrice {
  const basedNumber = based.valueOf();
  const last = functions.reduce((acc, f) => {
    return f(acc);
  }, basedNumber);
  return new FixedPrice(last);
}
