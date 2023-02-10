import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { InputCreateUserDto } from '../../../application/input/dto/user/InputCreateUserDto';
import { UserServiceInputPort } from '../../../application/input/UserServiceInputPort';
import { User } from '../../../domain/models/user/User';

@Controller('users')
export class UserController {
  constructor(
    @Inject('UserServiceInputPort')
    private readonly userServiceInputPort: UserServiceInputPort,
  ) {}
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: InputCreateUserDto): Promise<User> {
    return await this.userServiceInputPort.create(body);
  }
}
