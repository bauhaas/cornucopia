import { Test, TestingModule } from '@nestjs/testing';

import { ActorsController } from '@actors/infrastructure/controller/actors.controller';

describe('ActorsController', () => {
  let controller: ActorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActorsController],
    }).compile();

    controller = module.get<ActorsController>(ActorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
