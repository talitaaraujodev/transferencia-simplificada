import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import envConfig from '../envConfig';
import { UserEntity } from './../../adapter/output/persistense/entities/UserEntitity';

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: envConfig.dbHost,
  port: envConfig.dbPort,
  username: envConfig.dbUser,
  password: envConfig.dbPassword,
  database: envConfig.dbName,
};
const databaseProviders: TypeOrmModuleOptions = {
  ...typeOrmModuleOptions,
  synchronize: true,
  logging: true,
  entities: [UserEntity],
};

export { databaseProviders };
