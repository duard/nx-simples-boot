import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
  PORT: Joi.number(),
});
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
