import { Module } from '@nestjs/common';

import { ActorsService } from './actors.service';
import { ActorsController } from './infrastructure/controller/actors.controller';

import { TmdbModule } from 'libs/tmdb/tmdb.moudle';

@Module({
  imports: [TmdbModule],
  controllers: [ActorsController],
  exports: [ActorsService],
  providers: [ActorsService],
})
export class ActorsModule {}
