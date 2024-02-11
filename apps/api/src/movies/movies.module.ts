import { Module, Provider } from '@nestjs/common';

import { TmdbModule } from 'libs/tmdb/tmdb.module';
import { MoviesController } from 'src/movies/infrastructure/controller/movies.controller';
import { MoviesRepository } from 'src/movies/infrastructure/repository/movies.repository';
import { MoviesService } from 'src/movies/movies.service';
import { PrismaService } from 'src/users/infrastructure/repository/users.repository';

const repositories: Provider[] = [MoviesRepository];

@Module({
  imports: [TmdbModule],
  controllers: [MoviesController],
  exports: [MoviesService, ...repositories],
  providers: [MoviesService, ...repositories, PrismaService],
})
export class MoviesModule {}
