import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/users/infrastructure/repository/users.repository';

export type Movie = {
  title: string;
  release_date: Date;
  tmdb_id: string;
  poster_path: string;
  backdrop_path: string;
  genres: string[];
};

@Injectable()
export class MoviesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findMany() {
    return this.prisma.movie.findMany();
  }

  async findOne(id: number) {
    return this.prisma.movie.findUnique({
      where: {
        tmdb_id: String(id),
      },
    });
  }

  async create(data: Movie) {
    return this.prisma.movie.create({ data });
  }
}
