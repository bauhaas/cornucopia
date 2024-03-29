import { Injectable } from '@nestjs/common';

import { Movie as MoviePrisma } from '@prisma/client';

import { PrismaService } from '../../../users/infrastructure/repository/users.repository';

export type Movie = {
  title: string;
  release_date: Date;
  tmdb_id: string;
  poster_path: string;
  backdrop_path: string;
  genres: string[];
  runtime: number;
  director: string;
  cast: {
    name: string;
    id: number;
    profile_path: string;
  }[];
};

@Injectable()
export class MoviesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(): Promise<MoviePrisma[]> {
    return await this.prisma.movie.findMany();
  }

  async findOne(id: number): Promise<MoviePrisma | null> {
    return await this.prisma.movie.findUnique({
      where: {
        tmdb_id: String(id),
      },
    });
  }

  async create(data: Omit<Movie, 'cast'>): Promise<MoviePrisma> {
    return await this.prisma.movie.create({ data });
  }
}
