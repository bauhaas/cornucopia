import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { join } from 'path';

import { TmdbModule } from './../libs/tmdb/tmdb.module';
import { ActorsModule } from './actors/actors.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { MoviesModule } from './movies/movies.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthenticationModule,
    UsersModule,
    TmdbModule,
    ActorsModule,
    MoviesModule,
    ServeStaticModule.forRoot({
      rootPath:
        process.env.NODE_ENV === 'development'
          ? join(__dirname, '/../../../', 'client', 'dist')
          : join(__dirname, '../../', 'client', 'dist'), // for vercel
      // rootPath: join(__dirname, '/../../../', 'client', 'dist'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
