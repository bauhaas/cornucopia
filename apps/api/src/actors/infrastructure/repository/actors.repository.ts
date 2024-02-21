import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../../users/infrastructure/repository/users.repository';

@Injectable()
export class ActorsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: number): Promise<any> {
    return await this.prisma.actor.findUnique({ where: { id } });
  }
}
