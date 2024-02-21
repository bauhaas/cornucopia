import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

import { Movie } from '@prisma/client';

import { AddMovieToCollectionHandler } from '../../application/useCase/addMovieToCollection.handler';
import { UsersService } from '../../users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private readonly addMovieToCollectionHandler: AddMovieToCollectionHandler,
  ) {}

  @Get(':id')
  @ApiParam({ name: 'id', required: true, type: Number })
  async getUser(@Param('id') id: number): Promise<any | undefined> {
    return await this.usersService.getUser(id);
  }

  @Get('/mail/:mail')
  @ApiParam({ name: 'mail', required: true, type: String })
  async getByMail(@Param('mail') mail: string): Promise<any | undefined> {
    console.log(mail);
    return await this.usersService.getBymMail(mail);
  }

  @Post(':id/watched-movie')
  // @UseGuards(AuthGuard('github'))
  @ApiParam({ name: 'id', required: true, type: Number })
  @ApiQuery({ name: 'movieId', required: true, type: Number })
  async postWatchedMovie(
    @Param('id') id: number,
    @Query('movieId') movieId: number,
  ): Promise<Movie> {
    console.log(id, movieId);
    // return await this.usersService.addMovieToCollection(
    //   Number(id),
    //   Number(movieId),
    // );
    return await this.addMovieToCollectionHandler.execute(
      Number(id),
      Number(movieId),
    );
  }

  @Get(':id/watched-movies')
  @ApiParam({ name: 'id', required: true, type: Number })
  async getWatchedMovies(@Param('id') id: number): Promise<Movie[]> {
    return await this.usersService.getWatchedMovies(Number(id));
  }
}
