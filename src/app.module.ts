import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';

//Decorator to make NestJS Module
@Module({
  controllers: [AppController],
  imports: [UserModule]
})
export class AppModule {}
