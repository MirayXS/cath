import { Client, Snowflake, ColorResolvable } from "discord.js";

export interface StarboardClientOptions {
  /**
   * Discord Client
   */
  client: Client;
  /**
   * Color of Embed
   */
  color?: ColorResolvable;
  /**
   * Preload data
   */
  Guilds?: StarboardGuild[];
}

export interface StarboardGuild {
  id: Snowflake;
  options: StarboardGuildOptions;
}

export interface StarboardGuildOptions {
  /**
   * Amount of stars required in order to be registered as a starred channel
   */
  starCount: number;

  /**
   * Channel to send starred messages
   */
  starboardChannel: Snowflake;
}

export interface starMessageData {
  origin: Snowflake;
  id: Snowflake;
}
