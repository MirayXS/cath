export class CathError extends Error {
  constructor(err: string) {
    super(err);
    console.log(`Cath Error: ${err}`);
  }
}
