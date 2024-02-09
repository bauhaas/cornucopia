import { Module, Provider } from '@nestjs/common';

import { AddMovieToCollectionHandler } from './application/useCase/addMovieToCollection.handler'; // Import AddMovieToCollectionHandler
import { UsersController } from './infrastructure/controller/users.controller';
import {
  PrismaService,
  UsersRepository,
} from './infrastructure/repository/users.repository';
import { UsersService } from './users.service';

import { TmdbModule } from 'libs/tmdb/tmdb.moudle';

const handlers: Provider[] = [AddMovieToCollectionHandler];
const repositories: Provider[] = [UsersRepository];

@Module({
  imports: [TmdbModule],
  controllers: [UsersController],
  exports: [UsersService, ...repositories],
  providers: [UsersService, ...repositories, ...handlers, PrismaService],
})
export class UsersModule {}
