import { CathError } from "../Error/CathError";

export function daysAgo(date: Date) {
  if (!date) throw new CathError("Missing 'date'");
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days + (days == 1 ? " day" : " days") + " ago";
}
