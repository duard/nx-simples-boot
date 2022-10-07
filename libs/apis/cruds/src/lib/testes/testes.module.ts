import { Module } from '@nestjs/common';
import { TestesService } from './testes.service';
import { TestesController } from './testes.controller';

@Module({
  controllers: [TestesController],
  providers: [TestesService]
})
export class TestesModule {}
