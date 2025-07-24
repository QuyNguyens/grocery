export function CalculateDiscount(price: number, discount: number) {
  return Math.ceil(price - (price * discount) / 100);
}
