import { UserEntity } from 'src/adapter/output/persistense/entities/UserEntitity';
import { User } from '../../domain/models/user/User';
export interface UserPersistence {
  create(user: User): Promise<User>;
  findAll(): Promise<User[]>;
  findOne(id: string): Promise<UserEntity>;
  findByEmail(email: string): Promise<UserEntity>;
  findByCpf(cpf: string): Promise<UserEntity>;
}
