import { CathError } from "../Error/CathError";

/**
 * Edit the first letter of the string to uppercase
 */
export function formatUpper(str: string) {
  if (!str) throw new CathError("Missing 'str'");
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
