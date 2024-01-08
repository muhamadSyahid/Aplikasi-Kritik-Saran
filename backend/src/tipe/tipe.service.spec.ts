import { Test, TestingModule } from '@nestjs/testing';
import { TipeService } from './tipe.service';

describe('TipeService', () => {
  let service: TipeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipeService],
    }).compile();

    service = module.get<TipeService>(TipeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
