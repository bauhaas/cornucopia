import { Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  // @UseGuards(AuthGuard('github'))
  @ApiParam({ name: 'id', required: true, type: Number })
  getUser(@Param('id') id: number) {
    console.log('id', id);
    return this.usersService.getUser(id);
  }

  @Get('/mail/:id')
  // @UseGuards(AuthGuard('github'))
  @ApiParam({ name: 'id', required: true, type: Number })
  getByMail(@Param('id') id: number) {
    console.log('id', id);
    return this.usersService.getBymMail('baudoin.haas@gmail.com');
  }

  @Post(':id/watched-movie')
  // @UseGuards(AuthGuard('github'))
  @ApiParam({ name: 'id', required: true, type: Number })
  @ApiQuery({ name: 'movieId', required: true, type: Number })
  postWatchedMovie(@Param('id') id: number, @Query('movieId') movieId: number) {
    return this.usersService.addMovieToCollection(Number(id), Number(movieId));
  }
}
