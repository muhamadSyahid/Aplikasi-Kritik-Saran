import { Test, TestingModule } from '@nestjs/testing';
import { KrisarService } from './krisar.service';

describe('KrisarService', () => {
  let service: KrisarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KrisarService],
    }).compile();

    service = module.get<KrisarService>(KrisarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
