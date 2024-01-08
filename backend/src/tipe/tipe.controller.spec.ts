import { Test, TestingModule } from '@nestjs/testing';
import { TipeController } from './tipe.controller';
import { TipeService } from './tipe.service';

describe('TipeController', () => {
  let controller: TipeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipeController],
      providers: [TipeService],
    }).compile();

    controller = module.get<TipeController>(TipeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
