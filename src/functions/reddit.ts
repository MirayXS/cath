import axios from "axios";
import { CathError } from "../Error/CathError";
/**
 * Sends an embed of reddit
 */
export async function getreddit(sub: string): Promise<RedditObject> {
  if (!sub) throw new CathError("Missing Subreddit");
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
  const obj: RedditObject = {
    title: memeTitle,
    url: memeURL,
    image: memeImage,
    footer: ` 👍 ${memeUpvotes} 💬 ${memeNumComments}`,
  };
  return obj;
}
export interface RedditObject {
  title: String;
  url: String;
  image: String;
  footer: String;
}
