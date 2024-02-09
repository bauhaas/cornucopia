import { Injectable } from '@nestjs/common';

import { TmdbService } from 'libs/tmdb/tmdb.service';

@Injectable()
export class ActorsService {
  constructor(private readonly tmdbService: TmdbService) {}

  public async getActorFilmography(id: number): Promise<any> {
    return this.tmdbService.getActorFilmography(id);
  }
}
