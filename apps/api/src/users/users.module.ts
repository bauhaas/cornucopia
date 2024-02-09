import { Module } from '@nestjs/common';

import {
  PrismaService,
  UsersRepository,
} from './infrastructure/repository/users.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { TmdbModule } from 'libs/tmdb/tmdb.moudle';
import { MoviesModule } from 'src/movies/movies.module';

@Module({
  imports: [TmdbModule, MoviesModule],
  controllers: [UsersController],
  exports: [UsersService, UsersRepository],
  providers: [UsersService, UsersRepository, PrismaService],
})
export class UsersModule {}
