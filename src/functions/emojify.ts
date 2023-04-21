/**
 * Emoji-ify a string
 */
export function emojify(str: string): string {
  const s = {
    0: ":zero:",
    1: ":one:",
    2: ":two:",
    3: ":three:",
    4: ":four:",
    5: ":five:",
    6: ":six:",
    7: ":seven:",
    8: ":eight:",
    9: ":nine:",
    "#": ":hash:",
    "*": ":asterisk:",
    "!": ":grey_exclamation:",
    "?": ":grey_question:",
    " ": "   ",
  };
  let ar = str
    .toLowerCase()
    .split("")
    .map(l => {
      if (/[a-z]/g.test(l)) {
        return `:regional_indicator_${l}:`;
      } else if (s[l]) {
        return `${s[l]}`;
      }
    })
    .join("");
  return ar;
}
