import { Test, TestingModule } from '@nestjs/testing';
import { KrisarController } from './krisar.controller';
import { KrisarService } from './krisar.service';

describe('KrisarController', () => {
  let controller: KrisarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KrisarController],
      providers: [KrisarService],
    }).compile();

    controller = module.get<KrisarController>(KrisarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
