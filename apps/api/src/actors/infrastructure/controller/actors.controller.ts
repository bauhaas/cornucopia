import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ActorsService } from 'src/actors/actors.service';

@ApiTags('actors')
@Controller('actors')
export class ActorsController {
  constructor(private readonly actorsService: ActorsService) {}

  @Get(':id/filmography')
  public async getActorFilmography(@Param('id') id: number) {
    return this.actorsService.getActorFilmography(id);
  }
}
