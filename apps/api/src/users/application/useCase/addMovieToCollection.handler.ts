import { Injectable } from '@nestjs/common';

import Bottleneck from 'bottleneck';

import { TmdbService } from '../../../../libs/tmdb/tmdb.service';
import { ActorsRepository } from '../../../actors/infrastructure/repository/actors.repository';
import { MoviesRepository } from '../../../movies/infrastructure/repository/movies.repository';
import { UsersRepository } from '../../infrastructure/repository/users.repository';

@Injectable()
export class AddMovieToCollectionHandler {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly moviesRepository: MoviesRepository,
    private readonly actorsRepository: ActorsRepository,
    private readonly tmdbService: TmdbService,
  ) {}

  async execute(userId: number, movieId: number): Promise<any> {
    const limiter = new Bottleneck({
      minTime: 1000 / 30,
    });
    const user = await this.usersRepository.findOne(userId);

    if (!user) {
      return false;
    }

    const movie = await this.moviesRepository.findOne(movieId);

    if (!movie) {
      const newMovie = await this.tmdbService.getMovie(movieId);
      const { cast, ...movieWithoutCast } = newMovie;
      // movie = await this.moviesRepository.create(movieWithoutCast);

      const castFilmographieyPromises = cast.map((actor) => {
        return limiter.schedule(() =>
          this.tmdbService.getActorFilmography(actor.id),
        );
      });

      const castFilmographies = await Promise.all(castFilmographieyPromises);
      console.log(castFilmographies[0]);
    }

    // await this.usersRepository.addMovieToCollection(
    //   userId,
    //   movie.id,
    //   'watched',
    // );
    return movie;
  }
}
