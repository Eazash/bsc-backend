import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as Joi from 'joi';
export default registerAs(
  'database',
  (): TypeOrmModuleOptions => ({
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    port: parseInt(process.env.POSTGRES_PORT),
    type: 'postgres',
    entities: ['**/*.entity{.ts,.js}'],
    migrationsTableName: 'migration',
    migrations: ['src/migration/*.ts'],
    cli: {
      migrationsDir: 'src/migration',
    },
    ssl: process.env.NODE_ENV === 'production' ? true : false,
  }),
);

export const databaseEnvValidationSchema = {
  POSTGRES_HOST: Joi.string().default('127.0.0.1'),
  POSTGRES_USER: Joi.string().regex(/^\S*$/),
  POSTGRES_PASSWORD: Joi.string(),
  POSTGRES_DATABASE: Joi.string().default('bsc'),
  POSTGRES_PORT: Joi.number().default(5432),
};
