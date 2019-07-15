import { Price } from './price';

function printPrice(price: Price) {
  return `¥${price.valueOf().toLocaleString()}`;
}

export function printPrices(prices: Price[]) {
  prices.forEach(v => {
    console.log(printPrice(v));
  });
}
