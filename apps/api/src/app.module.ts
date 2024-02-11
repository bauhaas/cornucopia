import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { join } from 'path';

import { TmdbModule } from 'libs/tmdb/tmdb.module';
import { ActorsModule } from 'src/actors/actors.module';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { AuthenticationModule } from 'src/authentication/authentication.module';
import { MoviesModule } from 'src/movies/movies.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    AuthenticationModule,
    UsersModule,
    TmdbModule,
    ActorsModule,
    MoviesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../..', 'client', 'dist'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
