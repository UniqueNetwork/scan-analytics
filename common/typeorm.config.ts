import dotenv = require('dotenv');
import path = require('path');
import { DataSourceOptions } from 'typeorm';
import { AccountsStats } from './entities/AccountsStats';
import { TokensStats } from './entities/TokensStats';
import { ExtrinsicsStats } from './entities/ExtrinsicsStats';
import { TransfersStats } from './entities/TransfersStats';
import { CollectionsStats } from './entities/CollectionsStats';

dotenv.config();
const migrationsDir = path.join(__dirname, '..', 'migrations');

const typeormConfig: DataSourceOptions = {
  host: process.env.POSTGRES_HOST,
  type: 'postgres',
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [
    AccountsStats,
    TokensStats,
    ExtrinsicsStats,
    TransfersStats,
    CollectionsStats,
  ],
  synchronize: true,
  migrationsRun: false,
  migrations: [path.join(migrationsDir, '/**/*{.ts,.js}')],
  logging: process.env.LOGGING === '1',
};

export default typeormConfig;
