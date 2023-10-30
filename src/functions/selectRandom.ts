import { CathError } from "../Error/CathError";
/**
 * Select a random element of the array
 */
export function selectRandom(array = []): any {
  if (!array) throw new CathError("Missing 'array'");
  if (!array.length) throw new CathError("array length can't be 0");
  return array[Math.floor(Math.random() * array.length)];
}
