import axios from "axios";
import config from "../";
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
   * @param {String} title
   * @param {String} description
   * @param {String} code
   */
  public async createBin(
    title: String,
    description: String,
    code: String
  ): Promise<CodeData> {
    if (!title) throw new CathError("Missing 'title' property");
    if (!description) throw new CathError("Missing 'description' property");
    if (!code) throw new CathError("Missing 'code' property");
    const data = await axios
      .post(`${config.code}/api/botcreate`, {
        title,
        description,
        code,
      })
      .then(res => res.data);
    if (data?.name) {
      return data?.name;
    } else {
      throw new CathError(`Code already exist`);
    }
  }
}
