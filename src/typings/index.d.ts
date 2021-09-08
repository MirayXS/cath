declare module "cath" {
  export class APIClient {
    public constructor(key: string, options?: APIClientOptions);

    private key: string;
    public options?: APIClientOptions;

    public random8ball(): Promise<String>;
    public getperk(perk: string): Promise<Object>;
  }
  export type APIClientOptions = {
    codm?: string;
  };
}
