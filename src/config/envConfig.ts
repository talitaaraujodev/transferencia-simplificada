import { config } from 'dotenv';
config();

export default {
  serverPort: Number(process.env.SERVER_PORT) || 8003,
  dbName: process.env.MYSQL_DATABASE || 'goBank',
  dbHost: process.env.MYSQL_HOST || 'localhost',
  dbPort: Number(process.env.MYSQL_PORT) || 3306,
  dbUser: process.env.MYSQL_USER || 'root',
  dbPassword: process.env.MYSQL_PASSWORD || 'secret',
  jwtSecret: process.env.JWT_SECRET || 'secret',
  jwtExpire: process.env.JWT_EXPIRE || '20m',
};
