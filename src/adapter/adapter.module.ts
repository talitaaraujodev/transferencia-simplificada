import { Module } from '@nestjs/common';
import { AuthController } from './input/controllers/AuthController';
import { UserController } from './input/controllers/UserController';

@Module({
  controllers: [UserController, AuthController],
})
export class AdapterModule {}
