export class Transaction {
  private _id: string;
  private _value: number;
  private _walletOrigin: string;
  private _walletAddressee: string;
  private _userOrigin: string;
  private _userAddressee: string;

  constructor(
    id: string,
    value: number,
    walletOrigin: string,
    walletAddressee: string,
    userOrigin: string,
    userAddressee: string,
  ) {
    this._id = id;
    this._value = value;
    this._walletOrigin = walletOrigin;
    this._walletAddressee = walletAddressee;
    this._userOrigin = userOrigin;
    this._userAddressee = userAddressee;
  }
  get id(): string {
    return this._id;
  }
  get value(): number {
    return this._value;
  }
  get walletOrigin(): string {
    return this._walletOrigin;
  }
  get walletAddressee(): string {
    return this._walletAddressee;
  }
  get userOrigin(): string {
    return this._userOrigin;
  }
  get userAddressee(): string {
    return this._userAddressee;
  }
}
