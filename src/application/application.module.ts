import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletEntity } from '../adapter/output/persistense/entities/WalletEntity';
import { TransactionPersistenceAdapter } from '../adapter/output/persistense/TransactionPersistenceAdapter';
import { WalletPersistenceAdapter } from '../adapter/output/persistense/WalletPersistenceAdapter';
import { UserEntity } from '../adapter/output/persistense/entities/UserEntitity';
import { UserPersistenceAdapter } from './../adapter/output/persistense/UserPersistenceAdapter';
import { AuthService } from './services/AuthService';
import { TransactionService } from './services/TransactionService';
import { UserService } from './services/UserService';
import { WalletService } from './services/WalletService';
import { TransactionEntity } from '../adapter/output/persistense/entities/TransactionEntity';
@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, WalletEntity, TransactionEntity]),
  ],
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
    {
      provide: 'TransactionPersistence',
      useClass: TransactionPersistenceAdapter,
    },
    { provide: 'TransactionServiceInputPort', useClass: TransactionService },
    { provide: 'AuthServiceInputPort', useClass: AuthService },
    { provide: 'WalletServiceInputPort', useClass: WalletService },
  ],
  exports: [
    { provide: 'UserServiceInputPort', useClass: UserService },
    { provide: 'AuthServiceInputPort', useClass: AuthService },
    { provide: 'WalletServiceInputPort', useClass: WalletService },
    { provide: 'TransactionServiceInputPort', useClass: TransactionService },
  ],
})
export class ApplicationModule {}
