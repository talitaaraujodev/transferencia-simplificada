import { DataSource } from 'typeorm';
import { UserEntity } from '../adapter/output/persistense/entities/UserEntitity';
import { CreateUsers1676477434727 } from './database/migrations/1676477434727-CreateUsers';
import envConfig from './envConfig';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: envConfig.dbHost,
  port: envConfig.dbPort,
  username: envConfig.dbUser,
  password: envConfig.dbPassword,
  database: envConfig.dbName,
  synchronize: false,
  logging: true,
  entities: [UserEntity],
  migrations: [CreateUsers1676477434727],
});
