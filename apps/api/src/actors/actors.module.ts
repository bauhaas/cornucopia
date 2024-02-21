import { Module } from '@nestjs/common';

import { ActorsService } from './actors.service';
import { ActorsController } from './infrastructure/controller/actors.controller';
import { ActorsRepository } from './infrastructure/repository/actors.repository';
import { TmdbModule } from '../../libs/tmdb/tmdb.module';
import { PrismaService } from '../users/infrastructure/repository/users.repository';

@Module({
  imports: [TmdbModule],
  controllers: [ActorsController],
  providers: [ActorsService, ActorsRepository, PrismaService],
})
export class ActorsModule {}
