import { PartialType } from '@nestjs/swagger';
import { CreateTestesDto } from './create-testes.dto';

export class UpdateTestesDto extends PartialType(CreateTestesDto) {}
