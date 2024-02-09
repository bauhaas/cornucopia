import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

import { Movie } from '@prisma/client';

import { UsersService } from 'src/users/users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  @ApiParam({ name: 'id', required: true, type: Number })
  async getUser(@Param('id') id: number): Promise<any | undefined> {
    return await this.usersService.getUser(id);
  }

  @Get('/mail/:id')
  @ApiParam({ name: 'id', required: true, type: Number })
  async getByMail(@Param('mail') mail: string): Promise<any | undefined> {
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
    return await this.usersService.addMovieToCollection(
      Number(id),
      Number(movieId),
    );
  }
}
