export class Transfer {
  private _id: string;
  private _value: number;
  private _descricao?: string;

  constructor(id: string, value: number, descricao?: string) {
    this._id = id;
    this._value = value;
    this._descricao = descricao;
  }

  get id(): string {
    return this._id;
  }
  get value(): number {
    return this._value;
  }
  get descricao(): string {
    return this._descricao;
  }
}
