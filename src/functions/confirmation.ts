import { Message } from "discord.js";
export async function confirmation(
  message: Message,
  author,
  validReactions = [],
  time = 60000
) {
  try {
    for (const reaction of validReactions) await message.react(reaction);
    const filter = (reaction, user) =>
      validReactions.includes(reaction.emoji.name) && user.id === author.id;

    return message
      .awaitReactions({ filter, max: 1, time: time })
      .then(collected => collected.first() && collected.first().emoji.name);
  } catch (e) {
    console.log(e);
  }
}
