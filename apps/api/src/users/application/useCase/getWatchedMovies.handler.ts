import { MoviesRepository } from '@movies/infrastructure/repository/movies.repository';
import { UsersRepository } from '@users/infrastructure/repository/users.repository';

//TODO transform as GetMoviesCollectionHandler and add label as parameter
export class GetWatchedMoviesHandler {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly moviesRepository: MoviesRepository,
  ) {}

  async execute(userId: number): Promise<any> {
    const user = await this.usersRepository.findOne(userId);

    if (!user) {
      return false;
    }

    return await this.usersRepository.getWatchedMovies(userId);
  }
}
