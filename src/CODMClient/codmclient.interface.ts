export interface CODMClientOptions {
  /**
   * Authorisation key for the API
   */
  key: string;
}
export interface PerkData {
  name: string;
  perk: string;
  effects: string;
  type: string;
}
export interface ScorestreakData {
  name: string;
  description: string;
  special: string;
  cost: number;
  type: string;
  manual: boolean;
  preview: string;
  preview_video: string;
}
