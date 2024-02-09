import { Module } from '@nestjs/common';

import { MoviesController } from './infrastructure/controller/movies.controller';
import { MoviesRepository } from './infrastructure/repository/movies.repository';
import { MoviesService } from './movies.service';

import { TmdbModule } from 'libs/tmdb/tmdb.moudle';
import { PrismaService } from 'src/users/infrastructure/repository/users.repository';

@Module({
  imports: [TmdbModule],
  controllers: [MoviesController],
  exports: [MoviesService, MoviesRepository],
  providers: [MoviesService, MoviesRepository, PrismaService],
})
export class MoviesModule {}
