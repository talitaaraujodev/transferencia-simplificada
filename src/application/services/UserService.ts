import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { User } from '../../domain/models/user/User';
import { UserServiceInputPort } from '../input/UserServiceInputPort';

@Injectable()
export class UserService implements UserServiceInputPort {
  async create(user: User): Promise<User> {
    return new User(uuid(), user.name, user.email, user.cpf, user.telefone);
  }
}
