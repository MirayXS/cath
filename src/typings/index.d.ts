import { CODMClientOptions } from "../CODMClient";
declare module "cath" {
  export class CODMClient {
    public constructor(key: CODMClientOptions);

    private key: string;

    public getperk(perk: string): Promise<object>;
  }
  export function random8ball(): Promise<string>;
}
