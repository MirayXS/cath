import axios from "axios";
import { CathError } from "../Error/CathError";
import { config } from "../";
/**
 * Sends a 8ball response
 */
export async function fractur(word: string): Promise<string> {
  if (!word) {
    throw new CathError("Missing 'word'");
  }
  const data = await axios
    .get(`${config.api}/api/v1/fun/fractur?text=${word}`)
    .then(res => res.data);
  console.log(data);
  return data.text;
}
