import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletEntity } from 'src/adapter/output/persistense/entities/WalletEntity';
import { WalletPersistenceAdapter } from 'src/adapter/output/persistense/WalletPersistenceAdapter';
import { UserEntity } from './../adapter/output/persistense/entities/UserEntitity';
import { UserPersistenceAdapter } from './../adapter/output/persistense/UserPersistenceAdapter';
import { AuthService } from './services/AuthService';
import { UserService } from './services/UserService';
import { WalletService } from './services/WalletService';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, WalletEntity])],
  providers: [
    {
      provide: 'UserPersistence',
      useClass: UserPersistenceAdapter,
    },
    { provide: 'UserServiceInputPort', useClass: UserService },
    {
      provide: 'WalletPersistence',
      useClass: WalletPersistenceAdapter,
    },
    { provide: 'AuthServiceInputPort', useClass: AuthService },
    { provide: 'WalletServiceInputPort', useClass: WalletService },
  ],
  exports: [
    { provide: 'UserServiceInputPort', useClass: UserService },
    { provide: 'AuthServiceInputPort', useClass: AuthService },
    { provide: 'WalletServiceInputPort', useClass: WalletService },
  ],
})
export class ApplicationModule {}
