import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/domain/models/user/User';
import { Repository } from 'typeorm';
import { UserPersistence } from './../../../application/output/UserPersistenceOutputPort';
import { UserEntity } from './entities/UserEntitity';

@Injectable()
export class UserPersistenceAdapter implements UserPersistence {
  constructor(
    @InjectRepository(UserEntity)
    public readonly userRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    const userEntitySaved = await this.userRepository.save(
      this.userRepository.create(
        new UserEntity(
          user.id,
          user.name,
          user.email,
          user.cpf,
          user.telefone,
          user.password,
        ),
      ),
    );

    return new User(
      userEntitySaved.id,
      userEntitySaved.name,
      userEntitySaved.email,
      userEntitySaved.cpf,
      userEntitySaved.telefone,
      userEntitySaved.password,
    );
  }
  async findAll(): Promise<User[]> {
    return Object.assign(await this.userRepository.find()) as User[];
  }
  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
  }
  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email } });
  }
  async findByCpf(cpf: string): Promise<User> {
    return await this.userRepository.findOne({ where: { cpf } });
  }
}
