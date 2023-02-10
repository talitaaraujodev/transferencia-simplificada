import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { User } from '../../domain/models/user/User';
import { UserServiceInputPort } from '../input/UserServiceInputPort';
import { OutputCreateUserDto } from '../output/dto/OutputCreateUserDto';

@Injectable()
export class UserService implements UserServiceInputPort {
  async create(user: User): Promise<OutputCreateUserDto> {
    const userCreated = new User(
      uuid(),
      user.name,
      user.email,
      user.cpf,
      user.telefone,
      '123456',
    );
    await userCreated.encryptPassword(user.password);

    return {
      name: userCreated.name,
      email: userCreated.email,
      cpf: userCreated.cpf,
      telefone: userCreated.telefone,
    };
  }
}
