import { join } from 'path';

export const configuration2 = () => ({
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.PORT || '3000', 10),
});

export const configuration = () => ({
  port: parseInt(process.env.API_PORT || '3000', 10),
  host: process.env.API_HOST,
  jwtSecret: process.env.JWT_SECRET,
  envFile: process.env.ENV_FILE,
  simples_api: {
    name: process.env.API_SIMPLES_API_NAME,
    port: parseInt(process.env.API_SIMPLES_API_PORT || '3001', 10),
  },
  database: {
    type: process.env.API_TYPEORM_TYPE || 'mysql',
    port: Number(process.env.API_TYPEORM_PORT),
    synchronize: process.env.API_TYPEORM_SYNC,

    database: process.env.API_TYPEORM_DATABASE,
    username: process.env.API_TYPEORM_USERNAME,
    password: process.env.API_TYPEORM_PASSWORD,
    host: process.env.API_TYPEORM_HOSTNAME,

    entities: [
      __dirname + '/../**/*.entity{.ts,.js}',
      'libs/typeorm/src/lib/entity/**/*.entity{.ts,.js}',
      'libs/lib-api-cruds/src/lib/entity/**/*.entity{.ts,.js}',
      join(__dirname, './**/*.entity{.ts,.js}'),
      '../../../../../libs/lib-api-cruds/src/lib/*.entity{.ts,.js}',
      'src/**/**.entity{.ts,.js}',
      '../../../../libs/api-pessoas/src/lib/*.entity{.ts,.js}',
    ],
    // logging: 'all',
    autoLoadEntities: true,
    logging: false,
  },
});
