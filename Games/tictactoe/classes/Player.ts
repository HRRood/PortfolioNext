export default class Player {
  private name: string;
  private wins: number;
  private symbol: string;

  constructor(name: string, symbol: string) {
    this.name = name;
    this.wins = 0;
    this.symbol = symbol;
  }

  getName() {
    return this.name;
  }

  setName(value: string) {
    this.name = value;
  }

  getWins() {
    return this.wins;
  }

  setWins(value: number) {
    if (value) {
      this.wins = value;
      return;
    }
    this.wins++;
  }

  getSymbol() {
    return this.symbol;
  }

  setSymbol(value: string) {
    this.symbol = value;
  }
}
