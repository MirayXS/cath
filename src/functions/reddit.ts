import axios from "axios";
/**
 * Sends an embed of reddit
 * @return {Promise<Object>}
 */
export async function getreddit(sub: string): Promise<object> {
  const content = await axios
    .get(`https://www.reddit.com/r/${sub}/random/.json`)
    .then(res => res.data);
  let permalink = content[0].data.children[0].data.permalink;
  let memeURL = `https://reddit.com${permalink}`;
  let memeImage = content[0].data.children[0].data.url;
  let memeTitle = content[0].data.children[0].data.title;
  let memeUpvotes = content[0].data.children[0].data.ups;
  let memeDownvotes = content[0].data.children[0].data.downs;
  let memeNumComments = content[0].data.children[0].data.num_comments;
  const obj: object = {
    title: `A cat image | ${memeTitle}`,
    url: `${memeURL}`,
    image: memeImage,
    footer: ` 👍 ${memeUpvotes} 💬 ${memeNumComments}`,
  };
  return obj;
}
