/**
 * Rounds a number to a specified number of decimal places.
 */
export function round(value: number, decimals: number) {
  return Number(Math.round(Number(value + "e" + decimals)) + "e-" + decimals);
}
