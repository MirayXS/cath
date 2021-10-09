import { CathError } from "../Error/CathError";
/**
 * Returns a random number in range
 */
export function randint(max: number, min: number) {
  if (!max || !min) throw new CathError("Missing number");
  return Math.floor(Math.random() * (max - (min ? min : 0))) + (min ? min : 0);
}
