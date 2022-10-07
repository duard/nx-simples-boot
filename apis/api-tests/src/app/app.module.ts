import { Module } from '@nestjs/common';
import { ApiCoreModule } from '@nx-simples-boot/apis/core';
import { ApisCrudsModule } from '@nx-simples-boot/apis/cruds';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ApiCoreModule, ApisCrudsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log(
      `AppModule ------------------------------------------------------------------`
    );
  }
}
