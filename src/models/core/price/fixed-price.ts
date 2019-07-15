export class FixedPrice {
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
