import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DestinationModule } from './destination/destination.module';
import { ChatgptModule } from './chatgpt/chatgpt.module';

@Module({
  imports: [
    AuthModule,
    DbModule,
    UserModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
    }),
    DestinationModule,
    ChatgptModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
