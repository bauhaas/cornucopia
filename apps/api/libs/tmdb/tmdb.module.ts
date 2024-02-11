import { Module } from '@nestjs/common';

import { TmdbClient } from 'libs/tmdb/tmdb-client';
import { TmdbService } from 'libs/tmdb/tmdb.service';

@Module({
  providers: [TmdbService, TmdbClient],
  exports: [TmdbService],
})
export class TmdbModule {}
