import { User } from '../../domain/models/user/User';
export interface UserPersistence {
  create(user: User): Promise<User>;
  findAll(): Promise<User[]>;
  findOne(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findByCpf(cpf: string): Promise<User>;
}
