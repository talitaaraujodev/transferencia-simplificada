import { HttpException } from '@nestjs/common';
import { OutputAuthUserDto } from '../output/dto/OutputAuthUserDto';
import { InputAuthUserDto } from './dto/user/InputAuthUserDto';

export interface AuthServiceInputPort {
  login(data: InputAuthUserDto): Promise<OutputAuthUserDto | HttpException>;
}
