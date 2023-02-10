export class Transfer {
  private _id: string;
  private _value: number;
  private _descricao?: string;
  private _accountOrigin: number;
  private _accountAddressee: number;

  constructor(
    id: string,
    value: number,
    accountOrigin: number,
    accountAddressee: number,
    descricao?: string,
  ) {
    this._id = id;
    this._value = value;
    this._accountOrigin = accountOrigin;
    this._accountAddressee = accountAddressee;
    this._descricao = descricao;
  }

  get id(): string {
    return this._id;
  }
  get value(): number {
    return this._value;
  }
  get accountOrigin(): number {
    return this._accountOrigin;
  }
  get accountAddressee(): number {
    return this._accountAddressee;
  }
  get descricao(): string {
    return this._descricao;
  }
}
