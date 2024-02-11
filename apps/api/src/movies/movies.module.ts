import { Module, Provider } from '@nestjs/common';

import { MoviesController } from './infrastructure/controller/movies.controller';
import { MoviesRepository } from './infrastructure/repository/movies.repository';
import { MoviesService } from './movies.service';
import { TmdbModule } from '../../libs/tmdb/tmdb.module';
import { PrismaService } from '../users/infrastructure/repository/users.repository';

const repositories: Provider[] = [MoviesRepository];

@Module({
  imports: [TmdbModule],
  controllers: [MoviesController],
  exports: [MoviesService, ...repositories],
  providers: [MoviesService, ...repositories, PrismaService],
})
export class MoviesModule {}
