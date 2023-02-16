export class Wallet {
  private _id: string;
  private _balance: number;
  private _userId: string;

  constructor(id: string, balance: number, userId: string) {
    this._id = id;
    this._balance = balance;
    this._userId = userId;
  }
  get id(): string {
    return this._id;
  }
  get balance(): number {
    return this._balance;
  }
  get userId(): string {
    return this._userId;
  }
  changeBalance(balance: number) {
    this._balance = balance;
  }
}
