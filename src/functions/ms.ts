import { CathError } from "../Error/CathError";
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var mn = d * 30;
var w = d * 7;
var y = d * 365.25;
export function parseString(val: string) {
  var type = typeof val;
  if (type === "string" && val.length > 0) {
    return parse(val);
  }
  throw new CathError("Missing 'val' or type of 'val' isn't a string");
}
export function parseMS(val: number, options?: msOptions) {
  options = options || {};
  if (isFinite(val)) {
    return options?.long ? fmtLong(val) : fmtShort(val);
  }
  throw new CathError("Missing 'val' or type of 'val' isn't a number");
}
function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match =
    /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mths|mn|years?|yrs?|y)?$/i.exec(
      str
    );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || "ms").toLowerCase();
  switch (type) {
    case "years":
    case "year":
    case "yrs":
    case "yr":
    case "y":
      return n * y;
    case "month":
    case "months":
    case "mth":
    case "mths":
      return n * mn;
    case "weeks":
    case "week":
    case "w":
      return n * w;
    case "days":
    case "day":
    case "d":
      return n * d;
    case "hours":
    case "hour":
    case "hrs":
    case "hr":
    case "h":
      return n * h;
    case "minutes":
    case "minute":
    case "mins":
    case "min":
    case "m":
      return n * m;
    case "seconds":
    case "second":
    case "secs":
    case "sec":
    case "s":
      return n * s;
    case "milliseconds":
    case "millisecond":
    case "msecs":
    case "msec":
    case "ms":
      return n;
    default:
      return undefined;
  }
}

function fmtShort(ms: number): string {
  var msAbs = Math.abs(ms);
  if (msAbs >= mn) {
    return Math.round(ms / mn) + "mo";
  }
  if (msAbs >= w) {
    return Math.round(ms / w) + "w";
  }
  if (msAbs >= d) {
    return Math.round(ms / d) + "d";
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + "h";
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + "m";
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + "s";
  }
  return ms + "ms";
}

function fmtLong(ms: number) {
  var msAbs = Math.abs(ms);
  if (msAbs >= mn) {
    return plural(ms, msAbs, mn, "month");
  }
  if (msAbs >= w) {
    return plural(ms, msAbs, w, "week");
  }
  if (msAbs >= d) {
    return plural(ms, msAbs, d, "day");
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, "hour");
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, "minute");
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, "second");
  }
  return ms + " ms";
}
function plural(ms: number, msAbs: number, n: number, name: string) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
}
export interface msOptions {
  long?: boolean;
  short?: boolean;
}
