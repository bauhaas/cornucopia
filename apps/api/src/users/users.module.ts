import { Module, Provider } from '@nestjs/common';

import { TmdbModule } from 'libs/tmdb/tmdb.module';
import { AddMovieToCollectionHandler } from 'src/users/application/useCase/addMovieToCollection.handler';
import { GetWatchedMoviesHandler } from 'src/users/application/useCase/getWatchedMovies.handler';
import { UsersController } from 'src/users/infrastructure/controller/users.controller';
import {
  PrismaService,
  UsersRepository,
} from 'src/users/infrastructure/repository/users.repository';
import { UsersService } from 'src/users/users.service';

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
