/**
 * Generate a random password
 * @param length The length of the password
 * @param options The options for the password
 */
export function generatePassword(
  length: number,
  options: GeneratePasswordOptions
) {
  const upper = options.upper || false;
  const lower = options.lower || false;
  const numbers = options.numbers || false;
  const special = options.special || false;
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_+-=[]{}|;':\",./<>?";
  let password = "";
  let chars = "";
  if (upper) chars += upperChars;
  if (lower) chars += lowerChars;
  if (numbers) chars += numberChars;
  if (special) chars += specialChars;
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

export interface GeneratePasswordOptions {
  upper: boolean;
  lower: boolean;
  numbers: boolean;
  special: boolean;
}
