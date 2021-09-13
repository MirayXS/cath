import axios from "axios";
import config from "../utils/config.json";
import { CODMClientOptions } from "./codmclient.interface";
/**
 * @name APIClient
 * @kind constructor
 * @param {String} key Authorization Key for API (Only for CODM commands)
 */
export class CODMClient {
  public key: CODMClientOptions;
  constructor(key: CODMClientOptions) {
    if (key && typeof key !== "string")
      throw new TypeError("API key must be a string");
  }
  /**
   * Sends a CODM perk object
   * @return {Promise<Object>}
   * @param {String} name
   */
  public async getperk(name: string): Promise<object> {
    const data = await axios
      .get(`${config.api}/api/v1/codm/perks?name=${name}`, {
        headers: {
          Authorization: this.key,
        },
      })
      .then(res => res.data)
      .catch(err => console.error(`Unauthorized to use`));
    return data;
  }
}
