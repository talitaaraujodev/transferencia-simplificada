import { DataSource } from 'typeorm';
import { WalletEntity } from '../adapter/output/persistense/entities/WalletEntity';
import { UserEntity } from '../adapter/output/persistense/entities/UserEntitity';
import { CreateUsers1676477434727 } from './database/migrations/1676477434727-CreateUsers';
import { CreateWallets1676481822575 } from './database/migrations/1676481822575-CreateWallets';
import envConfig from './envConfig';
import { CreateTransactions1676481839518 } from './database/migrations/1676481839518-CreateTransactions';
import { TransactionEntity } from '..//adapter/output/persistense/entities/TransactionEntity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: envConfig.dbHost,
  port: envConfig.dbPort,
  username: envConfig.dbUser,
  password: envConfig.dbPassword,
  database: envConfig.dbName,
  synchronize: false,
  logging: true,
  entities: [UserEntity, WalletEntity, TransactionEntity],
  migrations: [
    CreateUsers1676477434727,
    CreateWallets1676481822575,
    CreateTransactions1676481839518,
  ],
});
