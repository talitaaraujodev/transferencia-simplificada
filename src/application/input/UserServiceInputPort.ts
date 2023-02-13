import { User } from 'src/domain/models/user/User';
import { OutputCreateUserDto } from '../output/dto/OutputCreateUserDto';
import { InputCreateUserDto } from './dto/user/InputCreateUserDto';

export interface UserServiceInputPort {
  create(user: InputCreateUserDto): Promise<OutputCreateUserDto>;
  findOne(id: string): Promise<User>;
  verifyExistsEmail(email: string): Promise<User>;
  verifyExistsCpf(cpf: string): Promise<User>;
}
