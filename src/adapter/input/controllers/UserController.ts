import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { OutputListUserDto } from 'src/application/output/dto/OutputListUserDto';
import { InputCreateUserDto } from '../../../application/input/dto/user/InputCreateUserDto';
import { UserServiceInputPort } from '../../../application/input/UserServiceInputPort';
import { OutputCreateUserDto } from '../../../application/output/dto/OutputCreateUserDto';
import { User } from '../../../domain/models/user/User';

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
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(
    @Param('id')
    id: string,
  ): Promise<User> {
    return await this.userServiceInputPort.findOne(id);
  }
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<OutputListUserDto[]> {
    return await this.userServiceInputPort.findAll();
  }
}
