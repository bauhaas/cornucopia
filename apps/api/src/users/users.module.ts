import { Module, Provider } from '@nestjs/common';

import { TmdbModule } from '@tmdb/tmdb.module';
import { AddMovieToCollectionHandler } from '@users/application/useCase/addMovieToCollection.handler';
import { UsersController } from '@users/infrastructure/controller/users.controller';
import {
  PrismaService,
  UsersRepository,
} from '@users/infrastructure/repository/users.repository';
import { UsersService } from '@users/users.service';

const handlers: Provider[] = [AddMovieToCollectionHandler];
const repositories: Provider[] = [UsersRepository];

@Module({
  imports: [TmdbModule],
  controllers: [UsersController],
  exports: [UsersService, ...repositories],
  providers: [UsersService, ...repositories, ...handlers, PrismaService],
})
export class UsersModule {}
