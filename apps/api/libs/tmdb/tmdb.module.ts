import { Module } from '@nestjs/common';

import { TmdbClient } from '@tmdb/tmdb-client';
import { TmdbService } from '@tmdb/tmdb.service';

@Module({
  providers: [TmdbService, TmdbClient],
  exports: [TmdbService],
})
export class TmdbModule {}
