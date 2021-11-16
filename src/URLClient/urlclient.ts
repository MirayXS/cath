import axios from "axios";
import config from "../utils/config.json";
import { URLData } from "./urlclient.interface";
import { CathError } from "../Error/CathError";
/**
 * @name URLClient
 * @kind constructor
 */
export class URLClient {
  constructor() {}
  /**
   * Sends the link of the URL
   * @return {Promise<URLData>}
   * @param {String} shortName
   * @param {String} targetURL
   */
  public async createShortURL(
    shortName: string,
    targetURL: string
  ): Promise<URLData> {
    if (!shortName) throw new CathError("Missing 'shortName' property");
    if (!targetURL) throw new CathError("Missing 'targetURL' property");
    const data = await axios
      .post(`${config.url}/api/create`, {
        shortUrl: shortName,
        fullUrl: targetURL,
      })
      .then(res => res.data);
    if (data?.name) {
      return data?.name;
    }
  }
}
