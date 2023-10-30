import { CathError } from "../Error/CathError";
/**
 * Returns a random ID/String
 */
export function randomID(length: number) {
  if (!length) throw new CathError("Missing 'length'");
  var result = "";
  var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    result += c.charAt(Math.floor(Math.random() * c.length));
  }
  return result;
}
