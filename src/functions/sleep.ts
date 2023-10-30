import { CathError } from "../Error/CathError";
export function sleep(ms: number) {
  if (!ms) throw new CathError("Missing 'ms'");
  let start = new Date().getTime();
  let end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}
