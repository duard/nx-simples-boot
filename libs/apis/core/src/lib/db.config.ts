import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions() {
    const dbConfig = this.configService.get('database');
    // console.log('=>', this.configService);
    console.log(
      `Running in ${this.configService.get(
        'NODE_ENV'
      )} mode ${this.configService.get('API_FILE')}`
    );
    console.log('DB CONFIG', dbConfig.host);

    return dbConfig;
  }
}
