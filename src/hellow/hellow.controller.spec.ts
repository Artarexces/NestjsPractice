import { Test, TestingModule } from '@nestjs/testing';
import { HellowController } from './hellow.controller';

describe('HellowController', () => {
  let controller: HellowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HellowController],
    }).compile();

    controller = module.get<HellowController>(HellowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
