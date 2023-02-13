import { Module } from '@nestjs/common';
import { RequestMethod } from '@nestjs/common/enums';
import { MiddlewareConsumer } from '@nestjs/common/interfaces';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdapterModule } from './adapter/adapter.module';
import { ApplicationModule } from './application/application.module';
import { databaseProviders } from './config/database/orm.config';
import { AuthMiddleware } from './config/middlewares/AuthMiddleware';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(databaseProviders),
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
      .exclude({ path: 'login', method: RequestMethod.POST })
      .forRoutes({ path: 'users/:id', method: RequestMethod.GET });
  }
}
