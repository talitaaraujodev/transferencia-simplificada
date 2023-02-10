import * as bcrypt from 'bcrypt';
export class User {
  private _id: string;
  private _name: string;
  private _email: string;
  private _cpf: number;
  private _telefone: number;
  private _password: string;

  constructor(
    id: string,
    name: string,
    email: string,
    cpf: number,
    telefone: number,
    password: string,
  ) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._cpf = cpf;
    this._telefone = telefone;
    this._password = password;
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
  get password(): string {
    return this._password;
  }
  changeTelefone(telefone: number): void {
    this._telefone = telefone;
  }
  changeName(name: string): void {
    this._name = name;
  }
  changeEmail(email: string): void {
    this._email = email;
  }

  async encryptPassword(password: string): Promise<string> {
    const hashPassword = await bcrypt.hash(password, 10);
    return (this._password = hashPassword);
  }
}
