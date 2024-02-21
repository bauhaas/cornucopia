import { Injectable } from '@nestjs/common';

import { ActorsRepository } from './infrastructure/repository/actors.repository';
import { TmdbService } from '../../libs/tmdb/tmdb.service';

@Injectable()
export class ActorsService {
  constructor(
    private readonly tmdbService: TmdbService,
    private readonly actorsRepository: ActorsRepository,
  ) {}

  public async getActorFilmography(id: number): Promise<any> {
    return this.tmdbService.getActorFilmography(id);
  }

  public async getActor(id: number): Promise<any> {
    return this.actorsRepository.findOne(id);
  }
}
