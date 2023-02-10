import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post
} from '@nestjs/common';
import { InputCreateUserDto } from '../../../application/input/dto/user/InputCreateUserDto';
import { UserServiceInputPort } from '../../../application/input/UserServiceInputPort';
import { OutputCreateUserDto } from '../../../application/output/dto/OutputCreateUserDto';

@Controller('users')
export class UserController {
  constructor(
    @Inject('UserServiceInputPort')
    private readonly userServiceInputPort: UserServiceInputPort,
  ) {}
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: InputCreateUserDto): Promise<OutputCreateUserDto> {
    return await this.userServiceInputPort.create(body);
  }
}
