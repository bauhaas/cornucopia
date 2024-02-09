import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { MoviesService } from 'src/movies/movies.service';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get(':id')
  public async getMovie(@Param('id') id: number) {
    return this.moviesService.getMovie(id);
  }
}
