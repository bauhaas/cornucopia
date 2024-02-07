import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {
  PrismaService,
  UsersRepository,
} from './infrastructure/repository/users.repository';

@Module({
  providers: [UsersService, UsersRepository, PrismaService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
