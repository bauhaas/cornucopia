import { Injectable } from '@nestjs/common';

import { TmdbService } from 'libs/tmdb/tmdb.service';

@Injectable()
export class MoviesService {
  constructor(private readonly tmdbService: TmdbService) {}

  public async getMovie(id: number): Promise<any> {
    return this.tmdbService.getMovie(id);
  }
}
