import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';
import envConfig from '../envConfig';

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction) {
    try {
      const authHeader = request.headers.authorization || '';

      if (!authHeader) {
        throw new HttpException(
          'Token JWT não está presente.',
          HttpStatus.UNAUTHORIZED,
        );
      }
      const [bearer, token] = authHeader.split(' ');
      if (bearer.trim().toLowerCase() !== 'bearer') {
        throw new HttpException(
          'Token JWT não está presente',
          HttpStatus.UNAUTHORIZED,
        );
      }
      const decoded = verify(token, envConfig.jwtSecret);
      (request as CustomRequest).token = decoded;
      next();
    } catch (error) {
      throw new HttpException('Token JWT inspirado', HttpStatus.UNAUTHORIZED);
    }
  }
}
