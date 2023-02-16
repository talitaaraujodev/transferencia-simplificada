import { Module } from '@nestjs/common';
import { AuthController } from './input/controllers/AuthController';
import { UserController } from './input/controllers/UserController';
import { WalletController } from './input/controllers/WalletController';

@Module({
  controllers: [UserController, AuthController, WalletController],
})
export class AdapterModule {}
