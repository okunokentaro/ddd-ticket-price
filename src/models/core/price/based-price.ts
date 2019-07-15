/**
 * 値引き前、増額前の定価
 */
export class BasedPrice {
  constructor(private readonly price: number) {
    if (
      ![
        0 <= price,
        price === Math.floor(price),
        Number.isSafeInteger(price),
      ].every(v => v)
    ) {
      throw new Error('Invalid price');
    }
  }

  valueOf(): number {
    return this.price;
  }
}
