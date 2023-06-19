import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './model/user.entity';

export const TypeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'travel',
  entities: [User],
  synchronize: false,
  migrations: ['dist/migrations/*{.ts,.js}'],

  // logging: true
};
