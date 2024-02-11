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

const handlers: Provider[] = [
  AddMovieToCollectionHandler,
  GetWatchedMoviesHandler,
];
const repositories: Provider[] = [UsersRepository];

@Module({
  imports: [TmdbModule],
  controllers: [UsersController],
  exports: [UsersService, ...repositories],
  providers: [UsersService, ...repositories, ...handlers, PrismaService],
})
export class UsersModule {}
