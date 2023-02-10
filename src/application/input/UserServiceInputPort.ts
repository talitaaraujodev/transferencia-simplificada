import { User } from '../../domain/models/user/User';
import { InputCreateUserDto } from './dto/user/InputCreateUserDto';

export interface UserServiceInputPort {
  create(user: InputCreateUserDto): Promise<User>;
}
