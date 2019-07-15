class Price {}

function calcPrice(): Price {
  return new Price();
}

function printPrice(price: Price) {
  console.log(price);
}

function main() {
  const price = calcPrice();
  printPrice(price);
}

main();
