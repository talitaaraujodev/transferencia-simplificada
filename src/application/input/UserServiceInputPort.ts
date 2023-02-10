import { OutputCreateUserDto } from '../output/dto/OutputCreateUserDto';
import { InputCreateUserDto } from './dto/user/InputCreateUserDto';

export interface UserServiceInputPort {
  create(user: InputCreateUserDto): Promise<OutputCreateUserDto>;
}
