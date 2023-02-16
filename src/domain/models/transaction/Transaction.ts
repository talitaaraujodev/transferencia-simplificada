export class Transaction {
  private _value: number;
  private _walletOrigin: number;
  private _walletAddressee: number;
  private _userOrigin: number;
  private _userAddressee: number;

  constructor(
    value: number,
    walletOrigin: number,
    walletAddressee: number,
    userOrigin: number,
    userAddressee: number,
  ) {
    this._value = value;
    this._walletOrigin = walletOrigin;
    this._walletAddressee = walletAddressee;
    this._userOrigin = userOrigin;
    this._userAddressee = userAddressee;
  }
  get value(): number {
    return this._value;
  }
  get walletOrigin(): number {
    return this._walletOrigin;
  }
  get walletAddressee(): number {
    return this._walletAddressee;
  }
  get userOrigin(): number {
    return this._userOrigin;
  }
  get userAddressee(): number {
    return this._userAddressee;
  }
}
