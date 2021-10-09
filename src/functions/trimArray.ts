import { CathError } from "../Error/CathError";

/**
 * Trim an array from 10th elemnt
 */
export function trimArray(arr = []) {
  if (!arr) throw new CathError("Missing 'arr'");
  if (arr.length > 10) {
    const length = arr.length - 10;
    arr = arr.slice(0, 10);
    arr.push(`\n${length} more...`);
  }
  return arr.join(" **|** ");
}
