import { Injectable } from '@nestjs/common';

import { AddMovieToCollectionHandler } from './application/useCase/addMovieToCollection.handler';
import { GetWatchedMoviesHandler } from './application/useCase/getWatchedMovies.handler';
import { UsersRepository } from './infrastructure/repository/users.repository';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    // private readonly addMovieToCollectionHandler: AddMovieToCollectionHandler,
    private readonly getWatchedMoviesHandler: GetWatchedMoviesHandler,
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
    return await this.usersRepository.findOne(id);
  }

  async getBymMail(mail: string): Promise<any | undefined> {
    return this.usersRepository.findOneByMail(mail);
  }

  // async addMovieToCollection(userId: number, movieId: number): Promise<any> {
  //   return await this.addMovieToCollectionHandler.execute(userId, movieId);
  // }

  async getWatchedMovies(userId: number): Promise<any> {
    return this.usersRepository.getWatchedMovies(userId);
  }

  async updateUserSettings(id: number, settings: any): Promise<void> {
    const user = await this.usersRepository.findOne(id);

    if (!user) throw 'User not found';

    await this.usersRepository.updateSettings(user.id, settings);
  }
}
