import { Global, Module } from '@nestjs/common';
import { UserService } from './services/UserService';

@Global()
@Module({
  providers: [{ provide: 'UserServiceInputPort', useClass: UserService }],
  exports: [{ provide: 'UserServiceInputPort', useClass: UserService }],
})
export class ApplicationModule {}
