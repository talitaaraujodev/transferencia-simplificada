import { User } from '../../domain/models/user/User';
import { OutputCreateUserDto } from '../output/dto/OutputCreateUserDto';
import { OutputListUserDto } from '../output/dto/OutputListUserDto';
import { InputCreateUserDto } from './dto/user/InputCreateUserDto';

export interface UserServiceInputPort {
  create(user: InputCreateUserDto): Promise<OutputCreateUserDto>;
  findOne(id: string): Promise<User>;
  findAll(): Promise<OutputListUserDto[]>;
}
