import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ActorsService } from '../../actors.service';

@ApiTags('actors')
@Controller('actors')
export class ActorsController {
  constructor(private readonly actorsService: ActorsService) {}

  @Get(':id/filmography')
  public async getActorFilmography(@Param('id') id: number): Promise<any> {
    return await this.actorsService.getActorFilmography(id);
  }
}
