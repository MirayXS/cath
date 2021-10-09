import { Client } from "discord.js";
export interface GiveawaySchema {
  Guild: string;
  Channel: string;
  Message: string;
  HostBy: string;
  End: number;
  Start: number;
  Award: string;
  Winners: number;
  Ended: boolean;
  Requirements: { Enabled: boolean; Roles?: [string] };
  Clickers: [string];
}
export interface GiveawaysClientOptions {
  /**
   * Discord Client
   */
  client: Client;
  /**
   * Connection URI for the MongoDB
   */
  MongooseConnectionURI: string;
  /**
   * Customizable messages for the giveaway embed
   */
  GiveawayMessages: DefaultGiveawayMessages;
}
export interface DefaultGiveawayMessages {
  dmWinner: true;
  giveaway: "🎉🎉 **GIVEAWAY!** 🎉🎉";
  giveawayDescription: "🎁 Award: **{award}**\n🎊 Hosted by: {hostedBy}\n⏲️ Winner(s): `{winners}` \n🙏 Entrants: {totalParticipants} \n\n**Requirements:** {requirements}";
  giveawayFooterImage: "https://emoji.gg/assets/emoji/3461-giveaway.gif";
  winMessage: "congratulations {winners}! You have won **{prize}** from total `{totalParticipants}` entrants!";
  rerolledMessage: "Rerolled! {winner} is the new winner of the giveaway!"; // only {winner} placeholder
  toParticipate: "**Click the `Enter` button to enter the giveaway!**";
  newParticipant: "You have successfully entered for this giveaway! There are total `{totalParticipants}` entrants"; // no placeholders | ephemeral
  alreadyParticipated: "**You have already participated in this giveaway!**"; // no placeholders | ephemeral
  noParticipants: "There isn't enough entrant in this giveaway!"; // no placeholders
  dmMessage: "You have won a giveaway in **{guildName}**!\nPrize: [{prize}]({giveawayURL})";
  noWinner: "There isn't any winner in this giveaway due to not enough entrants"; // no {winner} placerholder
  alreadyEnded: "The giveaway had already ended!"; // no {winner} placeholder
  noWeeklyExp: "you dont have the required minimum weekly xp to join this giveaway";
  noLevel: "You dont have the minimum required level to join this giveaway";
  nonoRole: "You don't the required role(s)\n{requiredRoles} role(s) to join the giveaway";
  editParticipants: true;
}
