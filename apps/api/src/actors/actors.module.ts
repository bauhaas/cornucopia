import { Module } from '@nestjs/common';

import { TmdbModule } from 'libs/tmdb/tmdb.module';
import { ActorsService } from 'src/actors/actors.service';
import { ActorsController } from 'src/actors/infrastructure/controller/actors.controller';

@Module({
  imports: [TmdbModule],
  controllers: [ActorsController],
  providers: [ActorsService],
})
export class ActorsModule {}
