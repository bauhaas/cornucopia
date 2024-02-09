import { Injectable } from '@nestjs/common';

import { AddMovieToCollectionHandler } from '@users/application/useCase/addMovieToCollection.handler';
import { UsersRepository } from '@users/infrastructure/repository/users.repository';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly addMovieToCollectionHandler: AddMovieToCollectionHandler,
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

  async addMovieToCollection(userId: number, movieId: number): Promise<any> {
    return await this.addMovieToCollectionHandler.execute(userId, movieId);
  }
}
