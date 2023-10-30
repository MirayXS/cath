/**
 * Returns a string without " ` " or " @ "
 */
export function cleanText(text: string): string {
  if (typeof text === "string") {
    return text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
  } else {
    return text;
  }
}
