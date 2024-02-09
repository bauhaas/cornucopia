import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { join } from 'path';

import { ActorsModule } from '@actors/actors.module';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { AuthenticationModule } from '@auth/authentication.module';
import { MoviesModule } from '@movies/movies.module';
import { TmdbModule } from '@tmdb/tmdb.module';
import { UsersModule } from '@users/users.module';

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
