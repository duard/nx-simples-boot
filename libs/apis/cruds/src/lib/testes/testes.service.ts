import { Injectable } from '@nestjs/common';
import { CreateTestesDto } from './dto/create-testes.dto';
import { UpdateTestesDto } from './dto/update-testes.dto';

@Injectable()
export class TestesService {
  create(createTestesDto: CreateTestesDto) {
    return 'This action adds a new testes';
  }

  findAll() {
    return `This action returns all testes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testes`;
  }

  update(id: number, updateTestesDto: UpdateTestesDto) {
    return `This action updates a #${id} testes`;
  }

  remove(id: number) {
    return `This action removes a #${id} testes`;
  }
}
