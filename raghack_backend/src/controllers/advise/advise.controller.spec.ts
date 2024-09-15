import { Test, TestingModule } from '@nestjs/testing';
import { AdviseController } from './advise.controller';

describe('AdviseController', () => {
  let controller: AdviseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdviseController],
    }).compile();

    controller = module.get<AdviseController>(AdviseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
