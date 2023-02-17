import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { User } from '../../domain/models/user/User';
import { UserServiceInputPort } from '../input/UserServiceInputPort';
import { OutputCreateUserDto } from '../output/dto/OutputCreateUserDto';
import { UserPersistence } from './../output/UserPersistenceOutputPort';

@Injectable()
export class UserService implements UserServiceInputPort {
  constructor(
    @Inject('UserPersistence')
    private readonly userPersistence: UserPersistence,
  ) {}

  async create(user: User): Promise<OutputCreateUserDto> {
    const emailExist = await this.userPersistence.findByEmail(user.email);
    const cpfExists = await this.userPersistence.findByCpf(user.cpf);
    if (emailExist) {
      throw new HttpException(
        'Usuário já existente por E-mail',
        HttpStatus.CONFLICT,
      );
    }
    if (cpfExists) {
      throw new HttpException(
        'Usuário já existente por Cpf',
        HttpStatus.CONFLICT,
      );
    }
    const userCreated = new User(
      uuid(),
      user.name,
      user.email,
      user.cpf,
      user.telefone,
      user.password,
    );
    await userCreated.encryptPassword(user.password);

    const userSaved = await this.userPersistence.create(userCreated);
    return {
      id: userSaved.id,
      name: userSaved.name,
      email: userSaved.email,
      cpf: userSaved.cpf,
      telefone: userSaved.telefone,
    };
  }
  async findOne(id: string): Promise<User> {
    const userFound = await this.userPersistence.findOne(id);
    if (!userFound) {
      throw new HttpException('Usuário não encontrado', HttpStatus.CONFLICT);
    }
    return new User(
      userFound.id,
      userFound.name,
      userFound.email,
      userFound.cpf,
      userFound.telefone,
      userFound.password,
    );
  }
}
