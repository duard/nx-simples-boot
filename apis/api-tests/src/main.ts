/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  console.log(
    `------------------------------------------------------------------`
  );
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = config.get('simples_api.port') || 3333;
  const name = config.get('simples_api.name') || 'NO-NAME';
  await app.listen(port);
  Logger.log(
    `🚀 running on: http://localhost:${port}/${globalPrefix}`,
    `${name}`
  );
}

bootstrap();
