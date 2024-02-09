import { join } from 'path';

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { ActorsModule } from './actors/actors.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { MoviesController } from './movies/infrastructure/controller/movies.controller';
import { MoviesModule } from './movies/movies.module';
import {
  PrismaService,
  UsersRepository,
} from './users/infrastructure/repository/users.repository';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

import { TmdbModule } from 'libs/tmdb/tmdb.moudle';

@Module({
  imports: [
    AuthenticationModule,
    UsersModule,
    TmdbModule,
    ActorsModule,
    MoviesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client', 'dist'),
      exclude: ['/api*'],
    }),
    ActorsModule,
  ],
  controllers: [AppController, UsersController, MoviesController],
  providers: [AppService, UsersService, UsersRepository, PrismaService],
})
export class AppModule {}
