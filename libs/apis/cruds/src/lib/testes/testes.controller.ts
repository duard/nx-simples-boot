import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TestesService } from './testes.service';
import { CreateTestesDto } from './dto/create-testes.dto';
import { UpdateTestesDto } from './dto/update-testes.dto';

@Controller('testes')
export class TestesController {
  constructor(private readonly testesService: TestesService) {}

  @Post()
  create(@Body() createTestesDto: CreateTestesDto) {
    return this.testesService.create(createTestesDto);
  }

  @Get()
  findAll() {
    return this.testesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestesDto: UpdateTestesDto) {
    return this.testesService.update(+id, updateTestesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testesService.remove(+id);
  }
}
