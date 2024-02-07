import { Injectable } from '@nestjs/common';
import { UsersRepository } from './infrastructure/repository/users.repository';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

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
    return this.usersRepository.findOne(mail);
  }
}
