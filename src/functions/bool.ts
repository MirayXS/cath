/**
 * Returns true/false
 */
export function bool() {
  const arr = [true, false];
  const num = arr[Math.floor(Math.random() * arr.length)];
  return num;
}
