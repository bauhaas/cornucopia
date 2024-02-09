import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { MoviesService } from 'src/movies/movies.service';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get(':id')
  async getMovie(@Param('id') id: number): Promise<any | undefined> {
    return await this.moviesService.getMovie(id);
  }
}
