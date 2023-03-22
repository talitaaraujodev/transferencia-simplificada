import {
  Body,
  Controller,
  Header,
  HttpCode,
  HttpException,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { AuthServiceInputPort } from '../../../application/input/AuthServiceInputPort';
import { InputAuthUserDto } from '../../../application/input/dto/user/InputAuthUserDto';
import { OutputAuthUserDto } from './../../../application/output/dto/OutputAuthUserDto';

@Controller('login')
export class AuthController {
  constructor(
    @Inject('AuthServiceInputPort')
    private readonly authServiceInputPort: AuthServiceInputPort,
  ) {}
  @Post()
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() body: InputAuthUserDto,
  ): Promise<OutputAuthUserDto | HttpException> {
    return await this.authServiceInputPort.login(body);
  }
}
