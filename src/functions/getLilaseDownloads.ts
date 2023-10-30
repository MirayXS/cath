const axios = require("axios");
/**
 * @name getLilaseDownloads
 * @description Get the number of downloads
 */
export async function getLilaseDownloads(): Promise<number> {
  const { data } = await axios.get(
    "https://api.github.com/repos/night0721/Lilase/releases"
  );
  let sum = 0;
  data.forEach(release => {
    sum += release.assets[0].download_count;
  });
  return sum;
}
