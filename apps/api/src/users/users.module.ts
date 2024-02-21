import { Module, Provider } from '@nestjs/common';

import { AddMovieToCollectionHandler } from './application/useCase/addMovieToCollection.handler';
import { GetWatchedMoviesHandler } from './application/useCase/getWatchedMovies.handler';
import { UsersController } from './infrastructure/controller/users.controller';
import {
  PrismaService,
  UsersRepository,
} from './infrastructure/repository/users.repository';
import { UsersService } from './users.service';
import { TmdbModule } from '../../libs/tmdb/tmdb.module';
import { ActorsRepository } from '../actors/infrastructure/repository/actors.repository';
import { MoviesRepository } from '../movies/infrastructure/repository/movies.repository';

const handlers: Provider[] = [
  AddMovieToCollectionHandler,
  GetWatchedMoviesHandler,
];
const repositories: Provider[] = [
  UsersRepository,
  MoviesRepository,
  ActorsRepository,
];

@Module({
  imports: [TmdbModule],
  controllers: [UsersController],
  exports: [UsersService, ...repositories],
  providers: [PrismaService, ...repositories, ...handlers, UsersService],
})
export class UsersModule {}
