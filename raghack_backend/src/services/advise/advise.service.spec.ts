import { Test, TestingModule } from '@nestjs/testing';
import { AdviseService } from './advise.service';

describe('AdviseService', () => {
  let service: AdviseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdviseService],
    }).compile();

    service = module.get<AdviseService>(AdviseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
