import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import envConfig from 'src/config/envConfig';
import { InputAuthUserDto } from '../input/dto/user/InputAuthUserDto';
import { OutputAuthUserDto } from '../output/dto/OutputAuthUserDto';
import { AuthServiceInputPort } from './../input/AuthServiceInputPort';
import { UserPersistence } from './../output/UserPersistenceOutputPort';

@Injectable()
export class AuthService implements AuthServiceInputPort {
  constructor(
    @Inject('UserPersistence')
    private readonly userRepository: UserPersistence,
  ) {}
  async login(
    data: InputAuthUserDto,
  ): Promise<OutputAuthUserDto | HttpException> {
    const user = await this.userRepository.findByEmail(data.email);
    if (user) {
      const isPasswordValid = compareSync(data.password, user.password);
      if (isPasswordValid) {
        return {
          token: sign(
            { sub: user.id, email: user.email, name: user.name },
            envConfig.jwtSecret,
            {
              expiresIn: envConfig.jwtExpire,
            },
          ),
        };
      }
    }
    throw new HttpException(
      'E-mail ou senha estão incorretos',
      HttpStatus.BAD_REQUEST,
    );
  }
}
