import { Module } from '@nestjs/common';
import { RequestMethod } from '@nestjs/common/enums';
import { MiddlewareConsumer } from '@nestjs/common/interfaces';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdapterModule } from './adapter/adapter.module';
import { ApplicationModule } from './application/application.module';
import { AuthMiddleware } from './config/middlewares/AuthMiddleware';
import { AppDataSource } from './config/ormConfig';
@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    ApplicationModule,
    AdapterModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'login', method: RequestMethod.POST },
        { path: 'users', method: RequestMethod.POST },
      )
      .forRoutes(
        { path: 'users/:id', method: RequestMethod.GET },
        { path: 'wallets', method: RequestMethod.POST },
        { path: 'wallets/:id', method: RequestMethod.GET },
      );
  }
}
