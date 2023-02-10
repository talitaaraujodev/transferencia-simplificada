import { Module } from '@nestjs/common';
import { UserController } from './input/controllers/UserController';

@Module({
  controllers: [UserController],
})
export class AdapterModule {}
