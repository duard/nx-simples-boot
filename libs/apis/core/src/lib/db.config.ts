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
    console.log('DB CONFIG', dbConfig);

    return dbConfig;
  }
}
/*
##################################################################################################
#### variaveis para nx-simples
##################################################################################################
ENV_FILE="env.development"
NODE_ENV=development
PORT=3000
API_BASE_TYPEORM_TYPE=mysql
API_TIMEZONE='America/Sao_Paulo'
API_PORT=3000
API_TYPEORM_TYPE=mysql
API_TYPEORM_PORT=3306
API_TYPEORM_SYNC=true
API_TYPEORM_HOSTNAME=
API_TYPEORM_USERNAME=
API_TYPEORM_PASSWORD=
API_TYPEORM_DATABASE=
*/
