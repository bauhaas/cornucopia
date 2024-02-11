import { TmdbService } from 'libs/tmdb/tmdb.service';
import { MoviesRepository } from 'src/movies/infrastructure/repository/movies.repository';
import { UsersRepository } from 'src/users/infrastructure/repository/users.repository';

export class AddMovieToCollectionHandler {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly moviesRepository: MoviesRepository,
    private readonly tmdbService: TmdbService,
  ) {}

  async execute(userId: number, movieId: number): Promise<any> {
    const user = await this.usersRepository.findOne(userId);

    if (!user) {
      return false;
    }

    let movie = await this.moviesRepository.findOne(movieId);

    if (!movie) {
      const newMovie = await this.tmdbService.getMovie(movieId);
      movie = await this.moviesRepository.create(newMovie);
    }

    await this.usersRepository.addMovieToCollection(
      userId,
      movie.id,
      'watched',
    );
    return movie;
  }
}
