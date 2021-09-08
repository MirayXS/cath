const axios = require("axios");
const config = require("../utils/config.json");
/**
 * Sends a 8ball response
 * @returns {Promise<String>}
 */
async function random() {
  const data = await axios
    .get(`${config.api}/api/v1/fun/8ball`)
    .then(res => res.data);
  return data.answer;
}
module.exports = random;
