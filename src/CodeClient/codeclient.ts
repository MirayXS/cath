import axios from "axios";
import config from "../utils/config.json";
import { CodeData } from "./codeclient.interface";
/**
 * @name CodeClient
 * @kind constructor
 */
export class CodeClient {
  constructor() {}
  /**
   * Sends the link of the code
   * @return {Promise<Data>}
   * @param {String} title
   * @param {String} description
   * @param {String} code
   */
  public async createBin(
    title: String,
    description: String,
    code: String
  ): Promise<CodeData> {
    const data = await axios
      .post(`${config.code}/botcreate`, {
        title,
        description,
        code,
      })
      .then(res => res.data);
    return data;
  }
}
