import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfig } from './ormconfig';
import { UserRepository } from './repository/user.repository';

@Global()
@Module({
  imports: [TypeOrmModule.forRoot(TypeormConfig)],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class DbModule {}
