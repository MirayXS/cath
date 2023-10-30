import { CathError } from "../Error/CathError";
export function timer(timestamp: number) {
  if (!timestamp) throw new CathError("Missing 'timestamp");
  const timeLeft = timestamp;
  const days = Math.floor(timeLeft / 86400000);
  const hours = Math.floor(timeLeft / 3600000) - days * 24;
  const minutes = Math.floor(timeLeft / 60000) - days * 1440 - hours * 60;
  const seconds =
    Math.floor(timeLeft / 1000) - days * 86400 - hours * 3600 - minutes * 60;
  const mseconds = timeLeft / 1000 - days * 86400 - hours * 3600 - minutes * 60;
  let string = "";
  if (days) string = string + `${days} ${days == 1 ? "day " : "days "}`;
  if (hours) string = string + `${hours} ${hours == 1 ? "hour " : "hours "}`;
  if (minutes)
    string = string + `${minutes} ${minutes == 1 ? "minute " : "minutes "}`;
  if (seconds)
    string = string + `${seconds} ${seconds == 1 ? "second " : "seconds "}`;
  if (!string.length) string = `${mseconds.toFixed(1)} second`;
  return string;
}
