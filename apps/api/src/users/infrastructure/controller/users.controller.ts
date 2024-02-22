import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBody,
  ApiExtraModels,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { Movie } from '@prisma/client';

import {
  GetUserByIDApiOperation,
  GetUserByIDOkResponse,
} from './doc/getUser.doc';
import {
  updateSettingsApiBody,
  updateSettingsApiOperation,
  updateSettingsNoContentResponse,
} from './doc/updateSettings.doc';
import { UpdateSettingsRequestDto } from './dtos/updateSettingsRequest.dto';
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
  @HttpCode(HttpStatus.OK)
  @ApiOperation(GetUserByIDApiOperation)
  @ApiOkResponse(GetUserByIDOkResponse)
  @ApiParam({ name: 'id', required: true, type: Number })
  async getUser(@Param('id') id: number): Promise<any | undefined> {
    return await this.usersService.getUser(Number(id));
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

  @Patch(':id/settings')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiParam({ name: 'id', required: true, type: Number })
  @ApiOperation(updateSettingsApiOperation)
  @ApiExtraModels(UpdateSettingsRequestDto)
  @ApiBody(updateSettingsApiBody)
  @ApiNoContentResponse(updateSettingsNoContentResponse)
  async updateUserSettings(
    @Param('id') id: number,
    @Body() settings: UpdateSettingsRequestDto,
  ): Promise<void> {
    await this.usersService.updateUserSettings(Number(id), settings);
  }
}
