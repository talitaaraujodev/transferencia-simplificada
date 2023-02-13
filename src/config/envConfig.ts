import { config } from 'dotenv';
config();

export default {
  serverPort: Number(process.env.SERVER_PORT) || 8003,
  dbName: process.env.PG_DATABASE || 'goBank',
  dbHost: process.env.PG_HOST || 'localhost',
  dbPort: Number(process.env.PG_PORT) || 5432,
  dbUser: process.env.PG_USER || 'username',
  dbPassword: process.env.PG_PASSWORD || 'secret',
  jwtSecret: process.env.JWT_SECRET || 'secret',
  jwtExpire: process.env.JWT_EXPIRE || '20m',
};
