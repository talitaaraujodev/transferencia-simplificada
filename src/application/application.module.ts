import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './../adapter/output/persistense/entities/UserEntitity';
import { UserPersistenceAdapter } from './../adapter/output/persistense/UserPersistenceAdapter';
import { AuthService } from './services/AuthService';
import { UserService } from './services/UserService';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    { provide: 'UserServiceInputPort', useClass: UserService },
    {
      provide: 'UserPersistence',
      useClass: UserPersistenceAdapter,
    },
    { provide: 'AuthServiceInputPort', useClass: AuthService },
  ],
  exports: [
    { provide: 'UserServiceInputPort', useClass: UserService },
    { provide: 'AuthServiceInputPort', useClass: AuthService },
  ],
})
export class ApplicationModule {}
