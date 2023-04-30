import axios from "axios";
import { config } from "../";
import { CodeData } from "./codeclient.interface";
import { CathError } from "../Error/CathError";
/**
 * @name CodeClient
 * @kind constructor
 */
export class CodeClient {
  constructor() {}
  /**
   * Sends the link of the code
   * @return {Promise<CodeData>}
   * @param {String} key
   * @param {String} code
   */
  public async createBin(key: String, code: String): Promise<CodeData> {
    if (!key) throw new CathError("Missing 'key' property");
    if (!code) throw new CathError("Missing 'code' property");
    const data = await axios
      .post(config.code, {
        key,
        value: code,
      })
      .then(res => res.data);
    if (data?.url) {
      return data?.url;
    } else {
      throw new CathError(`Code already exist`);
    }
  }
}
