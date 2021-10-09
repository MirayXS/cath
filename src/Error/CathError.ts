export class CathError extends Error {
  constructor(public err: string) {
    super(err);
    console.log(`Cath Error: ${err}`);
  }
}
