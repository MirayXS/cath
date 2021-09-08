const axios = require("axios");
const config = require("../utils/config.json");
/**
 * @class APIClient
 **/
class APIClient {
  /**
   * @name APIClient
   * @kind constructor
   * @param {String} key Authorization Key for API (Only for CODM commands)
   * @param {String} [options.key]
   */
  constructor(key, options = {}) {
    if (key && typeof key !== "string")
      throw new TypeError("API key must be a string");
    if (key) this.key = key;
  }
  /**
   * Sends a CODM perk object
   * @returns {Promise<Object>}
   * @param {String} name
   */
  async getperk(name) {
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
module.exports = APIClient;
