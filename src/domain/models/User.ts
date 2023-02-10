export class User {
  private _id: string;
  private _name: string;
  private _email: string;
  private _cpf: number;
  private _telefone: number;

  constructor(
    id: string,
    name: string,
    email: string,
    cpf: number,
    telefone: number,
  ) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._cpf = cpf;
    this._telefone = telefone;
  }

  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get email(): string {
    return this._email;
  }
  get cpf(): number {
    return this._cpf;
  }
  get telefone(): number {
    return this._telefone;
  }
}
