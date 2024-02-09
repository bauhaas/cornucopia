import { join } from 'path';

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { ActorsModule } from './actors/actors.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { MoviesModule } from './movies/movies.module';
import { UsersModule } from './users/users.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
