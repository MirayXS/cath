export class CathError {
  constructor(public err: String) {
    console.error(`Cath Error: ${this.err}`);
  }
}
