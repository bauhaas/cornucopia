import { Injectable } from '@nestjs/common';

import { TmdbClient } from 'libs/tmdb/tmdb-client';
import { Movie } from 'src/movies/infrastructure/repository/movies.repository';

@Injectable()
export class TmdbService {
  public tmdbClient: TmdbClient;

  constructor(tmdbClient: TmdbClient) {
    this.tmdbClient = tmdbClient;
  }

  private transformMovieData(data: any): Movie {
    console.log(data);
    return {
      tmdb_id: String(data.id),
      title: data.original_title,
      release_date: new Date(data.release_date),
      poster_path: data.poster_path,
      backdrop_path: data.backdrop_path,
      genres: data.genres.map((genre: any) => genre.name),
      runtime: data.runtime,
      director: data.credits.crew.find((crew: any) => crew.job === 'Director')
        ?.name,
      // cast: data.credits.cast.slice(0,10).map((actor: any) => ({
      //   name: actor.name,
      //   id: actor.id,
      //   profilePath: actor.profile_path,
      // })),
    };
  }

  private transformActorFilmography(data: any): any {
    return data.cast;
  }

  public async getMovie(id: number): Promise<Movie> {
    console.log(id);
    const response = await this.tmdbClient.getMovieWithCredits(id);
    return this.transformMovieData(response.data);
  }

  public async getActorFilmography(id: number): Promise<any> {
    const response = await this.tmdbClient.getActorFilmography(id);
    return this.transformActorFilmography(response.data);
  }
}
