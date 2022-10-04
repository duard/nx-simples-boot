import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { configuration } from './configuration';
import { DatabaseConfig } from './db.config';
import { validationSchema } from './validation';

const ENV = process.env.NODE_ENV;
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
  ],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class ApiCoreModule {
  constructor() {
    console.log('AMBIENTE', ENV, !ENV ? '.env' : `.env.${ENV}`);
    console.log('ENV_FILE', process.env.ENV_FILE);
    console.log(process.env);
  }
}
