import { Module } from '@nestjs/common';

import { ActorsService } from '@actors/actors.service';
import { ActorsController } from '@actors/infrastructure/controller/actors.controller';
import { TmdbModule } from '@tmdb/tmdb.module';

@Module({
  imports: [TmdbModule],
  controllers: [ActorsController],
  providers: [ActorsService],
})
export class ActorsModule {}
