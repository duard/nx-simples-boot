import { Module } from '@nestjs/common';
import { TestesModule } from './testes/testes.module';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [TestesModule],
})
export class ApisCrudsModule {}
