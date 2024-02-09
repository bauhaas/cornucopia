import { Injectable } from '@nestjs/common';

import { UsersRepository } from './infrastructure/repository/users.repository';

import { TmdbService } from 'libs/tmdb/tmdb.service';
import { MoviesRepository } from 'src/movies/infrastructure/repository/movies.repository';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly moviesRepository: MoviesRepository,
    private readonly tmdbService: TmdbService,
  ) {}

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async getUser(id: number): Promise<User | undefined> {
    console.log('getUser', id);
    return this.users.find((user) => user.userId == id);
  }

  async getBymMail(mail: string): Promise<any | undefined> {
    return this.usersRepository.findOneByMail(mail);
  }

  async addMovieToCollection(
    userId: number,
    movieId: number,
  ): Promise<any | undefined> {
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
    return true;
  }
}
