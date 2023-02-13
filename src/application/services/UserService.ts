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
    private readonly userRepository: UserPersistence,
  ) {}

  async create(user: User): Promise<OutputCreateUserDto> {
    await this.verifyExistsEmail(user.email);
    await this.verifyExistsCpf(user.cpf);
    const userCreated = new User(
      uuid(),
      user.name,
      user.email,
      user.cpf,
      user.telefone,
      user.password,
    );
    await userCreated.encryptPassword(user.password);

    const userSaved = await this.userRepository.create(userCreated);
    return {
      id: userSaved.id,
      name: userSaved.name,
      email: userSaved.email,
      cpf: userSaved.cpf,
      telefone: userSaved.telefone,
    };
  }
  async findOne(id: string): Promise<User> {
    const userFound = await this.userRepository.findOne(id);
    if (!userFound) {
      throw new HttpException('Usuário não encontrado', HttpStatus.CONFLICT);
    }
    return userFound;
  }
  async verifyExistsEmail(email: string): Promise<User> {
    const userFound = await this.userRepository.findByEmail(email);
    if (userFound) {
      throw new HttpException(
        'Usuário já existente existente por e-mail',
        HttpStatus.CONFLICT,
      );
    }
    return userFound;
  }
  async verifyExistsCpf(cpf: string): Promise<User> {
    const userFound = await this.userRepository.findByCpf(cpf);
    if (userFound) {
      throw new HttpException(
        'Usuário já existente por Cpf',
        HttpStatus.CONFLICT,
      );
    }
    return userFound;
  }
}
