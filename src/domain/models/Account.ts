export class Account {
  private _id: string;
  private _number: number;
  private _userId: number;

  constructor(id: string, userId: number) {
    this._id = id;
    this._number = this.generateNumber();
    this._userId = userId;
  }

  get id(): string {
    return this._id;
  }
  get number(): number {
    return this._number;
  }
  get userId(): number {
    return this._userId;
  }
  generateNumber(): number {
    return Math.floor(Math.random() * (100000 - 999999 + 1) + 999999);
  }
}
