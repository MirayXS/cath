import axios from "axios";
import config from "../";
/**
 * Sends a 8ball response
 */
export async function random8ball(): Promise<string> {
  const data = await axios
    .get(`${config.api}/api/v1/fun/8ball`)
    .then(res => res.data);
  return data.answer;
}
