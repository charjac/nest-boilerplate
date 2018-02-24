import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import * as yenv from 'yenv';
const env = yenv();

export const DatabaseModule = TypeOrmModule.forRoot({
  entities: [path.join(process.cwd(), env.TYPEORM_ENTITIES)],
  logging: env.TYPEORM_LOGGING,
  synchronize: env.TYPEORM_SYNCHRONIZE,
  type: env.TYPEORM_CONNECTION,
  url: env.TYPEORM_URL,
});