import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import {
  PrismaService,
  UsersRepository,
} from './users/infrastructure/repository/users.repository';

@Module({
  imports: [AuthenticationModule, UsersModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, UsersRepository, PrismaService],
})
export class AppModule {}
